import React, { useState} from 'react';
// import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import QuantityPassengers from '../QuantityPassengers';
import './styleMultipleSelect.scss'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    },
  },
};



export default function MultipleSelect() {
  // const theme = useTheme();
  // const [personName, setPersonName] = useState([]);
  const [count, setCount] = useState(0);

  console.log(setCount + 1);
  console.log(count);

  return (
    <div className='form__select'>
      <FormControl sx={{ m: 1, width:'100%' }}>
        <InputLabel id="demo-multiple-name-label">Pasajeros</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={[count]}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >

          <div name={count} style={{ display: 'flex', justifyContent: 'center' }}>
            <QuantityPassengers
              name={'Adulto'} description={'(13 + años)'} count={count} setCount={setCount}
            />
          </div>
           {/* <div name={count} style={{ display: 'flex', justifyContent: 'center' }}>
            <QuantityPassengers
              name={'niños'} description={'(13 + años)'} count={count} setCount={setCount}
            />
          </div>
          <div name={count} style={{ display: 'flex', justifyContent: 'center' }}>
            <QuantityPassengers
              name={'bebes'} description={'(13 + años)'} count={count} setCount={setCount}
            />
          </div>  */}

        </Select>
      </FormControl>
    </div>
  );
}