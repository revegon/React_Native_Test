import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import {TextInput} from './Components/Inputs';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  onTextChange(value) {
    this.setState({
      email: value,
    });
  }

  onPasswordChange(value) {
    this.setState({
      password: value,
    });
  }

  render() {
    const {email, password} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text>myText</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
            label="Email"
            value={email}
            onChangeText={value => this.onTextChange(value)}
            // style={styles.input}
          />
          <TextInput 
            label="password"
            value={password}
            onChangeText={value => this.onPasswordChange(value)}
            // style={styles.input}
          />
          <Button mode="contained" style={styles.button}>Submit</Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    titleContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    inputContainer: {
      flex: 2,
    },
    input: {
      flex: 1,
    },
    button: {
      width: 100,
      alignSelf: 'center'
    },
  });

export { Test };