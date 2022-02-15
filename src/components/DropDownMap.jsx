import { useState } from 'react';

const DropDownMap = () => {
  const [select, setSelect] = useState('Berlin');

  const options = ['Berlin', 'London', 'Madrid'];

  const optionsList = options.map((option, i) => (
    <option key={i} value={option}>
      {option}
    </option>
  ));

  return (
    <div>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        {optionsList}
      </select>
      <br />
      {select}
    </div>
  );
};

export default DropDownMap;
