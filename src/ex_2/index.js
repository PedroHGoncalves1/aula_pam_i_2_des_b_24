import { View, Text } from 'react-native'; 

import styles from './styles';

export default function Mensagem () { 



    return(
        <View style={styles.container}>
            <Text style={styles.mensagem}>
                react-native
            </Text>
            
        </View>
    );
}
