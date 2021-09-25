import React, {useState,useRef,useEffect} from 'react'


const Accordion=({items})=>{
 
    const [activeIndex,setActiveIndex]=useState(null);
    const ref=useRef();
    
    useEffect(() => {
        const onBodyClick = (event) => {
          if (ref.current.contains(event.target)) {
            return;
          }
          setActiveIndex(null);
        };
        document.body.addEventListener("click", onBodyClick, { capture: true });
     
        return () => {
          document.body.removeEventListener("click", onBodyClick, {
            capture: true,
          });
        };
      }, []);

 
    const onTitleClick=(index)=>{
        setActiveIndex(index)
    }
    
    const renderedItems=items.map((item,index)=>{
        const active= index===activeIndex? "active" :""
        return(
        <React.Fragment key={item.title}>
            <div
            ref={ref}
            onClick={()=>{
                onTitleClick(index)
            }}
            className={`title ${active}`}
            >
              <i className="dropdown icon"></i>
              {item.title}
            </div>
            <div className={`content ${active}`}>
               <p>{item.content}</p>
            </div>
        </React.Fragment>
        )
    })
        
        return(
            <div className="ui styled accordion">{renderedItems}
            </div>
              
            )
}
export default Accordion