import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const JournalCard = ({itemData}) => {
  useEffect(function () {
    console.log(itemData);
  });

  return (
    <TouchableOpacity>
      <View style={styles.card}>
        {itemData.mood.otherParam == 'happy' ? (
          <View style={styles.cardInfoHappy}>
            <Text style={styles.cardTitle}>
              {itemData.test.substring(0, 24)}
            </Text>

            <Text style={styles.cardTitle}>{itemData.mood.otherParam}</Text>
            <Text>{itemData.text}</Text>
          </View>
        ) : itemData.mood.otherParam == 'cry' ? 
      
        <View style={styles.cardInfoCry}>
        <Text style={styles.cardTitle}>
          {itemData.test.substring(0, 24)}
        </Text>

        <Text style={styles.cardTitle}>{itemData.mood.otherParam}</Text>
        <Text>{itemData.text}</Text>
      </View>:  itemData.mood.otherParam == 'lonely' ? 
      
      <View style={styles.cardInfoCry}>
      <Text style={styles.cardTitle}>
        {itemData.test.substring(0, 24)}
      </Text>

      <Text style={styles.cardTitle}>{itemData.mood.otherParam}</Text>
      <Text>{itemData.text}</Text>
    </View>: itemData.mood.otherParam == 'heartbroken' ? 
      
      <View style={styles.cardInfoHeartbroken}>
      <Text style={styles.cardTitle}>
        {itemData.test.substring(0, 24)}
      </Text>

      <Text style={styles.cardTitle}>{itemData.mood.otherParam}</Text>
      <Text>{itemData.text}</Text>
    </View>: itemData.mood.otherParam == 'Ok' ? 
      
      <View style={styles.cardInfoOk}>
      <Text style={styles.cardTitle}>
        {itemData.test.substring(0, 24)}
      </Text>

      <Text style={styles.cardTitle}>{itemData.mood.otherParam}</Text>
      <Text>{itemData.text}</Text>
    </View>: itemData.mood.otherParam == 'sad' ? 
      
      <View style={styles.cardInfoSad}>
      <Text style={styles.cardTitle}>
        {itemData.test.substring(0, 24)}
      </Text>

      <Text style={styles.cardTitle}>{itemData.mood.otherParam}</Text>
      <Text>{itemData.text}</Text>
    </View>: null
        }
      </View>
    </TouchableOpacity>
  );
};

export default JournalCard;

const styles = StyleSheet.create({
  card: {
    height: 100,
    marginVertical: 10,
    shadowColor: '#F2C66E',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: 300,
    alignSelf: 'center',
  },

  cardInfoHappy: {
    flex: 1,
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 1,
    borderTopRightRadius: 8,
    backgroundColor: '#F2C66E',
  },

  
  cardInfoCry: {
    flex: 1,
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 1,
    borderTopRightRadius: 8,
    backgroundColor: '#FF8080',
  },
  cardInfoHeartbroken: {
    flex: 1,
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 1,
    borderTopRightRadius: 8,
    backgroundColor: '#630606',
  },
  cardInfoLonely: {
    flex: 1,
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 1,
    borderTopRightRadius: 8,
    backgroundColor: '#4D96FF',
  },
  cardInfoSad: {
    flex: 1,
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 1,
    borderTopRightRadius: 8,
    backgroundColor: '#3A3845',
  },
  cardInfoOk: {
    flex: 1,
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 1,
    borderTopRightRadius: 8,
    backgroundColor: '#F473B9',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
    marginTop: 15,
  },
});
