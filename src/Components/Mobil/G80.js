import Tes from '../Tes/tes';

// Piloti
import p1 from '../../Assets/g80/g1.png'
import p2 from '../../Assets/g80/g2.png'
import p3 from '../../Assets/g80/g3.png'
import p4 from '../../Assets/g80/g4.png'
import p5 from '../../Assets/g80/g5.png'
import p6 from '../../Assets/g80/g6.png'
import p7 from '../../Assets/g80/g7.png'

const int = <div className='text'>
                <p>Obsidian Black Interior</p>
                <p>Creme Headliner</p>
                <p>Nappa Leather Seats w/ Natural Dyes</p>
                <p>Aluminium Interior Trimt</p>
                <p>12-way Power-adjustable Driver Seat</p>
                <p>Driver Seat Lumbar Support & Integrated Memory System</p>
                <p>Front Seat Lumbar Support & Integrated Memory System</p>
                <p>Front Seat Ventilation & Heater</p>
                <p>Rear Seat Heater</p>
                <p>Lexicon 17-Speaker System w/ Quantum Logic Surround Sound</p>
                <p>14.5” Infotainment System</p>
                <p>12-way Power-adjustable Front Seat</p>
                <p>Genesis Connected Services</p>
                <p>Genesis Car Pay</p>
                <p>Valet Mode</p>
                <p>Music Streaming Service</p>
                <p>Active Road Noise Controlt</p>
                <p>8” TFT LCD Cluster</p>
                <p>Ambient Mood Lightning</p>
                <p>Front Seat LED Foot Lights</p>
                <p>Metal Door Scuff</p>
            </div>

const ext = <div className='text'>
                <p>19” Turbine-Shaped Wheels</p>
                <p>G-Matrix Patterned Grille</p>
                <p>Full LED Headlights</p>
                <p>Full Rear Combination Lights</p>
                <p>Solar Panel Roof</p>
                <p>Double-glazed Soundproof Glass (Front & All Doors)</p> 
                <p>Solar Glass (Front, Rear, & All Windows)</p> 
                <p>Rear Styling Cover</p> 
            </div>

const eng = <div className='text'>
                <p>Two Electric Motors (AWD)</p>
                <p>Lithium-Ion Battery</p>
                <p>Range of 520 Km</p>
                <p>365-Horsepower and 700-Nm of Torque</p>
                <p>0-100 Km/h in 4.1 Sec</p>
            </div>

const G80 = () => {
    return ( 
        <div className="G80">
            <Tes 
                brand={"Genesis"}
                type={"G80 Electrified SWB (Ex-G20)"}
                imgH={p1}
                year={"2022"}
                odo={"Delivery Mileage"}
                color={"Vik Black Colour"}
                price={"Rp 2.550.000.000 (Off)"}
                desc={"The G80 Electric comes with two permanent-magnet motors that combine to produce 365-Horsepower and 700-Nm of torque. That is 10 hp less than the twin-turbo V-6 from the G80 Sport, but a whopping additional 170-Nm. Power is delivered to all four wheels for standard AWD. That's good for a 0-100 Km/h time of 4.1 seconds."}
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
 
export default G80;