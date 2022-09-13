
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export const PirateCard = (
    { 
        id, 
        pirate, 
        crew, 
        bounty, 
        alias, 
        occupation,
    }) => {

    const pirateImgUrl = `../../../assets/pirates/${ id }.jpg`;


  return (
    <div className='col animate__animated animate__fadeIn'>
        <div className='card'>
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={ pirateImgUrl } alt={ pirate.pirate } className='card-img'/>
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className='card-title'>{ pirate }</h5>
                        <p className='card-text text-dark'>{ crew } Crew</p>
                        <p className='text-muted'>{ bounty }</p>


                        <Link to={ `/pirate/${ id }` }>
                            More...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
