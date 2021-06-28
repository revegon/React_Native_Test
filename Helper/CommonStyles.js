import { StyleSheet } from 'react-native';

export const errorStyles = StyleSheet.create({
    errorContainer: {
        flex:1,
        alignSelf: 'flex-start',
    },
    errorText: {
        color: 'red'
    },
});

export const inputStyles = StyleSheet.create({
    label: {
        flex: 1,
        fontWeight: "bold",
        paddingRight: 5,
    },
    textInput: {
        flex: 3,
        borderBottomWidth: 1,
        borderBottomColor: '#DCDCDC',
        padding: 5
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        flexWrap: 'wrap'
    },
});