import { StyleSheet } from 'react-native'

const appStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    height: 50,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    top: 30,
    left: 0,
    padding: 15
  },
  imageStyle: {
    width: 230,
    height: 50,
    left: -40
  }
});

export default appStyles;
