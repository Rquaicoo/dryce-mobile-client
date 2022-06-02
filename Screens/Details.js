import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ScrollView, borderRadius,TextInput,ActivityIndicator ,SafeAreaView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Feather, AntDesign, FontAwesome5, EvilIcons, Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage'




export default function Details({route, navigation}) {
    
      const vendor = route.params.vendor.vendor;

    useEffect(() => {
        AsyncStorage.getItem('token').then((token) => {
          if(token) {
            setToken(token);
          }
          else {
            navigation.navigate('Login');
          }
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

    const createCart = () => {
        setLoading(true);
        fetch('https://dryce-staging.herokuapp.com/api/cart/', {
            method: 'POST',
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
                vendor: vendor,
            })
        })
        .then(response => {
            if (response.status == 200) {
                setLoading(false);
                navigation.navigate('Cart');
            }
            else {
                setLoading(false);
                alert('Something went wrong');
            }
        })
        .catch(error => {
            setLoading(false);
            alert('Something went wrong');
        });
    }





  return (
    <View>
      
      <View style={styles.header}>
                <View style={{flexDirection:'row', marginTop:hp('6%'), marginLeft:wp('5%') }}>
                        <Feather name="arrow-left" size={25} color="white"  onPress={() => navigation.goBack()} />
                        <Text style={{fontWeight:'bold', paddingTop:hp('0.5%'),textAlign:'center',color:'white', flex:1,paddingRight:wp('10%')}}>Details</Text>
                </View>
            </View>

    <ScrollView style={{marginLeft:wp('5%'), height:hp("68%"),}}>
        <View style={{height: 100, width:wp("90%"),marginTop:hp('5%') ,borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", flex:8}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:5}}>
                <Image
                        style={{width: "40%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/shirt.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Shirts</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc {shirtPrice}</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} onPress={() => {decreaseCount("shirt")}} >
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>{shirtNumber}</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}} onPress={() => {increaseCount("shirt")}} >
                        <AntDesign name="plus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                </View>
        </View>

        <View style={{height: 100,width:wp("90%"), borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", marginTop: 25, flex:8}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:5}}>
                <Image
                        style={{width: "40%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/knitted-cardigan.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Cardigan</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc {cardiganPrice}</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} onPress={() => {decreaseCount("cardigan")}} >
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>{cardiganNumber}</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}} onPress={() => {increaseCount("cardigan")}}>
                        <AntDesign name="plus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                </View>
        </View>

        <View style={{height: 100,width:wp("90%"), borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", marginTop: 25, flex:8}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:5}}>
                <Image
                        style={{width: "40%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/dress-removebg-preview.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Dress</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc {dressPrice}</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} onPress={() => {decreaseCount("dress")}} >
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>{dressNumber}</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}} onPress={() => {increaseCount("dress")}}>
                        <AntDesign name="plus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                </View>
        </View>

        <View style={{height: 100,width:wp("90%"), borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", marginTop: 25, flex:8}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:5}}>
                <Image
                        style={{width: "40%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/trousers-removebg-preview.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Trousers</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc {trouserPrice}</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} onPress={() => {decreaseCount("trouser")}} >
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>{trouserNumber}</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}} onPress={() => {increaseCount("trouser")}}>
                        <AntDesign name="plus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                </View>
        </View>

        <View style={{height: 100,width:wp("90%"), borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", marginTop: 25, flex:8}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:5}}>
                <Image
                        style={{width: "35%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/blouse.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Blouses</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc {blousePrice}</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} onPress={() => {decreaseCount("blouse")}}>
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>{blouseNumber}</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}} onPress={() => {increaseCount("blouse")}}>
                        <AntDesign name="plus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                </View>
        </View>

        <View style={{height: 100,width:wp("90%"), borderRadius: 20, flexDirection: "row", backgroundColor: "#ffffff", marginTop: 25, flex:8}}>
            <View style={{display: "flex", flexDirection: "row", marginLeft: "5%", flex:5}}>
                <Image
                        style={{width: "40%", height: "100%",resizeMode: "contain", alignSelf: "center"}}
                        source={require("../assets/jeans-removebg-preview.png")}
                    />
                    <View style={{alignSelf: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Jeans</Text>
                        <Text style={{fontWeight: "500", fontSize: 12, color: "blue"}}>Ghc {jeansPrice}</Text>
                    </View>
                </View>

                <View style={{display: "flex", flexDirection: "row", marginLeft: "16%", flex:3}}>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50}} onPress={() => {decreaseCount("jeans")}} >
                        <AntDesign name="minus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: "bold", fontSize: 15, alignSelf: "center", marginLeft: "10%"}}>{jeansNumber}</Text>
                    <TouchableOpacity style={{backgroundColor: "#f2f2f0", alignSelf: 'center', borderRadius: 50, marginLeft: "10%"}} onPress={() => {increaseCount("jeans")}}>
                        <AntDesign name="plus" size={15} color="black" style={{padding: 5}} />
                    </TouchableOpacity>
                </View>
        </View>
    </ScrollView>

      <View>
      {loading ?
        (<View style={{alignItems: 'center', justifyContent: 'center', marginTop: hp('5%')}}>
        <ActivityIndicator size="large" color="#14a8ee" />
        </View>):
         ( <TouchableOpacity style={styles.bottomButton} onPress={() => {createCart()}}>
            <Text style={{fontWeight: "bold", fontSize: 20, color: "black", color: "white" }}>Start Laundry</Text>
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
        marginLeft: "15%",
        fontWeight: "bold",
        fontSize: 29
    },
    bottomButton: {
       marginTop:hp("2%"),
        marginLeft: "10%", 
        width: "80%", 
        height: 70,
        backgroundColor: "#14a8ee", 
        borderRadius: 20, 
        alignItems: "center",
        justifyContent: "center",
    }
  });
  