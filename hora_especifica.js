import {Text,StyleSheet} from "react-native";
import { View } from "react-native-web";
import {WiCloud} from "react-icons/wi";
import {WiDayCloudy} from "react-icons/wi";
import {WiRainWind} from "react-icons/wi";
import {WiDaySunny} from "react-icons/wi";

/*export function Previsao( hora, temperatura,imagem) {
    return(
        //<View style={style.estilo1}>
        <View>
            <Text>hora</Text>
            <Text>temperatura</Text>
        </View>
    )
}*/

export function Doze() {
    return(
        <View style={styles.container2}>
            12:00
            <WiCloud size={32}/>
            Now
           
        </View>
    )
}

export function Catorze() {
    return(
        <View style={styles.container}>
            14:00
            <WiRainWind size={32}/>
            22º
           
        </View>
    )
}

export function Dezesseis() {
    return(
        <View style={styles.container}>
            16:00
            <WiDayCloudy size={32}/>
            26º
            
        </View>
    )

}export function Dezoito() {
    return(
        <View style={styles.container}>
            18:00
            <WiDayCloudy size={32}/>
            25º
            
        </View>
    )
}

export function Vinte() {
    return(
        <View style={styles.container}>
            20:00
            <WiDaySunny size={32}/>
            31º
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      flexWrap:"wrap",
      paddingRight:50,
      paddingLeft:10,
      paddingRight:10,
    }, 
    container2:{
        flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      flexWrap:"wrap",
      paddingRight:50,
      color:"white",
      paddingRight:10,
    }})