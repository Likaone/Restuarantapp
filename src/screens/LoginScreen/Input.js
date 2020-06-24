import React from 'react'
import { SafeAreaView,View,Text, StyleSheet, TextInput } from 'react-native';



const style = StyleSheet.create({
    Input: {
        padding: 10,
        borderWidth: 1,
        borderRadius : 8,
        borderColor : 'gray'

    },
    title : {
        marginVertical : 10,


    }
})


const Input = ({placeholder, secureTextEntry, onChangeText,value}) => {
    return(
 <View>
     <Text style = {style.title}>{placeholder}</Text>
     <TextInput 
     secureTextEntry = {secureTextEntry}
     style= {style.Input} 
     value= {value}
     onChangeText = {onChangeText}
     placeholder = {placeholder} >

     </TextInput>
 </View>
  
    )
  }
  export default Input;