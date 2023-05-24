import React from 'react'
import { TextField } from '@mui/material';
import './styleCoupon.scss'
import { width } from '@mui/system';


const CouponDiscount = () => {
  return (
    <TextField id="outlined-basic" label="¿Tienes un código de promoción?" variant="outlined" className='container__coupon' />
  )
}

export default CouponDiscount