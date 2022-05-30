import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ScrollView, borderRadius,TextInput,TouchableHighlight ,SafeAreaView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Feather, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import  Swipeable  from 'react-native-gesture-handler/Swipeable';

import axios from 'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage'



const RightActions = () => {

    return (
        <TouchableOpacity style={{justifyContent: "center", alignSelf: "center"}}>
            <View style={{backgroundColor: '#ff0000', width: 50, height: 50, borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginRight: 25}}>
                <Feather name="trash" size={30} color="white" />
            </View>
        </TouchableOpacity>
    );
}

export default function Cart({navigation}) {

    

  return (
    <View>
      <View style={styles.header}>
                <View style={{flexDirection:'row', marginTop:hp('6%'), marginLeft:wp('5%') }}>
                        <Feather name="arrow-left" size={25} color="white"  onPress={() => navigation.goBack()} />
                        <Text style={{ fontWeight:'bold', textAlign:'center',color:'white', flex:1,paddingRight:wp('10%')}}>Cart</Text>
                </View>
    </View>

      <View style={{marginTop:hp('2%'), display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <MaterialIcons name="swipe" size={20} color="black" />
        <Text style={{marginLeft:wp('5%'), fontSize:wp('3.5%'), fontWeight: "bold",  opacity:0.5}}>Swipe an item to delete</Text>
      </View>

    <ScrollView style={{marginLeft:wp('5%'), marginTop:hp('2%'), height: "60%"}}>
        <GestureHandlerRootView>
            <Swipeable renderRightActions={RightActions} >
        <View style={{height: 100, width:wp("90%"), borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", flex:8, padding: 10,}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft:wp('2%'), flex:6}}>
                <Image
                        style={{width:wp("20%"),resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/shirt.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Shirts</Text>
                        <Text style={{fontWeight: "bold", fontSize: 12, color: "#14a8ee"}}>Ghc 30</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} >
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>0</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}}>
                        <AntDesign name="plus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                </View>
        </View>
        </Swipeable>
        </GestureHandlerRootView>

        <GestureHandlerRootView style={{marginTop:20}}>
            <Swipeable renderRightActions={RightActions} >
        <View style={{height: 100, width:wp("90"), borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", flex:8, padding: 10,}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft:wp("2%"), flex:6}}>
                <Image
                        style={{width:wp("20%"), height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/knitted-cardigan.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Cardigan</Text>
                        <Text style={{fontWeight: "bold", fontSize: 12, color: "#14a8ee"}}>Ghc 30</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} >
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>0</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}}>
                        <AntDesign name="plus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                </View>
        </View>
        </Swipeable>
        </GestureHandlerRootView>


        <GestureHandlerRootView style={{marginTop:20}}>
            <Swipeable renderRightActions={RightActions} >
        <View style={{height: 100, width:wp("90"), borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", flex:8, padding: 10,}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft:wp('2%'), flex:6}}>
                <Image
                        style={{width:wp("20%"), height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/dress-removebg-preview.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Dresses</Text>
                        <Text style={{fontWeight: "bold", fontSize: 12, color: "#14a8ee"}}>Ghc 30</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} >
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>0</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}}>
                        <AntDesign name="plus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                </View>
        </View>
        </Swipeable>
        </GestureHandlerRootView>

        <GestureHandlerRootView style={{marginTop:20}}>
            <Swipeable renderRightActions={RightActions} >
        <View style={{height: 100, width:wp("90"), borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", flex:8, padding: 10,}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft:wp('4%'), flex:6}}>
                <Image
                        style={{width: "20%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/trousers-removebg-preview.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16, paddingLeft:wp('2%')}}>Trousers</Text>
                        <Text style={{fontWeight: "bold", fontSize: 12, color: "#14a8ee", paddingLeft:wp('2%')}}>Ghc 30</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} >
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>0</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}}>
                        <AntDesign name="plus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                </View>
        </View>
        </Swipeable>
        </GestureHandlerRootView>

        <GestureHandlerRootView style={{marginTop:20}}>
            <Swipeable renderRightActions={RightActions} >
        <View style={{height: 100, width:wp("90"), borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", flex:8, padding: 10,}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft:wp('4%'), flex:6}}>
                <Image
                        style={{width: "20%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/blouse.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16, paddingLeft:wp('2%')}}>Blouses</Text>
                        <Text style={{fontWeight: "bold", fontSize: 12, color: "#14a8ee", paddingLeft:wp('2%')}}>Ghc 30</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} >
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>0</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}}>
                        <AntDesign name="plus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                </View>
        </View>
        </Swipeable>
        </GestureHandlerRootView>

        <GestureHandlerRootView style={{marginTop:20, marginBottom: 20}}>
            <Swipeable renderRightActions={RightActions} >
        <View style={{height: 100, width:wp("90"), borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", flex:8, padding: 10,}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft:wp('2%'), flex:6}}>
                <Image
                        style={{width:wp("20%"), height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/jeans-removebg-preview.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Jeans</Text>
                        <Text style={{fontWeight: "bold", fontSize: 12, color: "#14a8ee"}}>Ghc 30</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} >
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>0</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}}>
                        <AntDesign name="plus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                </View>
        </View>
        </Swipeable>
        </GestureHandlerRootView>
    </ScrollView>

      <View style={{backgroundColor: "white", height: "40%", borderTopLeftRadius: 20, borderTopRightRadius: 20}}>

          <Text style={{fontWeight: "bold", fontSize:wp('3.5%'), marginLeft:wp('5%'), marginTop: "5%"}}>Promo code</Text>
        
            <View style={{display: "flex", flexDirection: "row",  marginTop: "2%", marginBottom: "7%", color: "#14a8eeb", marginLeft:wp('5%'),}}>
                <TouchableHighlight style={{width:wp('90%')}}>
                <TextInput style={{width:wp('70'), height: 50, borderColor: "grey",borderWidth: 0.2, borderRadius: 10,paddingLeft:wp('2%')}}
                placeholder="Enter promo code here"
                placeholderTextColor="grey" />
                </TouchableHighlight>
                <Text style={{fontWeight: "bold", fontSize: 13, color: "#14a8ee", marginLeft: -50, alignSelf: "center"}}>APPLY</Text>
            </View>

          <TouchableOpacity style={styles.bottomButton}>
            <Text style={{fontWeight: "bold", fontSize: 20, color: "black", color: "white" }}>Schedule A Pickup</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        height: hp('10%'),
        backgroundColor: '#14a8ee',
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
       
        marginLeft: "10%", 
        width: "80%", 
        height: 70,
        backgroundColor: "#14a8ee", 
        borderRadius: 20, 
        alignItems: "center",
        justifyContent: "center",
    }
  });
  