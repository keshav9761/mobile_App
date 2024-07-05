import React, { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';



function ItemList({navigation}:any): React.JSX.Element {
    const [data, setData] = useState<any>()

    const fetchData = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const Apidata = await response.json();
        // console.log("=========$$===>",data);
        setData(Apidata);

    }
    useEffect(() => {
        fetchData();
    }, [])

    const ItemCardView = ({ itemDetails }: any) => {
        const { item } = itemDetails || {}
        return (
            <Pressable onPress={() =>navigation.navigate('Item',{itemDetails})}>
                <View style={style.itemContainer}>
                    <View style={style.itemImage}>
                        <Image
                            style={{
                                height: 205,
                                width: 200,
                                // backgroundColor: 'yellow',

                            }}
                            source={{ uri: item?.image }}
                        />
                    </View>
                    <View style={style.itemInfo}>
                        <Text style={{ fontWeight: 'bold' }}>{item?.title}</Text>
                        <Text>{item?.category}</Text>
                        <View style={{ flexDirection: 'row', gap: 10, }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item?.rating?.rate}</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>*****</Text>
                        </View>
                        <Text style={{ fontWeight: 'bold' }}>$ {item?.price}</Text>
                    </View>

                </View>
            </Pressable>)
    }

    return (
        <ScrollView>
            <FlatList
                data={data}
                renderItem={(item) => <ItemCardView itemDetails={item} />}
                keyExtractor={(item) => `key-${item.id}`}
            />
        </ScrollView >
    );
}

const style = StyleSheet.create({
    itemContainer: {
        color: '#000',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        flexDirection: 'row',
        gap: 50
    },
    itemImage: {
        flex: 1
    },
    itemInfo: {
        flex: 1,
        gap: 5
    }
})

export default ItemList;

