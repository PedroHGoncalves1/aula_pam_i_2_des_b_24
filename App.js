import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

//import Mensagem from './src/ex_2';
//import Atividade1 from './src/atv_1';

//import Exemplo_3 from './src/ex_3';

//import Atividade_3 from './src/atv_3';

//import Exemplo4 from './src/ex_4';

//import Atividade4 from './src/atv_4';

import Exemplo5 from './src/ex_5';
export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo5 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});