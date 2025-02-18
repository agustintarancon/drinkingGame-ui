import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/Home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default MyStack