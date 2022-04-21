import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeStack } from './MainSTack';
import { ProfileStack } from './MainSTack';


const Tab = createMaterialBottomTabNavigator();

export default function Tabs() { 

    return(
            <Tab.Navigator screenOptions={{headershown: false}} >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Profile" component={ProfileStack} />
            </Tab.Navigator>
    );
}