import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput,TouchableHighlight ,SafeAreaView, TouchableOpacity, ActivityIndicator, Modal, Pressable} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather, AntDesign, Entypo, EvilIcons, Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

import Tabs from '../navigations/Tabs';



export default function Login({navigation}) {
  
  const sendPayload = (username, password) => {
    setLoading(true);
    const payload = {
      username: username,
      password: password,
    }
    if (username == '' || password == '') {
      setLoading(false);
      alert('Please fill in all fields')
    }
    else {
      axios 
      .post('https://dryce-staging.herokuapp.com/api/auth/login/', payload)
      .then(response => {
        const {token} = response.data;
        
        AsyncStorage.setItem('token', token);
        navigation.navigate('Tabs');
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

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secure, changeSecureState] = useState(true);
    const [credentialsCorrect, setCredentialsCorrect] = useState(true);
    const [loading, setLoading] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
       <SafeAreaView>
       
       <Text  style={styles.headertext}>Welcome to Dryce</Text>
       <Text style={styles.headertext2}> Laundry App</Text>
       <Text style={styles.headertext3}>Please sign in to continue.</Text>

       {!credentialsCorrect ?
     (  <View style={{backgroundColor: "#14a8ee", width: "80%", alignSelf: "center", margin: "5%", padding:2, borderRadius: 10}}>
          <Text style={styles.headertext4}>Your username or password is incorrect</Text>
       </View>) : null}
      {/* Login form */}
      <View>
        <TouchableHighlight style={styles.loginform}>
            <TextInput style={styles.forminput} 
            placeholder='Username'
            onChangeText={(username) => {setUsername(username)}} />
        </TouchableHighlight>

        <TouchableHighlight style={styles.loginform1}>
            <View style={{flexDirection:'row'}}>
            <TextInput style={styles.forminput1} placeholder='Password'
            secureTextEntry={secure}
            onChangeText={(password) => {setPassword(password)}} />
            { !secure ? 
            (<Feather name="eye" size={20} color="#403D39" style={{paddingTop:hp('2.7%')}} onPress={() => changeSecureState(!secure)}/>) :
            (<Feather name="eye-off" size={20} color="#403D39" style={{paddingTop:hp('2.7%')}}   onPress={() => changeSecureState(!secure)}/>)
            }
            </View>
        </TouchableHighlight>

        {loading ?
        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: hp('5%')}}>
          <ActivityIndicator size="large" color="#14a8ee" />
        </View>
        :
        null
        }

        <Text style={{color:'#B2AEA9', alignSelf:'center', paddingTop:hp('3%')}} onPress={() => {setModalVisible(true)}}> Forgot Password?</Text>

        {/* login button */}
        <TouchableOpacity style={styles.loginbutton} onPress={() => sendPayload(username, password)}>
            <Text style={styles.loginbuttontext}>Login</Text>
        </TouchableOpacity>
        
        
        {/* social media buttons 
        <Text style={{color:'#B2AEA9', alignSelf:'center', paddingTop:hp('3%')}}> Or continue with </Text>

       
        <View style={{flexDirection:'row', justifyContent:'space-around', paddingTop:hp('3%')}}>
        <TouchableOpacity style={styles.socialmedia}  onPress={ ()=> navigation.navigate("Home")} >
            <Text style={styles.socialmediaicon}> <AntDesign name="google" size={24} color="black" /></Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.socialmedia}>
            <Text style={styles.socialmediaicon}> <AntDesign name="apple1" size={24} color="black" /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialmedia}>
            <Text style={styles.socialmediaicon}> <FontAwesome5 name="facebook" size={24} color="black" /></Text>
        </TouchableOpacity>

        </View>
    */}

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }} 
      
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
             <Entypo name="cross" size={22} color="black"  />
            </Pressable>
            <View style={{flexDirection: "row"}}>
          <Text style={{fontWeight: "300", fontSize: 27}}>Forgot password?</Text>
          
            </View>
          <Text style={{fontWeight: "300", fontSize: 15, paddingTop: hp('2%')}}>Enter your email below and we'll send you an OTP</Text>

          <TouchableHighlight style={{width: wp('85%'),
            height:hp('8.5%'),
            backgroundColor: 'white',
            alignSelf:'center',
            marginTop:hp('2%'),
            borderRadius:20,}}>
            <TextInput style={{width: wp('75%'),height:hp('8.5%'),marginLeft:wp('2%'), borderColor: "black", borderWidth: 1, borderRadius: 20, textAlign: "center"}}
            placeholder='Email'
            onChangeText={() => {setUsername()}} />
        </TouchableHighlight>
        <TouchableOpacity style={styles.loginbutton} onPress={() => {}}>
            <Text style={styles.loginbuttontext}>Submit</Text>
        </TouchableOpacity>

            
          </View>
        </View>
      </Modal>

        <Text onPress={ ()=> navigation.navigate("Register")}  style={{color:'#B2AEA9', alignSelf:'center', paddingTop:hp('5%')}}>Not a Member already? <Text   style={{fontWeight:'bold'}}>Register</Text> </Text>

      </View>

      




       </SafeAreaView>
      
     
    </View>
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
      marginTop:hp('5%'),
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
        marginTop:hp('2.5%'),
        color:'white',
        fontWeight:'bold',
      },
      loginbutton:{
        width: wp('85%'),
        height:hp('8.5%'),
        backgroundColor: '#14a8ee',
        alignSelf:'center',
        marginTop:hp('2%'),
        borderRadius:20,
      },
  
    headertext: {
      ...Platform.select({
        ios: {
          fontSize:wp('8%'),
          alignSelf:'center',
          marginTop:hp('6%'),
          fontWeight:'bold',
          
        },
        android: {
          fontSize:wp('10%'),
          alignSelf:'center',
          marginTop:hp('12%'),
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
          fontSize:wp('10%'),
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
      marginTop:hp('2%'),
    },
    headertext4: {
      fontSize:wp('4%'),
      alignSelf:'center',
      marginTop:hp('0.1%'),
      color: "white"
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

    centeredView: {
      justifyContent: "center",
      alignItems: "center",
      
     
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: "100%",
      height: "100%",
      marginTop: 450,
    },
    button: {
      borderRadius: 20,
      padding: 1,
      height: "auto"
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#ffffff",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  
  
  
  });
  