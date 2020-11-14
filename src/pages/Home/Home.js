import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { Container } from 'native-base';
import { styles } from './Styles'
import ActionButton from 'react-native-action-button';

import Meeting from "../../components/Meeting"
import Head from "../../components/Header"

import api from '../../services/api'

export default function Home({ navigation }) {
    const [meetings, setMeetings] = useState([]);
    const [inicialized, setInicialized] = useState(false);
    useEffect(() => {

        if(!inicialized) getMeetings();
        
    }, []);

    async function getMeetings() {
        const endpoint = 'meeting'
        await api.get(endpoint)
        .then(async response => {
            const resp = await response.data.data;          
            if(meetings.length == 0 && resp.length != 0) await setMeetings([...meetings, ...resp])
            console.log(meetings)
            setInicialized(true)
        })
        .catch(err => {
        })
    }

    async function newMeeting() {
        navigation.navigate("Create")
    }

    async function showDetails(item) {
        navigation.navigate("Details", { meeting: item })
    }

    return(
        <Container>
            <Head title="Reuniões"/>
            <ActionButton
                style={styles.fab}
                buttonColor="rgba(231,76,60,1)"
                onPress={() => newMeeting()}
            />

            <View style={styles.list}>
                <FlatList
                    keyExtractor={item => item._id}
                    data={meetings}
                    renderItem={({ item }) => {
                        return (
                        <TouchableOpacity key={item._id} activeOpacity={1} onPress={() => showDetails(item)}>
                            <Meeting
                                title={item.title}
                                objective={item.objective}
                                date={item.date}
                                time={item.time}
                            />
                        </TouchableOpacity>
                        );
                    }}
                />
            </View>

        </Container>
    )
                 
}
