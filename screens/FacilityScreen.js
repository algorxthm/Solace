import { StyleSheet, FlatList, View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import Card from '../components/Card'

import { firebase } from '@react-native-firebase/firestore';

const FacilityScreen = ({navigation}) => {

  const [facilities, setFacilities] = useState([])
  const renderItem = ({item}) => {
    return (
        <Card 
            itemData={item}
            onPress={()=> navigation.navigate('FacilityDetail', {itemData: item})}
        />
    );
};



useEffect(() => {


    firebase.firestore().collection('facilities')
    .get()
    .then(snapshot => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log(data)
      setFacilities(data)
    }).catch((error) => {
      console.log(error)
    })
}, [])


return (
  <View style={styles.container}>
    
    <FlatList  
        data={facilities}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
    />
  </View>
);
};

export default FacilityScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '90%',
    alignSelf: 'center'
  },
})