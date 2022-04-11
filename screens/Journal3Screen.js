import {StyleSheet, Text, View, Image, TextInput, Alert} from 'react-native';
import React , {useEffect} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firebase from '@react-native-firebase/app';

const Journal3Screen = ({navigation, route}) => {


   useEffect(()=>{
     console.log(route.params)
   })

  const [text, setText] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);

  const [val, setVal] = React.useState();
  const imd = require('../assets/Images/calender.gif');
  // save values to firebase
  var db = firebase.firestore();
  const auth = firebase.auth();

  const setValue = (value) => {
    console.log(value);
    setVal(value);
  };


  const saveJournal =(() =>{

    firebase.firestore().collection("journal").doc(auth.currentUser.uid).collection("private").add({
      text:text ,
      test:date.toString(),
      mood:route.params.mood ,
      causeOfmood:route.params.otherParam,

  }).then(()=>{

Alert.alert (
  'Successfully Added'
)

navigation.navigate ('Journal4')
     
  }).catch((error)=>{
       console.log(error)
  }) 

  })

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.contentText}>Note down your feelings</Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => setOpen(true, date)}>
            <Image source={imd} style={{width: 40, height: 40}} />
          </TouchableOpacity>

          <View style={{marginLeft: 10, marginBottom: 20}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              {date.toDateString()}
            </Text>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              {date.toTimeString().substring(0, 9)}
            </Text>
          </View>
        </View>

        <View style={{justifyContent: 'center', alignContent: 'center'}}>
          

        {/* TextBox Input */}
        <TextInput
          onChangeText={(text) => setText(text)}
          placeholder="Write your journal"
          style={styles.textBox}
          multiline={true}


        />

        {/* Send button */}
        <TouchableOpacity style={styles.sendButton} onPress={saveJournal}>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 5,
              marginLeft: 10,
              color: '#eee',
              fontWeight: 'bold',
              marginLeft:30,
              marginTop:5
            }}>
            Submit
          </Text>
         
        </TouchableOpacity>
      </View>
      </View>
   </ScrollView>
  );
};

export default Journal3Screen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop:30,
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  contentText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6D6B6B',
    marginBottom: 25,
  },
  textBox: {
    width: 350,
    marginTop: 10,
    fontSize: 16,
  },
  sendButton: {
    borderWidth: 1,
    height: 35,
    width: 120,
    alignSelf:'center',
    borderRadius: 25,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: "#F2C66E",
    borderColor: '#eee',
    marginBottom: 10,
    marginTop:60,
    
  },
});
