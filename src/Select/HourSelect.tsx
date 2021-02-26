import { Select } from 'antd';
import React from 'react';
import NumberSelect from './NumberSelect';

export default (props: {
  value?: number;
  onChange?: (value: number) => void;
}) => <NumberSelect {...props} length={24} />;
