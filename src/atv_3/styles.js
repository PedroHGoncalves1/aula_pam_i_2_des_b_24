import { startTransition } from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        
        padding: 20,
        justifyContent:'center'
        
       
        
        
    },
    containertodo: {   
        alignItems: 'center',
        
    },
    container1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    
       
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
        width:'80%',
        padding: 10,
        marginHorizontal: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: '50%'
    },
    botaocontainer: {
        width:'50%',
        margin:10,
    }
});

export default styles;