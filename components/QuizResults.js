import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import StyledButton from './StyledButton';

const QuizResults = ({
  correctAnswerCount,
  incorrectAnswerCount,
  restartQuiz,
  navigation
}) => {
  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.title}>{`${Math.round(
  //           (correctAnswerCount * 100) / (correctAnswerCount + incorrectAnswerCount)
  //         )} %`}</Text>
  //   </View>
  // );
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>You scored</Text>
      </View>
      <View>
        <Text>
          {`${Math.round(
            (correctAnswerCount * 100) / (correctAnswerCount + incorrectAnswerCount)
          )} %`}
        </Text>
      </View>    
      <View>
        <StyledButton onPress={() => restartQuiz()}>
          <Text>Restart Quiz</Text>
        </StyledButton>
        <StyledButton onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </StyledButton>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  block: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    height: 40
  },
  title: {
    textAlign: 'center',
    fontSize: 32
  }
});

export default QuizResults;