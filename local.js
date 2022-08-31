import {Text,StyleSheet} from "react-native";
import { View } from "react-native-web";

export function Local() {
    return(
        <View style={styles.container}>
            <Text><b>Bandung</b>, Indonesia</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:12
    }})