import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const Category = () => {
    return (
        <View>
        {/* <View style={{ height: 100, width: 100 }}></View> */}
            <Icon
                type='material'
                name='search'
                color='maroon'
                raised
                onPress={() => console.log('icon search')}
            />
        </View>
    );
};

export default Category

const styles = StyleSheet.create({

})