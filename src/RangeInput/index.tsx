import React from 'react';
import { InputNumber } from 'antd';

export interface RangeInputProps {
  min: number;
  max: number;
  value?: number;
  onChange?: (value?: null | string | number) => void;
}

export default class RangeInput extends React.PureComponent<RangeInputProps> {
  formatter(value: string | number | undefined): string {
    if (value) {
      if (value.toString().startsWith('0')) {
        return value.toString().substr(1, value.toString().length - 1);
      }
      if (value < 10 && value >= 0) {
        return '0' + value;
      }
    }
    return value?.toString() || '00';
  }

  render() {
    const { onChange } = this.props;
    return <InputNumber {...this.props} formatter={this.formatter} />;
  }
}
