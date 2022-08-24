
import { pirates } from '../data/pirates';

export const getPiratesByCrew = ( crew ) => {
    const validCrew = [ 'Straw Hats', 'Blackbeard' ];

    if ( !validCrew.includes( crew ) ){
        throw new Error(`${ crew } is not on the database yet`);
    }

    return pirates.filter( pirate => pirate.crew === crew );
}
