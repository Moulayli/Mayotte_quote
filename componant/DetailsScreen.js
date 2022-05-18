import React ,{ useState } from 'react';
import { View ,StyleSheetView, KeyboardAvoidingView, TouchableOpacity,TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard,Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';



const  DetailsScreen= () => {
    const [citation,setCitation] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);
    const [message ,setMessage] = useState()
    const styles = StyleSheet.create({
        container: {
          flex: 1
        },
        inner: {
          padding: 24,
          flex: 1,
          justifyContent: "space-around"
        },
        header: {
          fontSize: 30,
          marginBottom: 40
        },
        textInput: {
          height: 40,
          borderColor: "#000000",
          borderBottomWidth: 1,
          marginBottom: 36
        },
        btnContainer: {
          backgroundColor: "white",
          marginTop: 12
        },centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 25,
            backgroundColor:'#ffc686',
            borderRadius:25,
          },
          textStyle:{
              margin:25,
              fontSize:21,
              backgroundColor:'#726665',
              borderRadius:25,
              padding:7
              
          }
          
      });
      function onValueChangeCitation(e) {
        setCitation(e)
       }
       function Inscrptiontoserver() {
        if (citation !=null ) {
           fetch('https://luha.alwaysdata.net/api_shim/api_adress/?Newquote=1',
        
           {
             method: 'POST',
             headers: {
               'Content-Type':'application/x-www-form-urlencoded',
               'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
             },
             body: 'citation='+citation
           })
           .then((res)=>{
            return res.json()
           })
           .then((data)=>{
               console.log(data)
             if (data.response==true) {
                 setMessage('✅ Merci pour votre citation , il sera disponible après l examin ✅')
                 setModalVisible(true)
                 //navigate("Connexion")
             }else{
                   if (data.res) {
                       setMessage('⌛'+data.response+'⏳')
                       setModalVisible(true)
                   }
             }
             console.log(data.response)
           })
           .catch(function(error) {
             console.log('response : ' + error.message);
               throw error;
             });
       }else{
           setMessage(' ❌ Merci de saissir une citation ❌')
           setModalVisible(true)
        }
         
       }
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}> {message} </Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPressOut={()=>{
                    if ( message == '✅ Inscription réussite ✅' ) {
                        navigate("Connexion")
                      }else{
                        console.log('fermer')
                      }
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}> Fermer </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
            <Text style={styles.header}>Ma Contribution </Text>
            <TextInput placeholder="Citation" style={styles.textInput}  onChangeText={onValueChangeCitation}  />
            <TextInput placeholder="Explication" style={styles.textInput} value={'A mediter '} />
            <View style={styles.btnContainer}>
              <Button color="#726665" title="Publier " onPress={Inscrptiontoserver} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  export default DetailsScreen;