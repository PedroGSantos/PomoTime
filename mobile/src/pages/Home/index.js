import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AboutSVG from '../../assets/home.svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Home() {
    return (
        <View style={{ flex: 1 }}><Text style={{ fontSize: hp("50%") }}>e</Text></View>
    );
}