import React from 'react';
import {StyleSheet, TouchableOpacity, View, Dimensions, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getDecks} from '../actions/index';
import {getDecksFromStorage} from '../util/Api';
import Deck from './Deck';

class DeckList extends React.Component {

    componentDidMount() {
        getDecksFromStorage().then(decks => this.props.dispatch(getDecks(decks)));
    }

    renderItem = ({item}) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={() =>
                this.props.navigation.navigate('DeckView', item)}>
                <Deck
                    title={item.title}
                    questions={item.questions}/>
            </TouchableOpacity>
        </View>
    );

    render() {
        return (
            <View style={styles.deck}>
                <FlatList
                    data={Object.values(this.props.decks)}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}/>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        decks: state,
    };
}

const styles = StyleSheet.create({
    deck: {
        flexDirection: 'row',
        height: Dimensions.get('window').height
    },
});

export default connect(mapStateToProps)(DeckList);
