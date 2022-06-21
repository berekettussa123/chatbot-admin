import './featured.css';
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';


const Featured = ({ques,counta,disConta}) => {
  return (
    <div className="mainAContainer">
      <div className="leftAnalaytics">
        <p className='AnalTitle'>Total Asked Questions</p>
        <p className='AnalSubTitle'>{ques.length}</p>
      </div>
      <div className="centerAnalaytics">
        <p className='AnalTitle'>Answered Questions</p>
        <p className='AnalSubTitle answe '>{counta}</p>
      </div>
      <div className="rightAnalaytics">
        <p className='AnalTitle'>UnAnswered Questions</p>
        <p className='AnalSubTitle Unans'>{disConta}</p>
      </div>
    </div>
  );
};

export default Featured;
