import React, { useState, useEffect } from 'react';
import { Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Container } from 'native-base';
import { styles } from './Styles'

import { NavigationActions, StackActions } from 'react-navigation';

import Head from "../../components/Header"

import api from '../../services/api'

export default function Create({ navigation }) {
    const meeting = navigation.getParam('meeting') || "";
    const [title, onChangeTitle] = useState(meeting.title || "");
    const [image, onChangeImage] = useState(meeting.image || "");
    const [date, onChangeDate] = useState(meeting.date || "");
    const [time, onChangeTime] = useState(meeting.time || "");
    const [objective, onChangeObjective] = useState(meeting.objective || "");
    const [employees, onChangeEmployees] = useState(meeting.employees || "");

    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });

    useEffect(() => {
       

        
    });

    async function createMeeting() {
        if(!title) alert("Digite um título para a reunião")
        else if(!date) alert("Informe a data da reunião")
        else if(!time) alert("Informe a hora da reunião")
        else if(!objective) alert("Informe o objetivo da reunião")
        else if(!employees) alert("Informe os colaboradores envolvidos")
        else {
            let params = {
                title,
                date,
                time,
                objective,
                employees
            }

            if(image) params.image = image;

            const endpoint = 'meeting'
            await api.post(endpoint, params)
            .then(async response => {
                const resp = await response;

                navigation.dispatch(resetAction); 
            })
            .catch(err => {})
        }
    }

    async function editMeeting() {
        let params = {
            title,
            date,
            time,
            objective,
            employees
        }

        if(image) params.image = image;

        const endpoint = `meeting/${meeting._id}`
        await api.put(endpoint, params)
        .then(async response => {
            const resp = await response;

            navigation.dispatch(resetAction); 
        })
        .catch(err => {})
    }

    return(
        <Container>
            <Head title={meeting._id? "Editar Reunião" : "Cadastrar Reunião"}/>

            <ScrollView style={styles.container}>

                <Text style={styles.title}>Título da reunião</Text>
                <TextInput
                    numberOfLines={1}
                    placeholder={"Digite um título"}
                    onChangeText={text => onChangeTitle(text)}
                    value={title}
                    editable
                    maxLength={40}
                    style={styles.input}
                />

                <Text style={styles.title}>Imagem (opcional)</Text>
                <TextInput
                    numberOfLines={1}
                    placeholder={"Cole a URL de uma imagem"}
                    onChangeText={text => onChangeImage(text)}
                    value={image}
                    editable
                    style={styles.input}
                />

                <Text style={styles.title}>Data</Text>
                <TextInput
                    numberOfLines={1}
                    placeholder={"Informe a data da reunião"}
                    onChangeText={text => onChangeDate(text)}
                    value={date}
                    editable
                    maxLength={10}
                    style={styles.input}
                />

                <Text style={styles.title}>Hora</Text>
                <TextInput
                    numberOfLines={1}
                    placeholder={"Informe a hora da reunião"}
                    onChangeText={text => onChangeTime(text)}
                    value={time}
                    editable
                    maxLength={5}
                    style={styles.input}
                />

                <Text style={styles.title}>Objetivo da reunião</Text>
                <TextInput
                    multiline
                    numberOfLines={4}
                    placeholder={"Informe o objetivo da reunião"}
                    onChangeText={text => onChangeObjective(text)}
                    value={objective}
                    editable
                    style={styles.input}
                />

                <Text style={styles.title}>Colaboradores envolvidos</Text>
                <TextInput
                    multiline
                    numberOfLines={4}
                    placeholder={"Informe os colaboradores envolvidos separados por vírgula"}
                    onChangeText={text => onChangeEmployees(text)}
                    value={employees}
                    editable
                    style={styles.input}
                />

                <TouchableOpacity style={styles.buttonCreate}
                    onPress={meeting._id? () => editMeeting(): () => createMeeting()}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>

            </ScrollView>

        </Container>
    )
                 
}
