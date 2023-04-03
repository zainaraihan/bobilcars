import './cars.css'
import {Routes, Route} from 'react-router-dom';
import Piloti from '../Mobil/piloti';
import Classic from '../Mobil/classic';
import Dawn from '../Mobil/dawn';
import Drophead from '../Mobil/drophead';
import G80 from '../Mobil/G80';
import G63 from '../Mobil/G63';
import G400d from '../Mobil/G400d';
import Huracan from '../Mobil/huracan';
import M765lt from '../Mobil/m765lt';
import Urus from '../Mobil/urus';

const Cars = () => {
    return ( 
        <div className="cars">
            <div className='header'>
                <img src="./logo.png" alt="" />
            </div>
            <Routes>
                <Route path='' element=''/>
                <Route path='/piloti' element={<Piloti/>}/>
                <Route path='/g400d' element={<G400d/>}/>
                <Route path='/classic' element={<Classic/>}/>
                <Route path='/m765lt' element={<M765lt/>}/>
                <Route path='/dawn' element={<Dawn/>}/>
                <Route path='/drophead' element={<Drophead/>}/>
                <Route path='/huracan' element={<Huracan/>}/>
                <Route path='/g80' element={<G80/>}/>
                <Route path='/urus' element={<Urus/>}/>
                <Route path='/g63' element={<G63/>}/>
            </Routes>
            <div className='footer'>
                <p>© 2023 Bobil Indonesia. All Rights Reserved</p>
            </div>
        </div>
     );
}
 
export default Cars;