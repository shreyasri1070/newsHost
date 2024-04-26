import React from 'react'
import loading from './loading.gif'
const spinner =()=>{
    
        return (
            
            <div className='text-center my-5'>
                <img  className="my-3"src={loading} alt="loading"  style={{height:'100px',width:'100px' }} />

            </div>
        )
    

}
export default spinner;

