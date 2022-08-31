import {WiDayCloudy, WiNightClear} from "react-icons/wi";
import {Text, StyleSheet} from "react-native";
import { View } from "react-native-web";

export function Previsao() {
    return(
        <View style={styles.container}>
            <View>
            <WiDayCloudy size={100}/>
            </View>
            <View>Heavy Rain</View>
            <View style={styles.container2}>Sunday, 02 Oct</View>
            <View style={styles.container3}>24º</View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: "column",
        flexWrap: "wrap",
    },
    container2: {
        flex: 1,
        fontSize:10
    },
    container3:{
        flex: 1,
        fontSize:39
    }
})