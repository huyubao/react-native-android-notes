/**
 * Created by admin on 2016/10/25.
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
    'http://image.tianjimedia.com/uploadImages/2015/196/52/B911A9EI2C40.jpg'
    ,'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D200/sign=0427e0b829f5e0fef1188e016c6134e5/d53f8794a4c27d1e2623d4651fd5ad6eddc4380e.jpg'
    ,'http://e.hiphotos.baidu.com/image/h%3D200/sign=37780ec0fc1986185e47e8847aec2e69/0b46f21fbe096b637247d5f108338744ebf8ac31.jpg'];

// 颜色
var BGCOLOR = ['#8ad3da', '#eecde2', '#e682b4', '#b7badd','#f1c7dd'];
export default class hu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            imgs:img,
        };
    }

    onPageScroll(){

    }


    onPageSelected(){

    }

    render() {
        var pagers = [];
        for(var i=0;i<img.length;i++){
            var pagerStyle = {
                backgroundColor:BGCOLOR[i%BGCOLOR.length],
                alignItems:'center',
                padding:20,
            }

            pagers.push(
                <View key={i} style={pagerStyle} collapsable={false}>
                    <Image
                        style={styles.images}
                        resizeMode={'contain'}
                        source={{uri:img[i%img.length]}}
                        />
                </View>
            )
        }

        return (
            <ViewPagerAndroid
                initialPage = {0}
                style={{flex:1}}
                onPageScroll={this.onPageScroll}
                onPageSelected={this.onPageSelected}
                ref={(viewpager)=>{this.viewpager=viewpager}}>
                {pagers}
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