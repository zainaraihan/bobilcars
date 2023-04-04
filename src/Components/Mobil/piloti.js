import Tes from '../Tes/tes';

// Piloti
import p1 from '../../Assets/pista/p1.png'
import p2 from '../../Assets/pista/p2.png'
import p3 from '../../Assets/pista/p3.png'
import p4 from '../../Assets/pista/p4.png'
import p5 from '../../Assets/pista/p5.png'
import p6 from '../../Assets/pista/p6.png'
import p7 from '../../Assets/pista/p7.png'

const int = <div className='text'>
                <p>Black Alcantara Interior</p>
                <p>Black Alcantara Headliner</p>
                <p>Carbon Fibre Interior Trim Panel</p>
                <p>Italian flag Graphics on Driver & Passenger Seat</p>
                <p>Alcantara-Carbon Fibre Steering Wheel w/ Driving Mode Button</p>
                <p>Carbon Fiber Paddle Shift w/ Italian Flag Accent</p>
                <p>2-LCD Display Cluster</p>
                <p>JBL Sound System</p>
            </div>

const ext = <div className='text'>
                <p>20” Black Forged Aluminium Wheels</p>
                <p>New Improved Aerodynamics</p>
                <p>‘Formula 1” Inspired S-duct Aero System</p>
                <p>‘488 GTE’ Inspired Diffuser & Front Flicks</p>
                <p>New Bigger Rear Spoiler</p> 
            </div>

const eng = <div className='text'>
                <p>3.9L Twin-Turbocharged V8</p>
                <p>710-Horsepower & 770-Nm of Torque</p>
                <p>Top Speed of 340 Km/h</p>
                <p>0-100 Km/h in 2.85 Sec</p>
            </div>

const Piloti = () => {
    return ( 
        <div className="piloti">
            <Tes 
                brand={"Ferrari"}
                type={"488 Pista Taylor Made"}
                imgH={p1}
                year={"2020"}
                odo={"Delivery Mileage"}
                color={"Dark Green Colour"}
                price={"Rp. 1.000.000.000"}
                desc={"In 2011, Ferrari established its Tailor Made program, allowing its customers to work with the carmaker’s designers to create their dream exterior and interior configurations."}
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
 
export default Piloti;