import React from "react";
import { View, SafeAreaView, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { RootStackParamList } from "./types";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MaterialCommunityIcons } from '@expo/vector-icons';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home: React.FC<HomeScreenProps> = (props) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Social Authentications</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.btnWrap}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Google')}>
                        <View style={styles.btn}>
                            <MaterialCommunityIcons name="google" size={24} color="black" />
                            <Text style={styles.btnText}>Google</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Facebook')}>
                        <View style={styles.btn}>
                            <MaterialCommunityIcons name="facebook" size={24} color="black" />
                            <Text style={styles.btnText}>Facebook</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Slack')}>
                        <View style={styles.btn}>
                            <MaterialCommunityIcons name="slack" size={24} color="black" />
                            <Text style={styles.btnText}>Slack</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Google')}>
                        <View style={styles.btn}>
                            <MaterialCommunityIcons name="google" size={24} color="black" />
                            <Text style={styles.btnText}>Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'transparent',
        marginVertical: 25,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    btnText: {
        color: 'black',
        fontSize: 10,
        fontFamily: 'Roboto',
        marginVertical: 20
    },
    btnWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    }
})
