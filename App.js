import React, {useState} from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native"

export default() => {

  const [contador, setContador] = useState(0)
  
  return(
    <View style={Estilo.container}>
      <View style={Estilo.logoContainer}>
        <Image style={Estilo.img} source={require("./assets/logo-contador.png")}/>
      </View>

      <Text style={Estilo.text}>
        {contador}
      </Text>

      <Button title="+" color="#688e26" onPress={ () => setContador(contador+1)}/>
      <Button title="-" color="#F4442E" onPress={ () => 
      contador > 0 ? setContador(contador-1): false}/>
    </View>
  )
}

const Estilo = StyleSheet.create({
  img: {
    width: 150,
    height: 150
  },
  text: {
    fontSize: 80,
    textAlign: "center",
    color: "white"
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#160F29",
  },
  logoContainer: {
    alignItems: "center"
  }
})