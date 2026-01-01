import { View, Text,StyleSheet,Button, TouchableOpacity } from 'react-native'
import {React,useEffect,useState} from 'react'

const Stopwatch = (props) => {
  
    

    
    const handleClick=()=>{
     
      props.setisrunning(!props.isrunning)

    }
  return (
    <>
    <TouchableOpacity android_disableSound={true} style={props.isrunning?styles.containernot:styles.container} onPress={handleClick}>
        <Text style={{color:'white',fontSize:25,marginBottom:20}}>Stopwatch</Text>

        <Text style={{ color: "white", fontSize: 22 }}>{props.start}</Text>
    </TouchableOpacity>
     
    
    </>
  )
}

const styles=StyleSheet.create({
    container:{
        // flex:1,
        // flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'grey',
        height:200,
        width:200,
        borderRadius:'50%',
        
        
    },
    text:{
        color:'white',
        fontSize:25,
    },
    containernot:{
             justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'green',
        height:200,
        width:200,
        borderRadius:'50%',

    }
})

export default Stopwatch