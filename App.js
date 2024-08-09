import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


import PantallaInicio from '././Components/Inicio/PantallaInicio.js';
import PantallaInicioDetalle from '././Components/Inicio/DetallesInicio.js';
import PantallaBuscar from '././Components/Buscar/PantallaBuscar.js';
import PantallaBuscarDetalle from '././Components/Buscar/BuscarDetalle.js';
import PantallaNotificaciones from '././Components/Notificaciones/PantallaNotificaciones.js';
import PantallaPerfil from '././Components/Perfil/PantallaPerfil.js';
import PantallaPerfilDetalle from '././Components/Perfil/PerfilDetalles.js';
import PantallaNotificacionesDetalle from '././Components/Notificaciones/NotificacionDetalle.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = (initialScreen, detailScreen) => (
  <Stack.Navigator>
    <Stack.Screen name={initialScreen.name} component={initialScreen.component} options={{ headerShown: false }} />
    <Stack.Screen name={detailScreen.name} component={detailScreen.component} />
  </Stack.Navigator>
);

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Notificaciones':
              iconName = 'notifications-outline';
              break;
            case 'Inicio':
              iconName = 'home-outline';
              break;
            case 'Buscar':
              iconName = 'search-outline';
              break;
            case 'Perfil':
              iconName = 'person-outline';
              break;
            default:
              iconName = 'home-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="Notificaciones" 
        component={() => StackNavigator({ name: 'Notificaciones', component: PantallaNotificaciones }, { name: 'DetalleNotificaciones', component: PantallaNotificacionesDetalle })} 
      />
      <Tab.Screen 
        name="Inicio" 
        component={() => StackNavigator({ name: 'Inicio', component: PantallaInicio }, { name: 'DetalleInicio', component: PantallaInicioDetalle })} 
      />
      <Tab.Screen 
        name="Buscar" 
        component={() => StackNavigator({ name: 'Buscar', component: PantallaBuscar }, { name: 'DetalleBuscar', component: PantallaBuscarDetalle })} 
      />
      <Tab.Screen 
        name="Perfil" 
        component={() => StackNavigator({ name: 'Perfil', component: PantallaPerfil }, { name: 'DetallePerfil', component: PantallaPerfilDetalle })} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
