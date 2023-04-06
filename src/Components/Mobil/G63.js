import Tes from '../Tes/tes';

// Piloti
import p1 from '../../Assets/g63/n1.jpeg'
import p2 from '../../Assets/g63/n2.jpeg'
import p3 from '../../Assets/g63/n3.jpeg'
import p4 from '../../Assets/g63/n4.jpeg'
import p5 from '../../Assets/g63/n5.jpeg'
import p6 from '../../Assets/g63/n6.jpeg'
import p7 from '../../Assets/g63/n7.jpeg'

const int = <div className='text'>
                <p>Black Race-Tex Leather Interior</p>
                <p>Black Race-Tex Headliner</p>
                <p>Black Race-Tex GT Sport Steering Wheel</p>
                <p>Carbon Matt Interior Package</p>
                <p>Full Bucket Seats</p>
                <p>Seat Belt in Racing Yellow</p>
                <p>Tachometer Dial in Racing Yellow</p>
                <p>Sport Chrono Stopwatch Instrument Dial in Racing Yellow</p>
            </div>

const ext = <div className='text'>
                <p>20”/21” Turbo S Wheels in Satin Black</p>
                <p>Black Exterior Package w/ Aerokit</p>
                <p>Black Exterior Package w/ Aerokit</p>
                <p>SportDesign Side Skirts</p>
                <p>Mirror Bases Painted in Exterior Colour</p>
                <p>Electric Slide/Tilt Glass Sunroof</p>
                <p>Model Designation painted in Satin Black</p>
                <p>Yellow Black Caliper</p>
                <p>Black Exhaust Tips</p>
            </div>

const eng = <div className='text'>
                <p>3.0L Twin-Turbocharged Flat-6</p>
                <p>480-Horsepower & 570-Nm of Torque</p>
                <p>Top Speed of 311 Km/h</p>
                <p>0-100 Km/h in 3.4 Sec</p>
                
            </div>

const G63 = () => {
    return ( 
        <div className="G63">
            <Tes 
                brand={"Porsche"}
                type={"911 Carrera GTS"}
                imgH={p1}
                year={"2023"}
                odo={"Delivery Mileage"}
                color={"Shark Blue Colour"}
                price={"Rp 6.000.000.000 (OTR)"}
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
 
export default G63;