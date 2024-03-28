import { Text, View ,Pressable, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from './styles';

export default function Atividade_3(){

    const [numero, setNumero] = useState(0);

    function diminuir(){
        setNumero(numero - 1);
    }
    function incrementar(){
       setNumero(numero + 1);
    }
    function zerar(){
        setNumero( 0  );
    }

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Exemplo 3</Text>
            <View style={styles.containertodo}>
                <View style={styles.container1}>
                    
                    <TouchableOpacity style={[styles.botao, styles.botaocontainer]} onPress={() => diminuir()} >
                        <text style={styles.txtbotao} >-</text>
                    </TouchableOpacity>
                    <Text style={styles.titulo}>{numero}</Text>
                    <TouchableOpacity style={[styles.botao, styles.botaocontainer]} onPress={() => incrementar()}>
                        <Text style={styles.txtbotao}>+</Text>
                    </TouchableOpacity>
                </View>
            

                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.txtbotao} onPress={() => zerar()}>Zerar</Text>
                    </TouchableOpacity>
  
            </View>
        </View>
    );
}