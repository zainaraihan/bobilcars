import Tes from '../Tes/tes';

// Piloti
import p1 from '../../Assets/g63/n1.png'
import p2 from '../../Assets/g63/n2.png'
import p3 from '../../Assets/g63/n3.png'
import p4 from '../../Assets/g63/n4.png'
import p5 from '../../Assets/g63/n5.png'
import p6 from '../../Assets/g63/n6.png'
import p7 from '../../Assets/g63/n7.png'

const int = <div className='text'>
                <p>Black Alcantara Interior w/ Red Stitching</p>
            </div>

const ext = <div className='text'>
                <p>20” Black Forged Aluminium Wheels</p>
            </div>

const eng = <div className='text'>
                <p>3.9L Twin-Turbocharged V8</p>
            </div>

const G63 = () => {
    return ( 
        <div className="G63">
            <Tes 
                brand={"Mercedes-Benz"}
                type={"G63"}
                imgH={p1}
                year={"2020"}
                odo={"Delivery Mileage"}
                color={"Argento Nurburging"}
                price={"Rp. 1.000.000.000"}
                desc={"Built for reminiscing The Original 911 and The 911 Carrera RS 2.7, The 911 Sports Classic was built with a 6-speed manual transmission and the interior was extra special with Porsche Exclusive woven leather seats, door panels, and dashboard. The exterior color was unique also using a specially developed Sport Classic Grey body color."}
                img2={p2}
                img3={p3}
                img4={p4}
                img5={p5}
                img6={p6}
                img7={p7}
                interior = {int}
                exterior = {ext}
                engine = {eng}
                />
        </div>
     );
}
 
export default G63;