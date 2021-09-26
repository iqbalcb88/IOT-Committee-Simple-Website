import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Nominees from '../Nominees/Nominees';

const Candidates = () => {
  //assign data using useState
  const [candidates, setCandidates] = useState([]);
  // load data using useEffect
  useEffect(() => {
    fetch('./committee.json')
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  }, []);
  // console.log(candidates);
  //create event handler to get data from click
  const [board, setBoard] = useState([]);
  const [totalSalary, setTotalSalary] = useState([]);
  const btnEvent = (nominee, salary) => {
    nominee.addCondition = true;
    const members = [...board, nominee];
    const newTotalSalary = [...totalSalary, salary];
    setTotalSalary(newTotalSalary);
    setBoard(members);
  };
  // console.log(board);
  console.log(totalSalary);
  const reducer = (p, c) => p + c;
  const totalSalaryExpenses = totalSalary.reduce(reducer, 0);
  return (
    <div className='candidates-container'>
      <div className='nominees-container'>
        {candidates.map((nominee) => (
          <Nominees btnEvent={btnEvent} nominee={nominee} key={nominee.id} />
        ))}
      </div>
      <div className='selected-candidates'>
        <div className='cart-header'>
          <h2>
            <FontAwesomeIcon className='text-primary' icon={faUsers} /> Member
            Selected: {board.length}
          </h2>
          <h2>Salary Expense: ${totalSalaryExpenses}</h2>
        </div>
        {board.map((member) => (
          <Cart key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Candidates;
