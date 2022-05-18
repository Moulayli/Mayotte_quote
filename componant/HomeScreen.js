import React ,{useState} from 'react';
import { Button, View, Text ,StyleSheet,ImageBackground} from 'react-native';


const  HomeScreen= ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          color:'white',
        },
        text: {
          color: "#726666",
          fontSize:15,
          lineHeight: 15,
          fontWeight: "bold",
          padding:25,
          textAlign: "center",
          backgroundColor: "rgba(255,198,134,0.8)"
        },
        button: {
          color: "red",
          backgroundColor:'red',
          borderRadius:25,
      
        },
        image: {
          flex: 1,
          height:'100%',
          width:'100%',
          backgroundColor:'black',
          justifyContent: "center",
       
        },
      });
      const [quote ,setQuote]=useState(null)
      const Quotemoning=() => {
        fetch('https://luha.alwaysdata.net/api_shim/?hour=1')
        .then((res)=>{
          return res.json()
        }).
        then((data)=>{
          setQuote("Citation du jour : "+data.citation)
        })
      }
      const onPressLearnMore = ()=>{
        fetch('https://luha.alwaysdata.net/api_shim/')
        .then((res)=>{
          return res.json()
        }).
        then((data)=>{
          setQuote(data.citation)
        })
      }
      if (quote == null) {
        Quotemoning()
      }
    const ImageRandom = {uri:'https://picsum.photos/700'}
  return (
    <View style={styles.container}>
        <ImageBackground source={ImageRandom} resizeMode="cover" style={styles.image} blurRadius={1} >
        <Text style={styles.text} > {quote}</Text>
        <Button
            title="J'ai de la chance "
            color="#726665"
            onPress={onPressLearnMore}
            />
            </ImageBackground>
    </View>
  );
}

export default HomeScreen;