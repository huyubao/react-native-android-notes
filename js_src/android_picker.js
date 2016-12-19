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
    Picker,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ProgressBarAndroid,
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
            value:null,
        };
    }


    render() {
        return (
            <View style={{flex:1,borderWidth:1,borderColor:'#ff0000'}}>
                <View>
                    <Text>Picker组件</Text>
                </View>

                <Picker selectedValue={this.state.value}
                     onValueChange={(value)=>this.setState({value:value})}
                    mode='dropdown'
                    style={{color:'#ff0000'}}>

                    <Picker.Item label='Java' value='java'/>
                    <Picker.Item label='PHP' value='PHP'/>
                    <Picker.Item label='C语言' value='C语言'/>
                    <Picker.Item label='JavaScript' value='JavaScript'/>
                </Picker>

                <View>
                    <Text>我的选择：{this.state.value}</Text>
                </View>

                <ProgressBarAndroid styleAttr = 'LargeInverse'>
                </ProgressBarAndroid>

            </View>
        );

    }
}
//ProgressBarAndroid  的样式
//Horizontal
//Small
//Large
//Inverse
//SmallInverse
//LargeInverse

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

AppRegistry.registerComponent('hu',()=>hu)