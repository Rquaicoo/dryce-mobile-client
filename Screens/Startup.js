import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ImageBackground, borderRadius,TouchableHighlight ,SafeAreaView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Home from './Home';
import Login from './Login';
import Register from './Register';


export default function Startup({navigation}) {
  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
       <SafeAreaView>
       <Image source={require('../assets/loginimg.jpg')} style={styles.loginimage}/>
       <Text  style={styles.headertext}>Welcome to Dryce</Text>
       <Text style={styles.headertext2}> Laundry App</Text>
       <Text style={styles.headertext3}>We offer laudry services to people</Text>
       <Text style={styles.headertext4}>across the country.Explore our </Text>
       <Text style={styles.headertext4}>services and get started today!</Text>

      {/* Sign in buttons */}
      <View style={{alignSelf:'center'}}>
      
      <TouchableHighlight style={styles.loginbuttons}>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.loginbutton} onPress={() => navigation.navigate("Register")}>
      <Text style={styles.register}> Register</Text>
      </TouchableOpacity >
      <Text style={styles.login} onPress={() => navigation.navigate("Login")} > Login</Text>
      </View>
      
      </TouchableHighlight>
      </View>

      




       </SafeAreaView>
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F4',
    height: "100%"
    
  },

  loginimage: {
    
    ...Platform.select({
      ios: {
        width:wp('93%'), 
        height:hp('53%'),
        borderRadius:35,
        alignItems:'center',
        alignSelf:'center',
        
      },
      android: {
        width:wp('93%'), 
        height:hp('55%'),
        borderRadius:35,
        alignItems:'center',
        alignSelf:'center',
        marginTop:hp('6%'),
      },
      
    })},
  loginbutton:{
      width: wp('44%'),
      height:hp('8.5%'),
      backgroundColor: 'white',
      borderRadius:20,
    },
  loginbuttons:{
    width: wp('85%'),
    height:hp('8.5%'),
    backgroundColor: '#E2E2DF',
    alignSelf:'center',
    marginTop:hp('5%'),
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
        marginTop:hp('6%'),
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








});
