import React from 'react';
import {Text, StyleSheet, View} from 'react-native'; //Only importing the two libaries within the braces

const ComponentsScreen = () => {
  //Text - What text we want to show 

  // const greeting = 'Hi There!';
  // const greeting1 = <Text>Hello to you!</Text>;

  const name = "Raeleen";

   return <View>
     <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.subheader}>My name is {name}</Text>
     {/* {greeting1} */}
    </View>
};

const styles = StyleSheet.create({
  //Passing in an object - Creating a grouping of diff styling rules that we apply to textStyle

  textStyle:{
    fontSize: 45
  },
  subHeader: {
    fontSize: 20
  }
});

export default ComponentsScreen;


