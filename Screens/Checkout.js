import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ImageBackground, transparent,borderRadius,Flatlist,TouchableHighlight ,SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather, AntDesign, FontAwesome5,FontAwesome, EvilIcons,MaterialCommunityIcons, Ionicons , Entypo} from '@expo/vector-icons';


export default function Checkout({navigation}) {
    const [select, changeSelectState] = useState(false);
    const [select1, changeSelect1State] = useState(false);
    const [select2, changeSelect2State] = useState(false);

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
                <Text style={{ marginLeft:wp('40%'),marginTop:hp('5%'),   }}> Change</Text>
                </View>

            <TouchableOpacity style={styles.try}>
                <View style={{marginTop:hp('2%')}}>
                    <Text style={styles.addressinfo}> Mr. Quaidoo Ebenezer</Text>
                    <View style={{borderBottomColor: '#9E9EA9',borderBottomWidth: 0.2, width:wp('80%'),marginTop:hp('2%'),marginBottom:hp('1%'), alignSelf:'center' }}/>
                    <Text style={styles.addressinfo}> Madina Estate, Infront of the Court.</Text>
                    <View style={{borderBottomColor: '#9E9EA9',borderBottomWidth: 0.3, width:wp('80%'), marginTop:hp('2%'),marginBottom:hp('1%'), alignSelf:'center' }}/>
                    <Text style={styles.addressinfo}> 0203000000</Text>
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
            <Text style={{ marginTop:hp('5%'), marginLeft:wp('45%'), fontWeight:'bold', fontSize:wp('5%')   }}> ¢50.00</Text>
            </View>

            <TouchableOpacity style={styles.loginbutton} onPress={() => sendPayload(username, password)}>
            <Text style={styles.loginbuttontext}>Proceed to Payment</Text>
            </TouchableOpacity>

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

