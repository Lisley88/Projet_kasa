import React, { useState } from 'react';
import arrowPrev from '../images/arrow-left.svg';
import arrowNext from '../images/arrow-right.svg';

function Carrousel({ pictures }) { 
    const [index, setIndex] = useState(0);
    return (
        <div className='carrousel'>
              <img className='carrousel__imgage' alt='' src={pictures[index]} />
              {pictures.length > 1 ? (
                <div>
                    <img onClick={()=>{
                      setIndex(index === 0 ? pictures.length - 1 : index - 1);
                    }}
                    src={arrowPrev}
                    alt=""
                    className="carrousel__arrow-prev"
                />  
                     <img onClick={()=> {
                        setIndex(index === pictures.length - 1 ? 0 : index + 1);
                    }}
                    src={arrowNext}
                    alt=""
                    className="carrousel__arrow-next" />
                </div>             
                 ):(
                ""
               )}
             <p className="carousel__numbering">
                {index + 1}/{pictures.length}
            </p>
            
           
        </div>
    )
        
}

export default Carrousel