import { pirates } from '../data/pirates'

export const getPirateByName = ( name = '' ) => {

    name = name.toLocaleLowerCase().trim();

    if( name.length === 0 ) return [];

    return pirates.filter(
        pirate => pirate.pirate.toLocaleLowerCase().includes( name )
    );
}