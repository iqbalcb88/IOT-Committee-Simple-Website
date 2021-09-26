import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Image } from 'react-bootstrap';
import './Nominees.css';
import Button from '@restart/ui/esm/Button';

export default function Nominees(props) {
  // console.log(props.nominee);
  const { name, age, img, nationality, quality, salary, skills, achievement } =
    props.nominee;

  return (
    <div className='candidates-style'>
      <div className='card-style'>
        <div>
          <Image className='card-img' src={img} roundedCircle alt='' />
        </div>
        <div className='card-body'>
          <h4>Name: {name}</h4>
          <h5>Age: {age} years</h5>
          <h3 className='bg-danger p-2 text-info'>
            Nationality: {nationality}
          </h3>
          <h6>Skills: {skills}</h6>
          <p>Expertise: {quality}</p>
          <h4>Salary: ${salary}</h4>
          <h5>Achievement: {achievement}</h5>
        </div>
        <div>
          {props.nominee.addCondition ? (
            <Button className='btn btn-success text-warning fw-bold'>
              <FontAwesomeIcon className='text-warning' icon={faCheckCircle} />{' '}
              Member Added
            </Button>
          ) : (
            <Button
              onClick={() => props.btnEvent(props.nominee, salary)}
              className='btn btn-danger text-warning fw-bold'
            >
              <FontAwesomeIcon className='text-warning' icon={faUser} /> Add to
              Committee
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
