import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Read Story</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {},
  text: {
    color: 'black',
    padding: 12,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppHeader;
