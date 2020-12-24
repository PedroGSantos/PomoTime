import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

import Logo from '../../assets/logo.svg';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLogo}>
                    <Logo width={styles.widthLogo} height={styles.heightLogo} />
                    <Text style={styles.headerText}>Pomo Time</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.time}>25:00</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Começar</Text>
                </TouchableOpacity>
                <View style={styles.dataView}>
                    <Text style={styles.topic}>Pomodoros feitos:</Text>
                    <Text style={styles.topic}>6</Text>
                </View>
                <View style={styles.dataView}>
                    <Text style={styles.topic}>Intervalos curtos:</Text>
                    <Text style={styles.topic}>2</Text>
                </View>
                <View style={styles.dataView}>
                    <Text style={styles.topic}>Intervalos longos:</Text>
                    <Text style={styles.topic}>1</Text>
                </View>
            </View>
        </View>
    );
}