import { Text, View ,Pressable, TouchableOpacity } from "react-native";

import styles from './styles';

export default function Exemplo_3(){

    function mensagem(){
        alert('Aula de react-native');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <TouchableOpacity style={styles.botao} onPress={() => mensagem()} >
                <text style={styles.txtbotao} >Botão</text>
            </TouchableOpacity>
        </View>
    );
}
