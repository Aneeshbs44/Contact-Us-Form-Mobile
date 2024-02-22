// screens/SuccessScreen.js
import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';

export default function SuccessScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
    <Image source={require('../images/image.png')} style={styles.image}/>
    </View>
      <View style={styles.textContainer}>
      
      <Text style={styles.successHeading1}>Success!</Text>
        <Text style={styles.successHeading}>Form successfully submitted</Text>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // padding: 20,
    // alignContent:'center',
    backgroundColor:'#ffffff',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignContent:'center',
  },
  imageContainer:{
    alignItems:'center',
    marginTop:200,
  },
  image:{
    width:100,
    height:100,
    resizeMode:'contain',
    marginBottom:20,
    
  },
  textContainer:
  {
    alignItems:'center',
    marginTop:20,
  },
  successHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  successHeading1: {
      fontSize: 34,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    submitButton: {
      backgroundColor: 'transparent', // Set background color to transparent
      borderWidth: 1, // Add border width
      borderColor: '#EEF1F6', // Set border color to grey
      padding: 15,
      borderRadius: 200,
      width: 330,
      alignItems: 'center',
    },
  
  submitButtonText: {

    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
