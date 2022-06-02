import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';


export default function MapPage({navigation}) {
  
  const [problems,setProblems] = useState([]); 
    useEffect(() =>{
      axios.get('http://192.168.0.213:8080/problems')
        .then(res=>{
          console.log(res);
          setProblems(res.data);
        })
        .catch(err => {
          console.log(err)
        })
    },[]);
  
  return (
    
    <View style={styles.container}>
      
      <MapView style={styles.map} 
        initialRegion={{
          latitude: 45.760696,
          longitude: 21.226788,
          latitudeDelta: 0.122,
          longitudeDelta: 0.121,
        }}   
      >
        {problems.map((problem,i) =>{
          return(<Marker
            key={i}
            coordinate={{
              latitude:problems[i].latitude,
              longitude:problems[i].longitude
            }}
            title={problems[i].category}
            description={problems[i].subcategory}
            pinColor={"#ffd1dc"}
            />
            )
        })}
      </MapView> 
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  buton:{
    
  }
});