import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
export default class WriteStoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox1} placeholder="  Story Title" />
        <TextInput style={styles.inputBox2} placeholder="  Author" />
        <TextInput
          style={styles.inputBox3}
          placeholder="  Write Your Story"
          multiline={true}
        />
        <TouchableOpacity style={styles.scanButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: 2,
  },
  inputBox1: {
    width: 250,
    height: 35,
    borderWidth: 3,
    fontSize: 15,
    marginTop: -10,
  },
  inputBox2: {
    width: 250,
    height: 35,
    borderWidth: 3,
    fontSize: 15,
    marginTop: 25,
  },
  inputBox3: {
    width: 250,
    height: 200,
    borderWidth: 3,
    fontSize: 15,
    marginTop: 10,
    
  },
  scanButton: {
    backgroundColor: '#66BB6A',
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  },
});
