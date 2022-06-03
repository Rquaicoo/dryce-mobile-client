import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ScrollView, borderRadius,TextInput,TouchableHighlight ,SafeAreaView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Feather, AntDesign, FontAwesome5,FontAwesome,MaterialIcons, EvilIcons,MaterialCommunityIcons ,Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




export default function History({navigation}) {

  return (
    <ScrollView>
      <View style={styles.header}>
    <View style={{flexDirection:'row', marginTop:hp('6%'), marginLeft:wp('5%') }}>
            <Feather name="arrow-left" size={25} color="white"  onPress={() => navigation.goBack()} />
            <Text style={{fontWeight:'bold', paddingTop:hp('0.5%'),textAlign:'center',color:'white', flex:1,paddingRight:wp('10%')}}>Your Order</Text>
    </View>
    </View>
      <Text style={{marginTop:hp('4%'), fontWeight:'bold', marginLeft:wp('4%'), fontSize:15}}> Summary </Text>

      <View style={styles.summarybox}>
        <View style={{flexDirection:'row', marginTop:hp('1%')}}>
        <MaterialIcons name="local-laundry-service" size={24} color="#14a8ee" style={{marginLeft:wp('5%'), marginTop:hp('3%')}}/>
        <Text style={styles.summarytext}> Selected Service {'\n'}  
        <Text style={styles.maintext}> Wash and Iron</Text> </Text>
        {/* <FontAwesome name="check-circle" size={24} color="#14a8ee" style={{marginLeft:wp('5%'), marginTop:hp('3%')}} /> */}
        </View>

        <View style={{flexDirection:'row', marginTop:hp('1%') }}>
        <MaterialCommunityIcons name="shopping" size={24} color="#14a8ee"  style={{marginLeft:wp('5%'), marginTop:hp('3%')}} />
        <Text style={styles.summarytext}> Laundry Service {'\n'}  
        <Text style={styles.maintext}> Russell's Dry Wash</Text> </Text>
        {/* <FontAwesome name="check-circle" size={24} color="#14a8ee" style={{marginLeft:wp('5%'), marginTop:hp('3%')}} /> */}
        </View>

        <View style={{flexDirection:'row', marginTop:hp('1%') }}>
        <MaterialCommunityIcons name="tshirt-crew" size={24} color="#14a8ee" style={{marginLeft:wp('5%'), marginTop:hp('3%')}} />
        <Text style={styles.summarytext}> Total Clothes {'\n'}  
        <Text style={styles.maintext}> Shirts</Text> {'\n'}  
        <Text style={styles.maintext}> Trousers</Text> {'\n'}  
        <Text style={styles.maintext}> Cardigan</Text> {'\n'}  
        <Text style={styles.maintext}> Dresses</Text> {'\n'}  
        <Text style={styles.maintext}> Blouses</Text> {'\n'}
        <Text style={styles.maintext}> Jeans</Text> {'\n'}  </Text>
        <Text style={{fontWeight:'bold', fontSize:15,  marginTop:hp('4%'), marginLeft:wp('30%') }}>¢ 100 {'\n'}
        ¢ 100 {'\n'}
        ¢ 100 {'\n'}
        ¢ 100 {'\n'}
        ¢ 100 {'\n'}
        ¢ 100 {'\n'} </Text>
        {/* <FontAwesome name="check-circle" size={24} color="#14a8ee" style={{marginLeft:wp('5%'), marginTop:hp('3%')}} /> */}
        </View>

      </View>

        <View style={styles.summarybox2}>
        <View style={{flexDirection:'row', marginTop:hp('1%')}}>
        <Ionicons name="md-pricetags" size={24} color="#14a8ee" style={{marginLeft:wp('5%'), marginTop:hp('3%')}} />
        <Text style={styles.summarytext1}> Total Price {'\n'} </Text> 
        <Text style={styles.maintext2}> ¢ 600</Text> 
        {/* <FontAwesome name="check-circle" size={24} color="#14a8ee" style={{marginLeft:wp('5%'), marginTop:hp('3%')}} /> */}
        </View>
        </View>






    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: hp('10%'),
    backgroundColor: '#14a8ee',
},

summarybox: {
    
  ...Platform.select({
    ios: {
      width:wp('90%'), 
      height:hp('40%'),
      borderRadius:20,
      alignSelf:'center',
      backgroundColor:'white',
      marginTop:hp('2%'),
      
    },
    android: {
      width:wp('90%'), 
      height:hp('40%'),
      borderRadius:20,
      alignSelf:'center',
      marginTop:hp('2%'),
      backgroundColor:'white',
    },
    
  })},

  summarybox2: {
    
    ...Platform.select({
      ios: {
        width:wp('90%'), 
        height:hp('15%'),
        borderRadius:20,
        alignSelf:'center',
        backgroundColor:'white',
        marginTop:hp('2%'),
        
      },
      android: {
        width:wp('90%'), 
        height:hp('15%'),
        borderRadius:20,
        alignSelf:'center',
        marginTop:hp('2%'),
        backgroundColor:'white',
      },
      
    })},

  summary: {
    width: wp('90%'),
    height:hp('8%'),
    backgroundColor: '#E9EAEC',
    // borderRadius:5,
    alignSelf:'center',
    marginTop:hp('1%'),
  },

    summarytext: {
      marginTop:hp('2.5%'),
      marginLeft:wp('4%'),
      fontSize:11,
    },
    summarytext1: {
      marginTop:hp('3%'),
      marginLeft:wp('4%'),
      fontSize:14,
    },

    maintext: {
      fontWeight:'bold', 
      fontSize:15,
    },

    maintext2: {
      fontWeight:'bold', 
      fontSize:20,
      marginTop:hp('2.5%'),
      marginLeft:wp('30%'),
    },

    headerContainer: {
        display: 'flex', 
        flexDirection: "row", 
        marginTop: "20%", 
        marginLeft: "10%"
    },
    headerText: {
        marginLeft: "20%",
        fontWeight: "bold",
        fontSize: 29
    },
    bottomButton: {
        marginTop: "20%", 
        marginLeft: "10%", 
        width: "80%", 
        height: 70,
        backgroundColor: "#0c74eb", 
        borderRadius: 10, 
        alignItems: "center",
        justifyContent: "center",
    }
  });
  
