import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/reducers/index.js';
import {StackNavigator, TabNavigator} from 'react-navigation';
import AddDeck from './src/components/AddDeck';
import DeckList from './src/components/DeckList.js';
import DeckView from './src/components/DeckView.js';
import AddQuestion from './src/components/AddQuestion';
import Quiz from './src/components/Quiz.js'
import {setNotification} from './src/util/Notification';

const Tabs = TabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks'
        },
    },
    NewDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck',
        },
    },
}
);

const AppNavigator = StackNavigator({
Home: {
    screen: Tabs,
    navigationOptions: {title: 'Home'},
},
DeckView: {
    screen: DeckView,
    navigationOptions: {
        headerTintColor: '#000',
    },
},
Quiz: {
    screen: Quiz,
    navigationOptions: {
        title: 'Quiz',
        headerTintColor: '#000',
    },
},
AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
        title: 'Add Question',
        headerTintColor: '#000',
    },
},
});

export default class App extends React.Component {

    componentDidMount() {
        setNotification();
    }
   
    render() {
        return <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
            <AppNavigator />
        </View>
    </Provider>
    }
}

