import React from 'react';
import { ImageBackground, StyleSheet, Image } from 'react-native';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.container}
    >

<Image
          source={require("../assets/title.png")}
          style={styles.image2} // Establece el color del borde de la imagen
        />

        <Image
          source={require("../assets/splash.gif")}
          style={styles.image} // Establece el color del borde de la imagen
        />

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    height: 220,
    width: 200,
    alignSelf: "center",
  },
  image2: {
    height: 150,
    width: 400,
  },
});

export default SplashScreen;
