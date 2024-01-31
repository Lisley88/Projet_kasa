import React from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../../components/Carrousel';
import Error from '../../pages/Error';
import Tags from '../../components/Tags';
import Rating from '../../components/rating';
import Collapse from '../../components/Collapse';
import logedatas from '../../datas/logements.json';

function Logements(){
  const {id} = useParams();
  const data =logedatas.find(data => data.id === id)
  if (!data){
    return <Error />
  }
  return (
    <main>
        <Carrousel pictures={data.pictures} picturesLength={data.pictures.length} /> 
        <article className='logement-details'>
                <div className='details-left'>
                    <h2 className='logement-title'>{data.title}</h2>
                    <p className='logement-location'>{data.location}</p>
                    <div className='logement-tags'>
                        {data.tags.map((tags, index) => (
                            <Tags key={`${index}-${tags}`} tag={tags} />
                        ))}
                    </div>
                </div>
                <div>
                  <div>
                    <p>{data.host.name}</p>
                    <img className='logement-host-picture' src={data.host.picture} alt={data.host.name} />
                  </div>
                  <div className='rating'>
                      <Rating rating={data.rating} />
                  </div>
                  
                </div>
          </article>
          <div>
              <Collapse title={'Description'} description={data.description} />
            
              <Collapse title={'Equipements'} description={
                  <ul> {data.equipments.map((equipment) => (
                      <li className="logement__equipment" key={equipment}>
                          {equipment}
                      </li>
                    ))}
                  </ul>
                } />
      
            
          </div>
    </main>
    )
}

export default Logements