import { View, Text, Image} from 'react-native'; 

import styles from './styles';

import logo from './image/react.png';
import Ola from './ola/ola';




export default function Atividade1 () { 

    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.titulo}>
                Atividade 1
            </Text>

            <Ola />
            </View>
    );
};
