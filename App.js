import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,Image
} from "react-native";
import { InputField } from "./InputField";
import { DataItems } from "./DataItems";
import { StatusBar } from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [isModelVisible, setIsModelVisible] = useState(false);

  const [datas, setData] = useState([]);

  const handelInput = (t) => {
    setInputText(t);
  };
  const handelData = () => {
    setData((e) => [...e, inputText]);
    setIsModelVisible(false)
  
  };
  const handelDelete = (index) => {
    console.log("deleted", index);
    const newitem = datas.filter((e, i) => i != index);
    setData(newitem);
  };
  const handelButton=()=>{
    setIsModelVisible(true)
  }
  const handelCancle=()=>{
    setIsModelVisible(false)
  }
  return (
    <>
    <StatusBar/>
    <View style={styles.container}>
    <Image style={styles.image}source={require('./assets/images/bgs.png')}/>
      <Button title="Add Something" color="#FF9F29"  titleStyle={styles.tit}onPress={handelButton} />
      {isModelVisible && (
        <InputField handelData={handelData} handelInput={handelInput} handelCancle={handelCancle} />
      )}
      <View style={styles.maincontainer}>
        <FlatList
          data={datas}
          renderItem={(itemdata) => {
            return (
              <DataItems
                text={itemdata.item}
                handelDelete={() => handelDelete(itemdata.index)}
              />
            );
          }}
        />
      </View>
    </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor:"#000000",
  },
  inputcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    // paddingBottom:5,
    flex: 1,
  },
  textinput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "70%",
    marginRight: 8,
    padding: 3,
  },
  maincontainer: {
    flex: 5,
  },
  image:{
    width:100,
    height:100,
    marginLeft:120,
  }
});
