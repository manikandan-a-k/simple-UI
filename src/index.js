import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import one from "./images/img1.jpg";
import two from "./images/img2.jpg";
import three from "./images/img3.jpg";
import four from "./images/img4.jpg";
import five from "./images/img5.jpg";
import six from "./images/img6.jpg";
import search from "./images/search.png"


const root = ReactDOM.createRoot(document.getElementById('root'));
function Search(){
return (
  <div className="search">
    <input type="text" placeholder="Search"/>
     <img src={search} alt="search bar" style={{width:"18px",marginRight:"10px"}}></img>
  </div>
)
}
function Components(props){
  return ( 
     <div className='section'>
      
      <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
       <div>
       <img src={props.img} alt="img" style={{width:"60px",height:"60px",borderRadius:"50%"}}></img>
        </div> 
      
       <div>
       <h1>{props.name}</h1>
      <p>{props.desc}</p>
       </div>
      
      </div>
      <div style={{textAlign:"center"}}>
        <p>{props.time}</p>
        <p>⭐</p>
      </div>
      
     </div>   
  )
}
var arr=[
  {
    img:one,
    name:"Jessica Koel",
    desc:"Hey Joel,I have to help you out please",
    time:"12.00"
    
  },
  {
    img:two,
    name:"Komeial Bolger",
    desc:"I will send you all documents as soon as",
    time:"11.45"
  },
  {
    img:three,
    name:"Tamaara Suiale",
    desc:"Are you going to business trip next week",
    time:"8.00"
    
  },
  {
    img:four,
    name:"Sam",
    desc:"Start a new business",
    time:"9.45"
  }
  ,
  {
    img:five,
    name:"Caroline Nexon",
    desc:"We need to start new research",
    time:"7.00"
    
  },
  {
    img:six,
    name:"Patric Koeler",
    desc:"May be yes",
    time:"6.45"
  }
]
root.render(
  <>
  <div className='container'>
    <Search></Search>
    {
      arr.map((item)=>{
        return <Components name={item.name} desc={item.desc} time={item.time} img={item.img}></Components>
      })
      
    }
  </div>
  </>
  
);

