import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { saveDeckByTitle } from '../utils/api';
import StyledButton from './StyledButton';

const AddDeck = ({ navigation }) => {
  const [title, setTitle] = React.useState('');

  handleSubmit = async () =>
    await saveDeckByTitle(title);

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.title}>Insert title below</Text>
      </View>
      <View style={styles.block}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={title => setTitle(title)}
          placeholder='e.g. Math'
        />
      </View>
      <View style={styles.block}>
        <StyledButton
          onPress={async () => {
            await handleSubmit();
            const savedTitle = title;
            setTitle('');
            navigation.navigate('Deck Details', { title: savedTitle });
          }}
          disabled={title === ''}
        >
          Create Deck
        </StyledButton>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    justifyContent: 'space-around'
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

export default AddDeck;