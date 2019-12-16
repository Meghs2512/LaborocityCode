import { StyleSheet, Dimensions } from 'react-native';

const skillsStyles = StyleSheet.create({
  ImageContainer: {
    height: Dimensions.get('window').height / 2.5,
    alignItems: "center",
    justifyContent: 'flex-end',
    backgroundColor: '#F0F0F0',

  },
  SwitchContainer: {
    height: Dimensions.get('window').height,
    backgroundColor: '#F0F0F0'

  },
  TextStyle: {
    fontWeight: '500',
    fontSize: 18,
    fontFamily: 'Neuton-regular'

  },
  SwitchViewContainer: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    marginTop: 5,
    height: 47,
    marginLeft: 10,
    marginRight: 10
  },
  SwitchTextStyle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    fontWeight: '500',
    flexDirection: 'row',
  },
  SwitchStyle: {
    position: 'absolute',
    right: 10
  },
  SwitchTextView: {
    position: 'absolute',
    left: 10
  },
  HiddenSwitchSliderView: {
    height: 90,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10
  },
  HiddenViewTextExp: {
    position: 'absolute',
    right: 70,
    color: '#787878',
    marginTop: 20,
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular'
  }
});
export default skillsStyles;
