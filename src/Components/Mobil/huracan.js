import Tes from '../Tes/tes';

// Piloti
import p1 from '../../Assets/huracan/h1.png'
import p2 from '../../Assets/huracan/h2.png'
import p3 from '../../Assets/huracan/h3.png'
import p4 from '../../Assets/huracan/h4.png'
import p5 from '../../Assets/huracan/h5.png'
import p6 from '../../Assets/huracan/h6.png'
import p7 from '../../Assets/huracan/h7.png'

const int = <div className='text'>
                <p>Nero Cosmus Alcantara Interior w/ Verde Fauns Green Accent & Stitching</p>
                <p>Nero Cosmus Alcantara Headliner</p>
                <p>Verde Fauns Green Leather Interior Trim Panel</p>
                <p>Alcantara Steering Wheel w/ Multi Function Button & Bright Green Center Ring</p>
                <p>Human Machine Interface (HMI) Touchscreen Center Console Controls</p>
                <p>Fully-Digital TFT Display Cluster</p>
            </div>

const ext = <div className='text'>
                <p>20” OEM Lamborghini Huracan STO Alloy Wheels</p>
                <p>STO Aero Package</p>
                <p>STO Front End (Bumper, Hood, & Fenders)</p>
                <p>STO Side Skirts</p>
                <p>STO Rear Bumper & Diffuser</p>
                <p>STO Engine Air Scoopr</p> 
                <p>STO Rear Spoiler</p> 
                <p>Lightweight Carbon Fiber Door</p> 
                <p>Verde Fauns Brake Caliper</p> 
                <p>Verde Fauns ‘STO’ Surround Decal</p> 
            </div>

const eng = <div className='text'>
                <p>5.2L Naturally-Aspirated V10</p>
                <p>640-Horsepower & 565-Nm of Torque</p>
                <p>Top Speed of 310 Km/h</p>
                <p>0-100 Km/h in 3.0 Sec</p>
            </div>

const Huracan = () => {
    return ( 
        <div className="Huracan">
            <Tes 
                brand={"Lamborghini"}
                type={"Huracan STO"}
                imgH={p1}
                year={"2023"}
                odo={"Delivery Mileage"}
                color={"Nero Noctics Colour"}
                price={"Rp. 14.500.000.000"}
                desc={"Huracán STO (Super Trofeo Omologata) Is a road-homologated super sports car inspired by Lamborghini race cars: the Huracán EVO Super Trofeo developed by Lamborghini Squadra Corsa for Lamborghini’s own race series, as well as the Huracán EVO GT3, three-time winner of the 24 Hours of Daytona and two-time winner of the 12 Hours of Sebring. "}
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
 
export default Huracan;