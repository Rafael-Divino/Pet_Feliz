import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuUsuario from '../MenuUsuario/MenuUsuario';
import PerfilUsuario from '../../Pages/PerfilUsuario/PerfilUsuario';
import TelaPrincipal from '../../Pages/TelaPrincipal/TelaPrincipal';
import SobreNos from '../../Pages/SobreNos/SobreNos';
import TelaConfig from '../../Pages/TelaConfig/TelaConfig';
import CadastroAnimal from '../../Pages/CadastroAnimal/CadastroAnimal';
import FAQ from '../../Pages/FAQ/FAQ';
import PetsUsuario from '../../Pages/PetsUsuario/PetsUsuario';


const Drawer = createDrawerNavigator();

const TelaPrincipalNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="TelaPrincipal"
      drawerContent={(props) => <MenuUsuario {...props}
      options={{ title: null }} />}
    >
      <Drawer.Screen name="TelaPrincipal" component={TelaPrincipal} options={{ title: null }} />
        <Drawer.Screen name="PerfilUsuario" component={PerfilUsuario} options={{ title: null }}/> 
        <Drawer.Screen name="SobreNos" component={SobreNos} options={{ title: null }}/> 
        <Drawer.Screen name="TelaConfig" component={TelaConfig} options={{ title: null }}/> 
        <Drawer.Screen name="CadastroAnimal" component={CadastroAnimal} options={{ title: null }}/> 
        <Drawer.Screen name="FAQ" component={FAQ} options={{ title: null }}/> 
        <Drawer.Screen name="PetsUsuario" component={PetsUsuario} options={{ title: null }}/> 
    </Drawer.Navigator>
  );
};
export default TelaPrincipalNavigator;