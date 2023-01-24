import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Footer, Header, Body } from './app/components'



/* This is the home screen used for the navigation system, we'll
 * learn more about in the coming weeks! 
 */
function HomeScreen() {

  /* TODO: insert your code here */
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body />
    </SafeAreaView>
  )


  return (
    <View style={styles.container}>
    <Text
      style={{
        fontFamily: 'Sydney', // test to see if the font is loaded, feel free to remove this
      }}>
      Open up App.js to start working on your app!
    </Text>
    <Text
      style={{
        fontFamily: 'Sydney-Bold', // test to see if the font is loaded, feel free to remove this
      }}>
      ~Good luck~
    </Text>
  </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={Footer} screenOptions={{
        headerShown: false,
      }}>
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
