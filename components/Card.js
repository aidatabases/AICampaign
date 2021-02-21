import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardHead}>Sample card</Text>
      <Image
        style={styles.cardImg}
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    width: "90%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginVertical: 10,
  },
  cardHead: {
    backgroundColor: "#c4c4c4",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    color: "#000",
    fontSize: 18,
    width: "100%",
    padding: 20,
    fontFamily: "roboto-medium",
  },
  cardImg: {
    width: "100%",
  },
});
