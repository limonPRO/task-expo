import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import store from './redux/store';
import { Provider } from 'react-redux';
import LogsScreen from './screens/LogsScreen';
import CategoriesScreen from './screens/CatagoriesScreen';



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="catagoriesScreen" component={CategoriesScreen} />
        <Drawer.Screen name="logsScreen" component={LogsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
     </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
