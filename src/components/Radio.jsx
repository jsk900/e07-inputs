import { useState } from 'react';

const Radio = () => {
  const [radio, setRadio] = useState({ city: '' });

  const handleChange = (e) => {
    setRadio({ ...radio, city: e.target.value });
  };

  return (
    <div onChange={handleChange}>
      <input type='radio' value='Berlin' name='city' />
      Berlin
      <input type='radio' value='London' name='city' />
      London
      <input type='radio' value='Madrid' name='city' />
      Madrid
      {radio.city}
    </div>
  );
};

export default Radio;
