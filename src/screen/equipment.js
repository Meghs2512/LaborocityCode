import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Switch from 'react-native-customisable-switch'
import styles from '../screen/styles/equipmentStyles'
export default class Equipment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      switchEquipOneValue: false,
      switchEquipTwoValue: false,
      switchEquipThreeValue: false,
      switchEquipFourValue: false,
      switchEquipFiveValue: false,
    }
  }
  render() {
    const { switchEquipOneValue,
      switchEquipTwoValue,
      switchEquipThreeValue,
      switchEquipFourValue,
      switchEquipFiveValue } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {this.props.screenProps.generalLabor ? (
          <View>
            <View style={{ height: Dimensions.get('window').height / 5 }}>
              <Text style={styles.HeaderTextStyles}>
                Do you have the following equipment {'\n'} for your selections?
              </Text>
            </View>
            <View style={styles.SubViewStyles}>
              <View style={{ position: 'absolute', height: 50, left: 30, width: Dimensions.get('window').width - 50, justifyContent: 'center' }}>
                <Text style={styles.SubViewTextStyles}>General Labor Items</Text>

              </View>

              <View style={{ marginTop: 50, height: 50, backgroundColor: '#F0F0F0', justifyContent: 'center' }}>
                <Text style={[styles.SubViewTextStyles, { left: 30, fontSize: 12, color: '#787878' }]}>Steel Toed Boots</Text>
                <View style={styles.SwitchViewStyle}>
                  <Switch
                    value={switchEquipOneValue}
                    onChangeValue={() => this.setState({ switchEquipOneValue: !switchEquipOneValue })}
                    activeText={'Yes'}
                    inactiveText={'No'}
                    fontSize={12}
                    activeTextColor={'rgba(255, 255, 255, 1)'}
                    inactiveTextColor={'rgba(255, 255, 255, 1)'}
                    activeBackgroundColor={'rgba(50, 163, 50, 1)'}
                    inactiveBackgroundColor={'rgba(137, 137, 137, 1)'}
                    activeButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                    inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                    switchWidth={60}
                    switchHeight={20}
                    switchBorderRadius={0}
                    switchBorderColor={'rgba(0, 0, 0, 1)'}
                    switchBorderWidth={0}
                    buttonWidth={30}
                    buttonHeight={20}
                    buttonBorderRadius={0}
                    buttonBorderColor={'rgba(0, 0, 0, 1)'}
                    buttonBorderWidth={0}
                    animationTime={150}
                    padding={false}
                  />
                </View>
              </View>

              <View style={{ position: 'absolute', marginTop: 100, height: 50, backgroundColor: '#FFFFFF', width: Dimensions.get('window').width, justifyContent: 'center' }}>
                <Text style={[styles.SubViewTextStyles, { fontSize: 12, left: 30, color: '#787878' }]}>Hard Hat</Text>
                <View style={styles.SwitchViewStyle}>
                  <Switch
                    value={switchEquipTwoValue}
                    onChangeValue={() => this.setState({ switchEquipTwoValue: !switchEquipTwoValue })}
                    activeText={'Yes'}
                    inactiveText={'No'}
                    fontSize={12}
                    activeTextColor={'rgba(255, 255, 255, 1)'}
                    inactiveTextColor={'rgba(255, 255, 255, 1)'}
                    activeBackgroundColor={'rgba(50, 163, 50, 1)'}
                    inactiveBackgroundColor={'rgba(137, 137, 137, 1)'}
                    activeButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                    inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                    switchWidth={60}
                    switchHeight={20}
                    switchBorderRadius={0}
                    switchBorderColor={'rgba(0, 0, 0, 1)'}
                    switchBorderWidth={0}
                    buttonWidth={30}
                    buttonHeight={20}
                    buttonBorderRadius={0}
                    buttonBorderColor={'rgba(0, 0, 0, 1)'}
                    buttonBorderWidth={0}
                    animationTime={150}
                    padding={false}
                  />
                </View>
              </View>
              <View style={{ position: 'absolute', marginTop: 150, height: 50, backgroundColor: '#F0F0F0', width: Dimensions.get('window').width, justifyContent: 'center' }}>
                <Text style={[styles.SubViewTextStyles, { left: 30, fontSize: 12, color: '#787878' }]}>Safety Vest</Text>
                <View style={styles.SwitchViewStyle}>
                  <Switch
                    value={switchEquipThreeValue}
                    onChangeValue={() => this.setState({ switchEquipThreeValue: !switchEquipThreeValue })}
                    activeText={'Yes'}
                    inactiveText={'No'}
                    fontSize={12}
                    activeTextColor={'rgba(255, 255, 255, 1)'}
                    inactiveTextColor={'rgba(255, 255, 255, 1)'}
                    activeBackgroundColor={'rgba(50, 163, 50, 1)'}
                    inactiveBackgroundColor={'rgba(137, 137, 137, 1)'}
                    activeButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                    inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                    switchWidth={60}
                    switchHeight={20}
                    switchBorderRadius={0}
                    switchBorderColor={'rgba(0, 0, 0, 1)'}
                    switchBorderWidth={0}
                    buttonWidth={30}
                    buttonHeight={20}
                    buttonBorderRadius={0}
                    buttonBorderColor={'rgba(0, 0, 0, 1)'}
                    buttonBorderWidth={0}
                    animationTime={150}
                    padding={false}
                  />
                </View>
              </View>

              <View style={{ position: 'absolute', marginTop: 200, height: 50, backgroundColor: '#FFFFFF', width: Dimensions.get('window').width, justifyContent: 'center' }}>
                <Text style={[styles.SubViewTextStyles, { fontSize: 12, left: 30, color: '#787878' }]}>Eye Protection</Text>
                <View style={styles.SwitchViewStyle}>
                  <Switch
                    value={switchEquipFourValue}
                    onChangeValue={() => this.setState({ switchEquipFourValue: !switchEquipFourValue })}
                    activeText={'Yes'}
                    inactiveText={'No'}
                    fontSize={12}
                    activeTextColor={'rgba(255, 255, 255, 1)'}
                    inactiveTextColor={'rgba(255, 255, 255, 1)'}
                    activeBackgroundColor={'rgba(50, 163, 50, 1)'}
                    inactiveBackgroundColor={'rgba(137, 137, 137, 1)'}
                    activeButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                    inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                    switchWidth={60}
                    switchHeight={20}
                    switchBorderRadius={0}
                    switchBorderColor={'rgba(0, 0, 0, 1)'}
                    switchBorderWidth={0}
                    buttonWidth={30}
                    buttonHeight={20}
                    buttonBorderRadius={0}
                    buttonBorderColor={'rgba(0, 0, 0, 1)'}
                    buttonBorderWidth={0}
                    animationTime={150}
                    padding={false}
                  />
                </View>
              </View>

              <View style={{
                position: 'absolute', marginTop: 250, height: 50, backgroundColor: '#F0F0F0', width: Dimensions.get('window').width, justifyContent: 'center', shadowColor: "#000000",
                shadowOpacity: 0.1,
                shadowRadius: 3,
                shadowOffset: {
                  height: 2,
                  width: 1
                },
              }}>
                <Text style={[styles.SubViewTextStyles, { left: 30, fontSize: 12, color: '#787878' }]}>Gloves</Text>
                <View style={styles.SwitchViewStyle}>
                  <Switch
                    value={switchEquipFiveValue}
                    onChangeValue={() => this.setState({ switchEquipFiveValue: !switchEquipFiveValue })}
                    activeText={'Yes'}
                    inactiveText={'No'}
                    fontSize={12}
                    activeTextColor={'rgba(255, 255, 255, 1)'}
                    inactiveTextColor={'rgba(255, 255, 255, 1)'}
                    activeBackgroundColor={'rgba(50, 163, 50, 1)'}
                    inactiveBackgroundColor={'rgba(137, 137, 137, 1)'}
                    activeButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                    inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                    switchWidth={60}
                    switchHeight={20}
                    switchBorderRadius={0}
                    switchBorderColor={'rgba(0, 0, 0, 1)'}
                    switchBorderWidth={0}
                    buttonWidth={30}
                    buttonHeight={20}
                    buttonBorderRadius={0}
                    buttonBorderColor={'rgba(0, 0, 0, 1)'}
                    buttonBorderWidth={0}
                    animationTime={150}
                    padding={false}
                  />
                </View>
              </View>
            </View>
          </View>
        ) :
          (
            <View>
              <Text style={styles.HeaderTextStyles}>
                You currently have no skills {'\n'} to add equipment under. {'\n'} {'\n'}
                Please go back to the Skills tab {'\n'} to add some of your skills {'\n'}and interests
            </Text>
            </View>
          )
        }
      </View>
    )
  }
}
