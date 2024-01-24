import FicheLogement from '../../datas/logements.json';
import img from '../../images/image_source.png';
import Banner from '../../components/Banner';
import Card from '../../components/Card';

function Home(){
  return (
    <main className='home'>
      <Banner img={img} text={"Chez vous, partout et ailleurs"} />
      <div className="home_card">
        {FicheLogement.map((FicheLogement)=>{
          return <Card id={FicheLogement.id} title={FicheLogement.title} 
          img={FicheLogement.cover} key={FicheLogement.id} />;
        })}
      </div>
    </main>
  )
}

export default Home;