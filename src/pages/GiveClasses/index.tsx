import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton} from 'react-native-gesture-handler';
import styles from './styles';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';

function GiveClasses() {
    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode="contain"
                source={giveClassesBgImage}
                style={styles.content}
            >
                <Text style={styles.title}>
                    Quer ser um Proffy?
                </Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>
            <RectButton style={styles.okayButton} >
                <Text style={styles.okayButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;