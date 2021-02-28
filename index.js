import React, { useEffect, useState } from 'react'
import {Text,View,StyleSheet,Picker, TouchableWithoutFeedback, Alert,ToastAndroid} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

const FlatListMenu=({defaultItem,selectedColor,unselectedColor,property,items,fontSize})=>{
  console.log("delfault value",defaultItem)
  const [selectedValue, setSelectedValue] = useState(defaultItem);
  let _menu=null
  const hideMenu = (title) => {
      if(title){
        setSelectedValue(title)
      }
    _menu.hide();
  };

  const showMenu = () => {
    _menu.show();
  };
    return <Menu
          ref={(ref)=>{_menu=ref}}
          style={{width:200,paddingTop:20}}
          animationDuration={0}
          button={
         <TouchableWithoutFeedback onPress={showMenu}> 
             <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
             <Text style={{fontSize:16}}>{selectedValue}  </Text> 
             </View>
        </TouchableWithoutFeedback>}
        >
          {
              items.map((item,i)=>{
                  return <MenuItem key={i} onPress={()=>{hideMenu(item[property])}}><Text style={{color:selectedValue===item[property]?selectedColor:unselectedColor,fontSize:fontSize}}>{item[property]}</Text></MenuItem>
              })
            }
        </Menu>
}


export default FlatListMenu

const styles=StyleSheet.create({

   
    pickerPopup:{
        position:'absolute',
        backgroundColor:'#FFFFFF',
        width:200,
        height:300,top:10,
        right:1,
        zIndex:500,
        borderRadius:8,
        borderBottomRightRadius:8,
        padding:10,
       
        shadowColor:'rgba(0,0,0,0.2)',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.23,
        shadowRadius: 8,  
        elevation:2,
      
        
      }

})