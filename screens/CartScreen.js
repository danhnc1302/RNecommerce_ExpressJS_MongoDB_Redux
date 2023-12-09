import React from "react";
import {
    Text,
    View,
    StyleSheet
} from "react-native"

export default function CartScreen() {
    return (
        <View style={styles.container}>
            <Text>CartScreen</Text>
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