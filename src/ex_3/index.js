import { Text, View ,Pressable, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from './styles';

export default function Exemplo_3(){

    const [numero, setNumero] = useState(0);

    function mensagem(){
        alert('Aula de react-native');
    }
    function incrementar(){
       setNumero(numero + 1);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <TouchableOpacity style={styles.botao} onPress={() => mensagem()} >
                <text style={styles.txtbotao} >Botão</text>
            </TouchableOpacity>
            <Text style={styles.titulo}>{numero}</Text>
            <TouchableOpacity style={styles.botao} onPress={() => incrementar()}>
                <Text style={styles.txtbotao}>Incrementar nº</Text>
            </TouchableOpacity>
        </View>
    );
}
