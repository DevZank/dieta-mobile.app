import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Tabela from '../../Components/table';

export default function App() {

  return (
      <View style={styles.container}>

        <View style={styles.header}>
            <Text style={styles.Title1}>Home</Text>
            <Image source={require('../../assets/MinhaFoto.jpg')} style={styles.Perfil}/>
        </View>

        <View style={styles.Box2}>
              <Tabela/>
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
    justifyContent: 'flex-start',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#19434f',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },
  Perfil: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  Box2: {
    width: '100%',
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
