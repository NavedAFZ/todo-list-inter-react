import React, { useState } from "react";
import "./ListItems.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

const ListItems = (props) => {
  //   console.log("top",items)
  const [dis, setDis] = useState("none");
  const [btnDis, setBtnDis] = useState("none");
  const val = props.items.map((item) => {
    return (
      <div className="List " key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => {
                props.deleteItem(item.key);
              }}
            />
          </span>
        </p>
        
      </div>
    );
  });

  const myList = props.items.map((item) => {
    return (
    //   <ul >
    //         <li >{item.text}</li>
        
    //   </ul>
      <table class="ui fixed single line celled table" key={item.key}>
      <thead>
        <tr><th>{item.text}</th>
       </tr>
       </thead>
</table>    
    );
  });
 // const btn=props.items.length===0?setBtnDis("none"):setBtnDis("block");
  return (
      
    <div style={{}}>
      <FlipMove duration={300} easing="ease-in-out">
        {val}
      </FlipMove>
      <br />
      <hr/>
      <br />
      <button className="ui button viewList"
    //   style={{display:btn}}
      onClick={(()=>{  
          dis==="none"?setDis("block"):setDis("none")
          
      })}
      >View your todo</button>
      <div className="myList" style={{display:dis}}>{myList}</div>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default ListItems;
