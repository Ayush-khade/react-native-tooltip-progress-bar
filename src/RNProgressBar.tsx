import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Animated} from 'react-native';

type Props = {
    //message: string;
    type?: "horizontal" | "vertical";
    //id: string;
    low?:number, 
    high?:number, 
    value?:number, 
    options?:{
        leftColor?:string,
        rightColor?:string,
        barThickness?:number
    },
    showTooltip?:Boolean
  }

const RNProgressBar=({low, high, value, options,showTooltip,type}:Props)=>{

    let barType:string=type==undefined?"horizontal":type;
    let lowerValue:number=low==undefined?0:low;
    let higherValue:number=high==undefined?100:high;
    let currentValue:number=value==undefined?Math.floor(Math.random() * 100):value;

    let range:number=higherValue-lowerValue;
    let pointer:number=currentValue-lowerValue;

    let leftPerc:number=(pointer/range)*100;
    let rightPerc:number=100-leftPerc;

    let leftColor:string=options?.leftColor==undefined?"#008b91":options?.leftColor;
    let rightColor:string=options?.rightColor==undefined?"#b53636":options?.rightColor;

    let tooltip:Boolean=showTooltip==undefined?true:showTooltip;

    let thickness:number=options?.barThickness==undefined?10:options?.barThickness;


    //console.log(`${(leftPerc<=50)?'-':'+'}${(50-rightPerc)<0?(50-rightPerc)*(-1):(50-rightPerc)}%`)
    return(
        <View style={{margin:5,flexDirection:barType=="horizontal"?"column":"row",zIndex:10}}>
            <View style={{width:barType=="horizontal"?"100%":thickness,height:barType=="horizontal"?thickness:"100%"}}>
                <View style={{height:"100%",backgroundColor:rightColor,flexDirection:barType=="horizontal"?"row":"column",borderRadius:4}}>
                    <View style={[{backgroundColor:leftColor,borderRadius:4},barType=="horizontal"?{width:`${leftPerc}%`}:{height:`${leftPerc}%`}]}></View>
                </View>
            </View>
            {tooltip?
            <View style={barType=="horizontal"?
                {position:"absolute",left:0,right:0,alignItems:"center",top:thickness+2}:
                {position:"absolute",top:`${(leftPerc<=50)?'-':'+'}${(50-rightPerc)<0?((50-rightPerc)*2)*(-1):((50-rightPerc)*2)}%`,bottom:0,alignItems:"center",left:thickness+2,justifyContent:"center"}}>
                    <View style={barType=="horizontal"?{alignItems:"center",left:`${(leftPerc<=50)?'-':'+'}${(50-rightPerc)<0?(50-rightPerc)*(-1):(50-rightPerc)}%`}:{alignItems:"center",flexDirection:"row",height:20}}>
                    <View style={{height:9,width:9,backgroundColor:"#272727",transform:[{rotate:"45deg"}]}}/>
                    <View style={barType=="horizontal"?{backgroundColor:"#272727",borderRadius:8,top:-6}:{backgroundColor:"#272727",borderRadius:8,left:-6}}>
                        <Text style={{fontSize:12,color:"#ffffff",paddingHorizontal:5,paddingVertical:2,minWidth:30,textAlign:"center"}}>
                        {currentValue}
                        </Text>
                    </View>
                </View>
            </View>
            :<></>}
        </View>
    )
}


export default RNProgressBar;