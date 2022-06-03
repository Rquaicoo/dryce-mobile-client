import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , BackHandler, ImageBackground, transparent,borderRadius,ActivityIndicator,TouchableHighlight ,SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MaterialIcons, AntDesign, FontAwesome5,Feather, EvilIcons,MaterialCommunityIcons, Ionicons , Entypo} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

export default function Vendors({route, navigation}) {
    const [service, setService] = useState('');

    const [token, setToken] = useState('');
    const [vendors, setVendors] = useState(null);
    const [vendors2, setVendors2] = useState(null);
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
            setService(route.params.service);
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
            const dataLength = data.length;
            setVendors(data.slice(0,(data.length/2) + 1));
            setVendors2(data.slice((data.length/2), dataLength));
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


    useEffect(() => {   
        const backAction = () => {
            navigation.navigate('Tabs');
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
           <View style={styles.backb}>
           <Feather name="arrow-left" size={23} color="black"  onPress={() => navigation.goBack()} />
                
            </View>
    {/* Headers */}
            {/* <Text style={styles.header} > Hello <Text style={styles.headercolor}> Collins</Text> </Text> */}
            <Text style={styles.header1}> Select a{'\n'} vendor to continue</Text>


            {/* Popular laundry */}
        <Text style={styles.shops}> Popular Laundry </Text>
        {loading ?
            (<View style={{alignItems: 'center', justifyContent: 'center', marginTop: hp('5%')}}>
            <ActivityIndicator size="large" color="#14a8ee" />
            </View>) :
            (<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
            {vendors && (
            <View style={{flexDirection:'row'}}>
                {vendors.map((vendor, index) => (
                <View key={index} >
            <TouchableOpacity style={styles.shopsinfo} onPress={() => {navigation.navigate("Details", {"vendor": vendor, "service": service})}} >
                <View>
                {/* Image Content */}
                <TouchableOpacity style={styles.shopsimage} onPress={() => {navigation.navigate("Details", {"vendor": vendor})}}>
                <ImageBackground source={{
                    uri: 'https://dryce-staging.herokuapp.com' + vendor.picture
                }} style={styles.shopsimage} imageStyle={{ borderRadius: 15}}  >
                
                <TouchableHighlight style={styles.ratings}>
                <View style={{flexDirection:'row'}}>
                <Entypo name="star" size={16} color="yellow"  style={{marginLeft:wp('1.5%'),marginTop:wp('0.5%'),  }}/>
                <Text style={styles.ratingno}>{vendor.rating}.0</Text>
                </View>
                </TouchableHighlight>

                </ImageBackground>
                </TouchableOpacity>
                
                {/* Text Content */}
                
                <View onPress={() => {navigation.navigate("Details", {"vendor": vendor})}}>
                <Text style={styles.shopname}>{vendor.name}</Text>

                <View style={{flexDirection:'row'}}>
                <Entypo name="location-pin" size={17} color="#707070"  style={{marginTop:hp('1.1%'),marginLeft:wp('4%'),}}/>
                <Text style={styles.shopname1}>{vendor.address}</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                <Entypo name="back-in-time" size={15} color="#707070"  style={{marginTop:hp('1.2%'),marginLeft:wp('4%'),}}/>
                <Text style={styles.shopname2}>8:00AM - 8:00PM</Text>
                </View>
                </View>

                </View>

            </TouchableOpacity>
            </View>))}

            </View>)}
        </ScrollView>)}


        {/* Popular laundry */}
        <Text style={styles.shops}> More Laundry Vendors</Text>
        {loading ?
            (<View style={{alignItems: 'center', justifyContent: 'center', marginTop: hp('5%')}}>
            <ActivityIndicator size="large" color="#14a8ee" />
            </View>) :
            (<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
            {vendors2 && (
            <View style={{flexDirection:'row'}}>
                {vendors2.map((vendor, index) => (
                <View key={index} >
            <TouchableOpacity style={styles.shopsinfo} onPress={() => {navigation.navigate("Details", {"vendor": vendor})}} >
                <View>
                {/* Image Content */}
                <TouchableOpacity style={styles.shopsimage} onPress={() => {navigation.navigate("Details", {"vendor": vendor})}}>
                <ImageBackground source={{
                    uri: 'https://dryce-staging.herokuapp.com' + vendor.picture
                }} style={styles.shopsimage} imageStyle={{ borderRadius: 15}} >
                
                <TouchableHighlight style={styles.ratings}>
                <View style={{flexDirection:'row'}}>
                <Entypo name="star" size={16} color="yellow"  style={{marginLeft:wp('1.5%'),marginTop:wp('0.5%'),  }}/>
                <Text style={styles.ratingno}>{vendor.rating}.0</Text>
                </View>
                </TouchableHighlight>

                </ImageBackground>
                </TouchableOpacity>
                
                {/* Text Content */}
                
                <View onPress={() => {navigation.navigate("Details", {"vendor": vendor})}}>
                <Text style={styles.shopname}>{vendor.name}</Text>

                <View style={{flexDirection:'row'}}>
                <Entypo name="location-pin" size={17} color="#707070"  style={{marginTop:hp('1.1%'),marginLeft:wp('4%'),}}/>
                <Text style={styles.shopname1}>{vendor.address}</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                <Entypo name="back-in-time" size={15} color="#707070"  style={{marginTop:hp('1.2%'),marginLeft:wp('4%'),}}/>
                <Text style={styles.shopname2}>8:00AM - 8:00PM</Text>
                </View>
                </View>

                </View>

            </TouchableOpacity>
            </View>))}

            </View>)}
        </ScrollView>)}



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

    backb: {
        ...Platform.select({
            ios: {
                marginTop:hp('1%'),
            },
            android: {
                marginTop:hp('4%'),
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
                
                marginLeft:wp('35%'),
                marginTop:hp('1.5%'),
                fontWeight:'bold',
            },
            android: {
                marginLeft:wp('45%'),
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
            marginTop:hp('2%'),
        },
        android: {
            fontSize:wp('5%'),
            fontWeight:'bold',
            marginTop:hp('2%'),
        },

    })
},
shopsinfo:{
    ...Platform.select({
        ios: {
            height:hp('30%'),
            width:wp('60%'),
            borderRadius:15,
            backgroundColor:'white',
            marginRight:wp('4%'),
            marginTop:hp('2%'),
            marginBottom:hp('5%'),
            
        },
        android: {
            height:hp('30%'),
            width:wp('58%'),
            borderRadius:15,
            backgroundColor:'white',
            marginRight:wp('4%'),
            marginTop:hp('2%'),
            marginBottom:hp('5%'),
           
        },

    })
   
},
shopsimage:{
    ...Platform.select({
        ios: {
            height:hp('18%'),
            width:wp('60%'),
            borderRadius:15,
            backgroundColor:'#cccccc',          
        },
        android: {
            height:hp('18%'),
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
  
