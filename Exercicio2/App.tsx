//Arthur Steiner Morais Silva

import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function HomeScreen() {
  const img1 = require("./assets/img1.png");
  const img2 = require("./assets/img2.png");
  const img3 = require("./assets/img3.png");
  const img4 = require("./assets/img4.png");
  const img5 = require("./assets/img5.png");
  const img6 = require("./assets/img6.png");

  return (
    <View style={styles.hub}>
      <Text>Aqui temos boas imagens!</Text>
      <ScrollView>
        <Image source={img1} style={styles.img} />
        <Image source={img2} style={styles.img} />
        <Image source={img3} style={styles.img} />
        <Image source={img4} style={styles.img} />
        <Image source={img5} style={styles.img} />
        <Image source={img6} style={styles.img} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  hub: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  img: {
    width: 300,
    height: 200,
  },
});
