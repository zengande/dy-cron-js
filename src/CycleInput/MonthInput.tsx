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
    const { dayOfMonth = 1, hours = 0, minutes = 0 } = value || {};

    const triggerChange = (value: MonthInputValue) => {
        onChange && onChange({ ...props.value, ...value });
    };

    const onDayOfMonthChange = (value: number) => {
        triggerChange({ dayOfMonth: value });
    };

    const onHoursChange = (value: number) => {
        triggerChange({ hours: value });
    };

    const onMinutesChange = (value: number) => {
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
