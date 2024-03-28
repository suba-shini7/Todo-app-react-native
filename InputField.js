import { View, StyleSheet, TextInput, Button, Modal ,Image } from "react-native";

export const InputField = ({ handelData, handelInput ,handelCancle}) => {
  return (
    <Modal animationType="slide">
      <View style={styles.inputcontainer}>
        <Image style={styles.image}source={require('./assets/images/bgs.png')}/>
        <TextInput
          onChangeText={handelInput}
          style={styles.textinput}
          placeholder="Type something"
        ></TextInput>
        <View style={styles.btncnt}>
          <View style={styles.btn}>
            <Button title="Add " color="#82CD47" onPress={handelData} />
          </View>
          <View style={styles.btn}>
            <Button title="cancel" color="#D80032" onPress={handelCancle} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputcontainer: {
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    flex: 1,
    // backgroundColor:"#7D0A0A"
  },
  textinput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "70%",
    marginRight: 8,
    padding: 3,
    
  },
  btncnt: {
    flexDirection: "row",
    marginTop:20,
  },
  btn:{
    width:100,
    marginHorizontal:5,
  },
  image:{
    width:100,
    height:100,
    margin:20,
  }
});
