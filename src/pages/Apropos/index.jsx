import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import data from '../../datas/apropos.json';
import image from '../../images/image_source_ 2.png';


function Apropos() {
    return (
        <main>
            <Banner page='apropos' />
            {data.map((item) => (
                <Collapse key={item.id} title={item.title} description={item.description} />
            ))}
        </main>
    )
}

export default Apropos