import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 40,
    },
    title: {
        fontSize: 18,
        color: '#111',
        textAlign: 'center',
    },
    h: {
        fontSize: 38,
        color: '#111',
        textAlign: 'left',
    },
    h2: {
        fontSize: 20,
        color: '#111',
        textAlign: 'left',
    },
    image: {
        resizeMode: 'contain',
        height: 150,
        alignSelf: 'center',
        opacity: 0.7
    },
    element:{
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:20,

    }
});