import React, { useState } from 'react';
import QuantityPassengers from '../QuantityPassengers';

const SelectPassenger = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleSelectChange}>
        <option>
        <li><QuantityPassengers name="Adulto" description="(13 + años)" /></li>
        </option>
      
      </select>

      {selectedValue === "opcion1" && <QuantityPassengers name="Adulto" description="(13 + años)" />}
      {selectedValue === "opcion2" && <QuantityPassengers name="Niños" description="(2 - 12 años)" />}
      {selectedValue === "opcion3" && <QuantityPassengers name="Bebes" description="(0 a 23 meses)" />}

      <p>Selected Value: {selectedValue}</p>
    </div>
  );
};

export default SelectPassenger;
