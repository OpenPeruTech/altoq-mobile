import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "../types/Button.types";

export default function MyButton({title, onPress}: ButtonProps){
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#bd2f0cff',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});