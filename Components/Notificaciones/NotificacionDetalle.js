import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PantallaBuscarDetalle  ({ route }) {
  const { resultado } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de la Búsqueda</Text>
      <Text>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b2ebf2', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

