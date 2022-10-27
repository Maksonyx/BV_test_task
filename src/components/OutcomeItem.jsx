import React from 'react';

const OutcomeItem = ({outcomeData}) => {
    return (
        <div key={outcomeData.oid} className='outcome-item' >
            <div className='outcome-item-title-block'>
                <span className='outcome-item-title-dimension'>({outcomeData.keyDimension}) </span>
                <span>{outcomeData.d}</span>
            </div>
            <div className='outcome-item-koef'><strong>{outcomeData.prd}</strong></div>
        </div>
    );
};

export default OutcomeItem;