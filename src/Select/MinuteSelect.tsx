import React from 'react';
import NumberSelect from './NumberSelect';

export default (props: {
  value?: number;
  onChange?: (value: number) => void;
}) => {
  return <NumberSelect length={60} {...props} />;
};
