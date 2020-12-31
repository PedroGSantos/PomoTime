import React, { useContext, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format, getMilliseconds } from 'date-fns';
import * as SecureStore from 'expo-secure-store';

import { DurationContext } from '../../store';
import styles from './styles';

import Logo from '../../assets/logo.svg';

export default function Settings() {
    const [durationPomodoro, setDurationPomodoro, shortBreak, setShortBreak, longBreak, setLongBreak] = useContext(DurationContext);
    const [timePickerVisibilityPomodoro, setTimePickerVisibilityPomodoro] = useState(false);
    const [timePickerVisibilityLongBreak, setTimePickerVisibilityLongBreak] = useState(false);
    const [timePickerVisibilityShortBreak, setTimePickerVisibilityShortBreak] = useState(false);

    function visibilityTimePickerPomodoro() {
        setTimePickerVisibilityPomodoro(!timePickerVisibilityPomodoro);
    }

    function visibilityTimePickerLongBreak() {
        setTimePickerVisibilityLongBreak(!timePickerVisibilityLongBreak);
    }

    function visibilityTimePickerShortBreak() {
        setTimePickerVisibilityShortBreak(!timePickerVisibilityShortBreak);
    }

    async function changeTimePomodoro(time) {
        setTimePickerVisibilityPomodoro(false);
        setDurationPomodoro(format(time, 'HH:mm'));
        await SecureStore.setItemAsync('Pomodoro', String(format(time, 'HH:mm')));
    }

    async function changeTimeShortBreak(time) {
        setTimePickerVisibilityShortBreak(false);
        setShortBreak(format(time, 'HH:mm'));
        await SecureStore.setItemAsync('TimeShort', String(format(time, 'HH:mm')));
    }

    async function changeTimeLongBreak(time) {
        setTimePickerVisibilityLongBreak(false);
        setLongBreak(format(time, 'HH:mm'));
        await SecureStore.setItemAsync('TimeLong', String(format(time, 'HH:mm')));
    }

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
                    <TouchableOpacity style={styles.buttonTime} onPress={visibilityTimePickerPomodoro}>
                        <Text style={durationPomodoro === 'HH:mm' ? styles.textDuration : styles.textDuration2}>{durationPomodoro === 'HH:mm' ? 'HH:mm' : durationPomodoro}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={timePickerVisibilityPomodoro}
                        mode={'time'}
                        is24Hour={true}
                        onCancel={visibilityTimePickerPomodoro}
                        onConfirm={changeTimePomodoro}
                        cancelTextIOS={'Cancelar'}
                        confirmTextIOS={'Confirmar'}
                        headerTextIOS={'Escolha uma hora'}
                    />
                </View>
                <View style={styles.viewTopic}>
                    <Text style={styles.topic}>Intervalo curto:</Text>
                    <TouchableOpacity style={styles.buttonTime} onPress={visibilityTimePickerShortBreak}>
                        <Text style={shortBreak === 'HH:mm' ? styles.textDuration : styles.textDuration2}>{shortBreak === 'HH:mm' ? 'HH:mm' : shortBreak}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={timePickerVisibilityShortBreak}
                        mode={'time'}
                        is24Hour={true}
                        onCancel={visibilityTimePickerShortBreak}
                        onConfirm={changeTimeShortBreak}
                        cancelTextIOS={'Cancelar'}
                        confirmTextIOS={'Confirmar'}
                        headerTextIOS={'Escolha uma hora'}
                    />
                </View>
                <View style={styles.viewTopic}>
                    <Text style={styles.topic}>Intervalo longo:</Text>
                    <TouchableOpacity style={styles.buttonTime} onPress={visibilityTimePickerLongBreak}>
                        <Text style={longBreak === 'HH:mm' ? styles.textDuration : styles.textDuration2}>{longBreak === 'HH:mm' ? 'HH:mm' : longBreak}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={timePickerVisibilityLongBreak}
                        mode={'time'}
                        is24Hour={true}
                        onCancel={visibilityTimePickerLongBreak}
                        onConfirm={changeTimeLongBreak}
                        cancelTextIOS={'Cancelar'}
                        confirmTextIOS={'Confirmar'}
                        headerTextIOS={'Escolha uma hora'}
                    />
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