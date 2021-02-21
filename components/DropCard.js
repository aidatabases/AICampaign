import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const DropCard = ({text}) => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.card}>
      <View
        style={
          open ? styles.cardHead : [styles.cardHead, styles.cardHeadClosed]
        }
      >
        <Text style={styles.cardHeadText}>{text || "Pass a text Prop for heading"}</Text>
        <TouchableWithoutFeedback onPress={() => setOpen(!open)}>
          <AntDesign
            name={!open ? "downcircleo" : "upcircleo"}
            size={30}
            color="white"
          />
        </TouchableWithoutFeedback>
      </View>
      {open ? (
        <Image
          style={styles.cardImg}
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
          style={{ width: 200, height: 200 }}
        />
      ) : null}
    </View>
  );
};

export default DropCard;

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
    marginVertical: 10
  },
  cardHead: {
    backgroundColor: "#44ABF8",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardHeadClosed: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  cardHeadText: {
    color: "#000",
    fontSize: 18,
    fontFamily: "roboto-medium",
  },
  cardImg: {
    width: "100%",
  },
});
