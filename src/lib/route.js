import React from 'react';
import { createMaterialTopTabNavigator, createAppContainer, NavigationActions } from 'react-navigation';
import Skills from '../screen/skills';
import Equipment from '../screen/equipment';
import Certifications from '../screen/certification';

const AppNavigator = createMaterialTopTabNavigator(
  {
    Skills: {
      screen: Skills
    },
    Equipment: {
      screen: Equipment,
    },
    Certifications: {
      screen: Certifications
    }
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        const setParamsAction = NavigationActions.setParams({
          params: {},
          key: navigation.state.key
        })
        navigation.dispatch(setParamsAction)
        defaultHandler()
      },
    }),
    tabBarOptions: {
      upperCaseLabel: false,
      activeTintColor: '#232323',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#FFFFF',
        marginTop: 25,
      },

      labelStyle: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        fontWeight: '500',
        fontSize: 14

      },
      indicatorStyle: {
        borderBottomColor: '#2C7DFA',
        borderBottomWidth: 2,
      },
    },
  }
)
export default createAppContainer(AppNavigator);
