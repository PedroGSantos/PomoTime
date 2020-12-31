import React, { useState, createContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export const DurationContext = createContext();

export default function DurationProvider({ children }) {
    const [durationPomodoro, setDurationPomodoro] = useState('HH:mm');
    const [shortBreak, setShortBreak] = useState('HH:mm');
    const [longBreak, setLongBreak] = useState('HH:mm');

    useEffect(() => {
        async function localData() {
            setDurationPomodoro(await SecureStore.getItemAsync('Pomodoro'));
            setShortBreak(await SecureStore.getItemAsync('TimeShort'));
            setLongBreak(await SecureStore.getItemAsync('TimeLong'));
        }
        localData();
    }, [])

    return (
        <DurationContext.Provider value={[durationPomodoro, setDurationPomodoro, shortBreak, setShortBreak, longBreak, setLongBreak]}>
            {children}
        </DurationContext.Provider>
    );
}