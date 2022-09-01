import { Text, StyleSheet } from "react-native";
import { View } from "react-native-web";

export function Local() {
    return (
        <View>
            <Text style={styles.container}><b>Bandung</b>, Indonesia</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: "8%",
        paddingBottom: "8%",
        paddingLeft: "7.5%",
        fontSize:20
    }
})
