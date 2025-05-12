// src/components/atoms/InputAtom.jsx
import React from 'react';
import TextField from '@mui/material/TextField';
import styles from '../../styles/atoms/InputAtom.module.scss';

const InputAtom = ({ label, type, ...rest }) => (
  <div className={styles.inputContainer}>
    <TextField label={label} type={type} fullWidth {...rest} />
  </div>
);

export default InputAtom;
