import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity 
} from 'react-native';
import { getDecks, resetData } from '../utils/api';
import Deck from './Deck';

const DeckList = ({ navigation }) => {
  const [decks, retrieveDecks] = React.useState({});
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const response = await getDecks();
      retrieveDecks(response);
      setReady(true);
      // await resetData();
    })();

    return () => setReady(false);
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
      <FlatList
        data={Object.values(decks)}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item}
            onPress={() => navigation.navigate('Deck Details', { title: item.title })}
          >
            <Deck deck={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default DeckList;