
import { Text } from "react-native";

import styles from  './olastyle.js'

export default function Ola({children}) {
    return <Text style ={styles.name}> Olá {children}</Text>
}
//children pega todo o conteudo da abertura de uma tag até o fechando mento da tag//