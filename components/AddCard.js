import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import { addCardToDeck } from '../utils/api';
import StyledButton from './StyledButton';

const AddCard = ({ navigation, route }) => {
  const [question, setQuestion] = React.useState('');
  const [answer, setAnswer] = React.useState('');

  const handleSubmit = async () => {
    const card = {
      question,
      answer
    };
    const deckTitle = route.params.title;

    await addCardToDeck(deckTitle, card);
  };

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.title}>Add a question</Text>
      </View>
      <View style={styles.block}>
        <TextInput
          style={styles.input}
          value={question}
          onChangeText={input => setQuestion(input)}
          placeholder='Your question'
        />
      </View>
      <View style={styles.block}>
        <TextInput
          style={styles.input}
          value={answer}
          onChangeText={input => setAnswer(input)}
          placeholder='Your answer'
        />
      </View>
      <View style={styles.block}>
        <StyledButton
          onPress={async () => {
            await handleSubmit();
            setQuestion('');
            setAnswer('');
            navigation.push('Deck Details', { title: route.params.title });
          }}
          disabled={question === '' || answer === ''}
        >
          Submit
        </StyledButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: 600
  },
  block: {
    marginBottom: 20,
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 32
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300
  }
});

export default AddCard;