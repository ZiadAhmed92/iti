import React from 'react'

const Skills = ({skill , range}) => {
  console.log(skill)
  return (
    <div className='p-3 mx-3 d-flex align-items-center justify-content-space-between '>
      <div className='Skill text-white '>{skill}</div>
                <div className="progress " role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    
                    <div className="progress-bar bg-warning text-white" style={{width:5*range}}>{range}%</div>
                </div>
               
    </div>
  )
}

export default Skills