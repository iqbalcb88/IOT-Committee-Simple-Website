import React from 'react';

const Cart = (props) => {
  // console.log(props.member);
  const { name, img } = props.member;
  return (
    <div>
      <div className='member-card'>
        <div>
          <img className='cart-img' src={img} alt='' />
        </div>
        <h3 className='text-white'>{name}</h3>
      </div>
    </div>
  );
};

export default Cart;
