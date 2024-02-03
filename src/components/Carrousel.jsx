import React, { useState } from 'react';
import arrowPrev from '../images/arrow-left.svg';
import arrowNext from '../images/arrow-right.svg';
import '../styles/Carrousel.scss';

function Carrousel({ pictures }) { 
    const [index, setIndex] = useState(0);
    return (
        <div className='carrousel'>
              <img className='carrousel__img' alt='Les appartements' src={pictures[index]} />
              {pictures.length > 1 ? (
                <div>
                    <img onClick={()=>{
                        setIndex(index === 0 ? pictures.length - 1 : index - 1);
                    }}
                        src={arrowPrev}
                        alt="Arrow-left"
                        className="carrousel__arrow-prev" />  
                    <img onClick={()=> {
                        setIndex(index === pictures.length - 1 ? 0 : index + 1);
                    }}
                        src={arrowNext}
                        alt="Arrow-right"
                        className="carrousel__arrow-next" />
                        
                    <p className="carrousel__numbering">
                    {index + 1}/{pictures.length}  
                    </p > 
                </div>  
                 ):("")}      
        </div>
    )        
}

export default Carrousel