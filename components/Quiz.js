import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { 
  clearLocalNotification,
  setLocalNotification 
} from '../utils/helpers';
import QuizCard from './QuizCard';
import QuizResults from './QuizResults';
import StyledButton from './StyledButton';


const Quiz = ({ route, navigation }) => {
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = React.useState(0);
  const [currentQuestionIndex, setQuestionIndex] = React.useState(0);
  const [showQuestion, shouldShowQuestion] = React.useState(true);
  const [showResults, shouldShowResults] = React.useState(false);
  
  const { questions } = route.params;

  const getRemainginCount = () => {
    const questionsTotal = questions.length;
    const questionsAnswered =  correctAnswers + incorrectAnswers + 1;
    const questionsRemaining = questionsTotal - questionsAnswered;

    return `${questionsRemaining} questions remaining`;
  };

  const recordAnswer = knewAnswer => {
    if (knewAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    if (currentQuestionIndex === questions.length - 1) {
      shouldShowResults(true);
    } else {
      setQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const toggleQuestionAnswer = () =>
    shouldShowQuestion(!showQuestion);
  
  const restartQuiz = () => {
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setQuestionIndex(0);
    shouldShowQuestion(true);
    shouldShowResults(false);
  };

  if (showResults) {
    clearLocalNotification()
      .then(setLocalNotification());

  }
  
  if (questions.length > 0) {
    return !showResults ? (
      <View style={styles.container}>
        <QuizCard 
          card={questions[currentQuestionIndex]}
          showQuestion={showQuestion}
        />
        <View style={styles.block}>
          <Text>{getRemainginCount()}</Text>
          <StyledButton onPress={() => toggleQuestionAnswer()}>
            <Text>{`See ${showQuestion ? 'Answer' : 'Question'}`}</Text>
          </StyledButton>
        </View>
        {!showQuestion && (
          <View>
            <Text>Mark your guess as correct or incorrect:</Text>
            <StyledButton onPress={() => {
              recordAnswer(true);
              toggleQuestionAnswer();
            }}>
              <Text>Correct</Text>
            </StyledButton>
            <StyledButton onPress={() => {
              recordAnswer(false);
              toggleQuestionAnswer();
            }}>
              <Text>Incorrect</Text>
            </StyledButton>
          </View>
        )}
      </View>
    ) : (
      <View>
        <QuizResults
          correctAnswerCount={correctAnswers}
          incorrectAnswerCount={incorrectAnswers}
          restartQuiz={restartQuiz}
          navigation={navigation}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>You do not have any question cards yet</Text>
        <StyledButton onPress={() => navigation.navigate('Deck Details')}>
          Go Back
        </StyledButton>
      </View>
    );
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  block: {
    marginBottom: 20,
    alignItems: 'center'
  }
});

export default Quiz;