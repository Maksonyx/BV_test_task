import React from 'react';
import SportItem from './SportItem';

const SportsList = ({ sports }) => {
  if (!sports.length) {
    return <h1 style={{ textAlign: 'center' }}>Sports were not found.</h1>;
  }

  return (
    <div className="market">
      <h1 style={{ textAlign: 'center' }}>Sport's list:</h1>

      <div>
        {sports.map((sport) => (
          <SportItem key={sport.id} sport={sport} />
        ))}
      </div>
    </div>
  );
};

export default SportsList;
