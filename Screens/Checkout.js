import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ActivityIndicator, transparent,borderRadius,Flatlist,TouchableHighlight ,SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather, AntDesign, FontAwesome5,FontAwesome, EvilIcons,MaterialCommunityIcons, Ionicons , Entypo} from '@expo/vector-icons';
import  AsyncStorage  from '@react-native-async-storage/async-storage';


export default function Checkout({navigation}) {
    const [select, changeSelectState] = useState(false);
    const [select1, changeSelect1State] = useState(false);
    const [select2, changeSelect2State] = useState(true);

    const [loading, setLoading] = useState(false);

    const [token, setToken] = useState('');
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [cart, setCart] = useState([]);


    useEffect(() => {
        alert("Only 'Payment on Delivery' is available at the moment")
        getProfile();
        getCart();
    }, [])

    const getProfile = () => {
        AsyncStorage.getItem('token').then((token) => {
            if(token) {
                setToken(token)
                setLoading(true);
                fetch('https://dryce-staging.herokuapp.com/api/profile/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`
                },
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    setName(responseJson.regular_user.name)
                    setPhone(responseJson.regular_user.phone)
                    setAddress(responseJson.regular_user.address)
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error)
                    setLoading(false);
                })
            }
            else {
                navigation.navigate('Login');
            }
        });
    }

 const getCart = () => {
        AsyncStorage.getItem('token').then((token) => {
            if (token) {
                setLoading(true);
                fetch('http://dryce-staging.herokuapp.com/api/cart/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`
                        }
                        })
                        .then(response => 
                            {if (response.status === 200) {
                                return response.json();
                            }
                            else {
                                alert('Cart does not exist');
                                setLoading(false);
                                navigation.navigate('Details');
                                return null;
                            }
                        }
                        )
                        .then(data => {
                            setCart(data);
                            setLoading(false);
                        })
                        .catch(error => {
                            console.log(error);
                            alert('Error');
                        })
                        .finally(() => {
                            setLoading(false);
                        })
                    }
        });
    }

const createOrder = () => {
    setLoading(true);
    fetch('https://dryce-staging.herokuapp.com/api/order/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
            },
            body: JSON.stringify({
                cart: cart.id,
                payment_method : "Payment on Delivery",
                delivery: "Pickup"
                })
            })
            .then(response => {
                if (response.status === 200) {
                    alert('Order created successfully. You will receive a confirmation email shortly.');
                    navigation.navigate('History');
                }
                else if (response.status === 406) {
                    alert('There an error occured. Please try again.');
                }
            })
            .catch(error => {
                console.log(error);
                alert('Error');
            })
            .finally(() => {
                setLoading(false);
            })
        }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row', marginTop:hp('6%'), marginLeft:wp('5%') }}>
                        <Feather name="arrow-left" size={25} color="white"  onPress={() => navigation.goBack()} />
                        <Text style={{paddingLeft:wp('5%') , fontWeight:'bold', alignSelf:'center',marginLeft:wp('25%'),color:'white'}}>Checkout</Text>
                </View>
            </View>

                <Text style={styles.headertext}> Pickup </Text>

