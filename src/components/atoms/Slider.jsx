import React from 'react';
import { Slider as MuiSlider } from '@mui/material';

const SliderInput = ({ value, onChange, min = 0, max = 500 }) => (
  <MuiSlider
    value={value}
    onChange={onChange}
    min={min}
    max={max}
    valueLabelDisplay="auto"
    valueLabelFormat={(val) => `$${val}`}
  />
);

export default SliderInput;
