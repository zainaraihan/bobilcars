import Tes from '../Tes/tes';

// Piloti
import p1 from '../../Assets/piloti/p1.png'
import p2 from '../../Assets/piloti/p2.png'
import p3 from '../../Assets/piloti/p3.png'
import p4 from '../../Assets/piloti/p4.png'
import p5 from '../../Assets/piloti/p5.png'
import p6 from '../../Assets/piloti/p6.png'
import p7 from '../../Assets/piloti/p7.png'

const int = <div className='text'>
                <p>Creme Light Leather Interior</p>
                <p>Wood Grain Interior Trim Panel</p>
                <p>Leather Steering Wheel</p>
                <p>Power Driver & Front Passenger Seats w/ Lumbar Support & Memory</p>
                <p>Heated Driver & Front Passenger Seats</p>
                <p>Premium Sound System</p>
                <p>Multi-Zone A/C System</p>
            </div>

const ext = <div className='text'>
                <p>21” 7-Spoke Silver Alloy Wheels</p>
                <p>Aluminium Front Window Trim</p>
                <p>Aluminum Side Window Trim</p>
                <p>Chrome Front Grille</p>
                <p>Chrome Spirit Of Ecstacy</p>
                <p>LED HeadLights w/ Daytime Running Lights & Self-Leveling</p> 
                <p>Power Side Mirrors w/ Heater & Auto-Dimming</p> 
                <p>Auto-Latch Doors</p> 
            </div>

const eng = <div className='text'>
                <p>6.8L Naturally-Aspirated V12</p>
                <p>453-Horsepower & 531-Nm of Torque</p>
                <p>Top Speed of 240 Km/h</p>
                <p>0-100 Km/h in 5.9 Sec</p>
            </div>

const Drophead = () => {
    return ( 
        <div className="Drophead">
            <Tes 
                brand={"Rolls-Royce"}
                type={"Drophead"}
                imgH={p1}
                year={"2020"}
                odo={"Delivery Mileage"}
                color={"Silverstone Colour"}
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
 
export default Drophead;