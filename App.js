import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Previsao } from './previsao';
import { Vento } from './vento';
import { Sens_termica } from './sens_termica';
import { Raio_sol } from './raio_sol';
import { Pressao } from './pressao';
import { Info } from './info';
import { Local } from './local';
import { Hora_dia } from './hora_dia';
import { Botao_menu } from './botao_menu';
import { Tela } from './tela';


export default function App() {
  return (
    <View>
      <Botao_menu/>
      <Local/>
      <Tela></Tela>
      <Hora_dia/>
      <StatusBar style="auto" />
    </View>
  );
}