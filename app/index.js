import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';

export default function App() {

  return (
      <View style={styles.container}>

        <View style={styles.Box1}>
          <Image
            source={require('../assets/Logo.jpeg')}
            style={styles.Logo}
          />
        </View>

        <View style={styles.Box2}>
          <View style={styles.BoxTexts}>
            <Text style={styles.Title1}>BEM VINDO AO APP</Text>
            <Text style={styles.Title2}>DIETA MOBILE</Text>
            <Text style={styles.Text1}>Feito Por Isaac Martins</Text>
            <Link href='/Home' style={styles.BtnEntrar} asChild>
              <Text style={styles.TextEntrar}>Entrar</Text>
            </Link>
          </View>
          <StatusBar style="auto" />
        </View>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#19434f',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  Box1: {
    width: '100%',
    height: '50%',
    backgroundColor: '#19434f',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  Box2: {
    width: '100%',
    height: '50%',
    backgroundColor: '#19434f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BoxTexts: {
    width: '100%',
    height: '50%',
    backgroundColor: '#19434f',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 250
  },
  Logo: {
    width: '80%',
    height: '70%',
    borderWidth: 3,
    borderColor: '#111',
    borderRadius: 700,
  },
  Title1: {
    fontSize: 35,
    color: '#d9dceb',
  },
  Title2: {
    fontSize: 35,
    color: '#00abd6',
  },
  Text1: {
    fontSize: 18,
    color: '#d9dceb',
  },
  BtnEntrar: {
    marginTop: 50,
    backgroundColor: '#00abd6',
    borderColor: '#111',
    width: '35%',
    height: '15%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextEntrar: {
    color: '#d9dceb',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
