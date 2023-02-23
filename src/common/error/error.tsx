import React, { useContext } from 'react';
import { FormContext } from '../context/formContext';
import { ContainerError } from './error.style';

export default function Error() {
    const { messaggeError } = useContext(FormContext);
  return (
    <ContainerError>
        {messaggeError}
    </ContainerError>
  );
}