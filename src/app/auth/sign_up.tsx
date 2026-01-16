import {
    View, Text, StyleSheet, TextInput, TouchableOpacity
 } from 'react-native'

import { Link, router } from 'expo-router'

import Button from '../../components/button'

const handlePress = (): void => {
 // ログイン
  router.push('/memo/list')
}

const SignUp = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                    <Text style={styles.title}>Sign Up</Text>
                    <TextInput style={styles.input} value='Email addres' />
                    <TextInput style={styles.input} value='Password' />
                <Button Label='Submit' onPress={handlePress}/>
                <View style={styles.footer}>
                    <Text style={styles.fotterText}>Already registered?</Text>
                    <Link href='/auth/log_in' asChild>
                        <TouchableOpacity>
                            <Text style={styles.fotterLink}> Log In.</Text>
                        </TouchableOpacity>
                    </Link>
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
