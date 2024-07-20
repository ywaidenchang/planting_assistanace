import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './screens/ListScreen';
import InfoScreen from './screens/InfoScreen';

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListScreen} options={{headerShown: false}} />
      <Stack.Screen name="Info" component={InfoScreen} options={{headerTitleAlign: 'center'}} />
    </Stack.Navigator>
  );
};

export default Stacks;