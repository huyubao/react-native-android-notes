/**
 * Created by admin on 2016/10/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    PixelRatio,
    } from 'react-native';

export default class hu extends Component {
    render(){
        return(
            <View style={[{flex:1,backgroundColor:'#f5fcff'},styles.center]}>
                <View style={styles.container}>
                    <View style={[styles.item,styles.center]}>
                        <Text style={styles.itemTain}>酒店</Text>
                    </View>

                    <View style={[styles.item,styles.lineLeftRight]}>
                        <View style={[styles.flex,styles.center,styles.lineCenter]}>
                            <Text style={styles.itemTain}>海外酒店</Text>
                        </View>
                        <View style={[styles.flex,styles.center]}>
                            <Text style={styles.itemTain}>特惠酒店</Text>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <View style={[styles.flex,styles.center,styles.lineCenter]}>
                            <Text style={styles.itemTain}>团购</Text>
                        </View>
                        <View style={[styles.flex,styles.center]}>
                            <Text style={styles.itemTain}>客栈,公寓</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        height:84,
        borderRadius:5,
        flexDirection:'row',
        backgroundColor:'#f5fcff',
        borderColor:'#ff0000',
        marginLeft:5,
        marginRight:5,
        borderWidth: 1 ,
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
    },
    item:{
        flex:1,
        backgroundColor:'#ff0000',
    },
    itemTain:{
        fontSize:20,
        color:'#ffffff',
        fontWeight:'bold',
    },
    flex:{
        flex:1,
    },
    lineLeftRight:{
        borderLeftWidth:1/PixelRatio.get(),
        borderRightWidth:1/PixelRatio.get(),
        borderLeftColor:'#ffffff',
        borderRightColor:'#ffffff',
    },
    lineCenter:{
        borderBottomWidth:1/PixelRatio.get(),
        borderBottomColor:'#ffffff',
    }

});

AppRegistry.registerComponent('hu', ()=>hu);