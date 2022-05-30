import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ScrollView, borderRadius,TextInput,TouchableHighlight ,SafeAreaView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Feather, AntDesign, FontAwesome5, EvilIcons, Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage'




export default function Details({navigation}) {

  return (
    <View>
      
      <View style={styles.headerContainer}>
      <Ionicons name="chevron-back-sharp" size={40} color="black" />
      <Text style={styles.headerText}>Add details</Text>
      </View>

    <ScrollView style={{marginLeft:33, marginTop: 60, height: "60%"}}>
        <View style={{height: 100, width: "90%", borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", flex:8}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:5}}>
                <Image
                        style={{width: "40%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/shirt.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Shirts</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc 30</Text>
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

        <View style={{height: 100, width: "90%", borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", marginTop: 25, flex:8}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:5}}>
                <Image
                        style={{width: "40%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/knitted-cardigan.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Cardigan</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc 30</Text>
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

        <View style={{height: 100, width: "90%", borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", marginTop: 25, flex:8}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:5}}>
                <Image
                        style={{width: "40%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/dress-removebg-preview.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Dress</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc 30</Text>
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

        <View style={{height: 100, width: "90%", borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", marginTop: 25, flex:8}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:5}}>
                <Image
                        style={{width: "40%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/trousers-removebg-preview.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Trousers</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc 30</Text>
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

        <View style={{height: 100, width: "90%", borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", marginTop: 25, flex:8}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:5}}>
                <Image
                        style={{width: "35%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/blouse.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Blouses</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc 30</Text>
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

        <View style={{height: 100, width: "90%", borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", marginTop: 25, flex:8}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:5}}>
                <Image
                        style={{width: "40%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/jeans-removebg-preview.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Jeans</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc 30</Text>
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
    </ScrollView>

      <View>
          <TouchableOpacity style={styles.bottomButton}>
            <Text style={{fontWeight: "bold", fontSize: 20, color: "black", color: "white" }}>Start Laundry</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex', 
        flexDirection: "row", 
        marginTop: "10%", 
        marginLeft: "10%"
    },
    headerText: {
        marginLeft: "15%",
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
  