import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import * as Googles from 'expo-auth-session/providers/google'
// import {PROJECT_ID} from 'react-native-dotenv'

WebBrowser.maybeCompleteAuthSession();

const Google = () => {

    const [request, response, promptAsync] = Googles.useAuthRequest({

    })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Google Authentication</Text>
            </View>
        </SafeAreaView>
    )
}

export default Google

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    }
})