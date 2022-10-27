import React from 'react';

const MarketItem = ({marketData}) => {
    return (
        <div className="market">
            <div key={marketData.id} className='outcome'>
                <h5 style={{textAlign: 'right', margin: '5px 10px'}}>{marketData.desc}</h5>

                <div className='outcome-wrapper'>
                    {
                        marketData && marketData.o && marketData.o.length
                            ? marketData.o.map(outc => (
                                <div key={outc.oid} className='outcome-item' >
                                    <span>{outc.d}</span>
                                    <span><strong>{outc.prd}</strong></span>
                                </div>
                            ))
                            : null
                    }
                </div>
            </div>
        </div>
    );
};

export default MarketItem;