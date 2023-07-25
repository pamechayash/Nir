import './skills.css'
import data3 from'./cen.json'
import Lottie from 'react-lottie'

export default function CenterAnimation(){

    const defaultOptions={
        loop:true,
        autoplay:true,
        animationData:data3,
        
        rendererSettings:{
            preserveAspectRatio: "xMidYMid slice",
        },
      }
      return  <Lottie 
      options={defaultOptions}
     
      style={{transform:"scale(0.5)",
  margin:"0px 0px",
  padding:"0px 0px",
  }}
      height={570}
     width={550}/>
     

}





