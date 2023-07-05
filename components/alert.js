import styles from './alert.module.css';
import { clsx } from 'clsx';
import { useState, useEffect } from "react";
export default function Alert({ children, type }) {
  const [successState, setSuccessState] = useState('success');

  const toggleSuccessState = () => {
    setSuccessState(successState == 'success' ? 'error' : 'success')
  }

  return (
    <div
      className={clsx({
        [styles.success]: successState === 'success',
        [styles.error]: successState === 'error',
      })}
      onClick={(event) => toggleSuccessState()}>
      {children}
    </div>
  );
}
