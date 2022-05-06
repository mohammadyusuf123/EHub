import React from 'react';
import img1 from'../../images/tracking.png'
import img2 from'../../images/Shiping.png'
import img3 from'../../images/Delivary.png'

const ExtraSection = () => {
    return (
        <div>
            <h3 className='text-center text-info'>WHAT WE DO</h3>
            <div className="row  m-5 p-3">
                <div className="col-md-4">
                    <div className='text-center'>
                        <img src={img1} alt="" />
                       <div className="pt-4">
                       <h3>Truck Selection</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam</p>
                       </div>
                    </div>
                </div>
                <div className="col-md-4 ">
                <img src={img2} alt="" />
                <div className='pt-4'>
                <h3>Truck Selection</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam</p>
                </div>
                </div>
                <div className="col-md-4">
                <img src={img3} alt="" />
             <div className='pt-4'>
             <h3>Express Delivery</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem </p>
             </div>
                </div>

            </div>
        </div>
    );
};

export default ExtraSection;