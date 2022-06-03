import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ActivityIndicator,TextInput, transparent,borderRadius,Flatlist,TouchableHighlight ,SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather, AntDesign, FontAwesome5,FontAwesome, EvilIcons,MaterialCommunityIcons, Ionicons , Entypo} from '@expo/vector-icons';
import { SharedElement } from 'react-navigation-shared-element';
import  AsyncStorage  from '@react-native-async-storage/async-storage';


export default function Profile({navigation}) {
    const imageSource   = require('../assets/logo.png');

    const [generalState, setGeneralState] = useState("view")
    const changeGeneralState = (state) => {
        if (state == "edit") {
            setGeneralState("edit")
        }
        else if (state == "view") {
            setGeneralState("view")
        }
    }

    const [loading, setLoading] = useState(false);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [token, setToken] = useState("")

    useEffect(() => {
       getProfile()
     } , []);


    const refresh = () => {
       getProfile()
    }

    const getProfile = () => {
        AsyncStorage.getItem('token').then((token) => {
            if(token) {
                setToken(token)
                fetch('https://dryce-staging.herokuapp.com/api/profile/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`
                },
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    setEmail(responseJson.user.email)
                    setUsername(responseJson.user.username)

                    setName(responseJson.regular_user.name)
                    setPhone(responseJson.regular_user.phone)
                    setAddress(responseJson.regular_user.address)
                })
                .catch(error => {
                    console.log(error)
                })
            }
            else {
                navigation.navigate('Login');
            }
        });
    }

