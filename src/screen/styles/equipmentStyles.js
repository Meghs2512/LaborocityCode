import { StyleSheet, Dimensions } from 'react-native';

const equipmentStyles = StyleSheet.create({
  HeaderTextStyles: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Neuton-Bold',
    top: 50,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
  },
  SubViewTextStyles: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Montserrat-Regular'
  },
  SubViewStyles: {
    height: Dimensions.get('window').height - 380,
    backgroundColor: '#FFFFFF',

  },
  SwitchViewStyle: {
    position: 'absolute',
    right: 30
  }
})
export default equipmentStyles;
