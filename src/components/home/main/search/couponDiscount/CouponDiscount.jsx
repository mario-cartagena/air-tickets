import React from 'react';
import { TextField } from '@mui/material';
import './styleCoupon.scss';

const CouponDiscount = ({couponCode, setCouponCode}) => {

  const handleCouponChange = (event) => {
    setCouponCode(event.target.value);
  };

  return (
    <TextField
      id="outlined-basic"
      label="¿Tienes un código de promoción?"
      variant="outlined"
      className='container__coupon'
      value={couponCode}
      onChange={handleCouponChange}
    />
  );
};

export default CouponDiscount;
