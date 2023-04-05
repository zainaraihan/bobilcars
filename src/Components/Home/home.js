import p1 from '../../Assets/Classic/c1.png'
import p2 from '../../Assets/g400d/g1.png'
import p3 from '../../Assets/dawn/d1.png'
import p4 from '../../Assets/g63/n1.jpeg'
import p5 from '../../Assets/g80/g1.png'
import p7 from '../../Assets/huracan/h1.png'
import p8 from '../../Assets/m765lt/m1.png'
import p9 from '../../Assets/piloti/p1.png'
import p10 from '../../Assets/urus/u1.png'
import p6 from '../../Assets/piloti/p1.png'
import './home.css'
const Home = () => {
    return ( 
        <div className="home">
            <a href="/classic">
                <img src={p1} alt="" />
            </a>
            <a href="/g400d">
                <img src={p2} alt="" />
            </a>
            <a href="/dawn">
                <img src={p3} alt="" />
            </a>
            <a href="/g63">
                <img src={p4} alt="" />
            </a>
            <a href="/g80">
                <img src={p5} alt="" />
            </a>
            <a href="/drophead">
                <img src={p6} alt="" />
            </a>
            <a href="/huracan">
                <img src={p7} alt="" />
            </a>
            <a href="/m765lt">
                <img src={p8} alt="" />
            </a>
            <a href="/piloti">
                <img src={p9} alt="" />
            </a>
            <a href="/urus">
                <img src={p10} alt="" />
            </a>
        </div>
     );
}
 
export default Home;