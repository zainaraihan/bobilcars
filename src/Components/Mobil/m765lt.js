import Tes from '../Tes/tes';

// Piloti
import p1 from '../../Assets/m765lt/m1.png'
import p2 from '../../Assets/m765lt/m2.png'
import p3 from '../../Assets/m765lt/m3.png'
import p4 from '../../Assets/m765lt/m4.png'
import p5 from '../../Assets/m765lt/m5.png'
import p6 from '../../Assets/m765lt/m6.png'
import p7 from '../../Assets/m765lt/m7.png'

const int = <div className='text'>
                <p>Carbon Black Alcantara Interior</p>
                <p>Carbon Black Alcantara Headliner</p>
                <p>Carbon Black Alcantara Steering Wheel w/ Carbon Fibre Spokes</p>
                <p>Carbon Fibre Seats</p>
                <p>Carbon Fibre Door Panel</p>
                <p>Carbon Fibre Center Console</p>
                <p>8” Infotainment Screen w/ McLaren Information System & McLaren Track Telemetry</p>
                <p>Digital Multi Information Display Cluster</p>
                <p>Digital Race Cluster</p>

            </div>

const ext = <div className='text'>
                <p>19”/20” 10-Spoke Ultra-Lightweight Alloy Wheels</p>
                <p>LT Carbon Fibre Front Splitter</p>
                <p>LT Carbon Fibre Side Skirt</p>
                <p>LT Carbon Fibre Rear Bumper Side Plate</p>
                <p>LT Carbon Fibre Rear Diffuser</p>
                <p>LT Rear Active Spoiler w/ Drag Reduction System (DRS)</p> 
                <p>Full LED Headlights w/ Static Adaptive Functionality & Rain-Light Sensor</p> 
                <p>Automatic LED Daytime Running Light</p> 
                <p>Automatic LED Tail Lights</p> 
                <p>Power Adjustment & Folding Side Mirrors w/ Dip in Reverse Functionality</p> 
                <p>Quad-Center Exhaust System</p> 
            </div>

const eng = <div className='text'>
                <p>4.0L Twin-Turbocharged V8</p>
                <p>765-Horsepower to 800-Nm of Torque</p>
                <p>Top Speed of 330 Km/h</p>
                <p>0-100 Km/h in 2.8 Sec</p>
            </div>

const M765lt = () => {
    return ( 
        <div className="M765lt">
            <Tes 
                brand={"Mclaren"}
                type={"765LT"}
                imgH={p1}
                year={"2022"}
                odo={"Delivery Mileage"}
                color={"Vega Blue Colour"}
                price={"Rp. 1.000.000.000"}
                desc={"The McLaren 765LT is a supercar that makes track performance a priority, by improving the aerodynamics to increase downforce, more Carbon Fibre parts to reduce weight, and Formula 1 inspired braking system. Also, by letting most creatures comfort stuff to the side."}
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
 
export default M765lt;