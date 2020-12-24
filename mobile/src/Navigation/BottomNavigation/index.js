import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import React from 'react';

import About from '../../pages/About';
import Home from '../../pages/Home';
import Settings from '../../pages/Settings';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={"Inicio"} barStyle={{ backgroundColor: '#494747' }} inactiveColor={"white"}>
                <Tab.Screen name="Sobre" component={About} options={{
                    tabBarIcon: () => (<Feather name={"bar-chart-2"} size={24} color={"white"} />),
                }} />
                <Tab.Screen name="Início" component={Home} options={{
                    tabBarIcon: () => (<Feather name={"home"} size={24} color={"white"} />),
                }} />
                <Tab.Screen name="Configurações" component={Settings} options={{
                    tabBarIcon: () => (<Feather name={"settings"} size={24} color={"white"} />),
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}