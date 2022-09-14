import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getPirateById } from '../helpers/getPirateById';

export const PiratePage = () => {


  const { id } = useParams();
  const navigate = useNavigate();

  const pirate = useMemo( () => getPirateById( id ), [ id ] );

  const onNavigateBack = () => {
    ( pirate.crew === 'Straw Hats' ) ? navigate('/strawhat') : navigate('/blackbeard');
  }

  const pirateImgUrl = `/pirates/${id}.jpg`;

  if ( !pirate ) {
    return <Navigate to="/strawhat"/>
  }

  return (
    <div className='row mt-4'>
        <div className="col-2">
          <img src={pirateImgUrl} alt={ pirate.pirate } className='img-thumbnail animate__animated animate__fadeInDown'/>
        </div>

        <div className="col-3">
          <h3>{ pirate.pirate }</h3>
          <ul className='list-group list-group-flush'>
              <li className='list-group-item'> <b>Crew:</b> { pirate.crew }</li>
              <li className='list-group-item'> <b>Occupation:</b> { pirate.occupation }</li>
              <li className='list-group-item'> <b>Alias:</b> { pirate.alias }</li>
          </ul>

          <h5 className='mt-5'>Bounty</h5>
          <p>{ pirate.bounty }</p>

          <button className='btn btn-outline-primary' onClick={ onNavigateBack }>
            Return
          </button>

        </div>


    </div>
  )
}
