import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Ripple from 'react-native-material-ripple';

const App = () => {
  return (
    <View style={styles.body}>
      <Ripple
        style={styles.button}
        rippleColor='#f0f'
        rippleOpacity={0.9}
        rippleDuration={2000}
        rippleSize={500}
        rippleCentered={true}
      >
        <Text style={styles.text}>Press me</Text>
      </Ripple>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    height: 100,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 30
  }
});

export default App;