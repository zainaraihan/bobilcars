import './tes.css'
const Tes = ({
    brand, 
    type,
    imgH,
    year,
    odo,
    color,
    price,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    interior,
    exterior,
    engine,
    desc
 }) => {
    return ( 
        <div className="tem">
            <div className="container">
                <div className="title">
                    <p className="brand">{brand}</p>
                    <p className="type">{type}</p>
                </div>
                <div className="imgHead">
                    <img src={imgH} alt="" />
                </div>
                <div className='spec'>
                    <div className='year'>
                        <p className='lft'>Year</p>
                        <p className='rght'>{year}</p>
                    </div>
                    <div className='odo'>
                        <p className='lft'>Odometer</p>
                        <p className='rght'>{odo}</p>
                    </div>
                    <div className='color'>
                        <p className='lft'>Color</p>
                        <p className='rght'>{color}</p>
                    </div>
                    <div className='price'>
                        <p className='lft'>Price</p>
                        <p className='rght'>{price}</p>
                    </div>
                </div>
                <div className='image'>
                    <img className='img1 list' src={img1} alt="" />
                    <img className='img2 list' src={img2} alt="" />
                    <img className='img3 list' src={img3} alt="" />
                    <img className='img4 list' src={img4} alt="" />
                    <img className='img5 list' src={img5} alt="" />
                    <img className='img6 list' src={img6} alt="" />
                    <img className='img6 list' src={img7} alt="" />
                </div>
                <div className='descriptions'>
                    <p>Descriptions</p>
                    <div className='isi'>
                        <div className='line'></div>
                        <p>{desc}</p>
                    </div>
                </div>
                <div className='options'>
                    <div className='mrg head'>
                    <p>Specifications & Options</p>
                    </div>
                    <div className='mrg paragraph'>
                        <div className='title interior'>
                            <p>Interior</p>
                            {interior}
                        </div>
                        <div className='line'></div>
                        <div className='title exterior'>
                            <p>Exterior</p>
                            {exterior} 
                        </div>  
                        <div className='line'></div>
                        <div className='title engine'>
                            <p>Engine</p>
                            {engine}
                        </div>  
                    </div>
                    <div className='mrg phone'>
                            <a href="https://wa.me/6281230009889">
                                    <img src="./icon.png" alt="" />
                                    <p>081230009889</p>
                            </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Tes;