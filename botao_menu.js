import {WiWindy} from "react-icons/wi";
import { View, Text } from "react-native-web";
import { StyleSheet } from "react-native";

export function Botao_menu() {
    return(
        <View style={styles.container}>
            <View style={styles.container3}><WiWindy size={32}/></View>
            <View style={styles.container2}><Text>...</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"row",
      
    },
    container2:{
        flex: 1,
        justifyContent:"flex-end",
        flexDirection:"row",
        paddingRight:10
    },
    container3:{
        flex: 1,
        justifyContent:"flex-start",
        flexDirection:"row",
        paddingLeft:10
    }})