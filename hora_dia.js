import {Text,StyleSheet} from "react-native";
import { View } from "react-native-web";
import { Doze } from './hora_especifica';
import { Catorze } from './hora_especifica';
import { Dezesseis } from './hora_especifica';
import { Dezoito } from './hora_especifica';
import { Vinte } from './hora_especifica';

export function Hora_dia() {
    return(
        <View>
            <View style={styles.container2}>
                <View style={styles.container3}>Today</View>            
                <View style={styles.container4}>Next 7 days</View>
            </View>
            <View style={styles.container}>
                <Doze/>
                <Catorze/>
                <Dezesseis/>
                <Dezoito/>
                <Vinte/> 
            </View>
        </View>

        
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      flexDirection:"row",
      flexWrap:"wrap",
      width:400,
      margin:0,
      paddingRight:0,
      paddingLeft:5,
      justifyContent:"space-between",
    },
    container2:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection:"row",
        flexWrap:"wrap",
        width:300,
        margin:0,
        paddingLeft:10,
        paddingRight:30,
    },
    container3:{
        flex: 1,
        justifyContent:"flex-start",
        flexDirection:"row",
    },
    container4:{
        flex: 1,
        justifyContent:"flex-end",
        flexDirection:"row",
    }})