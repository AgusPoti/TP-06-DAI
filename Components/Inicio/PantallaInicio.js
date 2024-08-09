import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PantallaInicio ()  {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>¡Bienvenido a la aplicación!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Color de fondo para Pantalla de Inicio
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
