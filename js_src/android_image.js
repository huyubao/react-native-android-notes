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
    Navigator,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    } from 'react-native';


var img = ['http://www.sj88.com/attachments/bd-aldimg/1205/124/17.jpg'
    ,'http://www.9yaocn.com/attachments/201412/05/13/jwu3ah5f8.jpg',
    'http://image.tianjimedia.com/uploadImages/2015/196/52/B911A9EI2C40.jpg'];
export default class hu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            imgs: img,
        };
    }

    pre(){
        var count = this.state.count;
        count--;
        if(count<0){
            count = 2;
        }
        this.setState({
            count:count,
        });
    }

    next(){
        var count = this.state.count;
        count++;
        if(count>2){
            count = 0;
        }
        this.setState({
            count:count,
        });
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={[{marginTop:40,flex:1,height:400},styles.center]}>
                    <Image style={styles.images} source={{uri:this.state.imgs[this.state.count]}} resizeMode="contain">
                    </Image>
                </View>



                <View style={styles.click}>
                    <TouchableOpacity style={[styles.item,{backgroundColor:"#ff0000"}]} activeOpacity= {0.7}  onPress={this.pre.bind(this)}>
                        <Text style = {styles.text}>上一张</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.item,{backgroundColor:"#ff0000"}]} activeOpacity= {0.7}  onPress={this.next.bind(this)}>
                        <Text style = {styles.text}>下一张</Text>
                    </TouchableOpacity>
                </View>
            </View>
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