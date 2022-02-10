import React, { useEffect, useState } from 'react'
import {Text,View,StyleSheet,Picker, TouchableOpacity, Alert,ToastAndroid} from 'react-native';


import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

const FlatListMenu=({ defaultItem,
  selectedColor,
  unselectedColor,
  property,
  items,
  fontSize,
  onCancelCallback,
  onRescheduleCallback})=>{
  //console.log("delfault value",defaultItem)
  const [selectedValue, setSelectedValue] = useState(defaultItem);
  let _menu=null
  const hideMenu = (title, item) => {

    if(title=='Reschedule'){
      onRescheduleCallback(item);
    }
    else{
      onCancelCallback(item);
    }
 
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
    style={{width:170,borderRadius:10}}
    animationDuration={0}
    button={
   <TouchableOpacity onPress={showMenu} style={{width:50,height:60,}}> 
       <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
       <Text style={{fontSize:30, fontWeight:'bold',paddingRight:10, paddingLeft:10,color:'#787878'}}>...</Text> 
       </View>
  </TouchableOpacity>}
  >
    {
        items.map((item,i)=>{
            return <MenuItem key={i} onPress={()=>{hideMenu(item['title'],item['value'])}}><Text style={{color:selectedValue===item[property]?selectedColor:unselectedColor,fontSize:fontSize}}>{item[property]}</Text></MenuItem>
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
