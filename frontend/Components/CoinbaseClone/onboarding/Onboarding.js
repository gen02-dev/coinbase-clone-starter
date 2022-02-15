import React, { useState, createRef, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image
} from "react-native";

import CoinbaseLogo from "../../../coinbaselogo.png";
import Button from "../onboarding/components/Button";

import {
  useMoralis,
} from "react-moralis";


const Onboarding = ({ navigation }) => {
  const {
    isAuthenticated
  } = useMoralis();

  return (
    <SafeAreaView style={styles.mainBody}>
     <View style={{justifyContent: 'center', flex: 1}}>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Image source={CoinbaseLogo} style={{width: 176, height: 31, marginRight: 15}}/>
      <Text style={{fontFamily: 'Helvetica Neue', fontWeight: '500', fontSize: 30}}>WALLET</Text>
      </View>
      <View style={{width: '70%', alignSelf: 'center'}}>
        <Text style={{fontFamily: 'Helvetica Neue', fontWeight: '400', fontSize: 18, color: 'rgba(0, 0, 0, 0.5)', textAlign: 'center'}}>The easiest and most secure crypto wallet</Text>
      </View>
     </View>

     <View>
      <Button buttonName={'Create new Wallet'} action={() => navigation.push('CreateUsername')}/>
      <TouchableOpacity style={{marginTop: 28}} onPress={() => navigation.push('SignIn')}>
        <Text style={{fontFamily: 'Helvetica Neue', fontWeight: '500', color: '#1652F0', fontSize: 18, textAlign: 'center'}}>Import Existing Wallet</Text>
      </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
};
export default Onboarding;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
