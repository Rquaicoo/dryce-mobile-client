import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ImageBackground, borderRadius,Flatlist,TouchableHighlight ,SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather, AntDesign, FontAwesome5, EvilIcons, Ionicons , Entypo} from '@expo/vector-icons';


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
            <TouchableOpacity style={styles.profile}>
              <Image source={require('../assets/logo.png')} style={styles.logo}/>
            </TouchableOpacity>
            </View>
    {/* Headers */}
            <Text style={styles.header} > Hello <Text style={styles.headercolor}> Collins</Text> </Text>
            <Text style={styles.header1}> What service</Text>
            <Text style={styles.header1}> do you need today?</Text>

        {/* <Flatlist  
        data={categories}
        renderItem = {maincategories}
        /> */}

        {/* Categories */}
        <ScrollView horizontal='true' >
            <View style={{flexDirection:'row', marginTop:hp('5%')}}>
            <TouchableOpacity style={styles.categories}>
            <Image source={require('../assets/img.jpg')} style={styles.imagecat} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.categories}>
            <Image source={require('../assets/img.jpg')} style={styles.imagecat} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.categories}>
            <Image source={require('../assets/img.jpg')} style={styles.imagecat} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.categories}>
            <Image source={require('../assets/img.jpg')} style={styles.imagecat} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.categories}>
            <Image source={require('../assets/img.jpg')} style={styles.imagecat} />
            </TouchableOpacity>
            </View>
        </ScrollView>

        <Text style={styles.shops}> Popular Laundry </Text>
        <ScrollView horizontal='true' >
        <View style={{flexDirection:'row'}}>
        <TouchableHighlight style={styles.shopsinfo}>
            <View>
            <TouchableOpacity style={styles.shopsimage}>
            <ImageBackground source={require('../assets/loginimg.jpg')} style={styles.shopsimage} imageStyle={{ borderRadius: 25}} />
            </TouchableOpacity>

            <Text style={styles.shopname}>Russel Dry Wash</Text>
            </View>

        </TouchableHighlight>
        <TouchableHighlight style={styles.shopsinfo}>
            <TouchableOpacity style={styles.shopsimage}>
            <ImageBackground source={require('../assets/loginimg.jpg')} style={styles.shopsimage}  imageStyle={{ borderRadius: 25}} />
            </TouchableOpacity>
        </TouchableHighlight>
        <TouchableHighlight style={styles.shopsinfo}>
            <TouchableOpacity style={styles.shopsimage}>
            <ImageBackground source={require('../assets/loginimg.jpg')} style={styles.shopsimage} imageStyle={{ borderRadius: 25}} />
            </TouchableOpacity>
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
                marginLeft:wp('80%'),
                backgroundColor:'#fff',
            },
            android: {
              height:hp('5%'),
              width:wp('10.5%'),
              borderRadius:100,
              marginLeft:wp('80%'),
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
                fontSize:wp('4%'),
            },
            android: {
                fontSize:wp('5%'),
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
                fontSize:wp('4%'),
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
            height:hp('40%'),
            width:wp('62%'),
            borderRadius:25,
            backgroundColor:'white',
            marginRight:wp('4%'),
            marginTop:hp('2%'),
        },
        android: {
            height:hp('40%'),
            width:wp('60%'),
            borderRadius:25,
            backgroundColor:'white',
            marginRight:wp('4%'),
            marginTop:hp('2%'),
        },

    })
   
},
shopsimage:{
    ...Platform.select({
        ios: {
            height:hp('27%'),
            width:wp('62%'),
            borderRadius:25,
            backgroundColor:'#cccccc',          
        },
        android: {
            height:hp('27%'),
             width:wp('60%'),
            borderRadius:25,
            backgroundColor:'#cccccc',
        },
    }) 
},
shopname:{
    ...Platform.select({
        ios: {
            fontSize:wp('5.5%'),
            fontWeight:'bold',
            marginLeft:wp('5%'),
            marginTop:hp('1.5%'),
        },
        android: {
            fontSize:wp('6.5%'),
            fontWeight:'bold',
            marginLeft:wp('5%'),
            marginTop:hp('1.5%'),
        },

    })
},
  
  
  
  
  
  });
  