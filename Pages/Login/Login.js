import React from 'react';
import {  StyleSheet, View, BackHandler, Alert  } from 'react-native';
import { Title, Button } from 'react-native-paper'; //
import { TextInput, PasswordInput } from '../../Components/Inputs';
import { validateEmail } from '../../Helper/Validations';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            errorMessage: "",
            email: "",
            errorEmail: "",
            errorPassword: "",
        }
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => this.backBtnPressed());
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    onTextChange(field, value) {
        const  state = {};
        state[field] = value;
        this.setState(state);
    }

    checkExit() {
        Alert.alert("Alert", "Exit app?", [
            {
                text: "Cancel",
                onPress: () => null,
            },
            {
                text: "Yes",
                onPress: () => BackHandler.exitApp(),
            }
        ]);
    }

    backToLastPage(fieldToBlank) {
        const state = {};
        state[fieldToBlank] = "";

        this.setState(state);
    }

    backBtnPressed() {
        this.checkExit();
    }

    verifyInputs() {
        console.log('verifying inputs');
        this.verifyInput("email");
        this.verifyInput("password");
    }

    verifyInput(field) {
        const {email, password} = this.state;
        if (field == "email") {
            if(!validateEmail(email)) {
                this.setState({
                    errorEmail: "Invalid email",
                });
            } else {
                this.setState({
                    errorEmail: "",
                });
            }
        } else if(field == "password") {
            if(password == "") {
                this.setState({
                    errorPassword: "Invalid password",
                });
            } else {
                this.setState({
                    errorPassword: "",
                });
                Alert.alert("Success", `You have logged in as ${email}`);
            }
        }
    }

    renderInputs() {
        const {email, password, errorEmail, errorPassword} = this.state;
        return (
            <View style={styles.inputSection}>
                <TextInput 
                    label="Email"
                    value={email}
                    onChangeText={value => this.onTextChange("email", value)}
                    errorMessage={errorEmail}
                    okIconPressed={() => this.verifyInput("email")}
                    />
                <PasswordInput 
                    label="Password"
                    value={password}
                    onChangeText={value => this.onTextChange("password", value)}
                    errorMessage={errorPassword}
                    okIconPressed={() => this.verifyInput("password")}
                    />
                <Button 
                    mode="contained"
                    style={styles.okBtn}
                    onPress={() => this.verifyInputs()}
                    >
                        Submit
                </Button>
            </View>
        )
    }

    renderHeaderSection() {
        return (
            <View style={styles.titleTextContainer}>
                <Title style={styles.title}>Login</Title>
            </View>
        );
    }

    render() {
        
        return (
            <View style={styles.container}>
                {this.renderHeaderSection()}
                {this.renderInputs()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleTextContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
    },
    okBtn: {
        marginTop: 20,
        alignSelf: 'center',
    },
    inputSection: {
        flex: 2.5,
    }
});

export { Login };