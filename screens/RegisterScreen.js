import React from "react";
import {
    Text,
    View,
    StyleSheet
} from "react-native"

export default function RegisterScreen() {
    return (
        <View style={styles.container}>
            <Text>RegisterScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})