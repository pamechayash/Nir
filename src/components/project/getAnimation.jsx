import Lottie from 'react-lottie';

import data8 from './ml.json'
import data2 from './weather.json'
import data3 from './covid.json'
import data4 from './keeper.json'
import data6 from './bank.json'

import data7 from './tractorMoving.json'

export default function GetAnimation(props){
let data="";
console.log(props.type)
if(props.type=="chat")
{ console.log("yesss");
data=data8;
}
 if(props.type=="wheather")
{
    data=data2;
}
 if(props.type=="covid")
{
    data=data3;
}
if(props.type=="keeper")
{
    data=data4;
}
 if(props.type=="bank")
{
    data=data6;
}

if(props.type=="tractorMoving"){
    data=data7;
}

const defaultOptions={
    loop:true,
    autoplay:true,
    animationData:data,
    
    rendererSettings:{
        preserveAspectRatio: "xMidYMid slice",
    },
  }
   if(props.type=="center")
    return <Lottie 
    options={defaultOptions}
   
    style={{transform:"scale(0.5) ",

}}
    height={600}
   width={600}/>
   else
   return <Lottie 
   options={defaultOptions}
  
   style={{transform:"scale(0.6) ",

}}
   height={400}
  width={400}/>

}