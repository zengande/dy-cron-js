import { Select } from 'antd';
import React from 'react';
import numeral from 'numeral';

export interface NumberSelectProps {
  length: number;
  start?: number;
  value?: number;
  onChange?: (value: number) => void;
  format?: string;
}

export default (props: NumberSelectProps) => {
  const { value, length, start = 0, onChange, format = '00' } = props;

  return (
    <Select value={value} onChange={onChange} style={{ width: '100%' }}>
      {new Array(length).fill(0).map((_, index) => (
        <Select.Option key={index} value={index + start}>
          {numeral(index + start).format(format)}
        </Select.Option>
      ))}
    </Select>
  );
};
