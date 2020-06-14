import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Deck = ({ deck }) => (
  <View style={[styles.container, styles.containerShadow]}>
    <View style={styles.deckText}>
      <Text>{deck.title}</Text>
    </View>
    <View>
      <Text style={styles.cardText}>{deck.questions.length} card(s)</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10
  },
  containerShadow: {
    color: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  deckText: {
    fontSize: 28
  },
  cardText: {
    fontSize: 18
  } 
});

export default Deck;