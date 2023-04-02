import './cars.css'
import {Routes, Route} from 'react-router-dom';
import Tem from '../Tem/tem';
const Cars = () => {
    return ( 
        <div className="cars">
            <div className='header'>
                <img src="./logo.png" alt="" />
            </div>
            <Routes>
                <Route path='' element=''/>
                <Route path='/piloti' element={<Tem text={"piloti"}/>}/>
                <Route path='/g400d' element={<Tem text={"g400d"}/>}/>
                <Route path='/classic' element={<Tem text={"classic"}/>}/>
                <Route path='/g63' element={<Tem text={"piloti"}/>}/>
                <Route path='/765lt' element={<Tem text={"piloti"}/>}/>
                <Route path='/dawn' element={<Tem text={"dawn"}/>}/>
                <Route path='/drophead' element={<Tem text={"drophead"}/>}/>
                <Route path='/huracan' element={<Tem text={"huracan"}/>}/>
                <Route path='/g80' element={<Tem text={"g80"}/>}/>
                <Route path='/urus' element={<Tem text={"urus"}/>}/>
            </Routes>
            <div className='footer'>
                <p>© 2023 Bobil Indonesia. All Rights Reserved</p>
            </div>
        </div>
     );
}
 
export default Cars;