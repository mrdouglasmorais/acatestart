import {
  View, Text, StyleSheet, Dimension
} from 'react-native'

const App = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.textStyle}>Nosso Primeiro APP</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  textStyle: {
    color: 'white',
  }
})

export default App