{/* Addressing Details */}
                <View style={{flexDirection:'row'}}>
                <Text style={{ fontWeight:'bold', marginTop:hp('5%'), marginLeft:wp('5%'),   }}> Addressing Details</Text>
                <Text style={{ marginLeft:wp('40%'),marginTop:hp('5%'),   }} onPress={() => {navigation.navigate("Profile")}}> Edit</Text>
                </View>

            <TouchableOpacity style={styles.try}>
                <View style={{marginTop:hp('2%')}}>
                    <Text style={styles.addressinfo}>{name}</Text>
                    <View style={{borderBottomColor: '#9E9EA9',borderBottomWidth: 0.2, width:wp('80%'),marginTop:hp('2%'),marginBottom:hp('1%'), alignSelf:'center' }}/>
                    <Text style={styles.addressinfo}>{address}</Text>
                    <View style={{borderBottomColor: '#9E9EA9',borderBottomWidth: 0.3, width:wp('80%'), marginTop:hp('2%'),marginBottom:hp('1%'), alignSelf:'center' }}/>
                    <Text style={styles.addressinfo}>{phone}</Text>
                </View>
            </TouchableOpacity>
{/* Payment Method */}

            <View style={{flexDirection:'row'}}>
                <Text style={{ fontWeight:'bold', marginTop:hp('7%'), marginLeft:wp('5%'),   }}> Payment Method</Text>
                {/* <Text style={{ marginLeft:wp('40%'),marginTop:hp('5%'),   }}> Change</Text> */}
                </View>

            <TouchableOpacity style={styles.try1}>
                <View style={{marginTop:hp('3%')}}>
                    <View style={{flexDirection:'row'}}>
                    { !select ? 
                    (<Ionicons name="radio-button-off" size={24} color="#0090ff"style={{marginLeft:wp('5%')}} onPress={() => changeSelectState(!select)}/>) :
                    (<Ionicons name="radio-button-on" size={24} color="#0090ff"style={{marginLeft:wp('5%')}} onPress={() => changeSelectState(!select)}/>)
                    }
                    <Text style={styles.addressinfo1}> Mobile Money</Text>
                    </View>
                    <View style={{borderBottomColor: '#9E9EA9',borderBottomWidth: 0.2, width:wp('80%'),marginTop:hp('2%'), alignSelf:'center',marginBottom:hp('1%'), }}/>
                    <View style={{flexDirection:'row'}}>
                    { !select1 ? 
                    (<Ionicons name="radio-button-off" size={24} color="#0090ff"style={{marginLeft:wp('5%')}} onPress={() => changeSelect1State(!select1)}/>) :
                    (<Ionicons name="radio-button-on" size={24} color="#0090ff"style={{marginLeft:wp('5%')}} onPress={() => changeSelect1State(!select1)}/>)
                    }
                    <Text style={styles.addressinfo1}> Credit / Debit Card</Text>
                    </View>
                    <View style={{borderBottomColor: '#9E9EA9',borderBottomWidth: 0.3, width:wp('80%'),marginTop:hp('2%'), alignSelf:'center',marginBottom:hp('1%'), }}/>
                    <View style={{flexDirection:'row'}}>
                    { !select2 ? 
                    (<Ionicons name="radio-button-off" size={24} color="#0090ff"style={{marginLeft:wp('5%')}} onPress={() => changeSelect2State(!select2)}/>) :
                    (<Ionicons name="radio-button-on" size={24} color="#0090ff"style={{marginLeft:wp('5%')}} onPress={() => changeSelect2State(!select2)}/>)
                    }
                    <Text style={styles.addressinfo1}> Payment on Delivery</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>


            {/* Payment Button */}
            <View>
            <View style={{flexDirection:'row'}}>
            <Text style={{ marginTop:hp('5.3%'), marginLeft:wp('5%'), fontSize:wp('4%')   }}>Total Amount</Text>
            <Text style={{ marginTop:hp('5%'), marginLeft:wp('45%'), fontWeight:'bold', fontSize:wp('4%')   }}>GHS {cart.cost}.00</Text>
            </View>
            
            {loading ?
                (<View style={{alignItems: 'center', justifyContent: 'center', marginTop: hp('5%')}}>
                  <ActivityIndicator size="large" color="#14a8ee" />
                </View>) :
            (<TouchableOpacity style={styles.loginbutton} onPress={() => {createOrder()}}>
            <Text style={styles.loginbuttontext}>Checkout</Text>
            </TouchableOpacity>)}
            </View>



                   
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F4'
    },
    header: {
        height: hp('10%'),
        backgroundColor: '#14a8ee',
    },
    headerContent: {
       marginTop: hp('5%'),
       flexDirection: 'row',
        
    },
    headertext: {
        ...Platform.select({
            ios: {
               fontSize: wp('5%'),
               fontWeight: 'bold',
               paddingTop: hp('2%'),
               paddingLeft: wp('5%'),
               
            },
            android: {
                fontSize:wp('5%'),
                fontWeight: 'bold',
                paddingTop: hp('2%'),
                paddingLeft: wp('5%'),
            },

        })
    },
  addressform: {
      height:hp('10%'),
      width: wp('60%'),
      backgroundColor:'blue',
      borderRadius:20,
      marginTop:hp('5%'),
  },
addressinfo: {
    fontSize:wp('4%'),
    marginLeft:wp('4%'),
    marginTop:hp('1%'),
},
addressinfo1: {
    fontSize:wp('4%'),
    marginLeft:wp('2%'),
    marginTop:hp('0.5%'),
},
try: {
    height:hp('20%'),
    width:wp('90%'), 
    backgroundColor:'white',
    marginLeft:wp('5%'),
    marginTop:hp('2%'),
    borderRadius:20,
},
try1: {
    height:hp('20%'),
    width:wp('90%'), 
    backgroundColor:'white',
    marginLeft:wp('5%'),
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
    marginTop:hp('3%'),
    borderRadius:20,
  },

    




});

