import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import data from '../../datas/apropos.json';
import '../../styles/Apropos.scss'

function Apropos() {
    return (
        <main className='apropos'>
            <Banner page='apropos' />
            <div className='apropos__collapses'>
                {data.map((item) => (
                    <Collapse key={item.id} title={item.title} description={item.description} className='apropos__collapse' />
                ))}
            </div>
        </main>
    )
}

export default Apropos