import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncGetSports } from '../API/sportsDataServices';
import Outcomes from '../components/Outcomes';
import Loader from '../components/UI/Loader/Loader';
import { dataHandler } from '../store/dataHandler';

const Markets = () => {
  const params = useParams();
  
  const dispatch = useDispatch();
  const comp = useSelector((state) => dataHandler('OUTCOMES', state.sports.sports, {...params}));
  const error = useSelector((state) => state.sports.error);
  const isLoading = useSelector((state) => state.sports.isLoading);

  useEffect(() => {
    !comp && dispatch(asyncGetSports())
  }, []);

  return (
    <div className='container'>
        <h1>Marktes' page</h1>

        {error && <h1>Error {error}</h1>}

        {isLoading ? (
            <Loader />
        ) : (
            comp && comp.events.length
                ? (
                    <div key={comp.id} className='comp-item'>
                    <h3>{comp.desc}</h3>
                        <div>
                            {
                                comp.events.map(market => <Outcomes key={market.id} marketData={market.markets}/>)
                            }
                        </div>
                    </div>
                )
                :
                (<p>Bets will be available soon :)</p>)
            
        )}
    </div>
  );
};

export default Markets;
