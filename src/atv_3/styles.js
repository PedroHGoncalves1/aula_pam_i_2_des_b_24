import { startTransition } from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 20,
        
        padding: 20,
        alignItems:'center',
       
        
        
    },
    containertodo: {
        flexDirection:'column'
    },
    container1: {
        flex: 1,
        flexDirection: 'row'
    },
    botaozerar: {
        marginLeft:'40%',
    
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    txtbotao: {
        fontSize: 25,
        color: 'white',
    },
    botao: {
        width:'100%',
        padding: 10,
        margin: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: '50%'
    },
});

export default styles;