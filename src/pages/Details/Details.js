import React, { useEffect } from 'react';
import { View, Text, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Container } from 'native-base';
import { styles } from './Styles'
import { NavigationActions, StackActions } from 'react-navigation';

import Head from "../../components/Header"

import api from '../../services/api'

export default function Datails({ navigation }) {
    const meeting = navigation.getParam('meeting');

    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });

    useEffect(() => {
        console.log(meeting)
    });

    async function editMeeting() {
        navigation.navigate("Create", { meeting })
    }

    async function deleteMeeting() {
        const endpoint = `meeting/${meeting._id}`
        await api.delete(endpoint)
        .then(async response => {
            const resp = await response;          
            navigation.dispatch(resetAction); 
        })
        .catch(err => {
            console.log(err)
        })
    }

    async function showAlert() {
        Alert.alert(
            "Deseja excluir esta reunião?",
            "Essa ação não pode ser desfeita!",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => deleteMeeting() }
            ],
            { cancelable: false }
        );
    }

    return(
        <Container>
            <Head title="Detalhes"/>

            <ScrollView style={styles.container}>

                <Text style={styles.title}>{meeting.title}</Text>

                { meeting.image && <Image style={styles.image} source={{uri: meeting.image}} /> }

                <View style={styles.dateView}>
                    <Text style={styles.date}>Data: {meeting.date}</Text>
                    <Text style={styles.time}>Hora: {meeting.time}</Text>
                </View>

                <Text style={styles.objective}>{meeting.objective}</Text>

                <Text style={styles.employeesTitle}>Colaboradores envolvidos</Text>

                <Text style={styles.employees}>{meeting.employees}</Text>

                <View style={styles.buttonsView}>
                    <TouchableOpacity style={styles.buttonEdit} onPress={() => editMeeting()}>
                        <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonDelete} onPress={() => showAlert()}>
                        <Text style={styles.buttonText}>Excluir</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            

        </Container>
    )
                 
}
