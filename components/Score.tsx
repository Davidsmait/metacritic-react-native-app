import { StyleSheet, Text, View } from "react-native";

export function Score({ score, maxScore }) {
  const getColor = () => {
    const percentage = score / maxScore;

    if (percentage >= 0.75) return ["#00ce7a", "#262626"];
    if (percentage >= 0.45) return ["#ffbd3f", "#262626"];
    else return ["#ff6874", "#fff"];
  };

  return (
    <View
      className="w-8 h-8 justify-center items-center mb-1"
      style={{ backgroundColor: getColor()[0], borderRadius: 4 }}
    >
      <Text style={[{ color: getColor()[1] }, styles.score]}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  score: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
