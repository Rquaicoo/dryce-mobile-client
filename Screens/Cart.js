import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ScrollView, borderRadius,TextInput,TouchableHighlight ,SafeAreaView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Feather, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
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
      
      <View style={styles.headerContainer}>
      <Ionicons name="chevron-back-sharp" size={40} color="black" onPress={() => navigation.goBack()}/>
      <Text style={styles.headerText}>Cart</Text>
      </View>

      <View style={{marginTop:50, display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <MaterialIcons name="swipe" size={24} color="black" />
        <Text style={{marginLeft: 10, fontSize: 20, fontWeight: "bold"}}>Swipe an item to delete</Text>
      </View>

    <ScrollView style={{marginLeft:33, marginTop: 60, height: "60%"}}>
        <GestureHandlerRootView>
            <Swipeable renderRightActions={RightActions} >
        <View style={{height: 100, width: "90%", borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", flex:8, padding: 10,}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:6}}>
                <Image
                        style={{width: "30%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/shirt.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Shirts</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc 30</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%",
                 flex:2, backgroundColor: "#0c74eb",  borderRadius: 10, 
                 height: 25, paddingRight: -60, justifyContent: "space-between", alignSelf: "center", marginLeft: -50}}>
                    <AntDesign name="minus" size={15} color="black" style={{alignSelf: "center", color: "white"}} />
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", color: "white"}}>0</Text>
                    <AntDesign name="plus" size={15} color="black" style={{alignSelf: "center", color: "white"}}/>
                </View>
        </View>
        </Swipeable>
        </GestureHandlerRootView>

        <GestureHandlerRootView style={{marginTop:20}}>
            <Swipeable renderRightActions={RightActions} >
        <View style={{height: 100, width: "90%", borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", flex:8, padding: 10,}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:6}}>
                <Image
                        style={{width: "30%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/knitted-cardigan.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Cardigan</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc 30</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%",
                 flex:2, backgroundColor: "#0c74eb",  borderRadius: 10, 
                 height: 25, paddingRight: -60, justifyContent: "space-between", alignSelf: "center", marginLeft: -50}}>
                    <AntDesign name="minus" size={15} color="black" style={{alignSelf: "center", color: "white"}} />
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", color: "white"}}>0</Text>
                    <AntDesign name="plus" size={15} color="black" style={{alignSelf: "center", color: "white"}}/>
                </View>
        </View>
        </Swipeable>
        </GestureHandlerRootView>


        <GestureHandlerRootView style={{marginTop:20}}>
            <Swipeable renderRightActions={RightActions} >
        <View style={{height: 100, width: "90%", borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", flex:8, padding: 10,}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:6}}>
                <Image
                        style={{width: "30%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/dress-removebg-preview.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Dresses</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc 30</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%",
                 flex:2, backgroundColor: "#0c74eb",  borderRadius: 10, 
                 height: 25, paddingRight: -60, justifyContent: "space-between", alignSelf: "center", marginLeft: -50}}>
                    <AntDesign name="minus" size={15} color="black" style={{alignSelf: "center", color: "white"}} />
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", color: "white"}}>0</Text>
                    <AntDesign name="plus" size={15} color="black" style={{alignSelf: "center", color: "white"}}/>
                </View>
        </View>
        </Swipeable>
        </GestureHandlerRootView>

        <GestureHandlerRootView style={{marginTop:20}}>
            <Swipeable renderRightActions={RightActions} >
        <View style={{height: 100, width: "90%", borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", flex:8, padding: 10,}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:6}}>
                <Image
                        style={{width: "20%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/trousers-removebg-preview.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Trousers</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc 30</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%",
                 flex:2, backgroundColor: "#0c74eb",  borderRadius: 10, 
                 height: 25, paddingRight: -60, justifyContent: "space-between", alignSelf: "center", marginLeft: -50}}>
                    <AntDesign name="minus" size={15} color="black" style={{alignSelf: "center", color: "white"}} />
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", color: "white"}}>0</Text>
                    <AntDesign name="plus" size={15} color="black" style={{alignSelf: "center", color: "white"}}/>
                </View>
        </View>
        </Swipeable>
        </GestureHandlerRootView>

        <GestureHandlerRootView style={{marginTop:20}}>
            <Swipeable renderRightActions={RightActions} >
        <View style={{height: 100, width: "90%", borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", flex:8, padding: 10,}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:6}}>
                <Image
                        style={{width: "20%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/blouse.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Blouses</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc 30</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%",
                 flex:2, backgroundColor: "#0c74eb",  borderRadius: 10, 
                 height: 25, paddingRight: -60, justifyContent: "space-between", alignSelf: "center", marginLeft: -50}}>
                    <AntDesign name="minus" size={15} color="black" style={{alignSelf: "center", color: "white"}} />
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", color: "white"}}>0</Text>
                    <AntDesign name="plus" size={15} color="black" style={{alignSelf: "center", color: "white"}}/>
                </View>
        </View>
        </Swipeable>
        </GestureHandlerRootView>

        <GestureHandlerRootView style={{marginTop:20, marginBottom: 20}}>
            <Swipeable renderRightActions={RightActions} >
        <View style={{height: 100, width: "90%", borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", flex:8, padding: 10,}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:6}}>
                <Image
                        style={{width: "30%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/jeans-removebg-preview.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Jeans</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc 30</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%",
                 flex:2, backgroundColor: "#0c74eb",  borderRadius: 10, 
                 height: 25, paddingRight: -60, justifyContent: "space-between", alignSelf: "center", marginLeft: -50}}>
                    <AntDesign name="minus" size={15} color="black" style={{alignSelf: "center", color: "white"}} />
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", color: "white"}}>0</Text>
                    <AntDesign name="plus" size={15} color="black" style={{alignSelf: "center", color: "white"}}/>
                </View>
        </View>
        </Swipeable>
        </GestureHandlerRootView>
    </ScrollView>

      <View style={{backgroundColor: "white", height: "45%", borderTopLeftRadius: 20, borderTopRightRadius: 20}}>

          <Text style={{fontWeight: "bold", fontSize: 20, marginLeft: "13%", marginTop: "5%"}}>Promo code</Text>
        
            <View style={{display: "flex", flexDirection: "row",  marginTop: "5%", marginBottom: "5%", color: "#0c74ebb"}}>
                <TextInput style={{width: "85%", height: 50, borderColor: "#0c74eb",borderWidth: 1, borderRadius: 10, marginLeft: "5%", textAlign: "center"}}
                placeholder="Enter promo code here"
                placeholderTextColor="#0c74eb" />
                <Text style={{fontWeight: "bold", fontSize: 13, color: "#0c74eb", marginLeft: -80, alignSelf: "center"}}>APPLY</Text>
            </View>

          <TouchableOpacity style={styles.bottomButton}>
            <Text style={{fontWeight: "bold", fontSize: 20, color: "black", color: "white" }}>Schedule A Pickup</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
        backgroundColor: "#0c74eb", 
        borderRadius: 10, 
        alignItems: "center",
        justifyContent: "center",
    }
  });
  