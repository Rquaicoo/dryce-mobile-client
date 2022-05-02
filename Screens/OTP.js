import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ImageBackground, borderRadius,TextInput,TouchableHighlight ,SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather, AntDesign, FontAwesome5, EvilIcons, Ionicons , Entypo} from '@expo/vector-icons';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Login from './Login';
import Home from './Home';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function OTP({route, navigation}) {

    const sendOTP = (number1, number2, number3, number4, token) => {
        const otp = number1 + number2 + number3 + number4;

        fetch('https://dryce-staging.herokuapp.com/api/auth/verify_user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
                },
                body: JSON.stringify({
                    otp: otp
                    })
    })
    .then(response =>
        console.log(response.json))
}

  
    const [otp, changeOTPState] = useState(false);
    const [token, setToken] = useState('');
    const email = route.params.email;

    const[number1, setNumber1] = useState('');
    const[number2, setNumber2] = useState('');
    const[number3, setNumber3] = useState('');
    const[number4, setNumber4] = useState('');


    useState(() => {
        AsyncStorage.getItem('token').then((token) => {
            setToken(token);
        })
    }, [])




  return (
    <ScrollView style={styles.container}>
       <StatusBar style="auto" />
       <SafeAreaView>
        <TouchableHighlight style={{alignSelf:'center', marginTop:hp('5%')}} >
                <Image source={require('../assets/img.png')} style={{height:hp('15%'), width:wp('40%'), borderRadius:100 }} />
        </TouchableHighlight>
       
       {/* OTP number verification */}
       
         <View style={styles.otpform}>
             {!otp ?
             (<View>
            <TouchableHighlight style={styles.otpbox}>
                <View>
                <Text style={styles.otpmaintext}> Verify your email! </Text>
                <Text style={styles.otptext}> OTP Verification </Text>
                
                <Text style={styles.otptext2}>A 4 digit OTP will be sent to {email} </Text>
                <Text style={{marginLeft:hp('3.5%'), marginTop:hp('4.5%'), fontSize:wp('3.5%'), fontWeight:'bold',  }} 
                onPress={() => changeOTPState(!otp)} >NEXT</Text>
                </View>
            </TouchableHighlight>
             </View>)

           :( <View>
            <TouchableHighlight style={styles.otpbox}>
                <View>
                <Text style={styles.otpmaintext}> OTP Verification </Text>
                <Text style={styles.otptext2}>Enter the OTP you received to {email}</Text>
                <Text style={styles.otpvernum}> </Text>

                <View style={{flexDirection:'row' , marginLeft:hp('2%'), marginTop:hp('2%')}}>
                <TouchableHighlight style={styles.otpnum}>
                <TextInput  style={styles.otp} placeholder="0" maxLength={1} 
                onChangeText={number1 => setNumber1(number1)} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.otpnum}>
                <TextInput style={styles.otp} placeholder="0"  
                onChangeText={number2 => setNumber2(number2)} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.otpnum}>
                <TextInput style={styles.otp} placeholder="0" 
                onChangeText={number3 => setNumber3(number3)}  /> 
                </TouchableHighlight>
                <TouchableHighlight style={styles.otpnum}>
                <TextInput style={styles.otp} placeholder="0" 
                onChangeText={number4 => setNumber4(number4)} /> 
            </TouchableHighlight>
                
                </View>

                <Text style={{marginLeft:hp('3.5%'), marginTop:hp('4%'), fontSize:wp('3.5%'), fontWeight:'bold',  }} > Resend OTP </Text>
                </View>
            </TouchableHighlight>  
            </View> )}
            </View>
        
            <TouchableOpacity style={styles.signup} onPress={() => {sendOTP(number1, number2, number3, number4, token)}}>
            <Text style={{color:'white', textAlign:'center', paddingTop:hp('2.3%'), fontSize:wp('4%'), fontWeight:'bold'}}> Continue </Text>
            </TouchableOpacity>


       </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F4',
      
    },

  signup:{
   height:hp('7%'),
    width:wp('50%'),
    backgroundColor:'#14a8ee',
    alignSelf:'center',
    marginTop:hp('10%'),
    borderRadius:20,

    },

    headertext: {
      ...Platform.select({
        ios: {
          fontSize:wp('7%'),
          alignSelf:'center',
          fontWeight:'bold',
          marginTop:hp('3%'),
          
        },
        android: {
          fontSize:wp('9%'),
          alignSelf:'center',
          marginTop:hp('7%'),
          fontWeight:'bold',
        },
        
      })
      
    },

    otp:{
        ...Platform.select({
            ios: {
                marginLeft:hp('2%'),
                marginTop:hp('2.5%'), 
                fontSize:wp('9%'),
                fontWeight:'bold',
            },
            android: {
                marginLeft:hp('2.5%'),
                marginTop:hp('2.5%'), 
                fontSize:wp('10%'),
                fontWeight:'bold', 
            },
            
          })
       
    },

    otpbox:{
        height:hp('47%'),
        width:wp('80%'),
        backgroundColor:'white',
        marginTop:hp('10%'),
        alignSelf:'center',
        borderRadius:20,
    },

    otpmaintext:{
        ...Platform.select({
            ios: {
                marginTop:hp('6%'),
               marginLeft:hp('3.5%'),
                fontSize:wp('5.5%'), 
                fontWeight:'bold' 
            },
            android: {
                paddingTop:hp('6%'),
                paddingLeft:hp('3.5%'),
                fontSize:wp('6%'), 
                fontWeight:'bold' 
            },
            
          })
    },

    otptext:{
    ...Platform.select({
        ios: {
            paddingTop:hp('4%'),
            paddingLeft:hp('3.5%'),
            fontSize:wp('3.7%'), 
          
        },
        android: {
            paddingTop:hp('4%'),
            paddingLeft:hp('3.5%'),
            fontSize:wp('4%'), 
            
        },
      })
    },

    otptext2:{
        ...Platform.select({
            ios: {
                paddingTop:hp('2.5%'),
                paddingRight:hp('1.5%'),
                paddingLeft:hp('3.5%'),
                fontSize:wp('3.7%'), 
                color:'#CCCCCC'
            },
            android: {
                paddingTop:hp('2.5%'),
                paddingRight:hp('2.5%'),
                paddingLeft:hp('3.5%'),
                fontSize:wp('4%'), 
                color:'#CCCCCC'
                
            },
          })
        },

    otpvernum:{
            ...Platform.select({
                ios: {
                    paddingTop:hp('1%'),
                    paddingLeft:hp('3.5%'),
                    fontSize:wp('3.7%'), 
                  
                },
                android: {
                    paddingTop:hp('1%'),
                    paddingLeft:hp('3.5%'),
                    fontSize:wp('4%'), 
                    
                },
              })
    },

    otpnum:{
            ...Platform.select({
                ios: {
                    marginTop:hp('1%'),
                    marginLeft:hp('1.5%'),
                    height:hp('10%'),
                    width:wp('14%'),
                    borderRadius:10,
                    backgroundColor:'#F5F5F4',
                },
                android: {
                    marginTop:hp('1%'),
                    marginLeft:hp('1.5%'),
                    height:hp('10%'),
                    width:wp('14%'),
                    borderRadius:10,
                    backgroundColor:'#F5F5F4',
                },
            })
        },

    otpinput:{
        ...Platform.select({
            ios: {
                marginLeft:hp('0.5%'),
                marginTop:hp('1%'),
                fontSize:wp('4.5%'),
            },
              
           
            android: {
                marginLeft:hp('0.5%'),
                marginTop:hp('0.5%'),
                fontSize:wp('5%'),
            },
            
            
          })
        },
       
    numinput:{
        ...Platform.select({
            ios: {
                marginLeft:hp('3.5%'),
                marginTop:hp('1%'),
                backgroundColor:'#F5F5F5',
                height:hp('5%'),
                width:wp('60%'),
                borderRadius:10,
            },
            android: {
                marginLeft:hp('3.5%'),
                marginTop:hp('1%'),
                backgroundColor:'#F5F5F5',
                height:hp('5%'),
                width:wp('60%'),
                borderRadius:10,
            },
        })
    },

    headertext3: {
      fontSize:wp('4%'),
      alignSelf:'center',
      marginTop:hp('2%'),
    },
  
  
  
  
  
  
  
  });
  