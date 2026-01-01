import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import Stopwatch from "./screens/Stopwatch.js";

export default function App() {
  const [start, setstart] = useState(0);
    const [active, setActive] = useState(false);
  const [isrunning, setisrunning] = useState(false);

  const currentime = null;
  const [time, setTime] = useState(currentime);
  const fetchTime = () => {
    new Date().toLocaleTimeString();
  };
  const reset=()=>{
    setstart(0);
    setisrunning(false)
  }

    useEffect(() => {
      // run every 1000ms (1 second)
  if(isrunning){

    const interval = setInterval(() => {
      setstart((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }
  }, [isrunning]);

  const currentTime = new Date().toLocaleTimeString();

  return (
    <>
      <View style={styles.container}>
        <Stopwatch isrunning={isrunning} setisrunning={setisrunning} start={start} active={active} setActive={setActive}/>
     <TouchableOpacity style={{}}><Text style={{fontSize:30,marginTop:50,color:'white'}}
     onPress={reset}> Reset </Text></TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#342a2aff",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
