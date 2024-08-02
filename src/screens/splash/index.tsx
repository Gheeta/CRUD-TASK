import React from 'react';

import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import screenNames from '../../navigation/screenNames';
import {View, Text} from 'react-native';
import styles from './styles';

type ISplashScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const SplashScreen: React.FC<ISplashScreenProps> = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace(screenNames.Note);
    }, 2000);
  }, []);

  return (
    <View style={styles.innerContainer}>
      <Text style={{color: 'green', fontSize: 30, fontWeight: 'bold'}}>
        CRUD TASK
      </Text>
    </View>
  );
};

export default SplashScreen;
