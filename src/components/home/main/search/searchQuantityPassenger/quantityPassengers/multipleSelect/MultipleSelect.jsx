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

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

export default function MultipleSelect() {
  // const theme = useTheme();
  // const [personName, setPersonName] = useState([]);
  const [quantitySelectedAdult, setQuantitySelectedAdult] = useState(0)
  const [quantitySelectedNiños, setQuantitySelectedNiños] = useState(0)
  const [quantitySelectedBebes, setQuantitySelectedBebes] = useState(0)

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value,
  //   );
  // };
  console.log(setQuantitySelectedAdult + 1);


  return (
    <div className='form__select'>
      <FormControl sx={{ m: 1, width:'100%' }}>
        <InputLabel id="demo-multiple-name-label">Pasajeros</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={[quantitySelectedAdult]}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >

          <div name={quantitySelectedAdult} style={{ display: 'flex', justifyContent: 'center' }}>
            <QuantityPassengers
              quantitySelectedAdult={quantitySelectedAdult}
              quantitySelectedNiños={quantitySelectedNiños}
              quantitySelectedBebes={quantitySelectedBebes}
              setQuantitySelectedAdult={setQuantitySelectedAdult}
              setQuantitySelectedNiños={setQuantitySelectedNiños}
              setQuantitySelectedBebes={setQuantitySelectedBebes}


            />
          </div>

        </Select>
      </FormControl>
    </div>
  );
}