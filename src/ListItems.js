import React from 'react' 
import './ListItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

const ListItems=(props)=>{
 //   console.log("top",items)
    const val=props.items.map((item)=>{
           return(
           
            <div className="list " key={item.key}>
                <p><input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
                
                <span>
                <FontAwesomeIcon className="faicons" icon="trash" onClick={() => {
            props.deleteItem(item.key)}}/>
                </span>
                </p>
            </div>
           )
    })
    
    return(
        <FlipMove duration={300} easing="ease-in-out">
        {val}
        </FlipMove>
    )
    
}

export default ListItems