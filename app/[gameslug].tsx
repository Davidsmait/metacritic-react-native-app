import { Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { getGameDetails } from "../lib/metacritic";
import { useEffect, useState } from "react";
import { GameDetails } from "../lib/Games.model";

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
    <View>
      <Link href="/" className="text-blue-500/90">
        Atras
      </Link>
      <Text className="font-bold text-2xl mb-8 text-white">
        {details.title}
      </Text>
    </View>
  );
}
