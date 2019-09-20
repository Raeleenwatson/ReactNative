import React , {useState }from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  //Not correct way to initalize for state
  //let counter = 0;

  const [counter, setCounter] = useState(0); 

  return (
  <View>
    <Button title="Increase" onPress={() => {
      //dont use because we dont modify a state variable directly
      //counter++;
      setCounter(counter+ 1); //takes the value of counter and add 1 then returns it to the setCounter variable.
    }}/>

    <Button title="Decrease" onPress={() => {
      setCounter(counter - 1);
      //counter--;
    }}/>

    <Text>Current Count: {counter}</Text>
  </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;