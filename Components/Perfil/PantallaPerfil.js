import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function PantallaPerfil  ({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');


  const handleNavigate = () => {
    if (nombre && telefono) {
      navigation.navigate('DetallePerfil', { nombre, telefono });
    } else {
      alert('Por favor, ingrese tanto el nombre como el teléfono.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cargar Perfil</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        keyboardType="phone-pad"
        value={telefono}
        onChangeText={setTelefono}
      />
      <Button title="Guardar y Ver Detalles" onPress={handleNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cceeff', // Color de fondo para Pantalla de Perfil
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '90%',
  },
});

