import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import AppHeader from './components/AppHeader';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <AppContainer />
      </View>
    );
  }
}
const TabNavigator = createBottomTabNavigator(
  {
    WriteStory: { screen: WriteStoryScreen },
    ReadStory: { screen: ReadStoryScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName == 'ReadStory') {
          return (
            <Image
              style={{ width: 40, height: 40, marginTop: 10 }}
              source={require('./assets/reading.png')}
            />
          );
        } else if (routeName == 'WriteStory') {
          return (
            <Image
              style={{ width: 26, height: 26, marginTop: 10 }}
              source={require('./assets/writing.png')}
            />
          );
        }
      },
    }),
  }
);
const AppContainer = createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
