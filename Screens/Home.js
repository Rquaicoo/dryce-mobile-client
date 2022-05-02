import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ImageBackground, borderRadius,Flatlist,TouchableHighlight ,SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather, AntDesign, FontAwesome5,FontAwesome, EvilIcons,MaterialCommunityIcons, Ionicons , Entypo} from '@expo/vector-icons';


export default function Home({navigation}) {

// const categories = [
//     {
//         id: 1,
//         name: 'Laundry',
//         image: require('../assets/img.jpg'),
//     },
//     {
//         id: 2,
//         name: 'Laundry',
//         image: require('../assets/img.jpg'),
//     },
//     {
//         id: 3,
//         name: 'Laundry',
//         image: require('../assets/img.jpg'),
//     },
//     {
//         id: 4,
//         name: 'Laundry',
//         image: require('../assets/img.jpg'),
//     },
//     {
//         id: 5,
//         name: 'Laundry',
//         image: require('../assets/img.jpg'),
//     },
//     {
//         id: 6,
//         name: 'Laundry',
//         image: require('../assets/img.jpg'),
//     }
// ];

// const maincategories = ( {item} ) => (
// <View style={{flexDirection:'row'}}>
// <TouchableOpacity style={styles.categories}>
// <Image source={item.image} style={styles.imagecat} />
// </TouchableOpacity>
// </View>
// )
  return (

    <ScrollView style={styles.container}>
       <StatusBar style="auto" />
       <SafeAreaView>
       
       <View style={{marginLeft:wp('4%')   }}>
            <View style={{flexDirection:'row',}}>
            <Text style={styles.header} > Welcome <Text style={styles.headercolor}> Collins</Text> </Text>
            <TouchableOpacity style={styles.profile}>
              <Image source={require('../assets/logo.png')} style={styles.logo}/>
            </TouchableOpacity>
            </View>
    {/* Headers */}
            {/* <Text style={styles.header} > Hello <Text style={styles.headercolor}> Collins</Text> </Text> */}
            <Text style={styles.header1}> What service</Text>
            <Text style={styles.header1}> do you need today?</Text>

        {/* <Flatlist  
        data={categories}
        renderItem = {maincategories}
        /> */}

        {/* Categories */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection:'row', marginTop:hp('5%')}}>
            <TouchableOpacity style={styles.categories}>
            <Ionicons name="shirt" size={35} color="#14a8ee"  style={{textAlign:'center', marginTop:hp('2.5%')}}/>
            {/* <Image source={require('../assets/img.jpg')} style={styles.imagecat} /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.categories}>
            <FontAwesome name="shopping-bag" size={35} color="#14a8ee"  style={{textAlign:'center', marginTop:hp('2.5%')}}/>
            {/* <Image source={require('../assets/img.jpg')} style={styles.imagecat} /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.categories}>
            <MaterialCommunityIcons name="shoe-print" size={35} color="#14a8ee"  style={{textAlign:'center', marginTop:hp('2.5%')}}/>
            {/* <Image source={require('../assets/img.jpg')} style={styles.imagecat} /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.categories}>
            <Ionicons name="shirt" size={35} color="#14a8ee"  style={{textAlign:'center', marginTop:hp('2.5%')}}/>
            {/* <Image source={require('../assets/img.jpg')} style={styles.imagecat} /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.categories}>
            <Ionicons name="shirt" size={4350} color="#14a8ee"  style={{textAlign:'center', marginTop:hp('2.5%')}}/>
            {/* <Image source={require('../assets/img.jpg')} style={styles.imagecat} /> */}
            </TouchableOpacity>
            </View>
        </ScrollView>

            {/* Popular laundry */}
        <Text style={styles.shops}> Popular Laundry </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <View style={{flexDirection:'row'}}>
        <TouchableHighlight style={styles.shopsinfo}>
            <View>
            {/* Image Content */}
            <TouchableOpacity style={styles.shopsimage}>
            <ImageBackground source={require('../assets/loginimg.jpg')} style={styles.shopsimage} imageStyle={{ borderRadius: 15}} >
            
            <TouchableHighlight style={styles.ratings}>
            <View style={{flexDirection:'row'}}>
            <Entypo name="star" size={16} color="yellow"  style={{marginLeft:wp('1.5%'),marginTop:wp('0.5%'),  }}/>
            <Text style={styles.ratingno}> 4.0</Text>
            </View>
            </TouchableHighlight>

            </ImageBackground>
            </TouchableOpacity>
             
            {/* Text Content */}
            <Text style={styles.shopname}>Russel's Dry Wash</Text>

            <View style={{flexDirection:'row'}}>
            <Entypo name="location-pin" size={17} color="#707070"  style={{marginTop:hp('1.1%'),marginLeft:wp('4%'),}}/>
            <Text style={styles.shopname1}>Univ of Ghana, Pent:Block C </Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <Entypo name="back-in-time" size={15} color="#707070"  style={{marginTop:hp('1.2%'),marginLeft:wp('4%'),}}/>
            <Text style={styles.shopname2}>8:00AM - 8:00PM</Text>
            </View>
            <Text style={styles.shopname}>Russell Dry Wash</Text>

            </View>

        </TouchableHighlight>
        <TouchableHighlight style={styles.shopsinfo}>
        <View>
           {/* Image Content */}
           <TouchableOpacity style={styles.shopsimage}>
            <ImageBackground source={require('../assets/loginimg.jpg')} style={styles.shopsimage} imageStyle={{ borderRadius: 15}} >
            
            <TouchableHighlight style={styles.ratings}>
            <View style={{flexDirection:'row'}}>
            <Entypo name="star" size={16} color="yellow"  style={{marginLeft:wp('1.5%'),marginTop:wp('0.5%'),  }}/>
            <Text style={styles.ratingno}> 4.0</Text>
            </View>
            </TouchableHighlight>

            </ImageBackground>
            </TouchableOpacity>
             
            {/* Text Content */}
            <Text style={styles.shopname}>Marie's Dry Wash</Text>

            <View style={{flexDirection:'row'}}>
            <Entypo name="location-pin" size={17} color="#707070"  style={{marginTop:hp('1.1%'),marginLeft:wp('4%'),}}/>
            <Text style={styles.shopname1}>Univ of Ghana, Pent:Block C </Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <Entypo name="back-in-time" size={15} color="#707070"  style={{marginTop:hp('1.2%'),marginLeft:wp('4%'),}}/>
            <Text style={styles.shopname2}>8:00AM - 8:00PM</Text>
            </View>

            </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.shopsinfo}>
        <View>
            {/* Image Content */}
            <TouchableOpacity style={styles.shopsimage}>
            <ImageBackground source={require('../assets/loginimg.jpg')} style={styles.shopsimage} imageStyle={{ borderRadius: 15}} >
            
            <TouchableHighlight style={styles.ratings}>
            <View style={{flexDirection:'row'}}>
            <Entypo name="star" size={16} color="yellow"  style={{marginLeft:wp('1.5%'),marginTop:wp('0.5%'),  }}/>
            <Text style={styles.ratingno}> 4.0</Text>
            </View>
            </TouchableHighlight>

            </ImageBackground>
            </TouchableOpacity>
             
            {/* Text Content */}
            <Text style={styles.shopname}>Marie's Dry Wash</Text>

            <View style={{flexDirection:'row'}}>
            <Entypo name="location-pin" size={17} color="#707070"  style={{marginTop:hp('1.1%'),marginLeft:wp('4%'),}}/>
            <Text style={styles.shopname1}>Univ of Ghana, Pent:Block C </Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <Entypo name="back-in-time" size={15} color="#707070"  style={{marginTop:hp('1.2%'),marginLeft:wp('4%'),}}/>
            <Text style={styles.shopname2}>8:00AM - 8:00PM</Text>
            </View>

            </View>
        </TouchableHighlight>
        </View>
        </ScrollView>



       </View>

       </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F4',
      
    },
    profile:{
        ...Platform.select({
            ios: {
                height:hp('5%'),
                width:wp('10.5%'),
                borderRadius:100,
                marginLeft:wp('40%'),
                backgroundColor:'#fff',
            },
            android: {
              height:hp('5%'),
              width:wp('10.5%'),
              borderRadius:100,
              marginLeft:wp('50%'),
              backgroundColor:'#fff',
              marginTop:hp('5%'),
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
    categories:{
        height:hp('10%'),
        width:wp('20%'),
        borderRadius:20,
        backgroundColor:'white',
        marginRight:wp('4%'),
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
            marginTop:hp('5%'),
        },
        android: {
            fontSize:wp('5%'),
            fontWeight:'bold',
            marginTop:hp('5%'),
        },

    })
},
shopsinfo:{
    ...Platform.select({
        ios: {
            height:hp('35%'),
            width:wp('60%'),
            borderRadius:15,
            backgroundColor:'white',
            marginRight:wp('4%'),
            marginTop:hp('2%'),
        },
        android: {
            height:hp('40%'),
            width:wp('58%'),
            borderRadius:15,
            backgroundColor:'white',
            marginRight:wp('4%'),
            marginTop:hp('2%'),
        },

    })
   
},
shopsimage:{
    ...Platform.select({
        ios: {
            height:hp('22%'),
            width:wp('60%'),
            borderRadius:15,
            backgroundColor:'#cccccc',          
        },
        android: {
            height:hp('27%'),
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
  