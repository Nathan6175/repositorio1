import {Text,StyleSheet} from "react-native";
import { View } from "react-native-web";
import {WiThermometer} from "react-icons/wi";

export function Sens_termica() {
    return(
        <View style={styles.container}>
            <View >
                <WiThermometer size={32} />
            </View>
            <View style={styles.container2}>
                <View>
                    FEELSLIKE
                </View>
                <View>
                    25º
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
