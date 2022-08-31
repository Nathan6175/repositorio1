
import { Text, StyleSheet } from "react-native";
import { View } from "react-native-web";
import { WiSandstorm } from "react-icons/wi";

export function Vento() {
    return (
        <View style={styles.container}>
            <View >
                <WiSandstorm size={32} />
            </View>
            <View style={styles.container2}>
                <View>
                    WIND
                </View>
                <View>
                    19,2km/j
                </View>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        flexDirection: "column",
        flexWrap: "wrap",
    }
})
