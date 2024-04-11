import {View, Touchable, Text, TextInput} from 'react-native';

import { useState } from 'react';

export default function Exemplo5() {
    const [isfocusN1, setIsFocusN1] = useState(false);
    const [isfocusN2, setIsFocusN2] = useState(false)
    const [isFocusTotal, setisFocusTotal] = useState(false)
    const [n1, setN1] = useState (0)
    const [n2, setN2] = useState(0)
    const [total, setTotal] = useState('')

    function soma() {
        setTotal(parseFloat(n1) + parseFloat(n2)) ;
    }



    return (

        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 5</Text>

            <Text styles={styles.txtSaida}>Calculadora basica</Text>

            <Text style={styles.textLabel}>1º número</Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada,
                         isfocusN1 ?
                         {
                            borderColor: '#C51162',
                            outline: 'none',
                         }
                        :
                            {}

                    ]
                }
                onFocus={() => setIsFocusN1(true)}
                onBlur={() => setIsFocusN1(false)}
                onChangeText={(num1) => setN1(num1)}
                value={n1}
                />

            <Text style={styles.txtSaida}> + </Text
            >

            <Text style={styles.textLabel}> 2º número </Text>
            
            <TextInput 
                style={
                    [
                        styles.txtEntrada,
                        isfocusN2 ?
                            {
                                borderColor: '#C51162',
                                outline: 'none',
                            }
                        :
                            {}

                    ]
                }
                onFocus={() => setIsFocusN2(true)}
                onBlur={() => setIsFocusN2(false)}
                onChangeText={(num2) => setN2(num2)}
                value={n2}
                />

                <Text style={[styles.txtSaida, { margin: 0}]}> =</Text>
            </View>


     )


}