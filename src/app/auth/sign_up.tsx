import { View, Text, StyleSheet, TextInput } from 'react-native'

import Header from '../../components/header'
import Button from '../../components/button'

const SignUp = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                    <Text style={styles.title}>Sign Up</Text>
                    <TextInput style={styles.input} value='Email addres' />
                    <TextInput style={styles.input} value='Password' />
                <Button Label='Submit' />
                <View style={styles.footer}>
                    <Text style={styles.fotterText}>Already registered?</Text>
                    <Text style={styles.fotterLink}> Log In.</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
    },
    inner: {
        paddingVertical: 24,
        paddingHorizontal: 27
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },
    input: {
        backgroundColor: '#ffffff',
        borderColor: '#DDDDDD',
        borderWidth: 1,
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16
    },
    footer: {
        flexDirection: 'row'
    },
    fotterText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#000000'
    },
    fotterLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3'
    }

})


export default SignUp
