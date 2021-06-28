import React from 'react';
import {  StyleSheet, View, BackHandler, Alert } from 'react-native';
import { IconButton, Title, Button } from 'react-native-paper'; //
import { TextInput, PasswordInput } from '../../Components/Inputs';
import { validateEmail } from '../../Helper/Validations';

class Login extends React.Component {
    constructor(props) {
        super(props);
        // this.pages = {
        //     password: "password",
        //     emailEntry: "emailEntry",
        //     emailSelect: "emailSelect",
        // }
        this.state = {
            // currentPage: "emailSelect",
            // lastPage: [],
            password: "",
            errorMessage: "",
            email: "",
            errorEmail: "",
            errorPassword: "",
        }
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener("hardwareBackPress", this.backBtnPressed);

        // check for available used emails
        // this.setState({
        //     currentPage: this.pages.emailEntry,
        // });
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
        // const { lastPage } = this.state;
        // const page = lastPage.pop();
        // if(!page) {
        //     this.checkExit();
        //     return;
        // }
        const state = {
            // currentPage: page,
            // lastPage: lastPage, 
        };
        state[fieldToBlank] = "";

        this.setState(state);
    }

    backBtnPressed() {
        // const { currentPage, lastPage } = this.state;
        // if(lastPage) {
        //     const fieldToBlank = currentPage ==  this.pages.password ? "password" : "email";
        //     this.backToLastPage(fieldToBlank);
        // } else {
            this.checkExit();
        // }
    }

    verifyInputs() {
        this.verifyInput("email");
        this.verifyInput("password");
    }

    verifyInput(field) {
        const {email, password, 
            // lastPage, currentPage
        } = this.state;
        if (field == "email") {
            if(!validateEmail(email)) {
                this.setState({
                    errorEmail: "Invalid email",
                });
            } else {
                // lastPage.push(currentPage);
                this.setState({
                    // currentPage: this.pages.password,
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

    // renderInnerComponent() {
    //     const { 
    //         currentPage, 
    //         password, errorMessage, email } = this.state;

    //     if(currentPage === this.pages.emailEntry) {
    //         return (
    //             <View style={styles.inputContainer}>
    //                 <TextInput 
    //                     label="Email"
    //                     value={email}
    //                     onChangeText={value => this.onTextChange("email", value)}
    //                     errorMessage={errorMessage}
    //                     okIconPressed={() => this.verifyInput("email")}
    //                     />
    //             </View>
    //         );
    //     } else if(currentPage === this.pages.password) {
    //         return (
    //             <View>
    //                 <Text>Please enter password for {email}: </Text>
    //                 <View style={styles.inputContainer}>
    //                     <PasswordInput 
    //                         label="Password"
    //                         value={password}
    //                         onChangeText={value => this.onTextChange("password", value)}
    //                         errorMessage={errorMessage}
    //                         okIconPressed={() => this.verifyInput("password")}
    //                         />
    //                 </View>
    //             </View>
    //         );
    //     }
    // }

    renderInputs() {
        const {email, password, errorEmail, errorPassword} = this.state;

        return (
            <View style={styles.inputSection}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        label="Email"
                        value={email}
                        onChangeText={value => this.onTextChange("email", value)}
                        errorMessage={errorEmail}
                        okIconPressed={() => this.verifyInput("email")}
                        />
                </View>
                <View style={styles.inputContainer}>
                    <PasswordInput 
                        label="Password"
                        value={password}
                        onChangeText={value => this.onTextChange("password", value)}
                        errorMessage={errorPassword}
                        okIconPressed={() => this.verifyInput("password")}
                        />
                </View>
                <View style={{justifyContent: 'center', }}>
                    <Button 
                        mode="contained"
                        style={styles.okBtn}
                        onPress={() => this.verifyInputs()}
                        >
                            Submit
                    </Button>
                </View>
            </View>
        )
    }

    renderHeader() {
        const { lastPage } = this.state;
        return (
            <View style={styles.titleContainer}>
                <View style={styles.backIconContainer}>
                    {
                        lastPage.length ?
                        <IconButton 
                            style={styles.backIcon} 
                            icon="arrow-left" 
                            onPress={() => this.backBtnPressed()} 
                            />
                        : null
                    }
                </View>
                <View style={styles.titleTextContainer}>
                    <Title style={styles.title}>Login</Title>
                </View>
            </View>
        );
        // return (
        //     <Appbar.Header>
        //         {lastPage.length ? <Appbar.BackAction onPress={() => this.backBtnPressed()} /> : null}
        //         <Appbar.Content title="Login" />
        //     </Appbar.Header>
        // )
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
                <View style={styles.mainContainer}>
                    {this.renderInputs()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // marginTop: 0,
        // alignItems: 'center',
        padding: 20,
    },
    listContainer: {

    },
    titleContainer: {
        flexDirection: 'row',
        // height: 50,
        // justifyContent: 'center',
        backgroundColor: 'red',
    },
    mainContainer: {

    },
    backIcon: {

    },
    backIconContainer: {
        width: 25,
    },
    inputContainer: {
        flexDirection: 'row',
        // flex: 1,
    },
    titleTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
        height: 30,
    },
    title: {
        paddingRight: 25,
    },
    okBtn: {
        margin: 10,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputSection: {
        // flex: 1,
    }
  });

export { Login };