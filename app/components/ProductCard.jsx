import { StyleSheet, Text, View, TouchableOpacity, BackHandler } from 'react-native'
import React from 'react'

import { ScrollView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const ProductCard = ({ productName, productPrice, productLink, containerWidth }) => {
  // Width of card
  const cardWidth = (containerWidth - 1 * 5) / 2

  return (
    <View>
      {/* <Text>ProductCard</Text> */}

      <Card
        containerStyle={{
          height: 200,
          width: cardWidth,
          margin: 0,
          marginTop: 15,
          padding: 0,
          borderRadius: 15,
        }}
      >
        {/* <Card.Title>HELLO WORLD</Card.Title> */}
        {/* <Card.Divider/> */}
        {/* <Card.Image source={require('../images/pic2.jpg')} /> */}
        <Card.Image
          style={{
            height: 150,
            width: "100%",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
          // source={{ uri: "https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png" }}
          source={{ uri: "https://www.tommyjohn.com/cdn/shop/articles/holey.webp?v=1659548657&width=1500" }}
        />

        <TouchableOpacity
          onPress={console.log(productLink)}
          style={{
            backgroundColor: "#525252",
            height: 50,
            width: "100%",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{color: "#ffffff"}}
          >
            { productName }
          </Text>

          <Text
            style={{color: "#ffffff"}}
          >
            ${ productPrice } / day
          </Text>
          
        </TouchableOpacity>
        
        {/* <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
        </Text> */}
        
        {/* <Button
          icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' /> */}
      </Card>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({})