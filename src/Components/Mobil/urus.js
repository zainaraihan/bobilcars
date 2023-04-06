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
                <p>Black Leather Interior</p>
                <p>Wood-Silver Dashboard Panel</p>
                <p>Leather Steering Wheel w/ Multi Function Button</p>
                <p>15” Touchscreen for Media, Navigation, Controls, & Climate</p>
                <p>Premium Center Console w/ Wireless Charging</p>
                <p>Power Driver & Front Passenger Seats</p>
                <p>Front & Rear Seat Heater</p>
                <p>Front Armrest</p>
                <p>Premium Audio System w/ 14-Speakers, Subwoofer, & Dual Amplifiers</p>
            </div>

const ext = <div className='text'>
                <p>20” Tesla Model 3 Alloy Wheels</p>
                <p>Glass Roof</p>
                <p>Power Adjustable & Folding Side Mirrors w/ Auto-Dimming</p>
                <p>LED Head Light w/ Daytime Running Light</p>
                <p>LED Tail Lights</p>
                <p>Rear Carbon Fibre Lip Spoiler</p> 
                <p>360 Camera</p> 
            </div>

const eng = <div className='text'>
                <p>Two Electric Motor (AWD)</p>
                <p>Lithium-ion</p>
                <p>522-Horsepower & 640-Nm of Torque</p>
                <p>0-100 Km/h in 3,5 Sec</p>
                <p>Top Speed of 260 Km/h</p>
                <p>0-100 Km/h in 3.9 sec</p>
            </div>

const Urus = () => {
    return ( 
        <div className="Urus">
            <Tes 
                brand={"Tesla"}
                type={"Model 3"}
                imgH={p1}
                year={"2023"}
                odo={"Delivery Mileage"}
                color={"Black Colour"}
                price={"Rp. -"}
                desc={"The Model 3 was marketed as being a more affordable option to more people than Tesla previous models. Since early 2020, the Model 3 is the best selling electric car in world history, and in June 2021, became the first electric car to pass the 1 million global sales milestone."}
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