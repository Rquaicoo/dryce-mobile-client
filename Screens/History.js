import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ScrollView, borderRadius,TextInput,TouchableHighlight ,SafeAreaView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Feather, AntDesign, FontAwesome5, EvilIcons, Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage'




export default function History({navigation}) {

  return (
    <ScrollView>
      
      <View style={styles.headerContainer}>
      <Ionicons name="chevron-back-sharp" size={40} color="black" />
      <Text style={styles.headerText}>History</Text>
      </View>

      <View style={{display: "flex", alignItems: "center", justifyContent: "center", marginLeft: 20}}>
        <Image
            style={{width: "50%", resizeMode: "contain"}}
            source={require("../assets/history_illustration.png")}
        />
        <View style={{marginTop: -120,}}>
            <Text style={{fontWeight: "500", fontSize: 29}}>No history yet</Text>
            <Text style={{fontSize: 20, marginLeft: -15}}>Hit the button below to {"\n"} start your laundry order</Text>
        </View>
      </View>

      <View>
          <TouchableOpacity style={styles.bottomButton}>
            <Text style={{fontWeight: "bold", fontSize: 20, color: "black", color: "white" }}>Start Laundry</Text>
            </TouchableOpacity>
      </View>
    </ScrollView>
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
  