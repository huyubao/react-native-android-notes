require('./js_src/android_guide');


//import React, { Component } from 'react';
//import {
//    AppRegistry,
//    StyleSheet,
//    Text,
//    View,
//    Image,
//    PixelRatio,
//    Navigator,
//    TouchableOpacity,
//    } from 'react-native';
//
//export default class hu extends Component {
//    //constructor(props){
//    //    super(props);
//    //    this.state={};
//    //    this.renderScene = this.renderScene.bind(this);
//    //}
//
//    configureScene(route,routeStack){
//        if(route.type == 'bottom'){
//            return Navigator.SceneConfigs.FloatFromBottom;
//        }else{
//            return Navigator.SceneConfigs.PushFromRight;
//        }
//    }
//
//    _renderScene(route,navigator){
//        return <route.component navigator={navigator} {...route.passProps}/>
//    }
//
//    render(){
//        return(
//            <Navigator
//                initialRoute={{component:FirstPage}}
//
//                renderScene = {this._renderScene}
//                sceneStyle = {{paddingTop:66}}
//            />
//
//        );
//
//    }
//
//}
//
//
//
//class FirstPage extends Component{
//    constructor(props) {
//        super(props);
//        this.state = {
//
//        }
//    }
//    _pressButton(){
//        const {navigator} = this.props;
//        if(navigator){
//            navigator.push({
//                name:'SecondPage',
//                component:SecondPage,
//            });
//        }
//    }
//    render() {
//        return (
//            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
//                <Text>Splash Page</Text>
//
//                <TouchableOpacity onPress={this._pressButton()}>
//                    <Text style={{ flex:1,fontSize:20,color: '#55ACEE' }}>Open New Page</Text>
//                </TouchableOpacity>
//            </View>
//        );
//    }
//}
//// 第二页, 点击跳出返回第一页
//class SecondPage extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//
//        }
//    }
//
//    _back(){
//        const {navigator} = this.props;
//        if(navigator){
//            navigator.pop();
//        }
//    }
//    render() {
//        return (
//            <TouchableOpacity
//                onPress={() => navigator.pop()}
//                style={{
//        flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
//      }}>
//                <Text style={styles.buttonText}>Back</Text>
//            </TouchableOpacity>
//        );
//    }
//}
//const styles = StyleSheet.create({
//    fiex:{
//        flex:1,
//        borderWidth:1,
//        borderColor:'#ff0000',
//    },
//    heading:{
//        width:100,
//        height: 50,
//        borderWidth: 1,
//        borderColor:'#ff0000',
//        backgroundColor:'#ff0000',
//    },
//    center:{
//        alignItems:'center',
//        justifyContent:'center',
//    },
//    headText:{
//        fontSize:14,
//        color:'#ffff00',
//    },
//    button: {
//        flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
//    },
//
//});
//
//AppRegistry.registerComponent('hu', ()=>hu);




//import React, { Component } from 'react';
//import {
//  AppRegistry,
//  StyleSheet,
//  Text,
//  View,
//  Image,
//} from 'react-native';

//export default class hu extends Component {
//    //var MOCKED_MOVIES_DATA = [
//    //    {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
//    //];
//
//    render() {
//        //var move = MOCKED_MOVIES_DATA[0];
//        return (
//            <View style={styles.total}>
//                <View style={styles.movieImage}>
//                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={styles.movieImage}/>
//                </View>
//                <View style={styles.container}>
//                    <Text style={styles.movieText}>首页</Text>
//                    <Text style={styles.movieText}>详情</Text>
//                    <Text style={styles.movieText}>我的</Text>
//                </View>
//            </View>
//        );
//    }
//}
//
////<Text style={styles.movieText}>{this.props.name}</Text>
////<Text>2015</Text>
////<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={styles.movieImage}/>
//
////React.render(<hu name="胡玉宝"/>,mountNode);
//var styles = StyleSheet.create({
//    container: {
//        flex: 2,
//        flexDirection:'row',
//        justifyContent: 'space-around',
//        alignItems: 'flex-end',
//        backgroundColor: '#f5f5f5',
//    },
//    total:{
//      flex:1,
//      justifyContent:'center',
//    },
//    movieImage: {
//        flex:1,
//        width: 200,
//        height:200,
//        justifyContent:'center',
//        alignItems:'center',
//    },
//    movieText:{
//      width:50,
//      height:60,
//      fontSize:20,
//      color:'#ff0000',
//      textAlign:'center',
//    },
//});
//
//AppRegistry.registerComponent('hu', ()=>hu);
//
///**
// * Sample React Native App
// * https://github.com/facebook/react-native
// * @flow
// */

