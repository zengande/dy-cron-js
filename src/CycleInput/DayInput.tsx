import FormLabel from '@/FormLabel';
import HourSelect from '@/Select/HourSelect';
import MinuteSelect from '@/Select/MinuteSelect';
import React, { useState } from 'react';

interface DayInputValue {
  hours?: number;
  minutes?: number;
}

interface DayInputProps {
  value?: DayInputValue;
  onChange?: (value: DayInputValue) => void;
}

export default (props: DayInputProps) => {
  const { value, onChange } = props;
  const [hours, setHours] = useState(value?.hours || 0);
  const [minutes, setMinutes] = useState(value?.minutes || 0);

  const triggerChange = (value: DayInputValue) => {
    onChange && onChange({ hours, minutes, ...value, ...props.value });
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
      <FormLabel label="具体时间" suffix="时" inline={true}>
        <HourSelect value={hours} onChange={onHoursChange} />
      </FormLabel>
      <FormLabel suffix="分" inline={true}>
        <MinuteSelect value={minutes} onChange={onMinutesChange} />
      </FormLabel>
    </div>
  );
};
