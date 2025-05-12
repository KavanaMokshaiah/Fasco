import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const CheckboxInput = ({ label, checked, onChange }) => (
  <FormControlLabel
    control={<Checkbox checked={checked} onChange={onChange} />}
    label={label}
  />
);

export default CheckboxInput;
