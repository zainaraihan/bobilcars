import Tes from '../Tes/tes';

// Piloti
import p1 from '../../Assets/g400d/g1.png'
import p2 from '../../Assets/g400d/g2.png'
import p3 from '../../Assets/g400d/g3.png'
import p4 from '../../Assets/g400d/g4.png'
import p5 from '../../Assets/g400d/g5.png'
import p6 from '../../Assets/g400d/g6.png'
import p7 from '../../Assets/g400d/g7.png'

const int = <div className='text'>
                <p>Nappa Leather Interior</p>
                <p>Brushed Stainless Steel Interior Trim Panel</p>
                <p>Leather & Stainless Steel Steering Wheel w/ Paddle Shift & Touch Control Buttons</p>
                <p>12.3” High-Resolution Central Display</p>
                <p>12.3” Digital Instrument Cluster Display</p>
                <p>COMAND System w/ Touchpad Controller</p>
                <p>Power Driver & Front Passenger w/ Memory & Heater</p>
                <p>8-Colour Ambient Light</p>
                <p>Stainless Steel ‘Mercedes-Benz’ Door Sill Plate</p>
            </div>

const ext = <div className='text'>
                <p>20” AMG Multi-Spoke Black Wheels</p>
                <p>AMG Night Package Plus</p>
                <p>Black Mercedes-Benz Star Emblems</p>
                <p>Black Exterior Lettering</p>
                <p>Obsidian Black Spare Tire Ring</p>
                <p>Brake Calipers w/ Mercedes-Benz Lettering</p> 
                <p>Power Adjustable & Folding Side Mirrors</p> 
            </div>

const eng = <div className='text'>
                <p>3.0L Turbocharged Inline-6</p>
                <p>330-Horsepower & 700-Nm of Torque</p>
                <p>Top Speed of 209 Km/h</p>
                <p>0-100 Km/h in 6.4 Sec</p>
            </div>

const G400d = () => {
    return ( 
        <div className="G400d">
            <Tes 
                brand={"Mercedes-Benz"}
                type={"G400d"}
                imgH={p1}
                year={"2023"}
                odo={"Delivery Mileage"}
                color={"Obsidian Black Metallic Colour"}
                price={"Rp. 5.250.000.000"}
                desc={"Launched in 2018, the present Mercedes-Benz G-Class is an obsessively crafted rework of the G-wagen originally designed in the 1970s as a go-anywhere 4x4 workhorse for the military and farmers. It has a new chassis with independent front suspension, the latest-spec Mercedes engines and transmissions, a completely redesigned body, and a leather-wrapped interior with screens and all the connectivity you expect in a 21st-century automobile."}
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
 
export default G400d;