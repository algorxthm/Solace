import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,

  Platform,
  ScrollView,TouchableOpacity
} from 'react-native';
import getDirections from 'react-native-google-maps-directions'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

const FacilityDetailScreen = ({route}) => {
  const itemData = route.params.itemData;

  useEffect(() => {
    console.log(itemData);
  });

  const  handleGetDirections = (lat , long) => {
    const data = {
       source: {
        latitude: -28.71668491128529,
        longitude:  24.73347371094927
      },
      destination: {
        latitude: lat,
        longitude: long
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
      waypoints: [
        {
          latitude: -33.8600025,
          longitude: 18.697452
        },
        {
          latitude: -33.8600026,
          longitude: 18.697453
        },
           {
          latitude: -33.8600036,
          longitude: 18.697493
        }
      ]
    }
    getDirections(data)
  }
 

  return (
    <ScrollView style={styles.scrollView}>

   <View style={styles.container}>
        <Image source={{uri:itemData.image}} style={{height: 300,width:400}}></Image>
        
        <Text style={{fontSize:20,fontWeight:'bold'}}>{itemData.title} </Text>
        
       
          <View style={styles.categories}>
            {itemData.categories.map((item, index) => (
              <View style={styles.categoryContainer} key={index}>
                <FontAwesome name="tag" size={16} color="#fff" />
                <Text style={styles.category}>{item}</Text>
              </View>
            ))}
          </View>
        
        
        {/* <Text style={{marginTop:10}}>{itemData.categories}</Text> */}
        <Text style={{marginTop:30}}>{itemData.description}</Text>
        <Text style={{marginTop:47}}>{itemData.address}</Text>
        <Text>{itemData.ratings}</Text> 
        <View>
    </View>           
         <TouchableOpacity style={{alignSelf:'center',marginTop:5,fontSize:16,fontWeight:'bold',color:'white',borderRadius:30,backgroundColor:'#F2C66E',height:40,width:130,textAlign:'center',}}  onPress={() =>handleGetDirections (itemData.latitude , itemData.longitude)} title="Get Directions">
        <Text style={{alignSelf:'center',marginTop:10,fontSize:16,fontWeight:'bold',color:'white',}}>
            Directions
        </Text>
      </TouchableOpacity>
      </View>
    

    </ScrollView>
  );
};

export default FacilityDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 300,
  },
  paragraph:{
    marginLeft:10
  }
});
