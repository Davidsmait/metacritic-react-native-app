import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEffect, useRef } from "react";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);
export function GameCard({ game }) {
  return (
    <Link asChild href={`/${game.slug}`}>
      <StyledPressable
        style={styles.cardContainer}
        className=" bg-slate-500/20 active:opacity-80 border active:border-amber-200"
      >
        <View className="" style={styles.card}>
          <Image source={{ uri: game.image }} style={[styles.image]} />
          <View className="flex-shrink" style={styles.rightContent}>
            <Text style={styles.title}>{game.title}</Text>
            <Score score={game.score} maxScore={100} />
            <Text className="flex-shrink" style={styles.description}>
              {game.description.slice(0, 100)} ...
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}
export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  card: {
    flexDirection: "row",
    gap: 20,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  rightContent: {},
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "white",
    fontWeight: "300",
  },
});
