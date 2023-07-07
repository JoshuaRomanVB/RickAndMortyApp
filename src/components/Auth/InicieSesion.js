import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import React from "react";
import CustomButton from "../CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function InicieSesion() {
  const navigation = useNavigation();
  function irAlogin() {
    navigation.navigate("account");
  }
  return (
    <ImageBackground
    source={require("../../assets/background.jpg")}
    style={styles.background}
  >
<View style={styles.noFavoritesContainer}>
      <Text style={styles.noFavoritesText}>
        No tienes favoritos. Inicia sesión.
      </Text>

      <Image
        source={require("../../assets/mortygif.gif")}
        style={styles.noFavoritesImage}
      />

      <CustomButton title="Iniciar sesión" onPress={irAlogin} />
    </View>
  </ImageBackground>
    
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
