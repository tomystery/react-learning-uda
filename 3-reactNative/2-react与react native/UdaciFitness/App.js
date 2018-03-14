import React from 'react'
import {  View } from 'react-native'
import AddEntry from './components/AddEntry' //导入刚刚创建的啊addEntry文件

export default class App extends React.Component {


  render() {
    return (
      <View >
       <AddEntry/>
      </View>
    );
  }
}

/* N-首先删除不会用到的大部分内容， */