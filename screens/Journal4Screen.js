import { StyleSheet, View, FlatList } from 'react-native'
import React, { useEffect, useState} from 'react'

import JournalCard from '../components/JournalCard'

import { firebase } from '@react-native-firebase/firestore';

const Journal4Screen = ({navigation}) => {

  const [journal, setmyjournal ] = useState( [])

  const  auth = firebase.auth() ;

  const renderItem =({item}) =>{
  return (
    <View>
          <JournalCard itemData={item}/>
    </View>
  );
};


useEffect(() => {

  const id = firebase.auth().currentUser.uid
    firebase.firestore().collection('journal').doc(id).collection('private')
    .get()
    .then(snapshot => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log(data)
      setmyjournal(data)
    }).catch((error) => {
      console.log(error)
    })
}, [])

return (
  <View >
    
    
    <FlatList 
    
        data={journal}
        renderItem={renderItem}
        keyExtractor={item => item.id}    
    />
  </View>
);
};

export default Journal4Screen

const styles = StyleSheet.create({
 
})