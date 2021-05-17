import React, { useState , useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fontSizes, paddingSizes } from '../utils/size';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);


export const CountDown = ({ minutes = 1, isPaused, onProgress, onEnd }) => {

  const interval = React.useRef(null);

  const countDown = () => {
    setMillis((time) => {
      if(time === 0){
         clearInterval(interval.current);

         return time;
      }
      const timeLeft = time - 1000;
    
      return timeLeft;

    })
  }

  const [millis, setMillis] = useState(null);
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  v  
  useEffect(() => {
    setMillis(minutesToMillis(minutes))
  }, [minutes])
  useEffect(() => {
      // progress
      onProgress(millis / minutesToMillis(minutes))
      if(millis === 0){
          onEnd();
      }

  }, [millis])
  useEffect(() => {
    if(isPaused){
      if(interval.current) clearInterval(interval.current);
       return;
    }
        interval.current = setInterval(countDown, 1000);
        
        return () => clearInterval(interval.current)
  }, [isPaused])

  return (
    <View>
      <Text style={styles.text}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: 'white',
    padding: paddingSizes.lg,
    backgroundColor: 'rgba(94, 132 , 226 , 0.3)',
  },
});
