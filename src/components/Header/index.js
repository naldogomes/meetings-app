import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { styles } from './Styles'

export default function Head({ title }) {
    return (
        <Header>
          <Body style={styles.header}>
            <Title>{title}</Title>
          </Body>
        </Header>
    );
}