
import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity,Image } from 'react-native';

export default function ErrorScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
         <View style={styles.imageContainer}></View>
      <View style={styles.centerContent}>
      <Image source={require('../images/error.png')} style={styles.image}/>
        <Text style={styles.errorHeading}>ERROR</Text>
        <Text style={styles.errorMessage}>Please enter a valid email address.</Text>

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
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer:{
    alignItems:'center',
    marginTop:1,
  },
  image:{
    width:100,
    height:100,
    resizeMode:'contain',
    marginBottom:20,
    
  },
  errorHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#00008B',
    paddingVertical: 12,
    borderRadius: 100,
    width:300,
    marginTop:20,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
