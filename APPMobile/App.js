import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import TelaDeLogin from './src/Pages/TelaDeLogin/TelaDeLogin';
//import TelaDeCadastro from './src/Pages/TelaDeCadastro/TelaDeCadastro';
//import TelaPrincipal from './src/Pages/TelaPrincipal/TelaPrincipal';
import CadastroAnimal from './src/Pages/CadastroAnimal/CadastroAnimal';



//const Stack = createStackNavigator();

const App = () => {
  return (
  // {// <NavigationContainer styles>
   // <Stack.Navigator screenOptions={{ headerShown: false}}>
     // <Stack.Screen name="TelaDeLogin" component={TelaDeLogin} />
    //  <Stack.Screen name="TelaDeCadastro" component={TelaDeCadastro} />
    //  <Stack.Screen name="TelaPrincipal" component={TelaPrincipal}/>
   // </Stack.Navigator>
 // </NavigationContainer>/}
<CadastroAnimal/>
  );
};

export default App;

