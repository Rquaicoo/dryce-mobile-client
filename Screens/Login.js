import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ImageBackground, borderRadius,TextInput,TouchableHighlight ,SafeAreaView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather, AntDesign, FontAwesome5, EvilIcons, Ionicons } from '@expo/vector-icons';
import Register from './Register';

const sendPayload = (username, password) => {
  if (username == '' || password == '') {
    alert('Please fill in all fields')
  }
  else {

    fetch('localhost:8000/auth/login', {
      method: "POST",
      body: JSON.stringify({'username': username, 'password': password})
    })
    .then((response) => console.log(response.json))
  }
}

export default function Login({navigation}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secure, changeSecureState] = useState(true);

  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
       <SafeAreaView>
       
       <Text  style={styles.headertext}>Welcome to Dryce</Text>
       <Text style={styles.headertext2}> Laundry App</Text>
       <Text style={styles.headertext3}>Lore Ipsum is simply dummy text.</Text>
       <Text style={styles.headertext4}>Lore Ipsum is simply dummy text.</Text>
       <Text style={styles.headertext4}>Lore Ipsum is simply dummy text.</Text>

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
        <Text style={{color:'#B2AEA9', alignSelf:'center', paddingTop:hp('3%')}}> Forgot Password?</Text>

        {/* login button */}
        <TouchableOpacity style={styles.loginbutton} onPress={() => sendPayload(username, password)}>
            <Text style={styles.loginbuttontext}>Login</Text>
        </TouchableOpacity>

        <Text style={{color:'#B2AEA9', alignSelf:'center', paddingTop:hp('3%')}}> Or continue with </Text>

        {/* social media buttons */}
        <View style={{flexDirection:'row', justifyContent:'space-around', paddingTop:hp('3%')}}>
        <TouchableOpacity style={styles.socialmedia}>
            <Text style={styles.socialmediaicon}> <AntDesign name="google" size={24} color="black" /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialmedia}>
            <Text style={styles.socialmediaicon}> <AntDesign name="apple1" size={24} color="black" /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialmedia}>
            <Text style={styles.socialmediaicon}> <FontAwesome5 name="facebook" size={24} color="black" /></Text>
        </TouchableOpacity>

        </View>


        <Text onPress={() => navigation.navigate(Register)} style={{color:'#B2AEA9', alignSelf:'center', paddingTop:hp('5%')}}>Not a Member already? <Text   style={{fontWeight:'bold'}}>Register</Text> </Text>


        

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
        backgroundColor: '#0F94BD',
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
  