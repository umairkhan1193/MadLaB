import { View, Text, StyleSheet, TextInput,Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LoginForm() {
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.mainheader}>Login Form</Text>
        <View style={styles.inputcontainer}>
            <Text style={styles.lables}> Enter Your Name</Text>
            <TextInput style={styles.inputstyle} autoCorrect={false}
            >Username</TextInput>
        </View>
        <View style={styles.inputcontainer}>
            <Text style={styles.lables}> Enter Your Password</Text>
            <TextInput style={styles.inputstyle} 
            autoCorrect={false}
            secureTextEntry={true}
            >Password</TextInput>
        </View>
        <View>
            <TouchableOpacity>
            <Button title='Login' color={'orange'}></Button>
            </TouchableOpacity>
        </View>
    </View>
  )
}
const styles= StyleSheet.create({
    mainContainer: {
        Height: "100%",
        paddingHorizontal: 30,
        paddingTop:30,
        backgroundColor: "#fff",
     },
     mainheader:{
        fontSize:25,
        color:"#344055",
        fontWeight:"500",
        paddingTop:20,
        paddingBottom:15,
        paddingHorizontal:100,
        
      
        fontFamily:"bold"
     },
     inputcontainer:{
        margintop:20,
     },
     lables:{
        fontSize:18,
        color:"black",
        margintop:10,
        lineHeight:25,
        
     },
     inputstyle:{
        borderWidth:1,
        borderColor:"black",
        paddingHorizontal:15,
        paddingVertical:17,
        borderRadius:1,
        fontSize:18,
     }

})