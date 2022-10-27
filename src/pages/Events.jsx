import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncGetSports } from '../API/sportsDataServices';
import EventsItem from '../components/EventsItem';
import Loader from '../components/UI/Loader/Loader';
import { dataHandler } from '../store/dataHandler';

const Events = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const sport = useSelector((state) => dataHandler('EVENTS', state.sports.sports, {...params}));
  const error = useSelector((state) => state.sports.error);
  const isLoading = useSelector((state) => state.sports.isLoading);
    
  useEffect(() => {
    !sport && dispatch(asyncGetSports())
  }, []);

  return (
    <div className='container'>
      <h1 style={{textAlign: 'center'}}>Events' page</h1>
      <h2>{sport && sport.desc} (ID: {params.sport_id})</h2>

      {error && <h1>Error {error}</h1>}

      {isLoading ? (
          <Loader />
        ) : (
            sport && sport.comp && sport.comp.map(compItem => {
                return (
                    <div key={compItem.id} className='comp-item'>
                    <h3>{compItem.desc}</h3>
                        <div>
                            {compItem.events.map(eventItem => <EventsItem key={eventItem.id} data={eventItem} />)}
                        </div>
                    </div>
                    )
                })
        )}
      
    </div>
  );
};

export default Events;
