import React from 'react'
import HeaderImage from '../../assets/skills_header_image 1.svg'
import { View, Text, Dimensions, ScrollView } from 'react-native'
import Slider from '@react-native-community/slider'
import Switch from 'react-native-customisable-switch'
import { CheckBox } from 'react-native-elements'
import styles from '../screen/styles/skillsStyles'
export default class Skills extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      switchOneValue: false,
      switchTwoValue: false,
      switchThreeValue: false,
      switchFourValue: false,
      switchFiveValue: false,
      slider1Value: 100,
      slider2Value: 50,
      slider3Value: 0
    }
  }
  onChangeMethod = () => {
    this.props.screenProps.generalLabor = !this.state.switchThreeValue
    this.setState({ switchThreeValue: !this.state.switchThreeValue })
  }
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={styles.ImageContainer}>
            <View>
              <HeaderImage style={{ marginBottom: 30 }} />
            </View>
            <Text style={styles.TextStyle}>
              Here you can select your{'\n'}
              interests and experiences
        </Text>
          </View>
          <View style={styles.SwitchContainer}>
            <View style={{
              backgroundColor: '#FFFFFF',
              justifyContent: 'center',
              marginTop: 20,
              height: 47,
              marginLeft: 10,
              marginRight: 10
            }}>
              <View style={styles.SwitchTextView}>
                <Text style={styles.SwitchTextStyle}>Warehouse</Text>
              </View>
              <View style={styles.SwitchStyle}>
                <Switch
                  value={this.state.switchOneValue}
                  onChangeValue={() => this.setState({ switchOneValue: !this.state.switchOneValue })}
                  activeText={'Yes'}
                  inactiveText={'No'}
                  fontSize={12}
                  activeTextColor={'rgba(255, 255, 255, 1)'}
                  inactiveTextColor={'rgba(255, 255, 255, 1)'}
                  activeBackgroundColor={'rgba(50, 163, 50, 1)'}
                  inactiveBackgroundColor={'rgba(137, 137, 137, 1)'}
                  activeButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                  inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                  switchWidth={70}
                  switchHeight={25}
                  switchBorderRadius={0}
                  switchBorderColor={'rgba(0, 0, 0, 1)'}
                  switchBorderWidth={0}
                  buttonWidth={35}
                  buttonHeight={25}
                  buttonBorderRadius={0}
                  buttonBorderColor={'rgba(0, 0, 0, 1)'}
                  buttonBorderWidth={0}
                  animationTime={150}
                  padding={false}
                />
              </View>
            </View>
            <View style={styles.SwitchViewContainer}>
              <View style={styles.SwitchTextView}>
                <Text style={styles.SwitchTextStyle}>Hospitality</Text>
              </View>
              <View style={styles.SwitchStyle}>
                <Switch
                  value={this.state.switchTwoValue}
                  onChangeValue={() => this.setState({ switchTwoValue: !this.state.switchTwoValue })}
                  activeText={'Yes'}
                  inactiveText={'No'}
                  fontSize={12}
                  activeTextColor={'rgba(255, 255, 255, 1)'}
                  inactiveTextColor={'rgba(255, 255, 255, 1)'}
                  activeBackgroundColor={'rgba(50, 163, 50, 1)'}
                  inactiveBackgroundColor={'rgba(137, 137, 137, 1)'}
                  activeButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                  inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                  switchWidth={70}
                  switchHeight={25}
                  switchBorderRadius={0}
                  switchBorderColor={'rgba(0, 0, 0, 1)'}
                  switchBorderWidth={0}
                  buttonWidth={35}
                  buttonHeight={25}
                  buttonBorderRadius={0}
                  buttonBorderColor={'rgba(0, 0, 0, 1)'}
                  buttonBorderWidth={0}
                  animationTime={150}
                  padding={false}
                />
              </View>
            </View>
            <View style={styles.SwitchViewContainer}>
              <View style={styles.SwitchTextView}>
                <Text style={styles.SwitchTextStyle}>General Labour</Text>
              </View>
              <View style={styles.SwitchStyle}>
                <Switch
                  value={this.state.switchThreeValue}
                  onChangeValue={this.onChangeMethod}
                  activeText={'Yes'}
                  inactiveText={'No'}
                  fontSize={12}
                  activeTextColor={'rgba(255, 255, 255, 1)'}
                  inactiveTextColor={'rgba(255, 255, 255, 1)'}
                  activeBackgroundColor={'rgba(50, 163, 50, 1)'}
                  inactiveBackgroundColor={'rgba(137, 137, 137, 1)'}
                  activeButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                  inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                  switchWidth={70}
                  switchHeight={25}
                  switchBorderRadius={0}
                  switchBorderColor={'rgba(0, 0, 0, 1)'}
                  switchBorderWidth={0}
                  buttonWidth={35}
                  buttonHeight={25}
                  buttonBorderRadius={0}
                  buttonBorderColor={'rgba(0, 0, 0, 1)'}
                  buttonBorderWidth={0}
                  animationTime={150}
                  padding={false}
                />
              </View>
            </View>
            {
              this.state.switchThreeValue ? (
                <View>
                  <View style={styles.HiddenSwitchSliderView} >
                    <CheckBox
                      containerStyle={{ backgroundColor: '#FFFFFF', borderColor: 'transparent' }}
                      title='Construction'
                      checked={true}
                      checkedColor='#2C7DFA'
                    />
                    <Text style={styles.HiddenViewTextExp}> My Experience: </Text>
                    <Text style={{
                      position: 'absolute',
                      right: 18,
                      color: '#787878',
                      marginTop: 20,
                      fontSize: 11,
                    }}>10+ Years</Text>
                    <Slider
                      maximumValue={100}
                      minimumValue={0}
                      value={this.state.slider1Value}
                      step={1}
                      style={{
                        width: Dimensions.get('window').width - 50,
                        left: 20, bottom: 10
                      }}
                      onValueChange={(slider1Value) => this.setState({ slider1Value })}
                    />
                  </View>

                  <View style={styles.HiddenSwitchSliderView} >
                    <CheckBox
                      containerStyle={{ backgroundColor: '#FFFFFF', borderColor: 'transparent' }}
                      title='Restoration'
                      checked={true}
                      checkedColor='#2C7DFA'
                    />
                    <Text style={styles.HiddenViewTextExp}> My Experience: </Text>
                    <Text style={{
                      position: 'absolute',
                      right: 25,
                      color: '#787878',
                      marginTop: 20,
                      fontSize: 11,
                    }}>5 Years</Text>
                    <Slider
                      maximumValue={100}
                      minimumValue={0}
                      value={this.state.slider2Value}
                      step={1}
                      style={{
                        width: Dimensions.get('window').width - 50,
                        left: 20, bottom: 10
                      }}
                      onValueChange={(slider2Value) => this.setState({ slider2Value })}
                    />
                  </View>
                  <View style={styles.HiddenSwitchSliderView} >
                    <CheckBox
                      containerStyle={{ backgroundColor: '#FFFFFF', borderColor: 'transparent' }}
                      title='Demolition'
                      checked={false}
                      checkedColor='#2C7DFA'
                    />
                    <Text style={styles.HiddenViewTextExp}> My Experience: </Text>
                    <Text style={{
                      position: 'absolute',
                      right: 25,
                      color: '#787878',
                      marginTop: 20,
                      fontSize: 11,
                    }}>{this.state.slider3Value} Years</Text>
                    <Slider
                      maximumValue={100}
                      minimumValue={0}
                      value={this.state.sliderValue}
                      step={1}
                      style={{
                        width: Dimensions.get('window').width - 50,
                        left: 20, bottom: 10
                      }}
                      onValueChange={(slider3Value) => this.setState({ slider3Value })}
                    />
                  </View>
                </View>
              ) : null
            }
            <View style={styles.SwitchViewContainer}>
              <View style={styles.SwitchTextView}>
                <Text style={styles.SwitchTextStyle}>Office</Text>
              </View>
              <View style={styles.SwitchStyle}>
                <Switch
                  value={this.state.switchFourValue}
                  onChangeValue={() => this.setState({ switchFourValue: !this.state.switchFourValue })}
                  activeText={'Yes'}
                  inactiveText={'No'}
                  fontSize={12}
                  activeTextColor={'rgba(255, 255, 255, 1)'}
                  inactiveTextColor={'rgba(255, 255, 255, 1)'}
                  activeBackgroundColor={'rgba(50, 163, 50, 1)'}
                  inactiveBackgroundColor={'rgba(137, 137, 137, 1)'}
                  activeButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                  inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                  switchWidth={70}
                  switchHeight={25}
                  switchBorderRadius={0}
                  switchBorderColor={'rgba(0, 0, 0, 1)'}
                  switchBorderWidth={0}
                  buttonWidth={35}
                  buttonHeight={25}
                  buttonBorderRadius={0}
                  buttonBorderColor={'rgba(0, 0, 0, 1)'}
                  buttonBorderWidth={0}
                  animationTime={150}
                  padding={false}
                />
              </View>
            </View>

            <View style={styles.SwitchViewContainer}>
              <View style={styles.SwitchTextView}>
                <Text style={styles.SwitchTextStyle}>iRelaunch</Text>
              </View>
              <View style={styles.SwitchStyle}>
                <Switch
                  value={this.state.switchFiveValue}
                  onChangeValue={() => this.setState({ switchFiveValue: !this.state.switchFiveValue })}
                  activeText={'Yes'}
                  inactiveText={'No'}
                  fontSize={12}
                  activeTextColor={'rgba(255, 255, 255, 1)'}
                  inactiveTextColor={'rgba(255, 255, 255, 1)'}
                  activeBackgroundColor={'rgba(50, 163, 50, 1)'}
                  inactiveBackgroundColor={'rgba(137, 137, 137, 1)'}
                  activeButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                  inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
                  switchWidth={70}
                  switchHeight={25}
                  switchBorderRadius={0}
                  switchBorderColor={'rgba(0, 0, 0, 1)'}
                  switchBorderWidth={0}
                  buttonWidth={35}
                  buttonHeight={25}
                  buttonBorderRadius={0}
                  buttonBorderColor={'rgba(0, 0, 0, 1)'}
                  buttonBorderWidth={0}
                  animationTime={150}
                  padding={false}
                />
              </View>
            </View>
          </View>
        </View >
      </ScrollView>
    )
  }
}
