import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empower Your Habits</Text>
      <Text style={styles.title}>Master Your Skills!</Text>
      <Text style={styles.description}>
        Create, join, and conquer HabitTubes with the help of your AI Agent - your personal motivator, coach, and guide
      </Text>
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      {/*espacio para el svg*/}
      <View style={styles.svgPlaceholder}>
        <Text style={styles.svgText}>SVG Placeholder</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    fontFamily:"System"
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
  description: {
    fontFamily: "Segoe UI Emoji",
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginVertical: 20,
  },
  googleButton: {
    backgroundColor: '#f1f1f2',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 20,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  svgPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  svgText: {
    color: '#aaa',
    fontSize: 16,
  },
});
