import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

import { DurationContext } from '../../store';
import Logo from '../../assets/logo.svg';

export default function Home() {
    const [durationPomodoro, setDurationPomodoro, shortBreak, setShortBreak, longBreak, setLongBreak] = useContext(DurationContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLogo}>
                    <Logo width={styles.widthLogo} height={styles.heightLogo} />
                    <Text style={styles.headerText}>Pomo Time</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.time}>{new Date()}</Text>
                <TouchableOpacity style={styles.button} onPress={() => setDurationPomodoro(durationPomodoro + 1)}>
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