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
    ViewPagerAndroid,
    TouchableOpacity,
    } from 'react-native';


var img = ['http://www.sj88.com/attachments/bd-aldimg/1205/124/17.jpg'
    ,'http://www.9yaocn.com/attachments/201412/05/13/jwu3ah5f8.jpg',
    'http://image.tianjimedia.com/uploadImages/2015/196/52/B911A9EI2C40.jpg'];
export default class hu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            imgs:img,
        };
    }


    render() {
        return (
        <ViewPagerAndroid
            initialPage = {0}
            style={{flex:1}}
            isLoop={true}>
            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                <Image style={styles.images}
                       resizeMode="contain"
                       source={{uri:img[0]}}/>
            </View>

            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                <Image style={styles.images}
                       resizeMode="contain"
                       source={{uri:img[1]}}/>
            </View>

            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                <Image style={styles.images}
                       resizeMode="contain"
                       source={{uri:img[2]}}/>
            </View>
        </ViewPagerAndroid>
        );

    }
}

const styles = StyleSheet.create({
    images:{
        alignItems:'center',
        width:300,
        height:600,
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
    },
    click:{
        flexDirection:'row',
        flex:1,
        height:40,
        borderWidth:1,
        borderColor:'#00fff0',
        justifyContent:'center',
    },
    item:{
        flex:1,
        height:40,
        justifyContent:'center',
        alignItems:'center',
    },
});

AppRegistry.registerComponent('hu',()=>hu);