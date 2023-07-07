import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import InicieSesion from '../components/Auth/InicieSesion';
import UserFavoritos from '../components/UserFavoritos';

export default function Favoritos() {
  const {auth} =useAuth() // Estado de autenticación
  return (
    <SafeAreaView style={styles.container}>
      {auth ? <UserFavoritos/> : <InicieSesion/>} 
    </SafeAreaView>
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
});