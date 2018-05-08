import React from 'react';
import { NavigationActions } from 'react-navigation';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';


export default class Quiz extends React.Component {

    state = {
        quesIndex: 0,
        rightAnswers: 0,
        shouldDisplayAnswer: false,
    };

    ifCorrect = () => {
        const {quesIndex, rightAnswers} = this.state;
        this.setState({quesIndex: quesIndex + 1, rightAnswers: rightAnswers + 1, shouldDisplayAnswer: false});
    };

    startQuiz = () => {
        this.setState({quesIndex: 0, rightAnswers: 0, shouldDisplayAnswer: false});
    };

    backToDeck = () => {
        this.props.navigation.goBack();

    }

    ifIncorrect = () => {
        this.setState({quesIndex: this.state.quesIndex + 1});
    };

    showAnswer = () => {
        this.setState({shouldDisplayAnswer: !this.state.shouldDisplayAnswer});
    };

    render() {
        const {quesIndex, rightAnswers, shouldDisplayAnswer} = this.state;
        const {questions} = this.props.navigation.state.params;
        const questionLeft = questions.length - quesIndex;

        return (
            <View style={{flex: 1}}>
                {(quesIndex < questions.length) ? (
                    <View style={styles.container}>

                        <View style={[styles.group, {justifyContent: 'flex-start', flex: 1}]}>
                            <View>
                                <Text>{questionLeft} / {questions.length}</Text>
                            </View>
                        </View>

                        <View style={[styles.group, {flex: 4}]}>
                            <View>
                                {shouldDisplayAnswer ? (
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{fontSize: 36}}>{questions[quesIndex].answer}</Text>

                                        <TouchableOpacity onPress={this.showAnswer}>
                                            <Text style={{fontSize: 18, color: '#70dd2f'}}>Question</Text>
                                        </TouchableOpacity>

                                    </View>) : (
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{fontSize: 32}}>{questions[quesIndex].question}</Text>

                                        <TouchableOpacity onPress={this.showAnswer}>
                                            <Text style={{fontSize: 18, color: '#6a5acd'}}>Show Answer</Text>
                                        </TouchableOpacity>

                                    </View>
                                )}
                            </View>
                        </View>

                        <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 2}}>
                            <View style={styles.container}>

                                <TouchableOpacity onPress={this.ifCorrect}>
                                    <Text style={{
                                        backgroundColor: '#70dd2f',
                                        justifyContent: 'center',
                                        height: 30,
                                        textAlign: 'center',
                                        width: 200
                                    }}>Correct</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.ifIncorrect}>
                                    <Text style={{
                                        backgroundColor: '#ff463f',
                                        justifyContent: 'center',
                                        height: 30,
                                        textAlign: 'center',
                                        width: 200,
                                        marginTop: 20
                                    }}>Incorrect</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                ) : (
                    <View style={styles.container}>
                        <Text>Score: {rightAnswers}</Text>

                        <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 2}}>
                            <View style={styles.container}>

                                <TouchableOpacity onPress={this.startQuiz}>
                                    <Text style={{
                                        backgroundColor: '#70dd2f',
                                        justifyContent: 'center',
                                        height: 30,
                                        textAlign: 'center',
                                        width: 200
                                    }}>Start Quiz</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.backToDeck}>
                                    <Text style={{
                                        backgroundColor: '#ff463f',
                                        justifyContent: 'center',
                                        height: 30,
                                        textAlign: 'center',
                                        width: 200,
                                        marginTop: 20
                                    }}>Back to Deck</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    }
});
