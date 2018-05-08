import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Deck extends React.Component {
    render() {
        const {title, questions} = this.props;

        return <View style={styles.deck}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 22, color: '#b22222'}}>{title}</Text>
                <Text style={{fontSize: 16, color: '#0000ff'}}>
                    {questions && questions.length} cards
                </Text>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    deck: {
        flexDirection: 'row',
        marginTop: 10,
        height: 100,
        backgroundColor: '#f5deb3',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
