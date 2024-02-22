import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ContactUsScreen() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    email: '',
    phone: '',
    advantageCardNumber: '',
    questionDescription: '',
  });

  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [advantageCardNumberError, setAdvantageCardNumberError] = useState(false);
  const [questionDescriptionError, setQuestionDescriptionError] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    const validationErrors = [];

    // Check if all required fields are empty and throw an error
    if (!form.email && !form.phone && !form.questionDescription) {
      validationErrors.push('Please fill in all required fields.');
    } else {
      // Check individual validations only if required fields are not empty and throw an error

      // Check if email is valid
      if (form.email && !isValidEmail(form.email)) {
        validationErrors.push('Please enter a valid email address.');
        setEmailError(true);
      } else {
        setEmailError(false);
      }

      // Check if phone number has 10 digits
      if (form.phone && form.phone.replace(/\D/g, '').length !== 10) {
        validationErrors.push('Phone number should have 10 digits.');
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }

      if (form.advantageCardNumber && form.advantageCardNumber.replace(/\D/g, '').length !== 16) {
        validationErrors.push('Advantage number should have 16 digits.');
        setAdvantageCardNumberError(true);
      } else {
        setAdvantageCardNumberError(false);
      }

      // Check if question description is between 100 and 250 words
      const wordCount = form.questionDescription.trim().split(/\s+/).length;
      if (form.questionDescription && (wordCount <= 20 || wordCount >= 30)) {
        validationErrors.push('Question description should be between 100 and 250 characters.');
        setQuestionDescriptionError(true);
      } else {
        setQuestionDescriptionError(false);
      }
    }

    // Display accumulated validation errors; perform only when there are more than 1 error
    if (validationErrors.length > 0) {
      Alert.alert('Error', validationErrors.join('\n'));
      return; // Stop submission if there are validation errors
    }

    // Handle form submission, you can perform validation or send data to a server
    console.log('Form submitted:', form);
    // Navigate to the next screen or perform other actions
    setForm({
      email:'',
      phone:'',
      questionDescription:'',
      advantageCardNumber:'',

      //to clear the screen
    });
    navigation.navigate('Success');
   
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContent}>
        <Text style={styles.message}>Hi, let us know how we can help!</Text>

        <View style={styles.input}>
          <Text style={[styles.inputLabel, emailError && styles.errorLabel]}>Email(*)</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(email) => setForm({ ...form, email })}
            placeholder="Enter your email"
            placeholderTextColor="#6b7280"
            style={[styles.inputControl, emailError && styles.invalidInput]}
            value={form.email}
          />
        </View>

        <View style={styles.input}>
          <Text style={[styles.inputLabel, phoneError && styles.errorLabel]}>Phone Number(*)</Text>
          <TextInput
            autoCorrect={false}
            keyboardType="phone-pad"
            onChangeText={(phone) => setForm({ ...form, phone })}
            placeholder="Enter your phone number"
            placeholderTextColor="#6b7280"
            style={[styles.inputControl, phoneError && styles.invalidInput]}
            value={form.phone}
          />
        </View>

        <View style={styles.input}>
          <Text style={[styles.inputLabel, advantageCardNumberError && styles.errorLabel]}>
            Advantage Card Number(Optional)
          </Text>
          <TextInput
            keyboardType="phone-pad"
            autoCorrect={false}
            onChangeText={(advantageCardNumber) => setForm({ ...form, advantageCardNumber })}
            placeholder="Enter your advantage card number"
            placeholderTextColor="#6b7280"
            style={[styles.inputControl, advantageCardNumberError && styles.invalidInput]}
            value={form.advantageCardNumber}
          />
        </View>

        <View style={styles.input}>
          <Text style={[styles.inputLabel, questionDescriptionError && styles.errorLabel]}>
            Question Description(*)
          </Text>
          <TextInput
            multiline
            numberOfLines={4}
            onChangeText={(questionDescription) => setForm({ ...form, questionDescription })}
            placeholder="Describe your question in detail (max 250 characters)"
            placeholderTextColor="#6b7280"
            style={[
              styles.inputControl,
              { height: 100 },
              questionDescriptionError && styles.invalidInput,
            ]}
            value={form.questionDescription}
          />
        </View>

        <Text style={styles.urgentMessage}>
          If your inquiry is urgent, you can contact our customer care team directly.
        </Text>
        <Text style={styles.urgentMessage1}>1-800-553-2324</Text>
        <Text style={styles.urgentMessage}>Mon - Fri, 9:00am - 9:00pm (ET) </Text>

        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    fontSize: 25,
    marginBottom: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  inputControl: {
    height: 40,
    backgroundColor: '#EEF1F6',
    paddingHorizontal: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    opacity: 0.5,
  },
  invalidInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorLabel: {
    color: 'red',
  },
  urgentMessage: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  urgentMessage1: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
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
