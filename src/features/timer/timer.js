import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  Platform,
} from 'react-native';
import { paddingSizes } from '../../utils/size';
import { CountDown } from '../../components/CountDown';
import { RoundedButton } from '../../components/RoundedButton';
import { ProgressBar, Colors } from 'react-native-paper';
import { Timing } from './Timing';
import { useKeepAwake } from 'expo-keep-awake';

const DEFAULT_TIME = 0.1;

export const Timer = ({ focusSubject, onTimerEnd , clearSubject }) => {
  // always awake app in timer page
  useKeepAwake();

  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(10000);
    }
  };
  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };
  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <CountDown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={{ padding: paddingSizes.xxl }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={{ paddingTop: paddingSizes.sm }}>
        <ProgressBar
          progress={progress}
          color="#5E84E2"
          style={{ height: 10 }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onchangeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <TouchableOpacity
            style={[styles.radius]}
            onPress={() => {
              setIsStarted(false);
            }}>
            <Text style={[styles.text]}>Pause</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.radius]}
            onPress={() => {
              setIsStarted(true);
            }}>
            <Text style={[styles.text]}>Start</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.clearSubject}>
          <TouchableOpacity
            style={[styles.radius1]}
            onPress={() => {
              clearSubject();
            }}>
            <Text style={[styles.text1]}>-</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  task: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radius: {
    borderRadius: 100 / 2,
    width: 100,
    height: 100,
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  radius1:{
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  text: { color: '#fff', marginTop: 22, fontSize: 80 / 3 },
  text1: { color: '#fff', marginTop: 10, fontSize: 50 / 3 },
  clearSubject:{
    paddingBottom: 25,
    paddingLeft: 25
  }
});
