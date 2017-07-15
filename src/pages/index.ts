import Home from 'pages/Home'
import { StackNavigator } from 'react-navigation'

export default StackNavigator(
    {
        Home: {
            screen: Home,
        },
    },
    {
        initialRouteName: 'Home',
    }
)
