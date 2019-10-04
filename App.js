import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: 'Search',

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'tomato'
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontSize: 30
      },
      title: 'Restaurant Finder'
    }
  }
);

const SwitchContainer = createSwitchNavigator({
  Home: { screen: HomeScreen },
  Search: { screen: navigator }
});

export default createAppContainer(SwitchContainer);
