// FormResultScreen.js
import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';

export default function FormResultScreen({ route, navigation }) {
  const { success } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        {success ? (
          <Image source={requirerequire('../images/image.png')} style={styles.image} />
        ) : (
          <Image source={require('../images/error.png')} style={styles.image} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.resultHeading}>{success ? 'Success!' : 'Error!'}</Text>
        <Text style={styles.resultMessage}>
          {success
            ? 'Form successfully submitted'
            : 'Please enter a valid email address.'}
        </Text>

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
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 200,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  resultHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  resultMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#00008B',
    paddingVertical: 12,
    borderRadius: 100,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
