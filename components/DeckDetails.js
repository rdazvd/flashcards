import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDeck } from '../utils/api';
import Deck from './Deck';
import StyledButton from './StyledButton';

const DeckDetails = ({ navigation, route }) => {
  const [deck, retrieveDeck] = React.useState({});
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const response = await getDeck(route.params.title);
      retrieveDeck(response);
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
    <View style={styles.container}>
      <Deck deck={deck} />
      <View>
        <StyledButton
          onPress={() => 
            navigation.navigate('Add Card', { title: deck.title })
          }
        >
          Add Card
        </StyledButton>
        <StyledButton>Start Quiz</StyledButton>
      </View>
      {/* <Text>{JSON.stringify(deck)}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 16
  }
});

export default DeckDetails;