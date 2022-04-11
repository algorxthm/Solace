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

const Journal2Screen = ({navigation, route}) => {
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.contentText}>What made you feel this way?</Text>

      {/* first row of icons */}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() =>navigation.navigate('Journal3', {otherParam: 'friends', mood:route.params })}><ContentImages images={require('../assets/Images/friends.png')}text="Friends"/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Journal3', {otherParam:'family', mood:route.params})}><ContentImages images={require('../assets/Images/family.png')} text="Family" /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Journal3', {otherParam:'date' , mood:route.params})}><ContentImages images={require('../assets/Images/date.png')} text="Date" /></TouchableOpacity>
      </View>
           
      {/* second row of icons */}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Journal3', {otherParam: 'movies' , mood:route.params})}><ContentImages images={require('../assets/Images/movies.png')}text="Movies"/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Journal3', {otherParam:'cleaning' , mood:route.params})}><ContentImages images={require('../assets/Images/cleaning.png')} text="Cleaning" /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Journal3', {otherParam:'exercise' , mood:route.params})}><ContentImages images={require('../assets/Images/exercising.png')} text="Exercise"/></TouchableOpacity>
      </View>

      {/* Third row of icons */}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Journal3', {otherParam: 'gaming' , mood:route.params})}><ContentImages images={require('../assets/Images/games.png')}text="Gaming"/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Journal3', {otherParam:'sleeping', mood:route.params})}><ContentImages images={require('../assets/Images/sleeping.png')} text="Sleeping" /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Journal3', {otherParam:'relaxing', mood:route.params})}><ContentImages images={require('../assets/Images/relaxing.png')} text="Realxing" /></TouchableOpacity>
      </View>
     
    </View>

    
  );
};

export default Journal2Screen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  contentText: {
    top: 40,
    position: 'relative',
    bottom:10,
    color: '#F2C66E',
    lineHeight: 20,
    fontWeight: 'bold',
    fontSize: 20,
    
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
    flexDirection: 'row',
  },
  happy: {
    margin: 7,
    height:40,
    width:35,
    alignSelf:'center'

  },
  happytext: {
    textAlign: 'center',
    marginTop:10
  },
});
