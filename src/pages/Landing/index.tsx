import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles'
import landingImage from '../../images/landing.png';

function Landing(){
    return (
        <View style={styles.container}>
            <Image source={landingImage} />
        </View>

    )
}

export default Landing;