import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ScrollView, ActivityIndicator,TextInput,TouchableHighlight ,SafeAreaView, TouchableOpacity, BackHandler} from 'react-native';
import { Feather, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import  Swipeable  from 'react-native-gesture-handler/Swipeable';

import axios from 'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage'




export default function Cart({navigation}) {

    const RightActions = (item) => {


        return (
            <TouchableOpacity style={{justifyContent: "center", alignSelf: "center"}}>
                <View style={{backgroundColor: '#ff0000', width: 50, height: 50, borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginRight: 25}}>
                    <Feather name="trash" size={30} color="white" />
                </View>
            </TouchableOpacity>
        );
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
        updateCart();
    
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
        updateCart();
    }

    const updateCart = () => {
        setLoading(true);
        fetch('https://dryce-staging.herokuapp.com/api/cart/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
                },
                body: JSON.stringify({
                    shirt: shirtNumber,
                    cardigan: cardiganNumber,
                    dress: dressNumber,
                    trouser: trouserNumber,
                    blouses: blouseNumber,
                    jeans: jeansNumber,
                    })
                })
                .then(res => res.json())
                .then(res => {
                    setLoading(false);
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                })
                .finally(() => {
                    setLoading(false);
                }
            )
    }


useEffect(() => {
    AsyncStorage.getItem('token').then((token) => {
        setToken(token);
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
                        alert('Cart does not exist, select a service and a vendor to create a cart.');
                        navigation.navigate('HomeTab');
                        return null;
                    }
                }
                )
                .then(data => {
                    setShirtNumber(data.shirts);
                    setShirtPrice(data.shirts * 30);
                    setCardiganNumber(data.cardigans);
                    setCardiganPrice(data.cardigans * 30);
                    setDressNumber(data.dress);
                    setDressPrice(data.dress * 30);
                    setTrouserNumber(data.trousers);
                    setTrouserPrice(data.trousers * 30);
                    setBlouseNumber(data.blouses);
                    setBlousePrice(data.blouses * 30);
                    setJeansNumber(data.jeans);
                    setJeansPrice(data.jeans * 30);
                })
                .catch(error => {
                    console.log(error);
                    alert('An error occured. Select a service and create a cart you dont have one already.'); 
                })
                .finally(() => {
                    setLoading(false);
                })
    });
}, []);


    

  return (
    <View>
      <View style={styles.header}>
                <View style={{flexDirection:'row', marginTop:hp('6%'), marginLeft:wp('5%') }}>
                        <Feather name="arrow-left" size={25} color="white"  onPress={() => navigation.navigate("Tabs")} />
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
                        <Text style={{fontWeight: "bold", fontSize: 12, color: "#14a8ee"}}>Ghc {shirtPrice}</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} onPress={() => {decreaseCount('shirt')}} >
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>{shirtNumber}</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}} onPress={() => {increaseCount("shirt")}}>
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
                        <Text style={{fontWeight: "bold", fontSize: 12, color: "#14a8ee"}}>Ghc {cardiganPrice}</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} onPress={() => {decreaseCount('cardigan')}} >
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>{cardiganNumber}</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}} onPress={() => {increaseCount('cardigan')}} >
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
                        <Text style={{fontWeight: "bold", fontSize: 12, color: "#14a8ee"}}>Ghc {dressPrice}</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} onPress={() => {decreaseCount('dress')}} >
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>{dressNumber}</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}} onPress={() => {increaseCount('dress')}} >
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
                        <Text style={{fontWeight: "bold", fontSize: 12, color: "#14a8ee", paddingLeft:wp('2%')}}>Ghc {trouserPrice}</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}}  onPress={() => {decreaseCount('trouser')}}>
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>{trouserNumber}</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}} onPress={() => {increaseCount('trouser')}}>
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
                        <Text style={{fontWeight: "bold", fontSize: 12, color: "#14a8ee", paddingLeft:wp('2%')}}>Ghc {blousePrice}</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} onPress={() => {decreaseCount('blouse')}} >
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>{blouseNumber}</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}} onPress={() => {increaseCount('blouse')}}>
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
                        <Text style={{fontWeight: "bold", fontSize: 12, color: "#14a8ee"}}>Ghc {jeansPrice}</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} onPress={() => {decreaseCount('jeans')}} >
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>{jeansNumber}</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}} onPress={() => {increaseCount('jeans')}}>
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

            {loading ?
            (<View style={{alignItems: 'center', justifyContent: 'center', narginLeft: hp('5%')}}>
            <ActivityIndicator size="large" color="#14a8ee" />
            </View>):
          (<TouchableOpacity style={styles.bottomButton} onPress={() => {navigation.navigate("Checkout")}} >
            <Text style={{fontWeight: "bold", fontSize: 20, color: "black", color: "white" }}>Schedule A Pickup</Text>
            </TouchableOpacity>)}
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
        backgroundColor: "#14a8ee", 
        borderRadius: 20, 
        alignItems: "center",
        justifyContent: "center",
    }
  });
  