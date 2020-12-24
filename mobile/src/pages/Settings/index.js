import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

import styles from './styles';

import Logo from '../../assets/logo.svg';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLogo}>
                    <Logo width={styles.widthLogo} height={styles.heightLogo} />
                    <Text style={styles.headerText}>Configurações</Text>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.viewTopic}>
                    <Text style={styles.topic}>Pomodoro:</Text>
                    <TouchableOpacity style={styles.buttonTime}>
                        <Text style={styles.textDuration}>HH:MM</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTopic}>
                    <Text style={styles.topic}>Intervalo curto:</Text>
                    <TouchableOpacity style={styles.buttonTime}>
                        <Text style={styles.textDuration}>HH:MM</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTopic}>
                    <Text style={styles.topic}>Intervalo longo:</Text>
                    <TouchableOpacity style={styles.buttonTime}>
                        <Text style={styles.textDuration}>HH:MM</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.viewTopic, { marginBottom: 0 }]}>
                    <Text style={styles.topic}>Volume do som:</Text>
                    <Slider
                        style={styles.slider}
                        value={0}
                        step={10}
                        minimumValue={0}
                        maximumValue={100}
                        maximumTrackTintColor={'#FFF'}
                        minimumTrackTintColor={'#000'}
                        thumbTintColor={'#000'}
                    //onValueChange={changeSlider}
                    />
                    <Text style={styles.textVolume}>95</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Alterar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}