import Tes from '../Tes/tes';

// Piloti
import p1 from '../../Assets/Classic/c1.png'
import p2 from '../../Assets/Classic/c2.png'
import p3 from '../../Assets/Classic/c3.png'
import p4 from '../../Assets/Classic/c4.png'
import p5 from '../../Assets/Classic/c5.png'
import p6 from '../../Assets/Classic/c6.png'
import p7 from '../../Assets/Classic/c7.png'

const int = <div className='text'>
                <p>Black Heritage Design Classic Leather Interior</p>
                <p>Black & White Diamond Pattern w/ Slanting Stripes</p>
                <p>Black Headliner</p>
                <p>Wood Interior Trim Panel</p>
                <p>Sport Chrono Package</p>
                <p>Leather Steering Wheel w/ Multi Function Button</p>
                <p>18-Ways Power Driver & Front Passenger Seats w/ Memory Package</p>
                <p>Limitation Number Plate</p>
            </div>

const ext = <div className='text'>
                <p>20”/21” Zoll Sport Classic Wheels</p>
                <p>Sport Classic double Stripes Top Decal</p>
                <p>Heritage Design Side Decal w/ Personal Start Number</p>
                <p>Power Adjustable & Folding Side Mirrors</p>
                <p>Ultra-Light Carbon Rear ‘Ducktail’ Spoiler (Painted)</p>
            </div>

const eng = <div className='text'>
                <p>3.8L Twin-Turbocharged Flat-6</p>
                <p>550-Horsepower & 600-Nm of Torque</p>
                <p>Top Speed of 315 Km/h</p>
                <p>0-100 Km/h in 4.1 Sec</p>
            </div>

const Classic = () => {
    return ( 
        <div className="Classic">
            <Tes 
                brand={"Porsche"}
                type={"911 Sport Classic"}
                imgH={p1}
                year={"2023"}
                odo={"Delivery Mileage"}
                color={"Sport Grey Metallic Color"}
                price={"Rp 14.000.000.000 (OTR)"}
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
 
export default Classic;