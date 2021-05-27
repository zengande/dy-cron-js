import FormLabel from '@/FormLabel';
import HourSelect from '@/Select/HourSelect';
import MinuteSelect from '@/Select/MinuteSelect';
import { Select } from 'antd';
import React, { useState } from 'react';

const weeks = [
    { label: '星期天', value: 'SUN' },
    { label: '星期一', value: 'MON' },
    { label: '星期二', value: 'TUE' },
    { label: '星期三', value: 'WED' },
    { label: '星期四', value: 'THU' },
    { label: '星期五', value: 'FRI' },
    { label: '星期六', value: 'SAT' },
];

interface WeekInputValue {
    dayOfWeek?: string;
    hours?: number;
    minutes?: number;
}

interface WeekInputProps {
    value?: WeekInputValue;
    onChange?: (value: WeekInputValue) => void;
}

export default (props: WeekInputProps) => {
    const { value, onChange } = props;
    const { dayOfWeek = 'SUN', hours = 0, minutes = 0 } = value || {};

    const triggerChange = (value: WeekInputValue) => {
        onChange && onChange({ ...props.value, ...value });
    };

    const onDayOfWeekChange = (value: number | string) => {
        triggerChange({ dayOfWeek: value.toString() });
    };

    const onHoursChange = (value: number) => {
        triggerChange({ hours: value });
    };

    const onMinutesChange = (value: number) => {
        triggerChange({ minutes: value });
    };
    return (
        <div>
            <FormLabel label="选择星期">
                <Select
                    style={{ width: '100%' }}
                    value={dayOfWeek}
                    onChange={onDayOfWeekChange}
                >
                    {weeks.map(week => (
                        <Select.Option key={week.value} value={week.value}>
                            {week.label}
                        </Select.Option>
                    ))}
                </Select>
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
