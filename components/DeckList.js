import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getDecks } from '../utils/api';
import Deck from './Deck';

const DeckList = ({ navigation }) => {
  const [decks, retrieveDecks] = React.useState({});
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const response = await getDecks();
      retrieveDecks(response);
      setReady(true);
    })()
  }, []);

  if (!ready) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.values(decks).map(deck => (
        <TouchableOpacity
          key={deck.title}
          onPress={() => {}}
        >
          <Deck deck={deck} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default DeckList;