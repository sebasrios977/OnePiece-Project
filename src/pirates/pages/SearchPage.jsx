
import queryString from 'query-string';
import { PirateCard } from '../components/PirateCard';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPirateByName } from '../helpers/getPiratesByName';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );

  const pirates = getPirateByName( q );

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && pirates.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });





  const onSearchSubmit = ( event ) => {
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return;
    navigate(`?q=${ searchText }`);
    
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-5">
        <h4>Search</h4>
        <hr />
        <form onSubmit={ onSearchSubmit }>
          <input 
            type="text" 
            placeholder='Search a pirate' 
            className='form-control' 
            name='searchText' 
            autoComplete='off' 
            value={ searchText } 
            onChange={ onInputChange } 
          />
          <button className='btn btn-outline btn-primary mt-2'>Search</button>
        </form>
        </div>

        <div className="col-7">
        <h4>Results</h4>
        <hr />

        <div className='alert alert-primary' style={{ display: showSearch ? '' : 'none' }}>Search a pirate</div>

        <div className='alert alert-danger' style={{ display: showError ?  '' : 'none' }}>No pirate found with <b>{ q }</b></div>
        {
          pirates.map( pirate => (
            <PirateCard key={ pirate.id } { ...pirate } />
          ))
        }

        </div>
      </div>
      
    </>
  )
}
