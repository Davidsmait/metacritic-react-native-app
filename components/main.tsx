import {
  View,
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";
import { Link } from "expo-router";
import { InfoIcon } from "./Icons";
import { styled } from "nativewind";

export function Main() {
  const insets = useSafeAreaInsets();
  const [games, setGames] = useState([]);
  const StyledPressable = styled(Pressable);

  useEffect(() => {
    const fetchGames = async () => {
      const latestGames = await getLatestGames();
      setGames(latestGames);
    };
    fetchGames();
  }, []);

  return (
    <View style={{ paddingTop: insets.top }}>
      <View style={styles.header}>
        <Logo />
        {games.length === 0 ? (
          <></>
        ) : (
          <Link asChild href="/about" className="text-blue-500">
            <StyledPressable className={`active:opacity-80`}>
              <InfoIcon />
            </StyledPressable>
          </Link>
        )}
      </View>

      {games.length === 0 ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <>
          <FlatList
            data={games}
            keyExtractor={(game) => game.slug}
            renderItem={({ item, index }) => (
              <AnimatedGameCard game={item} index={index}></AnimatedGameCard>
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
    paddingHorizontal: 1,
    alignItems: "center",
  },
});
