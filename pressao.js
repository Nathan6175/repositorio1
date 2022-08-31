import {Text,StyleSheet} from "react-native";
import { View } from "react-native-web";
import {WiEarthquake} from "react-icons/wi";

export function Pressao() {
    return(
        <View style={styles.container}>
            <View >
                <WiEarthquake size={32} />
            </View>
            <View style={styles.container2}>
                <View>
                    PRESSURE
                </View>
                <View>
                    114mbar
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