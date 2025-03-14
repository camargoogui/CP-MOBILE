import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CalculatorScreen from '../screens/CalculatorScreen';
import ResultadoScreen from '../screens/ResultadoScreen';

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Calculator">
      <Stack.Screen name="Calculator" component={CalculatorScreen} options={{ title: 'Calculadora' }} />
      <Stack.Screen name="Resultado" component={ResultadoScreen} options={{ title: 'Resultado' }} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
