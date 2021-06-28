import React from 'react';
import { TextInput as Input } from 'react-native-paper';
import { InputBase } from './InputBase';
import PropTypes from 'prop-types';

const commonPropTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    containerStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    errorMessage: PropTypes.string,
    key: PropTypes.any,
    disabled: PropTypes.bool,
    left: PropTypes.any,
    right: PropTypes.any,
    okIconPressed: PropTypes.func,
};

// TextInput start
const TextInput = ({  
    containerStyle,
    inputStyle, 
    label, 
    value, 
    onChangeText, 
    errorMessage,
    key,
    disabled,
    left,
    right,
    okIconPressed,
}) => {
    return (     
        <InputBase 
            containerStyle={containerStyle}
            inputStyle={inputStyle}
            label={label}
            value={value}
            onChangeText={onChangeText}
            errorMessage={errorMessage}
            keyboardType="default"
            key={key}
            disabled={disabled}
            left={left}
            right={right}
            okIconPressed={okIconPressed}
            />
    );
};

TextInput.propTypes = {
    ...commonPropTypes,
};
// TextInput end


// NumberInput start
const NumberInput = ({
    containerStyle,
    inputStyle, 
    label, 
    value, 
    onChangeText, 
    errorMessage,
    key,
    disabled,
    left,
    right,
    okIconPressed,
}) => {
    return (     
        <InputBase 
            containerStyle={containerStyle}
            inputStyle={inputStyle}
            label={label}
            value={value}
            onChangeText={onChangeText}
            errorMessage={errorMessage}
            keyboardType="numeric"
            key={key}
            disabled={disabled}
            left={left}
            right={right}
            okIconPressed={okIconPressed}
            />
    );
};

NumberInput.propTypes = {
    ...commonPropTypes,
};

// NumberInput end

// TextArea start
const TextArea = ({
    containerStyle,
    inputStyle, 
    label, 
    value, 
    onChangeText, 
    errorMessage,
    key,
    disabled,
    okIconPressed,
}) => {
    return (     
        <InputBase 
            containerStyle={containerStyle}
            inputStyle={inputStyle}
            label={label}
            value={value}
            onChangeText={onChangeText}
            errorMessage={errorMessage}
            keyboardType="default"
            key={key}
            disabled={disabled}
            okIconPressed={okIconPressed}
            />
    );
};

TextArea.propTypes = {
    ...commonPropTypes,
};
// TextArea end

// PasswordInput start

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: false
        }
    }

    onShowTextPress() {
        const {showText} = this.state;
        this.setState({
            showText: !showText
        });
    }

    render() {
        const {
            containerStyle,
            inputStyle, 
            label, 
            value, 
            onChangeText, 
            errorMessage,
            key,
            disabled,
            alwaysHidden,
            okIconPressed,
        } = this.props;
        const {showText} = this.state;
        let textRevealIcon = null;
        if(!alwaysHidden) {
            textRevealIcon = <Input.Icon 
                                icon={showText ? "eye-off" : "eye"}
                                onPress={() => this.onShowTextPress()}
                                />
        }

        return (     
            <InputBase 
                containerStyle={containerStyle}
                inputStyle={inputStyle}
                label={label}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={!showText}
                errorMessage={errorMessage}
                keyboardType="default"
                key={key}
                disabled={disabled}
                right={textRevealIcon}
                okIconPressed={okIconPressed}
                />
        ); 
    }
}

PasswordInput.propTypes = {
    ...commonPropTypes,
    alwaysHidden: PropTypes.bool,
};

// PasswordInput end


export {TextInput, NumberInput, TextArea, PasswordInput};