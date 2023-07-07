import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userDetails, user } from "../../utils/userDB";
import CustomButton from "../CustomButton";
import useAuth from "../../hooks/useAuth";

export default function LoginForm(props) {
  const{navigation} = props;
  const [error, setError] = useState("");

  const{login} =useAuth();
  
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formData) => {
      setError("");
      const { username, password } = formData;

      if (username !== user.username || password !== user.password) {
        console.log("Usuario o contraseña incorrecta");
        setError("Usuario o contraseña incorrecta");
      } else {
        login(userDetails);

  
      }
    },
  });

  function initialValues() {
    return {
      username: "",
      password: "",
    };
  }

  function validationSchema() {
    return {
      username: Yup.string().required("El nombre de usuario es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    };
  }

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")} // Ruta de la imagen de fondo
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require("../../assets/title.png")}
          style={styles.image2} // Establece el color del borde de la imagen
        />

        <Image
          source={require("../../assets/logorick.png")}
          style={styles.image} // Establece el color del borde de la imagen
        />

        <TextInput
          placeholder={"Nombre de usuario"} // Corrección: placeholder en lugar de placehorder
          placeholderTextColor="#FFF"
          style={styles.input}
          autoCapitalize="none"
          value={formik.values.username}
          onChangeText={(text) => formik.setFieldValue("username", text)}
        />
        <Text style={styles.error}>{formik.errors.username}</Text>
        <TextInput
          placeholder={"Contraseña"} // Corrección: placeholder en lugar de placehorder
          placeholderTextColor="#FFF"
          style={styles.input}
          autoCapitalize="none"
          value={formik.values.password}
          secureTextEntry={true}
          onChangeText={(text) => formik.setFieldValue("password", text)}
        />
        <Text style={styles.error}>{formik.errors.password}</Text>
        <CustomButton title="Iniciar sesión" onPress={formik.handleSubmit} />

        <Text style={styles.error}>{error}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },
  input: {
    height: 40,
    marginHorizontal: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#bbdf5e",
    color: "#bbdf5e",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  error: {
    color: "#F70303",
    textAlign: 'center',
    marginVertical: 10,
  },
  background: {
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
  
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
  container:{
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
});
