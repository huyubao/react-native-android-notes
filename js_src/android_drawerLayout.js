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
    TextInput,
    DrawerLayoutAndroid,
    TouchableOpacity,
    StatusBar,
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
    one(){
        var count = this.state.count;
        count = 0;
        this.setState({
            count:count,
        });
    }

    two(){
        var count = this.state.count;
        count = 1;
        this.setState({
            count:count,
        });
    }

    three(){
        var count = this.state.count;
        count = 2;
        this.setState({
            count:count,
        });
    }

    open(){
        this.drwer.openDrawer();
    }

    close(){
        this.drwer.closeDrawer();
    }

    render() {
        var navigationView = (

            <View style={{backgroundColor:'#00ffff'}}>

                <TouchableOpacity style={[styles.item,{marginTop:40}]} activeOpacity= {0.7}  onPress={this.one.bind(this)}>
                    <Text>
                        第一张
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} activeOpacity= {0.7}  onPress={this.two.bind(this)}>
                    <Text>
                        第二张
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} activeOpacity= {0.7}  onPress={this.three.bind(this)}>
                    <Text>
                        第三张
                    </Text>
                </TouchableOpacity>
            </View>
        );

        return (


            <DrawerLayoutAndroid drawerWidth={150}
                                 drawerPosition={DrawerLayoutAndroid.positions.left}
                                 renderNavigationView = {()=>navigationView}
                                 ref={(drwer)=>this.drwer=drwer}
                >

                <TouchableOpacity onPress={this.open.bind(this)} style={[{width:50,height:50,marginTop:40,marginLeft:40,backgroundColor:'#ffff00'},styles.center]}>
                    <Text  style={{ flex:1}} >
                        打开
                    </Text>
                </TouchableOpacity>




                <View style={{flex: 1, alignItems:'center', justifyItems:'center'}}>
                    <Image style={styles.images}
                           resizeMode="contain"
                           source={{uri:this.state.imgs[this.state.count]}}/>
                </View>

            </DrawerLayoutAndroid>

        );

    }
}
/**
 * 3.1.View的属性使用  继承了View控件的属性信息(例如:宽和高,背景颜色,边距等相关属性样式)
 3.2.drawerPosition   参数为枚举类型(DrawerLayoutAndroid.position.left,DrawerLayoutAndroid.position.right)
 进行指定导航菜单用那一侧进行滑动出来，根据官方实例最终传入的两个枚举值分别   为:DrawerLayoutAndroid.positions.Left和DrawerLayoutAndroid.positions.Right
 3.3.drawerWidth  进行指定导航菜单视图的宽度，也就是说该侧面导航视图可以从屏幕边缘拖拽到屏幕的宽度距离
 3.4.keyboardDismissMode   参数为枚举类型('none','on-drag') 进行指定在导航视图拖拽的过程中是否要隐藏键盘
 none   (默认值),默认不会隐藏键盘
 on-drag  当拖拽开始的时候进行隐藏键盘
 3.5.onDrawerClose  function 方法 当导航视图被关闭后进行回调该方法
 3.6.onDrawerOpen   function 方法 当导航视图被打开后进行回调该方法
 3.7.onDrawerSlide  function  方法  当导航视图和用户进行交互的时候调用该方法
 3.8.onDrawerStateChanged function方法，该当导航视图的状态发生变化的时候调用该方法。该状态会有以下三种状态
 idle (空闲) 表示导航视图上面没有任何交互状态
 dragging (正在拖拽中)   表示用户正在和导航视图产生交互动作
 settling (暂停-刚刚结束)  表示用户 刚刚结束和导航视图的交互动作，当前导航视图正在打开或者关闭拖拽滑动动画效果
 3.9.renderNavigationView  function 方法，该方法进行渲染一个导航抽屉的视图(用于用户从屏幕边缘拖拽出来)
 */
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