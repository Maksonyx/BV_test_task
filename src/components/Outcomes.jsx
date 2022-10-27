import React from 'react';
import OutcomeItem from './OutcomeItem';

const Outcomes = (data) => {
    return (
        <div className="market">
            {
                data.marketData.map(market => (
                    <div key={market.id} className='outcome'>
                        <h4 style={{textAlign: 'center', margin: '5px 10px'}}>{market.desc}</h4>

                        <div className='outcome-wrapper'>
                            {
                                market.o.length
                                    ? market.o.map(outc => <OutcomeItem key={outc.oid} outcomeData={outc}/>)
                                    : (<p>Bets will be available soon :)</p>)
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Outcomes;