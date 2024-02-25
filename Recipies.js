import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const imagePath = './images/image2view.png';
export default function Recipes() {
  return (
    <View>
      <Text style={{color:'black', textAlign:'center'}}>Recipes</Text>
      <Image source={{uri:'https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=2048x2048&w=is&k=20&c=3l6KyUCUyNO2w0dJPmN4f2C-YPICegtONfM_7yiB7jg='}} style={{ width:400,height:370}}></Image>
      <Text style={styles.textt}>Biryani{'\n'}Ingredients{'\n'}1 cup boiled basmati rice
1/2 teaspoon mint leaves
salt as required
2 teaspoon virgin olive oil
3 green cardamom
2 clove
2 onion
1 teaspoon turmeric
1 tablespoon garlic paste
1 cup hung curd
2 tablespoon coriander leaves
water as required
1 tablespoon ghee
600 gm chicken
1 tablespoon garam masala powder
1 teaspoon saffron
1 tablespoon bay leaf
1 black cardamom
1 teaspoon cumin seeds
4 green chillies
1 tablespoon ginger paste
1 teaspoon red chilli powder
1/2 tablespoon ginger
2 drops kewra
1 tablespoon rose water</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textt:{
        paddingLeft:20,
        color:'black',
        fontSize:16,
        marginTop:25
      },
})