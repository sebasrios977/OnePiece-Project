import { pirates } from "../data/pirates"

export const getPirateById = ( id ) => {

    return pirates.find( pirate => pirate.id === id );
}