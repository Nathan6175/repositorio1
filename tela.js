import { StyleSheet, View } from 'react-native';
import { Previsao } from './previsao';
import { Vento } from './vento';
import { Sens_termica } from './sens_termica';
import { Raio_sol } from './raio_sol';
import { Pressao } from './pressao';

export function Tela() {
    return (
        <View style={styles.container4}>

            <View style={styles.container}>
                <Previsao></Previsao>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Vento></Vento>
                </View>
                <View style={styles.container3}>
                    <Sens_termica></Sens_termica>
                </View>
                <View style={styles.container3}>
                    <Raio_sol></Raio_sol>
                </View>
                <View style={styles.container3}>
                    <Pressao></Pressao>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        color: "rgb(255, 255, 255)",
        flex: 1,
        backgroundColor: "blue",
        color: "white",
        borderTopEndRadius:20,
        borderTopLeftRadius:20,
    },

    container2: {
        color: "rgb(255, 255, 255)",
        flexWrap: "wrap",
        flexDirection:"row",
        backgroundColor: "blue",
        borderBottomEndRadius:20,
        borderBottomLeftRadius:20
        
    },

    container3: {
        color: "rgb(255, 255, 255)",
        borderWidth:1,
        borderColor:"white",
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: "center",
        width: '50%',
        height: "50%",
    },
    container4:{
        paddingLeft:"7.5%",
        paddingRight:"7.5%",
        width: '100%',
        height: "70%",
    }
});
