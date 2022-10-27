import React from 'react';
import MyButton from './UI/Button/MyButton';
import { useNavigate } from 'react-router-dom';

const SportItem = (props) => {
  const router = useNavigate();

  return (
    <div
      className="sport-item"
      key={props.sport.id}
      id={props.sport.id}
    >
      <div className="sport-item__content">
        <strong>{props.sport.desc}</strong>
      </div>
      <div className="sport-item__btns">
        <MyButton onClick={() => router(`/sports/${props.sport.id}`)}>
          Open
        </MyButton>
      </div>
    </div>
  );
};

export default SportItem;
