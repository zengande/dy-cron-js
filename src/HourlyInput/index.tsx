import FormLabel from '@/FormLabel';
import RangeInput from '@/RangeInput';
import React from 'react';

interface HourlyValue {
  hours?: number;
  startTime?: moment.Moment;
  endTime?: moment.Moment;
}

export interface HourlyInputProps {
  value?: HourlyValue;
  onChange?: (value: HourlyValue) => void;
}

interface HourlyInputState {
  hours?: number;
  startHours?: number;
  startMinutes?: number;
  endHours?: number;
}

export default class HourlyInput extends React.PureComponent<
  HourlyInputProps,
  HourlyInputState
> {
  constructor(props: HourlyInputProps) {
    super(props);
    this.state = {
      hours: props.value?.hours || 0,
      startHours: props.value?.startTime?.hours(),
      startMinutes: props.value?.startTime?.minutes(),
      endHours: props.value?.endTime?.minutes(),
    };
  }

  triggerChange(value: HourlyInputState) {}

  onChange(key: string, value?: string | number | null) {
    if (value && value != null) {
      this.setState({ [key]: value });
    }

    this.triggerChange({ [key]: value });
  }

  render() {
    const { hours, startHours, startMinutes, endHours } = this.state;

    return (
      <div>
        <div>
          <FormLabel label="间隔小时" suffix="时">
            <RangeInput
              min={1}
              max={23}
              value={hours}
              onChange={this.onChange.bind(this, 'hours')}
            />
          </FormLabel>
        </div>
        <div>
          <FormLabel label="起始时间" suffix="时">
            <RangeInput
              min={0}
              max={23}
              value={startHours}
              onChange={this.onChange.bind(this, 'startHours')}
            />
          </FormLabel>
          <FormLabel suffix="分">
            <RangeInput
              min={0}
              max={59}
              value={startMinutes}
              onChange={this.onChange.bind(this, 'startMinutes')}
            />
          </FormLabel>
        </div>
        <div>
          <FormLabel label="结束时间" suffix="时59分">
            <RangeInput
              min={0}
              max={23}
              value={endHours}
              onChange={this.onChange.bind(this, 'endHours')}
            />
          </FormLabel>
        </div>
      </div>
    );
  }
}
