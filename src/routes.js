import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './pages/Home/Home'
import Details from './pages/Details/Details'
import Create from './pages/Create/Create'

export default createAppContainer(
    createStackNavigator({
      'Home': {
        screen: Home,
        navigationOptions: {
          headerShown: false,
        },
      },
      'Create': {
        screen: Create,
        navigationOptions: {
          headerShown: false,
        },
      },
      'Details': {
        screen: Details,
        navigationOptions: {
          headerShown: false,
        },
      },       
    })
)