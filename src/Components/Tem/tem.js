import './tem.css'
import p1 from '../../Assets/piloti/p1.png'
import p2 from '../../Assets/piloti/p2.png'
import p3 from '../../Assets/piloti/p3.png'
import p4 from '../../Assets/piloti/p4.png'
import p5 from '../../Assets/piloti/p5.png'
import p6 from '../../Assets/piloti/p6.png'
import p7 from '../../Assets/piloti/p7.png'
const Tem = ({text}) => {
    return ( 
        <div className="tem">
            <div className="container">
                <div className="title">
                    <p className="brand">Ferrari</p>
                    <p className="type">488 Pista Piloti</p>
                </div>
                <div className="imgHead">
                    <img src={p1} alt="" />
                </div>
                <div className='spec'>
                    <div className='year'>
                        <p className='lft'>Year</p>
                        <p className='rght'>2020</p>
                    </div>
                    <div className='odo'>
                        <p className='lft'>Odometer</p>
                        <p className='rght'>Delivery Mileage</p>
                    </div>
                    <div className='color'>
                        <p className='lft'>Color</p>
                        <p className='rght'>Argento Nurburgring Silver</p>
                    </div>
                </div>
                <div className='image'>
                    <img className='img1 list' src={p2} alt="" />
                    <img className='img2 list' src={p3} alt="" />
                    <img className='img3 list' src={p4} alt="" />
                    <img className='img4 list' src={p5} alt="" />
                    <img className='img5 list' src={p6} alt="" />
                    <img className='img6 list' src={p7} alt="" />
                </div>
                <div className='options'>
                    <div className='title'>
                    Specifications & Options
                    </div>
                    <div className='paragraph'>
                        <div className='title interior'>
                            <p>Interior</p>
                            <div className='text'>
                                <p>Black Alcantara Interior w/ Red Stitching</p>
                                <p>Black Alcantara Headliner</p>
                                <p>Carbon Fibre Interior Trim Panel</p>
                                <p>Italian flag Graphics on Driver & Passenger Seat</p>
                                <p>Alcantara-Carbon Fibre Steering Wheel w/ Driving Mode Button</p>
                                <p>2-LCD Display Cluster</p>
                                <p>JBL Sound System</p>
                            </div>
                        </div>
                        <div className='line'></div>
                        <div className='title exterior'>
                            <p>Exterior</p>
                            <div className='text'>
                                <p>20” Black Forged Aluminium Wheels</p>
                                <p>2017 WEC GTE PRO Tribute Livery</p>
                                <p>New Improved Aerodynamics</p>
                                <p>‘Formula 1’ Inspired S-duct Aero System</p>
                                <p>‘488 GTE’ Inspired Diffuser & Front Flicks</p>
                                <p>New Bigger Rear Spoiler</p> 
                            </div>
                        </div>  
                        <div className='line'></div>
                        <div className='title engine'>
                            <p>Engine</p>
                            <div className='text'>
                                <p>3.9L Twin-Turbocharged V8</p>
                                <p>710-Horsepower & 770-Nm of Torque</p>
                                <p>New Improved Aerodynamics</p>
                                <p>Top Speed of 340 Km/h</p>
                                <p>0-100 Km/h in 2.85 Sec</p>
                            </div>
                        </div>  
                        <div className='phone'>
                            <div className='icon'>
                                <a href="https://wa.me/6281230009889">
                                    <img src="./icon.png" alt="" />
                                <p>081230009889</p>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Tem;