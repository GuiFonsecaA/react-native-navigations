import { createStackNavigator } from '@react-navigation/stack';
import Contacts from '../pages/stack-navigation/Contacts';
import Information from '../pages/stack-navigation/Information';
import Account from '../pages/drawer-navigation/Account';
const StackNav = createStackNavigator();

export default function Stack(){
    return(
        <StackNav.Navigator screenOptions={ {headerShown: false}}>
            <StackNav.Screen 
            name="contacts"
            component={Contacts}/>
            <StackNav.Screen
            name="information"
            component={Information}/>
            <StackNav.Screen
            name="account"
            component={Account}/>
        </StackNav.Navigator>
    );
}
