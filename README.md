Flatlist text menu
this project can use for to show the menu on clicking on text in react native

react-native-flatlist-text-menu
Getting started
$ npm install react-native-flatlist-text-menu --save

Example :

![image](https://drive.google.com/uc?export=view&id=1O5_r0Akd-WyLDI8OuRHhxrrO5LKr3El8)

![image](https://drive.google.com/uc?export=view&id=183fkg3SKaAB9wnb87OgIGguQlMDDy1VW)

##Usages :
  

   ...


        import React from 'react';
        import {
          FlatList,
          SafeAreaView,
          ScrollView,
          StatusBar,
          StyleSheet,
          View
        } from 'react-native';

        import FlatListMenu from 'react-native-flatlist-text-menu';

            const App= () => {
              const data=[
                { 
                  title:'Development',
                  languages:[
                  {title:'English-En',url:''},
                  {title:'Hindi-Hi',url:''},
                  {title:'Malayalam-Mal',url:''}
                ]
              },
              {
                title:'CA-Finance',
                languages:[
                {title:'English-En',url:''},
                {title:'Hindi-Hi',url:''},
                {title:'Malayalam-Ma',url:''},
                {title:'Tamil-Tam',url:''},
                {title:'Kannada-Kan',url:''}
              ]
            },
            {
              title:'Math-10',
              languages:[
                {title:'Telgu-Tel',url:''},
                {title:'Hindi-Hi',url:''},
                {title:'Malayalam-Ma',url:''},
                {title:'Tamil-Tam',url:''},
                {title:'Kannada-Kan',url:''},
                {title:'Odia',url:''},
                {title:'Gujarati-Guj',url:''},
                {title:'English-En',url:''},
            ]
            }
            ]
              return (
                <>
                  <StatusBar barStyle="dark-content" />
                  <SafeAreaView>
                    <FlatList style={{paddingHorizontal:10}} data={data} key={(item,i)=>i} renderItem={({item,index})=>{
                      return( 
                    <View style={styles.card} >
                    <FlatListMenu
                        key={index} 
                        title={item.title} 
                        items={item.languages}
                        defaultItem='English-En'
                        selectedColor="red"
                        unselectedColor="black"
                        property='title'
                        fontSize={16}
                        />
                      </View>) 
                    }}
                  />
                  
                  </SafeAreaView>
                </>
              );
            };

            const styles=StyleSheet.create({
                container:{
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center'
                },
                card:{
                  backgroundColor:"#FFFFFF",
                  marginHorizontal:5,
                  padding:15,
                  shadowColor:'rgba(0,0,0,0.2)',
                  shadowOffset: { width: 2, height: 2 },
                  shadowOpacity: 1,
                  shadowRadius: 5,  
                  minHeight:60,
                  elevation:2,
                  borderRadius:5,
                  display:'flex',
                  flexDirection:'row',
                  alignItems:'center',
                  justifyContent:'space-between',
                  marginVertical:10,
                  overflow:"hidden",
                  position:'relative'

              },
            })

            export default App;
    
    ...

# You can use this npm in android and ios. 

##These are the properties of this 


  1. items : array of object list of items that you want to show onlick 
  2. defaultItem :  default item value 
  3. selectedColor : selected item color in list 
  4.  unselectedColor : all items colors of list 
  5. property : which property or key you want to use in array of object 
  6. fontSize : fontsize of items list menu 