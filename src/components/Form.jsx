import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', age: '', email: '' });
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(formData.name);
  };

  return (
    <form>
      <input
        type='text'
        placeholder='Enter your name'
        name='name'
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Enter your age'
        name='age'
        value={formData.age}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Enter your email'
        name='email'
        value={formData.email}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>
      {name}
    </form>
  );
};

export default Form;
