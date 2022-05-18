import * as React from 'react';
import { 
    Button,
     View,
      Text ,
      StyleSheet,
      SafeAreaView, 
      ScrollView,
      StatusBar} from 'react-native';



function ApropoScreen({ navigation }) {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        
        },
        scrollView: {
          backgroundColor: '#ffebbe',
          marginHorizontal: 1,
        },
        text: {
          fontSize: 26,
          margin:2,
          padding:15,
          
        },
        textcitation:{
            fontWeight: 'bold',
            margin:2,
            color:'#b86f56',
            alignItems:'center',
        }
      });
    
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
        L'objectif du projet est de fournir une citation shimaore par jour, il se veut collaboratif et évolutif. 
        Collaboratif et évolutif dans le sens, vous vous pouvez, vous aussi, nous transmettre vos citations préférées. 
       
        Ils seront bien sûr étudiés avant d'être ajouté dans l'application, de manière générale ça prend une semaine.
        <Text style={styles.text}>Les Citations présentent dans l'application sont dans une base de donnée en Open Ressources et sous licences libre.</Text>



        Pour toute question, merci de nous écrire à l'adresse : imagine.ytcontact@gmail.com 

        <Text style={styles.textcitation}> Citation Mahoraise by Imagine </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ApropoScreen;