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

var ontPT = 1/PixelRatio.get();
export default class hu extends Component {

    show(text){
        alert(text);
    }
    render(){
            return(
            <View style={{flex:1}}>
                <View>
                    <TouchableHighlight style={styles.item} underlayColor ="#ff0000" onPress={this.show.bind(this,"高亮显示")}>
                        <Text style = {styles.text}>高亮显示</Text>
                    </TouchableHighlight>
                </View>

                <View>
                    <TouchableOpacity style={[styles.item,{backgroundColor:"#ff0000"}]} activeOpacity= {0.7}  onPress={this.show.bind(this,"透明度变化")}>
                        <Text style = {styles.text}>透明度变化</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableWithoutFeedback style={styles.item}  onPress={this.show.bind(this,"无变化")}>
                        <Text style = {styles.text}>无变化</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity  style={{flex:1,justifyContent:'center',alignItems:'center'}} onPress={this.show.bind(this,"图片") }>
                        <Image style={styles.image}
                            source={require('./img/hongbao.png')}
                            resizeMode="contain">
                        </Image>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

//<View>
//    <Image style={styles.image}  onPress={this.show.bind(this,"图片")}
//           source={{uri:'http://www.hinews.cn/pic/0/11/64/63/11646344_208637.jpg'}}
//            resizeMode="contain">
//
//    </Image>
//</View>
const styles = StyleSheet.create({
    item:{
        flex:1,
        height:60,

    },
    text:{
        fontSize:20,
    },
    image:{
        width: 400, height: 500
    },
});

AppRegistry.registerComponent('hu',()=>hu);