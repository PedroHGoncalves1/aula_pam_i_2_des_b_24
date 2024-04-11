import {View, Text, TextInput, Pressable, } from 'react-native';

import { useState } from 'react';

import styles from './styles';

export default function Atividade4 () {

    const [inserirTxt, setNomeCompleto] = useState('')

    const [txtNome, setNome] = useState ('')

    const [txtSobrenome, settxtSobrenome] = useState ('')

    const [txtTela, setTxtTela] = useState ('')

    function handleExibirNome() {
        setTxtTela(txtNome, txtSobrenome)
        setNome('')
        settxtSobrenome('')

    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <View>
                <Text style={styles.titulo}>{txtTela}</Text>
            </View>
            
            <View>
                <Text style={styles.titulo2}>Nome:</Text>
                <TextInput
                style={styles.input}
                onChangeText={(vlr) => setNome (vlr)}
                value= {txtNome}>

                </TextInput>
                
                <Text style= {styles.titulo2}>Sobrenome:</Text>
                <TextInput
                style={styles.input}
                onChangeText={(vlr) => settxtSobrenome (vlr)}
                value={txtSobrenome}>

                </TextInput>

                <Pressable style={({pressed}) => pressed ? [styles.botao, styles.botaoPress] : styles.botao}
                    onPress={() => handleExibirNome()}
                >
                    <Text style={styles.txtBotao}> Exibir Nome</Text>
                </Pressable>

            </View>
        </View>
    )


}
