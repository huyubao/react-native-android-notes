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
    } from 'react-native';

var ontPT = 1/PixelRatio.get();
export default class hu extends Component {
    render(){
        return(
            <View style={{flex:1}}>
            <Search>
            </Search>
            </View>
        );
    }
}

class Search extends Component{
    constructor(props){
        super(props);
        this.state ={
            show:false,
            value:null,
        };
    }

    hide(val){
        this.setState({
            show:false,
            value:val,
        });
    }
    getValue(text){
        this.setState({
            show:true,
            value:text,
        });
    }
    render(){
        return(
            <View style={{flex:1}}>
            <View style={styles.container}>
                <View style={styles.inputview}>
                    <TextInput placeHolder="请输入关键字"
                               returnKeyType="search"
                                value={this.state.value}
                                onChangeText={this.getValue.bind(this)}>
                    </TextInput>
                </View>
                <View style={styles.textview}>
                    <Text onPress={this.hide.bind(this,this.state.value)}>
                        搜索
                    </Text>
                </View>
            </View>
                {this.state.show?
                <View style={styles.result}>
                    <Text onPress={this.hide.bind(this,this.state.value+'帅哥')}
                        style={styles.item} numberOfLines={1}>{this.state.value}帅哥</Text>

                    <Text onPress={this.hide.bind(this,this.state.value+'很屌')}
                          style={styles.item} numberOfLines={1}>{this.state.value}很屌</Text>

                    <Text onPress={this.hide.bind(this,this.state.value+'厉害')}
                          style={styles.item} numberOfLines={1}>{this.state.value}厉害</Text>

                    <Text onPress={this.hide.bind(this,this.state.value+'吊炸天')}
                          style={styles.item} numberOfLines={1}>{this.state.value}吊炸天</Text>
                </View>:null}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:50,
        marginTop:60,
    },
    inputview:{
        flex:1,
        height:50,
        borderWidth:1,
        borderColor:'#ff0000',
        borderRadius:5,
        marginLeft:5,
        paddingLeft:5,
        paddingRight:5,
    },
    item:{
        fontSize: 16,
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: ontPT,
        borderColor: '#ddd',
        borderTopWidth: 0,
    },
    result:{
        marginTop: 1,
        marginRight: 5,
        marginLeft: 5,
        height:200,
        borderColor: '#ccc',
        borderTopWidth: ontPT,
    },
    textview:{
        width:80,
        height:50,
        backgroundColor:'#cd2d1c',
        borderWidth:1,
        borderColor:'#cd2d1c',
        borderRadius:5,
        marginLeft:-8,
        marginRight:5,
        alignItems:'center',
        justifyContent:'center',
    }
});

AppRegistry.registerComponent('hu', ()=>hu);