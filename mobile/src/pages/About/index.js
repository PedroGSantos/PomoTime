import React from 'react';
import { Text, View, FlatList } from 'react-native';

import styles from './styles';

import Logo from '../../assets/logo.svg';
import Humanoide1 from '../../assets/humanoide1.svg';
import Humanoide2 from '../../assets/humanoide2.svg';

export default function Home() {
    const dataAbout = [
        {
            title: 'O que é o pomodoro?',
            message: 'A técnica de pomodoro é uma ferramenta de gestão de tempo que auxilia na produtividade e foco invidual durante determinada tarefa.'
        },
        {
            title: 'Como utilizar?',
            message: 'No início, é recomendado se dedicar durante 25 minutos para uma tarefa, sem interrupções. Logo após isso, tire 5 minutos de descanso para a sua mente reorganizar as ideais que você aprendeu. Feito isso, você conseguiu realizar 1 sessão, após 4 sessões consecutivas é recomendado tirar um longo descanso de 20 a 30 minutos.'
        },
        {
            title: 'Quem deve utilizar?',
            message: 'Trabalhadores, estudantes, procrastinadores e todo tipo de pessoa que tem dificuldade para se concentrar ao realizar tal atividade. '
        },
        {
            title: 'O que é o Pomo Time?',
            message: 'O Pomo Time tem o objetivo de ajudar você com a experiência do Pomodoro. Você pode controlar suas sessões, intervalos curtos e longos pelo aplicativo e personalizar suas durações. A cada sessão finalizada, o aplicativo te notificará para que você consiga descansar.'
        }

    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLogo}>
                    <Logo width={styles.widthLogo} height={styles.heightLogo} />
                    <Text style={styles.headerText}>Sobre</Text>
                </View>
            </View>
            <FlatList
                data={dataAbout}
                horizontal={true}
                style={styles.cardContainer}
                keyExtractor={(dataAbout) => dataAbout.title}
                renderItem={({ item: data }) => (
                    <View style={styles.cardInformation}>
                        <View style={styles.headerCard}>
                            <Text style={styles.titleCard}>{data.title}</Text>
                        </View>
                        <Text style={styles.messageCard}>{data.message}</Text>
                        {data.title === "O que é o pomodoro?" ?
                            <Humanoide1 style={styles.humanoide1Position} /> : <View></View>
                        }
                        {data.title === "Quem deve utilizar?" ?
                            <Humanoide2 style={styles.humanoide2Position} /> : <View></View>
                        }
                    </View>
                )}
            />
        </View>
    );
}