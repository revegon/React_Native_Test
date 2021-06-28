import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider, DefaultTheme } from 'react-native-paper';
import { Login } from './Pages/Login/Login';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  }
}

export default function App() {
  return (
    <Provider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Login />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