//import React, { Component } from 'react';
//import {
//  AppRegistry,
//  StyleSheet,
//  Text,
//  View
//} from 'react-native';
//
//export default class hu extends Component {
//  render() {
//    return (
//      <View style={styles.container}>
//        <Text style={styles.welcome}>
//          Welcome to React Native! 作者：胡玉宝是帅哥
//        </Text>
//        <Text style={styles.instructions}>
//          To get started, edit index.android.js
//        </Text>
//        <Text style={styles.instructions}>
//          Double tap R on your keyboard to reload,{'\n'}
//          Shake or press menu button for dev menu
//        </Text>
//      </View>
//    );
//  }
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    color: '#ff0000',
//    margin: 10,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
//});
//
//AppRegistry.registerComponent('hu', () => hu);

/**
 *
 * /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//import React, { Component } from 'react';
//import {
//    AppRegistry,
//    StyleSheet,
//    Text,
//    View
//    } from 'react-native';
//
//export default class hu extends Component {
//  render() {
//    return (
//        <View style={[BoxStyles.margginBox]}  ref="lab1">
//          <View style={[BoxStyles.box,BoxStyles.height400,BoxStyles.width400]}>
//            <View style={[BoxStyles.top,BoxStyles.height50,BoxStyles.bgred]}>
//              <Text style={BoxStyles.yellow}>top</Text></View>
//            <View style={[BoxStyles.borderBox]}>
//              <View style={[BoxStyles.left,BoxStyles.bgred]} >
//                <Text style={BoxStyles.yellow}>left</Text></View>
//              <View style={[BoxStyles.box,BoxStyles.height300]}>
//                <View style={[BoxStyles.top,BoxStyles.height50,BoxStyles.bggreen]}>
//                  <Text style={BoxStyles.yellow}>top</Text></View>
//                <View style={[BoxStyles.paddingBox]}>
//                  <View style={[BoxStyles.left,BoxStyles.bggreen]} >
//                    <Text style={BoxStyles.yellow}>left</Text></View>
//                  <View style={[BoxStyles.box,BoxStyles.height200]}>
//                    <View style={[BoxStyles.top,BoxStyles.height50,BoxStyles.bgyellow]}>
//                      <Text style={BoxStyles.yellow}>top</Text></View>
//                    <View style={[BoxStyles.elementBox]}>
//                      <View style={[BoxStyles.left,BoxStyles.bgyellow]} >
//                        <Text style={BoxStyles.yellow}>left</Text></View>
//                      <View style={[BoxStyles.box,BoxStyles.height100]}>
//                        <View  style={[BoxStyles.label]}>
//                          <Text style={BoxStyles.white}>element</Text></View>
//                        <View style={[BoxStyles.widthdashed]} ></View>
//                        <View style={[BoxStyles.heightdashed]} ></View>
//                        <View style={[BoxStyles.measureBox]} >
//                          <View style={[BoxStyles.right]}>
//                            <Text style={[BoxStyles.yellow]}>height</Text></View>
//                        </View>
//                        <View style={[BoxStyles.bottom,BoxStyles.height50]}>
//                          <Text style={BoxStyles.yellow}>width</Text></View>
//                      </View>
//                      <View style={[BoxStyles.right,BoxStyles.bgyellow]}><Text style={BoxStyles.yellow}>right</Text></View>
//                    </View>
//                    <View style={[BoxStyles.bottom,BoxStyles.height50,BoxStyles.bgyellow]}>
//                      <Text style={BoxStyles.yellow}>bottom</Text></View>
//                    <View style={[BoxStyles.label]}>
//                      <Text style={BoxStyles.white}>padding</Text></View>
//                  </View>
//                  <View style={[BoxStyles.right,BoxStyles.bggreen]}><Text style={BoxStyles.yellow}>right</Text></View>
//                </View>
//                <View style={[BoxStyles.bottom,BoxStyles.height50,BoxStyles.bggreen]}>
//                  <Text style={BoxStyles.yellow}>bottom</Text></View>
//                <View style={[BoxStyles.label]}><Text style={BoxStyles.white}>border</Text></View>
//              </View>
//              <View style={[BoxStyles.right,BoxStyles.bgred]}>
//                <Text style={BoxStyles.yellow}>right</Text></View>
//            </View>
//            <View style={[BoxStyles.bottom,BoxStyles.height50,BoxStyles.bgred]}>
//              <Text style={BoxStyles.yellow}>bottom</Text></View>
//            <View style={[BoxStyles.label]} ><Text style={BoxStyles.white}>margin</Text></View>
//          </View>
//        </View>
//    );
//  }
//}
//
//const BoxStyles = StyleSheet.create({
//  height50:{
//    height: 50,
//  },
//  height400:{
//    height: 400,
//  },
//  height300:{
//    height: 300,
//  },
//  height200:{
//    height: 200,
//  },
//  height100:{
//    height: 100,
//  },
//  width400:{
//    width: 400,
//  },
//  width300:{
//    width: 300,
//  },
//  width200:{
//    width: 200,
//  },
//  width100:{
//    width: 100,
//  },
//  bgred: {
//    backgroundColor:'#6AC5AC',
//  },
//  bggreen: {
//    backgroundColor: '#414142',
//  },
//  bgyellow: {
//    backgroundColor: '#D64078',
//  },
//  box: {
//    flexDirection: 'column',
//    flex: 1,
//    position: 'relative',
//  },
//  label: {
//    top: 0,
//    left: 0,
//    paddingTop: 0,
//    paddingRight: 3,
//    paddingBottom: 3,
//    paddingLeft: 0,
//    position: 'absolute',
//    backgroundColor: '#FDC72F',
//  },
//  top: {
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  bottom: {
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  right: {
//    width: 50,
//    justifyContent: 'space-around',
//    alignItems: 'center',
//  },
//  left: {
//    width: 50,
//    justifyContent: 'space-around',
//    alignItems: 'center',
//  },
//  heightdashed: {
//    bottom: 0,
//    top: 0,
//    right: 20,
//    borderLeftWidth: 1,
//    position: 'absolute',
//    borderLeftColor: '#FDC72F',
//  },
//  widthdashed: {
//    bottom: 25,
//    left: 0,
//    right: 0,
//    borderTopWidth: 1,
//    position: 'absolute',
//    borderTopColor: '#FDC72F',
//  },
//  yellow: {
//    color: '#FDC72F',
//    fontWeight:'900',
//  },
//  white: {
//    color: 'white',
//    fontWeight:'900',
//  },
//  margginBox:{
//    position: 'absolute',
//    top: 100,
//    paddingLeft:7,
//    paddingRight:7,
//  },
//  borderBox:{
//    flex: 1,
//    justifyContent: 'space-between',
//    flexDirection: 'row',
//  },
//  paddingBox:{
//    flex: 1,
//    justifyContent: 'space-between',
//    flexDirection: 'row',
//  },
//  elementBox:{
//    flex: 1,
//    justifyContent: 'space-between',
//    flexDirection: 'row',
//  },
//  measureBox:{
//    flex: 1,
//    flexDirection: 'row',
//    justifyContent: 'flex-end',
//    alignItems:'flex-end',
//  },
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
//});
//
//AppRegistry.registerComponent('hu', () => hu);


