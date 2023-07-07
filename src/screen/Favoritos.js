import { View, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import UserData from '../components/Auth/UserData';
import LoginForm from '../components/Auth/LoginForm';
import useAuth from '../hooks/useAuth';
import InicieSesion from '../components/Auth/InicieSesion';
import UserFavoritos from '../components/UserFavoritos';

export default function Favoritos() {
  const {auth} =useAuth() // Estado de autenticación
  return (
    <SafeAreaView>
      {auth ? <UserFavoritos/> : <InicieSesion/>} 
    </SafeAreaView>
  );
}
