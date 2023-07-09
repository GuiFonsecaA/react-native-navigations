import { createDrawerNavigator } from '@react-navigation/drawer';
import Customer from '../pages/drawer-navigation/Customer';
import Stack from './stack';

const DrawerNav = createDrawerNavigator();

export default function Drawer(){
    return (
    <DrawerNav.Navigator screenOptions={{title: ''}}>
        <DrawerNav.Screen name="customer" component={Customer} 
        options={{drawerLabel: 'Clientes'}}/>
        <DrawerNav.Screen name="Contacts" component={Stack} 
        options={{drawerLabel: 'Contatos'}}/>
      </DrawerNav.Navigator>
    );
}