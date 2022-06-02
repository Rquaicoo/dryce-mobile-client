import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ImageBackground,TextInput, transparent,borderRadius,Flatlist,TouchableHighlight ,SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather, AntDesign, FontAwesome5,FontAwesome, EvilIcons,MaterialCommunityIcons, Ionicons , Entypo} from '@expo/vector-icons';
import { SharedElement } from 'react-navigation-shared-element';


export default function Profile({navigation}) {
    const imageSource   = require('../assets/logo.png');
    const [general, changegeneralState] = useState(false);

  return (
    <View style={styles.container}>

   
   
       <StatusBar style="auto" />
       <SafeAreaView>
       
       <View>

                 <View style={{flexDirection:'row', marginTop:hp('2%'), marginLeft:wp('4%')}}>
                        <Feather name="arrow-left" size={25} color="black"  onPress={() => navigation.goBack()} />
                        <Text style={{fontWeight:'bold', paddingTop:hp('0.5%'),textAlign:'center',color:'black', flex:1,paddingRight:wp('10%')}}>Details</Text>
                </View>

                <View style={{alignItems:'center', paddingTop:hp('2%')}}>
                <SharedElement id="someUniqueId">
                <TouchableOpacity style={styles.profile}>
                    <Image source={imageSource} style={styles.logo}/>
                </TouchableOpacity>
                </SharedElement>
                 </View>

                


                 <View>
                     <Text style={styles.profiletext}> Collins Kofi </Text>
                     <Text style={styles.profiletext1}>@lins.x</Text>
                 </View>
        {/* Profile buttons */}
                    <View style={{flexDirection:'row', marginTop:hp('1%'),alignSelf:'center', marginRight:wp('5%')}}>
                        <TouchableHighlight style={styles.button1} onPress={() => changegeneralState(!general)}>
                            <Text style={styles.buttontext}>General</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.button} onPress={() => changegeneralState(!general)}>
                            <Text style={styles.buttontext}>Edit Profile</Text>
                        </TouchableHighlight>
                        </View>

        {/* General */}
        {!general ?
        (
                    <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                      <View style={{marginTop:hp('1%')}}>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'), color:'grey'}}> Name</Text>
                        <TouchableHighlight style={styles.general}>
                            <Text style={styles.buttontext1}>Collins Kofi Dryce</Text>
                        </TouchableHighlight>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'), color:'grey'}}> Username</Text>
                        <TouchableHighlight style={styles.general}>
                            <Text style={styles.buttontext1}>@lins.x</Text>
                        </TouchableHighlight>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'), color:'grey'}}> Password</Text>
                        <TouchableHighlight style={styles.general}>
                            <Text style={styles.buttontext1}>.............</Text>
                        </TouchableHighlight>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'), color:'grey'}}> Email</Text>
                        <TouchableHighlight style={styles.general}>
                            <Text style={styles.buttontext1}>collinscoffie22@gmail.com</Text>
                        </TouchableHighlight>
                        
                        </View>

                        </ScrollView>
        )


                        :(
                        <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                      <View style={{marginTop:hp('1%')}}>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'), color:'grey'}}> Name</Text>
                        <TouchableHighlight style={styles.general}>
                            <TextInput placeholder='Collins Kofi Dryce'   placeholderTextColor="black" style={{paddingLeft:wp('4%'), width:wp('80%'), }}/>
                        </TouchableHighlight>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'), color:'grey'}}> Username</Text>
                        <TouchableHighlight style={styles.general}>
                        <TextInput placeholder='@lins.x'   placeholderTextColor="black" style={{marginLeft:wp('4%'), width:wp('80%'), }}/>
                        </TouchableHighlight>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'), color:'grey'}}> Password</Text>
                        <TouchableHighlight style={styles.general}>
                        <TextInput placeholder='.................'   placeholderTextColor="black" style={{marginLeft:wp('4%'), width:wp('80%'), }}/> 
                        </TouchableHighlight>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'),color:'grey'}}> Email</Text>
                        <TouchableHighlight style={styles.general}>
                        <TextInput placeholder='collinscoffie22@gmail.com'   placeholderTextColor="black" style={{paddingLeft:wp('4%'), width:wp('80%'), }}/>
                        </TouchableHighlight>
                        
                        </View>

                        </ScrollView>
                        )}
    



       </View>

       </SafeAreaView>
   

    </View>
  );
}

Profile.sharedElements = (navigation, otherNavigation, showing) => {
    return ['someUniqueId']
  }
const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                flex: 1,
                 backgroundColor: '#F5F5F4',
            },
            android: {
                flex: 1,
                backgroundColor: '#F5F5F4',
            },

        })
    },

   

    profile:{
        ...Platform.select({
            ios: {
                height:120,
                width:120,
                borderRadius:100,
               alignItems:'center',
               justifyContent:'center',
                backgroundColor:'#fff',
            },
            android: {
                height:120,
                width:120,
              borderRadius:100,
              marginLeft:wp('30%'),
              backgroundColor:'#fff',
              marginTop:hp('5%'),
            },
            
          })
        
    },
    logo:{
        width:80,
        height:80,
        marginLeft:wp('0.1%'),
    },
    
    profiletext:{
        fontSize:wp('4%'),
        fontWeight:'bold',
        textAlign:'center',
        marginTop:hp('2%'),
    },
    profiletext1:{
        fontSize:wp('3%'),
        textAlign:'center',
    },
  
    button:{
        ...Platform.select({
            ios: {
                height:hp('5%'),
                width:wp('30%'),
                borderRadius:15,
                backgroundColor:'#14a8ee',
                marginLeft:wp('5%'),
                marginTop:hp('2%'),
                justifyContent:'center',
                alignItems:'center',
            },
            android: {
                height:hp('5%'),
                width:wp('30%'),
                borderRadius:15,
                backgroundColor:'#14a8ee',
                marginLeft:wp('5%'),
                marginTop:hp('2%'),
                justifyContent:'center',
               
            },

        })

    },

    button1:{
        ...Platform.select({
            ios: {
                height:hp('5%'),
                width:wp('30%'),
                borderRadius:15,
                backgroundColor:'#bbdff0',
                marginLeft:wp('5%'),
                marginTop:hp('2%'),
                justifyContent:'center',
                alignItems:'center',
            },
            android: {
                height:hp('5%'),
                width:wp('30%'),
                borderRadius:15,
                backgroundColor:'#bbdff0',
                marginLeft:wp('5%'),
                marginTop:hp('2%'),
                justifyContent:'center',
               
            },

        })

    },
    
    buttontext:{
        fontSize:wp('3.5%'),
        color:'#fff',
        fontWeight:'bold',
    },

    buttontext1:{
        fontSize:wp('3.5%'),
        color:'black',
        marginLeft:wp('4%'),
    },

    general:{
        ...Platform.select({
            ios: {
                height:hp('7%'),
                width:wp('90%'),
                borderRadius:15,
                backgroundColor:'#e9edf0',
                marginLeft:wp('5%'),
                marginTop:hp('1%'),
                justifyContent:'center',
               
            },
            android: {
                height:hp('7%'),
                width:wp('90%'),
                borderRadius:15,
                backgroundColor:'#bbdff0',
                marginLeft:wp('5%'),
                marginTop:hp('1%'),
                justifyContent:'center',
                alignItems:'center',
            },

        })

    },

  });
  