import {Text,StyleSheet} from "react-native";
import { View } from "react-native-web";
import { Vento } from './vento';
import { Sens_termica } from './sens_termica';
import { Raio_sol } from './raio_sol';
import { Pressao } from './pressao';
import {WiSandstorm} from "react-icons/wi";
import {WiThermometer} from "react-icons/wi";
import {WiDaySunny} from "react-icons/wi";
import {WiEarthquake} from "react-icons/wi";

export function Info() {
    return(
        <View style={styles.container}>
            <WiSandstorm size={32}/>
            <Vento/>
            <WiThermometer size={32}/>
            <Sens_termica></Sens_termica>
            <WiDaySunny size={32}/>
            <Raio_sol></Raio_sol>
            <WiEarthquake size={32}/>
            <Pressao></Pressao>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      flexDirection:"row",
      flexWrap:"wrap",
      width:350,
      margin:0,
      borderColor:"red",
      borderWidth:1,
      paddingRight:10,
      color:"white",
      borderRadius:10,
    },})