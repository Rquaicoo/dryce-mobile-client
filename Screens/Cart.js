import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ScrollView, borderRadius,TextInput,TouchableHighlight ,SafeAreaView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Feather, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import  Swipeable  from 'react-native-gesture-handler/Swipeable';

import axios from 'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage'



export default function Cart({navigation}) {

    const RightActions = (item) => {
        decreaseCount(item);

        return (
            <TouchableOpacity style={{justifyContent: "center", alignSelf: "center"}}>
                <View style={{backgroundColor: '#ff0000', width: 50, height: 50, borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginRight: 25}}>
                    <Feather name="trash" size={30} color="white" />
                </View>
            </TouchableOpacity>
        );
    }

    useEffect(() => {
        AsyncStorage.getItem('token').then((token) => {
          setToken(token);
        });
      }, []);

    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);

    const [shirtNumber, setShirtNumber] = useState(0);
    const [cardiganNumber, setCardiganNumber] = useState(0);
    const [dressNumber, setDressNumber] = useState(0);
    const [trouserNumber, setTrouserNumber] = useState(0);
    const [blouseNumber, setBlouseNumber] = useState(0);
    const [jeansNumber, setJeansNumber] = useState(0);

    const [shirtPrice, setShirtPrice] = useState(0);
    const [cardiganPrice, setCardiganPrice] = useState(0);
    const [dressPrice, setDressPrice] = useState(0);
    const [trouserPrice, setTrouserPrice] = useState(0);
    const [blousePrice, setBlousePrice] = useState(0);
    const [jeansPrice, setJeansPrice] = useState(0);
      
    const increaseCount = (item) => {
        if(item === 'shirt'){
            setShirtNumber(shirtNumber + 1);
            var quantity = shirtNumber + 1;
            setShirtPrice(quantity * 30);
        }
        else if(item === 'cardigan'){
            setCardiganNumber(cardiganNumber + 1);
            var quantity = cardiganNumber + 1;
            setCardiganPrice(quantity * 30);
        }
        else if(item === 'dress'){
            setDressNumber(dressNumber + 1);
            var quantity = dressNumber + 1;
            setDressPrice(quantity * 30);
        }
        else if(item === 'trouser'){
            setTrouserNumber(trouserNumber + 1);
            var quantity = trouserNumber + 1;
            setTrouserPrice(quantity * 30);
        }
        else if(item === 'blouse'){
            setBlouseNumber(blouseNumber + 1);
            var quantity = blouseNumber + 1;
            setBlousePrice(quantity * 30);
        }
        else if(item === 'jeans'){
            setJeansNumber(jeansNumber + 1);
            var quantity = jeansNumber + 1;
            setJeansPrice(quantity * 30);
        }
    }

    const decreaseCount = (item) => {
        if(item === 'shirt'){
            if(shirtNumber > 0){
                setShirtNumber(shirtNumber - 1);
                var quantity = shirtNumber - 1;
                setShirtPrice(quantity * 30);
            }
        }
        else if(item === 'cardigan'){
            if(cardiganNumber > 0){
                setCardiganNumber(cardiganNumber - 1);
                var quantity = cardiganNumber - 1;
                setCardiganPrice(quantity * 30);
            }
        }
        else if(item === 'dress'){
            if(dressNumber > 0){
                setDressNumber(dressNumber - 1);
                var quantity = dressNumber - 1;
                setDressPrice(quantity * 30);
            }
        }
        else if(item === 'trouser'){
            if(trouserNumber > 0){
                setTrouserNumber(trouserNumber - 1);
                var quantity = trouserNumber - 1;
                setTrouserPrice(quantity * 30);
            }
        }
        else if(item === 'blouse'){
            if(blouseNumber > 0){
                setBlouseNumber(blouseNumber - 1);
                var quantity = blouseNumber - 1;
                setBlousePrice(quantity * 30);
            }
        }
        else if(item === 'jeans'){
            if(jeansNumber > 0){
                setJeansNumber(jeansNumber - 1);
                var quantity = jeansNumber - 1;
                setJeansPrice(quantity * 30);
            }
        }
    }

useEffect(() => {
    AsyncStorage.getItem('token').then((token) => {
        setToken(token);
        fetch('http://dryce-staging.herokuapp.com/api/cart', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
                }
                })
                .then(Response => {
                    setShirtNumber(Response.data.shirt);
                    setShirtPrice(Response.data.shirt * 30);
                    setCardiganNumber(Response.data.cardigan);
                    setCardiganPrice(Response.data.cardigan * 30);
                    setDressNumber(Response.data.dress);
                    setDressPrice(Response.data.dress * 30);
                    setTrouserNumber(Response.data.trouser);
                    setTrouserPrice(Response.data.trouser * 30);
                    setBlouseNumber(Response.data.blouse);
                    setBlousePrice(Response.data.blouse * 30);
                    setJeansNumber(Response.data.jeans);
                    setJeansPrice(Response.data.jeans * 30);
                })
                .catch(error => {
                    console.log(error);
                })
    });
}, []);


    

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
        marginTop: "10%", 
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
  