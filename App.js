import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useEffect, useState } from "react";
import { getLatestGames } from "./lib/metacritic";

const icon = require("./assets/icon.png");
export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(getLatestGames());
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={{ color: "white" }}>Hsola</Text>
      <Text style={{ color: "white" }}>holas s</Text>

      {games.map((game) => (
        <Text key={game.id}>{game.slug}</Text> // Asegúrate de agregar una key única
      ))}

      {/*{games.map((game) => {*/}
      {/*  return (*/}
      {/*    <View key={game.slug}>*/}
      {/*      <Image*/}
      {/*        source={{ uri: game.image }}*/}
      {/*        style={{ width: 100, height: 100 }}*/}
      {/*      />*/}
      {/*    </View>*/}
      {/*  );*/}
      {/*})}*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperCustom: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
});
