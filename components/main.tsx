import { View, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard, GameCard } from "./GameCard";
import { Logo } from "./Logo";

export function Main() {
  const insets = useSafeAreaInsets();
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const latestGames = await getLatestGames();
      setGames(latestGames);
    };

    fetchGames();
  }, []);

  return (
    <View style={{ paddingTop: insets.top }}>
      <View style={{ marginBottom: 10 }}>
        <Logo />
      </View>
      {games.length === 0 ? (
        <ActivityIndicator color={"green"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index}></AnimatedGameCard>
          )}
        />
      )}
    </View>
  );
}
