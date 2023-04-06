import Tes from '../Tes/tes';

// Piloti
import p1 from '../../Assets/drophead/d1.png'
import p2 from '../../Assets/drophead/d2.png'
import p3 from '../../Assets/drophead/d3.png'
import p4 from '../../Assets/drophead/d4.png'
import p5 from '../../Assets/drophead/d5.png'
import p6 from '../../Assets/drophead/d6.png'
import p7 from '../../Assets/drophead/d7.png'

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
                year={"2013"}
                odo={"Delivery Mileage"}
                color={"Silverstone Colour"}
                price={"Rp 17.500.000.000 (on)"}
                desc={"-"}
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