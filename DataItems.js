import { StyleSheet,View,Text,Pressable } from "react-native"

export const DataItems = (props) => {
  return (
   
        <View  style={styles.dataitem}>
             <Pressable onPress={props.handelDelete}
    // android_ripple={{color:'#7D7C7C'}}
     style={({pressed})=>pressed && styles.presseditem}>

         <Text style={styles.items} >{props.text}</Text>
    </Pressable>
           
          </View>
    
    
  )
}
const styles = StyleSheet.create({
   
    dataitem:{
     marginTop:15,
      borderRadius:5,
      backgroundColor:"#FAF3E3",
    },
    items:{
      color:'black',
      margin:8,
      padding:5,
    },
    presseditem:{
opacity:0.5,
    },
  
  });
