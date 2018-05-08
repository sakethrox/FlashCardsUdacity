import React from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {addQuestion} from '../actions';
import {connect} from 'react-redux';
import {addQuestionForDeck} from '../util/Api';

class AddQuestion extends React.Component {

    state = {
        question: '', 
        answer: '',
    };

    submitQuestion = () => {
        let alert = {};
        const {question, answer} = this.state;
        const {title, questions} = this.props.navigation.state.params;

        if (question === '') {
            Alert.alert('Mandatory', 'Enter valid question');
            return;
        }
        if (answer === '') {
            Alert.alert('Mandatory', 'Enter valid answer');
            return;
        }

        this.props.dispatch(addQuestion({title, questions, question, answer}));

        addQuestionForDeck({
            card: {question, answer},
            deckName: title
        });

        Alert.alert('Successful', 'Question Added Successfully',
            [
                {
                    text: 'OK', onPress: () =>
                    this.props.navigation.goBack()
                }
            ],);
    };

    render() {
        const {question, answer} = this.state;

        return (
            <View style={style.container}>
                <Text>Enter Question</Text>
                <TextInput
                    defaultValue="Question"
                    value={question}
                    style={style.input}
                    onChangeText={question => this.setState({question})}/>
                <Text>Enter Answer </Text>
                <TextInput
                    defaultValue="Answer"
                    value={answer}
                    style={style.input}
                    onChangeText={answer => this.setState({answer})}/>

                <TouchableOpacity
                    onPress={this.submitQuestion}
                    style={style.submit}>
                    <Text style={style.Text}>Submit</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    input: {
        width: 300,
        height: 56,
        padding: 12,
        borderWidth: 1,
        borderColor: '#4682b4',
        margin: 16
    },
    submit: {
        backgroundColor: '#87ceeb',
        padding: 12,
        height: 44,
    },
    Text: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
    },
});

function mapStateToProps(state) {
    return {
        decks: state,
    };
}

export default connect(mapStateToProps)(AddQuestion);
