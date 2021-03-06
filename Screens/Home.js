import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ImageBackground, transparent,borderRadius,ActivityIndicator,BackHandler ,SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MaterialIcons, AntDesign, FontAwesome5,FontAwesome, EvilIcons,MaterialCommunityIcons, Ionicons , Entypo} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SharedElement } from 'react-navigation-shared-element'
import  AsyncStorage  from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
const imageSource   = require('../assets/logo.png');

    const [token, setToken] = useState('');
    const [vendors, setVendors] = useState(null);
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState('');
    const logout = () => {
        fetch('https://dryce-staging.herokuapp.com/api/auth/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then(AsyncStorage.removeItem('token'))
        .then(navigation.navigate('Login'))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        AsyncStorage.getItem('token').then(value => {
            setToken(value);
            fetchVendors(value);
            getProfile(value);
        });
    }, []);

    const fetchVendors = (token) => {
        fetch('https://dryce-staging.herokuapp.com/vendor/business_registration/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        })
        .then(res => res.json())
        .then(data => {
            setVendors(data);
            setLoading(false);
        })
        .catch(err => console.log(err))
    }

    const getProfile = (token) => {
                fetch('https://dryce-staging.herokuapp.com/api/profile/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`
                },
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    setUsername(responseJson.user.username)
                })
                .catch(error => {
                    console.log(error)
                }) 
    }

    //quit app when back button is pressed
    useEffect(() => {   
        const backAction = () => {
            BackHandler.exitApp();
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);

    


  return (

    <ScrollView style={styles.container}>
       <StatusBar style="auto" />
       <SafeAreaView>
       
       <View style={{marginLeft:wp('4%')}}>
           <View style={{flexDirection: "row", flex: 6}}>
                <View style={{flexDirection:'row', flex: 5}}>
                    {/* <Ionicons name="menu-outline" size={24} color="black" style={styles.header} /> */}
                    <Text style={styles.header} > Welcome <Text style={styles.headercolor}> {username}</Text> </Text>
                </View>

               <View style={{flex:1}}>   
                <Text style={styles.profile} onPress={() => {logout()}}>
                     Logout
                </Text> 
               </View>
               
            </View>
    {/* Headers */}
            {/* <Text style={styles.header} > Hello <Text style={styles.headercolor}> Collins</Text> </Text> */}
            <Text style={styles.header1}> What service{'\n'} do you need today?</Text>

     

        {/* Categories */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection:'row', marginTop:hp('5%'),}}>
            <TouchableOpacity style={styles.categories}>
            <Text style={styles.headbanner}> Subscribe to <Text style={{color:'#0090ff'}}>Dryce+</Text> to get {'\n'} monthly worth of laundry</Text>
            {/* <Image source={require('../assets/img.jpg')} style={styles.imagecat} /> */}
            </TouchableOpacity>
           
            </View>
        </ScrollView>


         {/* Main */}

            <View style={{flexDirection:'row', marginTop:hp('5%'), alignSelf:'center', }}>
            <TouchableOpacity style={styles.maincategories} onPress={() => {navigation.navigate("Vendors", {"service": "Wash & Iron"})}} >
            <Ionicons name="shirt" size={40} color="#14a8ee"  style={{textAlign:'center', marginTop:hp('4%')}}/>
            <Text style={{fontWeight:'bold', fontSize:wp('4%'),textAlign:'center',paddingTop:hp('2%')   }}> Wash & Iron</Text>
            {/* <Image source={require('../assets/img.jpg')} style={styles.imagecat} /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.maincategories} onPress={() => {navigation.navigate("Vendors", {"service": "Dry Wash"})}}>
            <FontAwesome name="shopping-bag" size={40} color="#14a8ee"  style={{textAlign:'center',marginTop:hp('4%')}} />
            <Text style={{fontWeight:'bold', fontSize:wp('4%'),textAlign:'center',paddingTop:hp('2%')   }}> Dry Wash</Text>
            {/* <Image source={require('../assets/img.jpg')} style={styles.imagecat} /> */}
            </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', marginTop:hp('2%'), marginBottom:hp('5%') ,alignSelf:'center', marginRight:wp('5%') }} >
            <TouchableOpacity style={styles.maincategories} onPress={() => {navigation.navigate("Vendors", {"service": "Ironing"})}}>
            <MaterialCommunityIcons name="shoe-print" size={40} color="#14a8ee"  style={{textAlign:'center',marginTop:hp('4%')}}/>
            <Text style={{fontWeight:'bold', fontSize:wp('4%'),textAlign:'center',paddingTop:hp('2%')   }}> Ironing</Text>
            {/* <Image source={require('../assets/img.jpg')} style={styles.imagecat} /> */}
            </TouchableOpacity>
            
            <LinearGradient colors={['#43D4FF', '#38ABFD', '#0090ff']} style={styles.gradient}>
            <TouchableOpacity style={styles.maincategoriess}>
            <Entypo name="plus" size={50} color="white"  style={{textAlign:'center', marginTop:hp('4%')}}/>
            <Text style={{fontWeight:'bold', fontSize:wp('4%'),textAlign:'center',paddingTop:hp('1%'),color:'white'}}> Dryce+</Text>
            {/* <Image source={require('../assets/img.jpg')} style={styles.imagecat} /> */}
            </TouchableOpacity>
            </LinearGradient>
            </View>

       </View>

       </SafeAreaView>
    </ScrollView>
  );
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

     headbanner:{
        ...Platform.select({
        ios: {
         fontWeight:'bold', 
         fontSize:wp('4.5%'),
         marginLeft:wp('5%'),
         paddingTop:hp('2.5%'), 
        },
        android: {
         fontWeight:'bold', 
         fontSize:wp('5%'),
         marginLeft:wp('5%'),
         paddingTop:hp('2.5%'), 
         
        },
     
    })
    },

    gradient: {
        ...Platform.select({
            ios: {
                 height:hp('17%'),
                 width:wp('35%'),
                 borderRadius: 20
            },
            android: {
                 height:hp('17%'),
                 width:wp('33%'),
                 borderRadius: 15
            },

        })
        
      },

    profile:{
        ...Platform.select({
            ios: {
                marginTop:hp('1.5%'),
                fontWeight:'bold',
            },
            android: {
                
                
                marginTop:hp('6.2%'),
                fontWeight:'bold',
            },
            
          })
        
    },
    logo:{
        width:wp('10%'),
        height:hp('5%'),
        marginLeft:wp('0.1%'),
    },
    header:{
        ...Platform.select({
            ios: {
                fontSize:wp('5%'),
                marginTop:hp('1%'),
            },
            android: {
                fontSize:wp('5%'),
                marginTop:hp('5.7%'),
                marginLeft:hp('1.2%'),
            },

        })
    },
    header1:{
        ...Platform.select({
            ios: {
                fontSize:wp('7%'),
                fontWeight:'bold',
            },
            android: {
                fontSize:wp('8%'),
                fontWeight:'bold',
            },

        })
    },
    headercolor:{
        ...Platform.select({
            ios: {
                fontSize:wp('5%'),
                fontWeight:'bold',
            },
            android: {
                fontSize:wp('5%'),
                fontWeight:'bold',
            },

        })
    },
    categories:{
        ...Platform.select({
            ios: {
                height:hp('10%'),
                width:wp('80%'),
                borderRadius:20,
                backgroundColor:'white',
                marginBottom:wp('5%'),
                marginLeft:wp('5%'),
                // shadowColor: "#b1c8d3",
                //     shadowOffset: {
                //         width: 0,
                //         height: 4,
                //     },
                //     shadowOpacity: 0.2,
                //     shadowRadius: 14,
                //     elevation: 6,
            },
            android: {
                height:hp('10%'),
                width:wp('80%'),
                borderRadius:20,
                backgroundColor:'white',
                marginLeft:wp('5%'),
                marginBottom:wp('5%'),
                // shadowColor: "#b1c8d3",
                // shadowOffset: {
                //     width: 3,
                //     height: 4,
                // },
                // shadowOpacity: 0.7,
                // shadowRadius: 19,
                // elevation: 6,
            },
    
        })
       
    },

    maincategories:{
        ...Platform.select({
            ios: {
                height:hp('17%'),
                width:wp('35%'),
                borderRadius:20,
                backgroundColor:'white',
                marginRight:wp('5%'),
                marginBottom:wp('5%'),
               
            },
            android: {
                height:hp('17%'),
                width:wp('33%'),
                borderRadius:15,
                backgroundColor:'white',
                marginRight:wp('5%'),
                marginBottom:wp('5%'),
               
            },
    
        })
       
    },

    maincategoriess:{
        ...Platform.select({
            ios: {
                height:hp('17%'),
                width:wp('35%'),
                borderRadius:20,
                backgroundColor:transparent,
                marginRight:wp('5%'),
                marginBottom:wp('5%'),
               
            },
            android: {
                height:hp('17%'),
                width:wp('33%'),
                borderRadius:15,
                backgroundColor:transparent,
                marginRight:wp('5%'),
                marginBottom:wp('5%'),
               
            },
    
        })
       
    },

  imagecat:{
    height:hp('8%'),
    width:wp('16%'),
    marginTop:hp('1%'),
    marginLeft:wp('1.5%'),
  },
  shops:{
    ...Platform.select({
        ios: {
            fontSize:wp('4%'),
            fontWeight:'bold',
            marginTop:hp('5%'),
        },
        android: {
            fontSize:wp('5%'),
            fontWeight:'bold',
            marginTop:hp('5%'),
        },

    })
},
shopsinfo:{
    ...Platform.select({
        ios: {
            height:hp('35%'),
            width:wp('60%'),
            borderRadius:15,
            backgroundColor:'white',
            marginRight:wp('4%'),
            marginTop:hp('2%'),
            marginBottom:hp('5%'),
            // shadowColor: "#b1c8d3",
            // shadowOffset: {
            //     width: 0,
            //     height: 4,
            // },
            // shadowOpacity: 0.4,
            // shadowRadius: 14,
            // elevation: 6,
        },
        android: {
            height:hp('40%'),
            width:wp('58%'),
            borderRadius:15,
            backgroundColor:'white',
            marginRight:wp('4%'),
            marginTop:hp('2%'),
            marginBottom:hp('5%'),
            // shadowColor: "#b1c8d3",
            // shadowOffset: {
            //     width: 3,
            //     height: 4,
            // },
            // shadowOpacity: 0.7,
            // shadowRadius: 19,
            // elevation: 6,
        },

    })
   
},
shopsimage:{
    ...Platform.select({
        ios: {
            height:hp('22%'),
            width:wp('60%'),
            borderRadius:15,
            backgroundColor:'#cccccc',          
        },
        android: {
            height:hp('27%'),
             width:wp('58%'),
            borderRadius:15,
            backgroundColor:'#cccccc',
        },
    }) 
},
shopname:{
    ...Platform.select({
        ios: {
            fontSize:wp('4.5%'),
            fontWeight:'bold',
            marginLeft:wp('4%'),
            marginTop:hp('1.5%'),
        },
        android: {
            fontSize:wp('5%'),
            fontWeight:'bold',
            marginLeft:wp('4%'),
            marginTop:hp('1.5%'),
        },

    })
},
shopname1:{
    ...Platform.select({
        ios: {
            fontSize:wp('3.5%'),
            color:'#707070',
            marginLeft:wp('1%'),
            marginTop:hp('1%'),
        },
        android: {
            fontSize:wp('4%'),
            color:'#707070',
            marginLeft:wp('1%'),
            marginTop:hp('1%'),
        },

    })
},
shopname2:{
    ...Platform.select({
        ios: {
            fontSize:wp('3.5%'),
            color:'#707070',
            marginLeft:wp('1.5%'),
            marginTop:hp('1%'),
        },
        android: {
            fontSize:wp('4%'),
            color:'#707070',
            marginLeft:wp('1.5%'),
            marginTop:hp('1%'),
        },

    })
},
  ratings:{
    ...Platform.select({
        ios: {
            height:hp('3%'),
            width:wp('15%'),
            backgroundColor:'#657d81',
            marginTop:hp('1%'),
            marginLeft:hp('1%'), 
            borderRadius:8 , 
        },
        android: {
            height:hp('3%'),
            width:wp('13%'),
            backgroundColor:'#657d81',
            marginTop:hp('1%'),
            marginLeft:hp('1%'), 
            borderRadius:8 , 
        },

    })
},
ratingno:{
    ...Platform.select({
        ios: {
            color:'white', 
            fontWeight:'bold', 
            marginTop:wp('0.5%'),
        },
        android: {
            fontSize:wp('3.9%'),
            color:'white',
            fontWeight:'bold',
            marginTop:wp('0.5%'),
        },
    })
},
  
  });
  
