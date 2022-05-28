import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput,TouchableHighlight ,SafeAreaView, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather, Entypo} from '@expo/vector-icons';
import axios from 'axios';
import Login from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage'






export default function Register({navigation}) {
  
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [secure, changeSecureState] = useState(true);
    const [equalpass, setEqualPass] = useState(false);

    const [validEmail, setValidEmail] = useState(false);
    const [validUsername, setValidUsername] = useState(false);

    const [credentialsCorrect, setCredentialsCorrect] = useState(true);
    const [loading, setLoading] = useState(false);

    const sendPayload = (username, email, password, confirmedPassword) => {
      setLoading(true);
      const payload = {
        username: username,
        email: email,
        password: password,
      }
      if (username == '' || email == '' || password == '' || confirmedPassword == '') {
        setLoading(false);
        alert('Please fill in all fields')
      }
      else if (password != confirmedPassword) {
        setLoading(false);
        alert('Passwords do not match')
      }
      else {
        axios 
        .post('https://dryce-staging.herokuapp.com/api/auth/register/', payload)
        .then(response => {
          const {token} = response.data;
  
          axios.defaults.headers.common.Authorization = `Token ${token}`;
  
          AsyncStorage.setItem('token', token)
  
          navigation.navigate('OTP', {email: email})
        })
        .catch(error => {
          console.log(error);
          setCredentialsCorrect(false);
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        })
      }
    }


    const checkEmail = (email) => {
      if (email == '') {
        setValidEmail(false);
      }
      else {
        axios
        .post('https://dryce-staging.herokuapp.com/api/auth/validate_email/', {email: email})
        .then(response => {
          if (response.status == 200) {
            setValidEmail(true);
          }
          else {
            setValidEmail(false);
          }
        })
        .catch(error => {
          console.log(error);
          setValidEmail(false);
        })
      }
    }

    const checkUsername = (username) => {
      if (username == '') {
        setValidUsername(false);
      }
      else {
        axios
        .post('https://dryce-staging.herokuapp.com/api/auth/validate_username/', {username: username})
        .then(response => {
          if (response.status == 200) {
            setValidUsername(true);
          }
          else if (response.status == 400) {
            setValidUsername(false);
          }
        })
        .catch(error => {
          console.log(error);
          setValidUsername(false);
        })
      }
    }


    const checkEqualPass = (password, confirmedPassword) => {
      if(password === confirmedPassword){
        setEqualPass(true);
      }
      else{
        setEqualPass(false);
      }
    }

    useEffect(() => {
      setTimeout(() => {
        checkEmail(email);
        checkUsername(username);
        checkEqualPass(password, confirmedPassword);
      }, 500);
    }, [email, username, password, confirmedPassword]);

      

  return (
    <ScrollView style={styles.container}>
       <StatusBar style="auto" />
       <SafeAreaView>
       
       <Text  style={styles.headertext}>Welcome to Dryce</Text>
       <Text style={styles.headertext2}> Laundry App</Text>
       <Text style={styles.headertext3}>Sign up for dryce today.</Text>

      {!credentialsCorrect ?
     (  <View style={{backgroundColor: "#14a8ee", width: "80%", alignSelf: "center", margin: "5%", padding:2, borderRadius: 10}}>
          <Text style={styles.headertext4}>Your email or username already exists</Text>
       </View>) : null}
       

      {/* Login form */}
      <View>
        <TouchableHighlight style={styles.loginform1}>
          <View style={{flexDirection:'row'}}>
            <TextInput style={styles.forminput1}
             placeholder='Email'
             onChangeText={(email) => {setEmail(email); checkEmail(email)}}
             defaultValue={email} />
            { validEmail ? 
            (<Feather name="check" size={22} color="green" style={{paddingTop:hp('2.7%')}} />) :
            (<Entypo name="cross" size={22} color="red" style={{paddingTop:hp('2.7%')}}  />)
            }
          </View>
             
        </TouchableHighlight>

        <TouchableHighlight style={styles.loginform1}>
            <View style={{flexDirection:'row'}}>
            <TextInput style={styles.forminput1}
             placeholder='Username'
             onChangeText={(username) => {setUsername(username); checkUsername(username)}}
             defaultValue={username} />

          { validUsername ? 
            (<Feather name="check" size={22} color="green" style={{paddingTop:hp('2.7%')}} />) :
            (<Entypo name="cross" size={22} color="red" style={{paddingTop:hp('2.7%')}}  />)
            }
            </View>
            
        </TouchableHighlight>

        <TouchableHighlight style={styles.loginform1}>
            <View style={{flexDirection:'row'}}>
            <TextInput style={styles.forminput1} placeholder='Password'
            secureTextEntry={secure}
            onChangeText={(password) => {setPassword(password); checkEqualPass(password, confirmedPassword)}}
             defaultValue={password} />
            { !secure ? 
            (<Feather name="eye" size={20} color="#403D39" style={{paddingTop:hp('2.7%')}} onPress={() => changeSecureState(!secure)} />) :
            (<Feather name="eye-off" size={20} color="#403D39" style={{paddingTop:hp('2.7%')}} onPress={() => changeSecureState(!secure)}  />)
            }
            </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.loginform1}>
            <View style={{flexDirection:'row'}}>
            <TextInput style={styles.forminput1} 
            placeholder='Verify Password'
            secureTextEntry={secure} 
            onChangeText={(confirmedPassword) => {setConfirmedPassword(confirmedPassword); checkEqualPass(password, confirmedPassword)}}
            />
            { equalpass ? 
            (<Feather name="check" size={22} color="green" style={{paddingTop:hp('2.7%')}} />) :
            (<Entypo name="cross" size={22} color="red" style={{paddingTop:hp('2.7%')}}  />)
            }
            </View>
        </TouchableHighlight>


        {/* login button */}
        {loading ?
        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: hp('5%')}}>
          <ActivityIndicator size="large" color="#14a8ee" />
        </View>
        :
        <TouchableOpacity style={styles.loginbutton} onPress={() => {sendPayload(username, email, password, confirmedPassword);}}>
            <Text style={styles.loginbuttontext} >Register</Text>
        </TouchableOpacity>}

        {/* signup button */}
        <Text onPress={() => navigation.navigate("Login")} style={{color:'#B2AEA9', alignSelf:'center', paddingTop:hp('5%')}}> Already a member? <Text style={{fontWeight:'bold'}} > Login</Text> </Text>

      </View>
       </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F4',
      
    },
  
    loginform:{
      width: wp('85%'),
      height:hp('8.5%'),
      backgroundColor: 'white',
      alignSelf:'center',
      marginTop:hp('4%'),
      borderRadius:20,
    },
    forminput:{
        width: wp('75%'),
        height:hp('8.5%'),
        marginLeft:wp('5%'),
    },
    forminput1:{
        width: wp('65%'),
        height:hp('8.5%'),
        marginLeft:wp('5%'),
    },
    loginform1:{
        width: wp('85%'),
        height:hp('8.5%'),
        backgroundColor: 'white',
        alignSelf:'center',
        marginTop:hp('2%'),
        borderRadius:20,
      },
      loginbuttontext:{
        fontSize:wp('5%'),
        alignSelf:'center',
        marginTop:hp('2.9%'),
        color:'white',
        fontWeight:'bold',
      },
      loginbutton:{
        width: wp('85%'),
        height:hp('8.5%'),
        backgroundColor: '#14a8ee',
        alignSelf:'center',
        marginTop:hp('5%'),
        borderRadius:20,
      },
  
    headertext: {
      ...Platform.select({
        ios: {
          fontSize:wp('8%'),
          alignSelf:'center',
          fontWeight:'bold',
          marginTop:hp('4%'),
          
        },
        android: {
          fontSize:wp('9%'),
          alignSelf:'center',
          marginTop:hp('9%'),
          fontWeight:'bold',
        },
        
      })
      
    },
    headertext2: {
      ...Platform.select({
        ios: {
          fontSize:wp('8%'),
          alignSelf:'center',
          marginTop:hp('0.2%'),
          fontWeight:'bold',
          color:'#2B2B27',
        },
        android: {
          fontSize:wp('9%'),
          alignSelf:'center',
          marginTop:hp('0.1%'),
          fontWeight:'bold',
          color:'#2B2B27',
        },
        
      })
      
    },
    headertext3: {
      fontSize:wp('4%'),
      alignSelf:'center',
      marginTop:hp('3%'),
      marginBottom:hp('3%'),
    },
    headertext4: {
      fontSize:wp('4%'),
      alignSelf:'center',
      marginTop:hp('0.1%'),
      color: '#ffffff',
    },
    register:{
      alignSelf:'center',
      fontSize:wp('5%'),
      paddingTop:hp('2.9%'),
      
    },
    login:{
      alignSelf:'center',
      fontSize:wp('5%'),
      paddingLeft:hp('5.7%'),
    },
    
    socialmedia:{
        width:wp('20%'),
        height:hp('8.5%'),
        backgroundColor:'white',
        borderRadius:20,
        alignSelf:'center',
        marginTop:hp('2%'),
        justifyContent:'center',
        alignItems:'center',
    },
  
  
  
  
  
  
  
  });
  