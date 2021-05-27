import FormLabel from '@/FormLabel';
import HourSelect from '@/Select/HourSelect';
import MinuteSelect from '@/Select/MinuteSelect';
import NumberSelect from '@/Select/NumberSelect';
import { Select } from 'antd';
import React, { useState } from 'react';

interface QuarterInputValue {
    dayOfMonth?: number;
    hours?: number;
    minutes?: number;
    month?: string;
}

interface QuarterInputProps {
    value?: QuarterInputValue;
    onChange?: (value: any) => void;
}

export default (props: QuarterInputProps) => {
    const { value, onChange } = props;
    const { dayOfMonth = 1, hours = 0, minutes = 0, month = '3,6,9,12' } =
        value || {};

    const triggerChange = (value: QuarterInputValue) => {
        onChange &&
            onChange({
                ...props.value,
                ...value,
            });
    };

    const onMonthChange = (value: string) => {
        triggerChange({ month: value });
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
            <FormLabel label="选择月份">
                <Select
                    style={{ width: '100%' }}
                    value={month}
                    onChange={onMonthChange}
                >
                    <Select.Option value="3,6,9,12">第一个月</Select.Option>
                    <Select.Option value="4,7,10,1">第二个月</Select.Option>
                    <Select.Option value="5,8,11,2">第三个月</Select.Option>
                </Select>
            </FormLabel>
            <FormLabel label="选择日期">
                <NumberSelect
                    value={dayOfMonth}
                    length={31}
                    start={1}
                    format="0"
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
