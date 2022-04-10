import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ImageBackground, borderRadius,TextInput,TouchableHighlight ,SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather, AntDesign, FontAwesome5, EvilIcons, Ionicons , Entypo} from '@expo/vector-icons';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Login from './Login';




const sendPayload = (username, email, password, confirmedPassword) => {
  if (username == '' || email == '' || password == '' || confirmedPassword == '') {
    alert('Please fill in all fields')
  }
  else if (password != confirmedPassword) {
    alert('Passwords do not match')
  }
  else {
    fetch('https://dryce.herokuapp.com/api/auth/register/', {
      method: "POST",
      body: JSON.stringify({'username': username, 'email': email, 'password': password})
    })
    .then((response) => console.log(response.json))
  }
}

export default function Register({navigation}) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [secure, changeSecureState] = useState(true);
    const [equalpass, setEqualPass] = useState(false);

    const checkEqualPass = (password, confirmedPassword) => {
      if(password === confirmedPassword){
        setEqualPass(true);
      }
      else{
        setEqualPass(false);
      }
    }
      

  return (
    <ScrollView style={styles.container}>
       <StatusBar style="auto" />
       <SafeAreaView>
       
       <Text  style={styles.headertext}>Welcome to Dryce</Text>
       <Text style={styles.headertext2}> Laundry App</Text>
       <Text style={styles.headertext3}>Lore Ipsum is simply dummy text.</Text>
       <Text style={styles.headertext4}>Lore Ipsum is simply dummy text.</Text>

      {/* Login form */}
      <View>
        <TouchableHighlight style={styles.loginform}>
            <TextInput style={styles.forminput}
             placeholder='Email'
             onChangeText={(email) => setEmail(email)}
             defaultValue={email} />
        </TouchableHighlight>

        <TouchableHighlight style={styles.loginform1}>
            <View style={{flexDirection:'row'}}>
            <TextInput style={styles.forminput1}
             placeholder='Username'
             onChangeText={(username) => setUsername(username)}
             defaultValue={username} />
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
        <TouchableOpacity style={styles.loginbutton} onPress={() => {sendPayload(username, email, password, confirmedPassword)}}>
            <Text style={styles.loginbuttontext}>Register</Text>
        </TouchableOpacity>

        {/* signup button */}
        <Text onPress={() => navigation.navigate(Login)} style={{color:'#B2AEA9', alignSelf:'center', paddingTop:hp('5%')}}> Already a member? <Text style={{fontWeight:'bold'}}  > Login</Text> </Text>


        

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
      marginTop:hp('3%'),
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
        backgroundColor: '#0F94BD',
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
          marginTop:hp('1%'),
          
        },
        android: {
          fontSize:wp('10%'),
          alignSelf:'center',
          marginTop:hp('7%'),
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
  