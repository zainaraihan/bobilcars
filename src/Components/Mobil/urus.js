import Tes from '../Tes/tes';

// Piloti
import p1 from '../../Assets/urus/u1.png'
import p2 from '../../Assets/urus/u2.png'
import p3 from '../../Assets/urus/u3.png'
import p4 from '../../Assets/urus/u4.png'
import p5 from '../../Assets/urus/u5.png'
import p6 from '../../Assets/urus/u6.png'
import p7 from '../../Assets/urus/u7.png'

const int = <div className='text'>
                <p>Leather Interior</p>
                <p>Aluminium Interior Trim Panel</p>
                <p>Leather Steering Wheel w/ Multi Function Button & Paddle Shift</p>
                <p>Power Driver & Front Passenger Seat w/ Lumbar Support, Memory, & Heater</p>
                <p>Infotainment Touchscreen Display</p>
                <p>Fully-Digital TFT Display Cluster</p>
                <p>Multi Function Control Touchscreen</p>
                <p>Driving Mode Center Console Controls</p>
                <p>8-Speakers Sound System</p>
                <p>Front Center Armrest</p>
                <p>Aluminium Sill Guards</p>
                <p>Rear & Side Windows Privacy Glass</p>
                <p>Rear Loadspace Scuff Plate</p>
            </div>

const ext = <div className='text'>
                <p>22” Alloy Wheels</p>
                <p>LED Adaptive HeadLight</p>
                <p>LED Daytime Running Lights</p>
                <p>LED Tail Lights</p>
                <p>Power Adjustable & Folding Side Mirror w/ Heater, Dimming, & Kerb View</p>
                <p>Surround Camera System</p> 
                <p>Power Back Door</p> 
                <p>Chrome Exhaust Tips</p> 
            </div>

const eng = <div className='text'>
                <p>4.0L Twin-Turbocharged V8</p>
                <p>641-Horsepower & 850-Nm of Torque</p>
                <p>Top Speed of 305 Km/h</p>
                <p>0-100 Km/h in 3,5 Sec</p>
            </div>

const Urus = () => {
    return ( 
        <div className="Urus">
            <Tes 
                brand={"Lamborghini"}
                type={"Urus"}
                imgH={p1}
                year={"2023"}
                odo={"Delivery Mileage"}
                color={"Yellow"}
                price={"Rp. 1.000.000.000"}
                desc={"Lamborghini Urus is the second Sport Utility Vehicle (SUV) that Lamborghini made into production, after the V12-powered Lamborghini LM002. In four years of its production run, Lamborghini hit a major milestone with the Urus, producing 20,000 units, making the Urus the company's best-selling model in the shortest time."}
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
 
export default Urus;