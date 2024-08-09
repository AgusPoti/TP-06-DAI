import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Ejemplo de notificaciones
const notificaciones = [
  { id: '1', mensaje: 'Notificación 1: Tienes un nuevo mensaje.' },
  { id: '2', mensaje: 'Notificación 2: Tu pedido ha sido enviado.' },
  { id: '3', mensaje: 'Notificación 3: Se ha realizado una actualización en tu cuenta.' },
];

export default function PantallaNotificaciones ()  {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificaciones</Text>
      <FlatList
        data={notificaciones}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.mensaje}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f1f1f1', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    paddingVertical: 10,
  },
});

