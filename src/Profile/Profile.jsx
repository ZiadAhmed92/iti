import React from 'react'

const Profile = ({text, bg}) => {
  return (
   
    <div className="col-md-4 my-3">
        <div className={`div cart  bg-${bg} d-flex align-items-center justify-content-center p-5`}>
                <div className='w-75  '>
                    <h3 className='text-white'>{text}</h3>
                    <hr className='text-white'/>
                </div>
        </div>
    </div>
   
  )
}

export default Profile