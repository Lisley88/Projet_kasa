import React from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../../components/Carrousel';
import Error from '../../pages/Error';
import Tags from '../../components/Tags';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';
import logedatas from '../../datas/logements.json';
import '../../styles/Logements.scss';

function Logements(){
  const {id} = useParams();
  const data =logedatas.find(data => data.id === id)
  if (!data){
    return <Error />
  }
  return (
    <main className='logement'>
        <Carrousel pictures={data.pictures} picturesLength={data.pictures.length} /> 
        <article className='logement__details'>
                <div className='logement__details-left'>
                    <h2 className='logement__title'>{data.title}</h2>
                    <p className='logement__location'>{data.location}</p>
                    <div className='logement__tags'>
                        {data.tags.map((tags, index) => (
                            <Tags key={`${index}-${tags}`} tag={tags} />
                        ))}
                    </div>
                </div>
                <div className='logement__details-right' >
                  <div className='logement__host-info'>
                    <p className='logement__host-name'>{data.host.name}</p>
                    <img className='logement__host-picture' src={data.host.picture} alt={data.host.name} />
                  </div>
                  <div className='logement__rating'>
                      <Rating rating={data.rating} />
                  </div>
                  
                </div>
          </article>
          <div className='logement__collapses'>
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