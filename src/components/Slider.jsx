import { useState } from 'react';

const Slider = () => {
  const [slide, setSlide] = useState(50);

  return (
    <section className='slider'>
      <input
        type='range'
        min='1'
        max='300'
        value={slide}
        onChange={(e) => setSlide(e.target.value)}
      />
      {slide}
    </section>
  );
};

export default Slider;
