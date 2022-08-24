
import React, { useMemo } from 'react'
import { getPiratesByCrew } from '../helpers/getPiratesByCrew'
import { PirateCard } from './PirateCard';

export const PirateList = ( { crew } ) => {


    const pirates = useMemo( () => getPiratesByCrew( crew ), [ crew ] );

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-4'>
        { pirates.map(
            pirate => 
            <PirateCard key={ pirate.id }
            { ...pirate }
            
            />
        )}
    </div>
  )
}
