import FormLabel from '@/FormLabel';
import HourSelect from '@/Select/HourSelect';
import MinuteSelect from '@/Select/MinuteSelect';
import NumberSelect from '@/Select/NumberSelect';
import { Select } from 'antd';
import React from 'react';

interface QuarterInputProps {
  value?: any;
  onChange?: (value: any) => void;
}

export default class QuarterInput extends React.PureComponent<
  QuarterInputProps
> {
  render() {
    return (
      <div>
        <FormLabel label="选择月份">
          <Select style={{ width: '100%' }}>
            <Select.Option value={1}>第一个月</Select.Option>
            <Select.Option value={2}>第二个月</Select.Option>
            <Select.Option value={3}>第三个月</Select.Option>
            <Select.Option value={4}>第四个月</Select.Option>
          </Select>
        </FormLabel>
        <FormLabel label="选择日期">
          <NumberSelect length={31} start={1} format="0" />
        </FormLabel>
        <FormLabel label="具体时间" suffix="时" inline={true}>
          <HourSelect />
        </FormLabel>
        <FormLabel suffix="分" inline={true}>
          <MinuteSelect />
        </FormLabel>
      </div>
    );
  }
}
