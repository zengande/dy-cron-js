import FormLabel from '@/FormLabel';
import HourSelect from '@/Select/HourSelect';
import MinuteSelect from '@/Select/MinuteSelect';
import NumberSelect from '@/Select/NumberSelect';
import React, { useState } from 'react';

interface MonthInputValue {
  dayOfMonth?: number;
  hours?: number;
  minutes?: number;
}

interface MonthInputProps {
  value?: MonthInputValue;
  onChange?: (value: MonthInputValue) => void;
}

export default (props: MonthInputProps) => {
  const { value, onChange } = props;
  const [dayOfMonth, setDayOfMonth] = useState(value?.dayOfMonth || 1);
  const [hours, setHours] = useState(value?.hours || 0);
  const [minutes, setMinutes] = useState(value?.minutes || 0);

  const triggerChange = (value: MonthInputValue) => {
    onChange &&
      onChange({ dayOfMonth, hours, minutes, ...props.value, ...value });
  };

  const onDayOfMonthChange = (value: number) => {
    setDayOfMonth(value);
    triggerChange({ dayOfMonth: value });
  };

  const onHoursChange = (value: number) => {
    setHours(value);
    triggerChange({ hours: value });
  };

  const onMinutesChange = (value: number) => {
    setMinutes(value);
    triggerChange({ minutes: value });
  };

  return (
    <div>
      <FormLabel label="选择日期">
        <NumberSelect
          value={dayOfMonth}
          length={31}
          start={1}
          format={'0'}
          onChange={onDayOfMonthChange}
        />
      </FormLabel>
      <FormLabel label="具体时间" suffix="时" inline={true}>
        <HourSelect value={hours} onChange={onHoursChange} />
      </FormLabel>
      <FormLabel suffix="分" inline={true}>
        <MinuteSelect value={minutes} onChange={onMinutesChange} />
      </FormLabel>
    </div>
  );
};
