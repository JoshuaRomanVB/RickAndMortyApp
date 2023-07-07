import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import CustomButton from "../CustomButton";

export default function InicieSesion({ navigation }) {
  function irAlogin() {
    navigation.navigate("LoginFav");
  }
  return (
    <View style={styles.noFavoritesContainer}>
      <Text style={styles.noFavoritesText}>
        No tienes favoritos. Inicia sesión.
      </Text>

      <ImageBackground
        source={require("../../assets/mortygif.gif")}
        style={styles.noFavoritesImage}
      />

      <CustomButton title="Iniciar sesión" onPress={irAlogin} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  noFavoritesContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noFavoritesImage: {
    width: 300,
    height: 300,
  },
  noFavoritesText: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
});
