import Tes from '../Tes/tes';

// Piloti
import p1 from '../../Assets/dawn/d1.png'
import p2 from '../../Assets/dawn/d2.png'
import p3 from '../../Assets/dawn/d3.png'
import p4 from '../../Assets/dawn/d4.png'
import p5 from '../../Assets/dawn/d5.png'
import p6 from '../../Assets/dawn/d6.png'
import p7 from '../../Assets/dawn/d7.png'

const int = <div className='text'>
                <p>Mandarin Leather Interior</p>
                <p>Black Headliner</p>
                <p>Wood Grain Interior Trim Panel</p>
                <p>Leather Steering Wheel</p>
                <p>‘DAWN’ Analog Clock</p>
                <p>2 LCD Monitors in Front</p>
                <p>Rolls-Royce Bespoke Audio Systems</p>
                <p>Center Console Controls</p>
                <p>Power Front Seats w/ Lumbar Support</p>
                <p>Power Rear Seats</p>
                <p>Heated Front Seats</p>
                <p>Front & Rear Center Armrest</p>
                <p>Rolls Royce Monogram Embossed to Headrests</p>
                <p>Rear A/C Ventilation w/ Fan Speed Controls</p>
            </div>

const ext = <div className='text'>
                <p>21” 10-Spokes Forged Wheels</p>
                <p>Gold-Plated Spirit Of Ecstacy</p>
                <p>Gold Front Grille</p>
                <p>Orange Pinstripes</p>
                <p>LED HeadLights w/ Adaptive & Self-Leveling</p>
                <p>LED Daytime Running Light</p> 
                <p>LED Tail Lights</p> 
                <p>Auto-Latch Door</p> 
                <p>Power Side Mirrors w/ Heater & Auto-Dimming</p> 
                <p>Power Convertible Roof</p> 
                <p>Chrome Tailpipe Finisher</p> 
            </div>

const eng = <div className='text'>
                <p>6.6L Twin-Turbocharged V12</p>
                <p>563-Horsepower to 575-Nm of Torque</p>
                <p>Top Speed of 250 Km/h</p>
                <p>0-100 Km/h in 5.0 Sec</p>
            </div>

const Dawn = () => {
    return ( 
        <div className="Dawn">
            <Tes 
                brand={"Rolls-Royce"}
                type={"Dawn"}
                imgH={p1}
                year={"2016"}
                odo={"Delivery Mileage"}
                color={"Metropolitan Blue Colour"}
                price={"Rp. 13.500.000.000"}
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
 
export default Dawn;