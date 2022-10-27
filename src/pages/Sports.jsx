import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetSports } from '../API/sportsDataServices';
import SportsList from '../components/SportsList';
import Loader from '../components/UI/Loader/Loader';
import { dataHandler } from '../store/dataHandler';

function Sports() {
  const dispatch = useDispatch();
  const sports = useSelector((state) => dataHandler('SPORTS', state.sports.sports, null));
  const error = useSelector((state) => state.sports.error);
  const isLoading = useSelector((state) => state.sports.isLoading);
  
  useEffect(() => {
    dispatch(asyncGetSports())
  }, []);
  
  return (
    <div className="sports container" data-testid='sports-comp'>
      {error && <h1>Error {error}</h1>}

      {isLoading
        ? <Loader /> 
        : <SportsList sports={sports} data-testid='sports'/>
      }
      
    </div>
  );
}

export default Sports;
