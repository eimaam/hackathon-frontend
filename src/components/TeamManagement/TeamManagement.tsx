import React, { useState } from 'react'
import { AddTeamModal } from '../../helpers/AddTeamModal'
import { teams } from '../../helpers/dummyTeamData'
import { TeamCard } from './TeamCard'

export const TeamManagement = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div id='teamManagement'>
      <div className='team--management--section'>
        <div className='header'>
            <h2>Teams</h2>
            <button onClick={() => setShowModal(true)}>Create New Team</button>
        </div>
        <div className='team--cards--section'>
          {teams.map(team => (
            <TeamCard 
            {...team}
            />
          ))}
        </div>
      </div>
      {showModal && 
      <div className='modal--section'>
        <AddTeamModal setShowModal={setShowModal}/>
      </div>
        }
    </div>
  )
}
