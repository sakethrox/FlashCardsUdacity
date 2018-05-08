import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

class DeckView extends React.Component {

    render() {
        let {title} = this.props.navigation.state.params;
        let questions = this.props.decks[title] && this.props.decks[title].questions;

        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 32}}>{title}</Text>
                    <Text style={{fontSize: 18, marginTop: 10}}>{questions.length} cards
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('AddQuestion', {
                            title,
                            questions,
                        });
                    }}
                    style={styles.addQuestion}>
                    <Text style={styles.addQuestionTitle}>Add Question</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Quiz', {
                            title,
                            questions,
                        });
                    }}
                    style={styles.quizStart}>
                    <Text style={styles.quizTitle}>Start Quiz</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    addQuestion: {
        backgroundColor: '#fff',
        margin: 24,
        padding: 10,
        borderRadius: 7,
        height: 45,
    },
    quizStart: {
        backgroundColor: '#000',
        margin: 24,
        padding: 10,
        height: 45,
        borderRadius: 2,
    },
    addQuestionTitle: {
        color: '#000',
        fontSize: 22,
        textAlign: 'center',
    },
    quizTitle: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
    }
});

function mapStateToProps(state) {
    return {
        decks: state,
    };
}

export default connect(mapStateToProps)(DeckView);