const updateProfile = () => {
    setLoading(true)
    fetch('https://dryce-staging.herokuapp.com/api/profile/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
            },
            body: JSON.stringify({
                name: name,
                address: address,
                phone: phone,
                })
            })
            .then((response) => {
                if(response.status == 200) {
                    setLoading(false)
                    alert("Profile updated successfully")
                    refresh()
                    changeGeneralState("view")
                }
                else if (response.status == 400) {
                    setLoading(false)
                    alert("You are unauthorized to perform this action")
                }
                else {
                    setLoading(false)
                    alert("Something went wrong")
                }
            })
            .catch(error => {
                setLoading(false)
                alert("Something went wrong")
                console.log(error)
            })
        }



  return (
    <ScrollView style={styles.container}>

   
   
       <StatusBar style="auto" />
       <SafeAreaView>
       
       <View>

                 <View style={styles.profstyle}>
                        <Feather name="arrow-left" size={25} color="black"  onPress={() => navigation.goBack()} />
                        <Text style={styles.proftext}>Details</Text>
                </View>

                <View style={{alignItems:'center', paddingTop:hp('2%')}}>
                <SharedElement id="someUniqueId">
                <TouchableOpacity style={styles.profile}>
                    <Image source={imageSource} style={styles.logo}/>
                </TouchableOpacity>
                </SharedElement>
                 </View>

                


                 <View>
                     {name == undefined ?
                    <Text style={styles.profiletext}> Enter a name</Text>:
                     <Text style={styles.profiletext}> {name} </Text>} 
                     <Text style={styles.profiletext1}>@{username}</Text>
                 </View>
        {/* Profile buttons */}
                    <View style={{flexDirection:'row', marginTop:hp('2%'),alignSelf:'center', marginRight:wp('5%')}}>
                        <TouchableHighlight style={generalState=="view" ? styles.button : styles.button1} onPress={() => changeGeneralState("view")}>
                            <Text style={ styles.buttontext}>General</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={generalState=="edit" ? styles.button : styles.button1} onPress={() => {changeGeneralState("edit")}}>
                            <Text style={styles.buttontext}>Edit Profile</Text>
                        </TouchableHighlight>
                        </View>

        {/* General */}
        {generalState == "view" ?
        (
                    <View vertical={true} showsVerticalScrollIndicator={false}>
                      <View style={{marginTop:hp('2%')}}>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'), color:'grey'}}> Name</Text>
                        <TouchableHighlight style={styles.general}>
                            <Text style={styles.buttontext1}>{name}</Text>
                        </TouchableHighlight>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'), color:'grey'}}> Username</Text>
                        <TouchableHighlight style={styles.general}>
                            <Text style={styles.buttontext1}>@{username}</Text>
                        </TouchableHighlight>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'), color:'grey'}}> Password</Text>
                        <TouchableHighlight style={styles.general}>
                            <Text style={styles.buttontext1}>.............</Text>
                        </TouchableHighlight>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'), color:'grey'}}> Email</Text>
                        <TouchableHighlight style={styles.general}>
                            <Text style={styles.buttontext1}>{email}</Text>
                        </TouchableHighlight>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'), color:'grey'}}> Phone number</Text>
                        <TouchableHighlight style={styles.general}>
                            <Text style={styles.buttontext1}>{phone}</Text>
                        </TouchableHighlight>
                        </View>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'), color:'grey'}}> Address</Text>
                        <TouchableHighlight style={styles.general}>
                            <Text style={styles.buttontext1}>{address}</Text>
                        </TouchableHighlight>
                            <View style={{marginBottom:hp('15%')}}>
                            </View>
                        </View>
        )


                        :(
                        <View vertical={true} showsVerticalScrollIndicator={false}>
                      <View style={{marginTop:hp('2%')}}>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'), color:'grey'}}> Name</Text>
                        <TouchableHighlight style={styles.general}>
                            <TextInput placeholder="e.g Collins Kofi Dryce"   placeholderTextColor="black" style={{paddingLeft:wp('2%'), width:wp('80%'), }} onChangeText={(name) => {setName(name)}} />
                        </TouchableHighlight>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'), color:'grey'}}> Username</Text>
                        <TouchableHighlight style={styles.general}>
                        <TextInput color="black" style={{marginLeft:wp('2%'), width:wp('80%'), }} selectTextOnFocus={false} editable={false} defaultValue={'@'+username} />
                        </TouchableHighlight>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'), color:'grey'}}> Password</Text>
                        <TouchableHighlight style={styles.general}>
                        <TextInput placeholder='.................'   placeholderTextColor="black" style={{marginLeft:wp('2%'), width:wp('80%'), }} selectTextOnFocus={false} editable={false} /> 
                        </TouchableHighlight>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'),color:'grey',}}> Email</Text>
                        <TouchableHighlight style={styles.general}>
                        <TextInput defaultValue={email} color="black" style={{paddingLeft:wp('2%'), width:wp('80%'), }} selectTextOnFocus={false} editable={false}  />
                        </TouchableHighlight>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'),color:'grey',}}> Address</Text>
                        <TouchableHighlight style={styles.general}>
                        <TextInput placeholder='eg. Ashalaja Heights, Ground floor' defaultValue={address}   placeholderTextColor="black" style={{paddingLeft:wp('2%'), width:wp('80%'), }} onChangeText={(address) => {setAddress(address)}} />
                        </TouchableHighlight>
                        <Text style={{marginLeft:wp('4%'),marginTop:hp('2%'),color:'grey',}}> Phone number</Text>
                        <TouchableHighlight style={styles.general}>
                        <TextInput placeholder='024xxxxxxxxx'  defaultValue={phone} placeholderTextColor="black" style={{paddingLeft:wp('2%'), width:wp('80%'), }} onChangeText={(phone) => {setPhone(phone)}}/>
                        </TouchableHighlight>
                        
                        {loading ?
                        (<View style={{alignItems: 'center', justifyContent: 'center', marginTop:hp('2%'), marginBottom:hp('15%')}}>
                            <ActivityIndicator size="large" color="#14a8ee" />
                          </View>) :
                        (<TouchableOpacity style={{width: wp('32%'), height:hp('6%'), backgroundColor: '#14a8ee', alignSelf: 'center', justifyContent: "center", marginTop:hp('2%'), marginBottom:hp('15%'), borderRadius:20,}} onPress={() => updateProfile()}>
                          <Text style={{fontSize:wp('4%'), alignSelf:'center', color:'white', fontWeight:'bold',}}>Submit</Text>
                      </TouchableOpacity>)}
                        
                        </View>

                        </View>
                        )}
    
       </View>

       </SafeAreaView>
   

    </ScrollView>
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
    profstyle: {
        ...Platform.select({
            ios: {
                flexDirection:'row', 
                marginLeft:wp('4%'),
            },
            android: {
                flexDirection:'row', 
                marginLeft:wp('4%'),
                marginTop:hp('4%')
            },

        })
       
    },

    proftext: {
        ...Platform.select({
            ios: {
                fontWeight:'bold', 
                paddingTop:hp('0.5%'),
                textAlign:'center',
                color:'black', 
                flex:1,
                paddingRight:wp('10%')
            },
            android: {
                fontWeight:'bold', 
                paddingTop:hp('0.5%'),
                textAlign:'center',
                 color:'black', 
                 flex:1,
                 paddingRight:wp('10%'),
                 fontSize:20,
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
              backgroundColor:'#fff',
              alignItems:'center',
               justifyContent:'center'
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
                alignItems:'center',
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
                alignItems:'center',
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
                backgroundColor:'white',
                marginLeft:wp('5%'),
                marginTop:hp('1%'),
                justifyContent:'center',
               
            },
            android: {
                height:hp('7%'),
                width:wp('90%'),
                borderRadius:15,
                backgroundColor:'white',
                marginLeft:wp('5%'),
                marginTop:hp('1%'),
                justifyContent:'center',
                
            },

        })

    },

  });
  