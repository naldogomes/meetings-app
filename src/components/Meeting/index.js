import React from 'react'
import { View, Text } from 'react-native';
import { styles } from './Styles'

export default function Meeting({ title, objective, date, time }) {

    return (
        <View style={styles.card}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.objective} numberOfLines={3}>{objective}</Text>
                <View style={styles.dateView}>
                    <Text style={styles.date}>Data: {date}</Text>
                    <Text style={styles.time}>Hora: {time}</Text>
                </View>
            </View>             
        </View>
    )

    

}