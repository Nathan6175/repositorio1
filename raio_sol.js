import {Text,StyleSheet} from "react-native";
import { View } from "react-native-web";
import {WiDaySunny} from "react-icons/wi";

export function Raio_sol() {
    return(
        <View style={styles.container}>
            <View >
                <WiDaySunny size={32} />
            </View>
            <View style={styles.container2}>
                <View>
                    INDEX UV
                </View>
                <View>
                    2
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

