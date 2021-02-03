
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import BookTransactionScreen from './screens/BookTransaction'
import SearchScreen from './screens/SearchScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';



export default class App extends React.Component {
  
 render(){
  return (
      <Appcontainer/>

  );
 }
}
const Tab = createBottomTabNavigator({
   Transaction:{screen:BookTransactionScreen},
   Search:{screen:SearchScreen}
},
{
  defaultNavigationOptions:({navigation}) =>({
     tabBarIcon:()=>{
       const routeName = navigation.state.routeName;
       if(routeName === 'Transaction'){
          return(
            <Image source={require('./assets/book.png')} style={{width:40,height:40}}/>
            
          )
       }
       else if(routeName === 'Search'){
         return(
           <Image source={require('./assets/searchingbook.png')} style={{width:40,height:40}}/>
         )
       }

     }
  })

}
 
)
const switchNavigator  = createSwitchNavigator({
   LoginScreen:{screen:LoginScreen},
   TabScreen:{screen:Tab}
})

const Appcontainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
