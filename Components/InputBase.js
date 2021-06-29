import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text, IconButton } from 'react-native-paper';
import PropTypes from 'prop-types';

class InputBase extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            useBottomStyle: false,
        }
    }

    onFocus() {
        this.setState({
            useBottomStyle: true,
        });
    }

    onBlur() {
        this.setState({
            useBottomStyle: false,
        })
    }

    render() {
        const {
            containerStyle,
            inputStyle, 
            label, 
            value, 
            onChangeText, 
            secureTextEntry,
            errorMessage,
            keyboardType,
            key,
            multiline,
            numberOfLines,
            disabled,
            left,
            right,
            okIconPressed,
            showRightIcon=false,
        } = this.props;

        const {useBottomStyle} = this.state;
        const additionalStyle = showRightIcon && useBottomStyle ? styles.iconBottom : null;

        return (
            <View style={[styles.container, containerStyle]} key={key}>
                <View style={[styles.inputContainer, additionalStyle]}>
                    <TextInput
                        underlineColor="transparent"
                        label={label}
                        secureTextEntry={secureTextEntry}
                        style={[styles.textInput, inputStyle]}
                        value={value} 
                        onChangeText={onChangeText} 
                        keyboardType={keyboardType}
                        error={errorMessage ? true: false}
                        multiline={multiline}
                        numberOfLines={numberOfLines}
                        disabled={disabled}
                        left={left}
                        right={right}
                        onFocus={() => this.onFocus()}
                        onBlur={() => this.onBlur()}
                        />
                    { showRightIcon ? 
                        <View style={styles.iconContainer}>
                            <IconButton
                                icon="arrow-right"
                                onPress={okIconPressed}
                                />
                        </View> : null }
                </View>
                { errorMessage ? 
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    </View> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
        marginVertical: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: '#cccccc',
        // height: 60,
    },
    iconContainer: {
        justifyContent:'center',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        backgroundColor: '#cccccc',
        overflow: 'hidden',
        // height: 60,
    },
    errorContainer: {
        flex:1,
        alignSelf: 'flex-start',
    },
    errorText: {
        color: 'red'
    },
    iconBottom: {
        borderBottomWidth: 3,
        borderBottomColor: '#6200ee',
        // borderColor: "transparent"
    }
});

InputBase.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    secureTextEntry: PropTypes.bool,
    containerStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    errorMessage: PropTypes.string,
    keyboardType: PropTypes.string,
    key: PropTypes.any,
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number,
    disabled: PropTypes.bool,
    left: PropTypes.any,
    right: PropTypes.any,
    okIconPressed: PropTypes.func,
    showRightIcon: PropTypes.bool,
}

export {InputBase};