import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { getGameDetails } from "../lib/metacritic";
import { useEffect, useState } from "react";
import { GameDetails } from "../lib/Games.model";
import { Screen } from "../components/Screen";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();

  const [details, setDetails] = useState<GameDetails>([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const gameDetails = await getGameDetails(gameslug);
      setDetails(gameDetails);
    };

    fetchDetails();
  }, []);
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: gameslug,
          headerRight: () => {},
        }}
      ></Stack.Screen>

      {details.title == null ? (
        <ActivityIndicator color="#fff" size={"large"} />
      ) : (
        <ScrollView>
          <Text className="text-white">Detalle del juego {gameslug}</Text>
          <Text className="font-bold text-2xl mb-8 text-white">
            {details.score}
          </Text>
        </ScrollView>
      )}
    </Screen>
  );
}
