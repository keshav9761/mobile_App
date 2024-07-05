import React, { useState } from 'react'
import { Text, View } from 'react-native'

export default function ItemDetail({ navigation, route }: any) {
  const [itme, setItem] = useState<any>()

  const { item } = route?.params?.itemDetails; // destructuring

  console.log("--------->>>>", item)
  return (
    <View>
      <Text style={{fontSize:20}}>{item?.category}</Text>
      <Text style={{fontSize:20}}>{item?.description}</Text>
      <Text style={{fontSize:20}}>{item?.price}</Text>
    </View>
  )
}
