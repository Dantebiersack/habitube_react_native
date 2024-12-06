import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image ,Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empower Your Habits</Text>
      <Text style={styles.title}>Master Your Skills!</Text>
      <Text style={styles.description}>
        Create, join, and conquer HabitTubes with the help of your AI Agent - your personal motivator, coach, and guide
      </Text>
      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('./assets/icons/google.png')} style={styles.googleIcon}/>
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      
      <Image
        source={require('./assets/img/habitube_promo.png')}
        style={styles.promoImage}
        resizeMode="contain"
      />
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
    fontFamily: "System",
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginVertical: 20,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#66666b',
    fontSize: 16,
    fontWeight: 'bold',
  },
  promoImage: {
    width: screenWidth * 0.8, // 80% del ancho de la pantalla
    height: screenWidth * 0.5, // Ajusta la altura según el ancho para mantener proporciones
    marginTop: 30,
  },
});
