import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const QuizCard = ({card, showQuestion}) => (
  <View style={styles.container}>
    <View>
      {showQuestion ? (
        <View>
          <Text>{card.question}</Text>
        </View>
      ) : (
        <View>
          <Text>{card.answer}</Text>
        </View>
      ) }
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 32
  }
});

export default QuizCard;