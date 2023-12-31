import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Account from "../screen/Account";
import Favoritos from "../screen/Favoritos";
import Rickandmorty from "../screen/Rickandmorty";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import NavigationAccount from "./NavigationAccount";
import NavigationFavoritos from "./NavigationFavoritos";
import RickandmortyApi from "../api/RickandmortyApi";
import NavigationPersonaje from "./NavigationPersonaje";

export default function Navigation() {
  const Tab = createBottomTabNavigator();

  const tabBarOptions = {
    activeTintColor: "#1dadc0", // Cambiar aquí el color deseado para el icono activo
    inactiveTintColor: "gray", // Cambiar aquí el color deseado para el icono inactivo
  };

  const tabBarStyle = {
    backgroundColor: "#bbdf5e", // Cambiar aquí el color deseado para el fondo del tab
  };

  return (
    <Tab.Navigator
    initialRouteName="rickandmorty"
      tabBarOptions={tabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "account") {
            iconName = "user";
          } else if (route.name === "rickandmorty") {
            return renderIconRM();
          } else if (route.name === "favoritos") {
            iconName = "heart";
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
      tabBar={(props) => (
        <View style={[tabBarStyle, styles.tabBar]}>
          <BottomTabBar {...props} style={styles.tabBar} />
        </View>
      )}
    >
      <Tab.Screen name="account" component={NavigationAccount} options={{ tabBarLabel: "Mi cuenta" }} />
      <Tab.Screen name="rickandmorty" component={NavigationPersonaje} options={{ tabBarLabel: "" }} />
      <Tab.Screen name="favoritos" component={NavigationFavoritos} options={{ tabBarLabel: "Favoritos" }} />
    </Tab.Navigator>
  );
}

const renderIconRM = () => {
  return (
    <Image
      source={require("../assets/iconoram.png")}
      style={{ width: 75, height: 75, top: -20 }}
    />
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FFF",
    borderColor: "#f6f023",
    borderTopWidth: 2, // Opcionalmente, puedes eliminar la línea superior del tab
    elevation: 0, // Opcionalmente, puedes eliminar la sombra del tab en dispositivos Android
  },
});
