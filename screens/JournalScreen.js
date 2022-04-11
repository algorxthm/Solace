import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
// component for the content rendered in the Journals

const ContentImages = (props) => {
  //React.useState(() =>)
  return (
    <View style={styles.boders}>
      <View style={styles.border}>
        <View
          style={{
            alignContentImages: 'center',
            justifyContentImages: 'center',
          }}>
          <Image source={props.images} style={styles.happy} />
        </View>
        <Text style={styles.happytext}>{props.text}</Text>
      </View>
    </View>
  );
};

const JournalScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.contentText}>Hi, how are you feeling?</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Journal2', {otherParam: 'happy'})
          }>
          <ContentImages
            images={require('../assets/Images/happy.png')}
            text="Happy"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Journal2', {otherParam:'sad'})}><ContentImages images={require('../assets/Images/sad.png')} text="Sad" /></TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Journal2', {otherParam:'cry'})}><ContentImages images={require('../assets/Images/crying.png')} text="crying" /></TouchableOpacity>
      </View>



      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Journal2', {otherParam: 'happy'})
          }>
          <ContentImages
            images={require('../assets/Images/lonely.png')}
            text="Lonely"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Journal2', {otherParam:'sad'})}><ContentImages images={require('../assets/Images/ok.png')} text="OK" /></TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Journal2', {otherParam:'HeartBroken'})}><ContentImages images={require('../assets/Images/heartbroken.png')} text="Heart Broken" /></TouchableOpacity>
      </View>
     
    </View>

    
  );
};

export default JournalScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  contentText: {
    top: 45,
    position: 'relative',
    fontSize: 20,
    color: '#F2C66E',
    lineHeight: 20,
    fontWeight: 'bold',
  
  },
  border: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 30,
    marginTop: 100,
  },
  boders: {
  
  },
  happy: {
    margin: 7,
  },
  happytext: {
    textAlign: 'center',
  },
});
