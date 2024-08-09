import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PantallaInicioDetalle  ({ route }) {
  const { nombre, telefono } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de Inicio</Text>
      <Text>Nombre: {nombre}</Text>
      <Text>Teléfono: {telefono}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccffcc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

