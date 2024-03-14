import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1, 
        padding: 8,      
        justifyContent: 'center', 
        backgroundColor: '#E3F2Fd', 
        borderRadius: 20,
        
    },  
    titulo: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1565C0', 
        
    },
    image : {
        width: '90%',
        resizeMode: 'center',
       // height: '15%',
       // margin: 10,

    },
});

export default styles;