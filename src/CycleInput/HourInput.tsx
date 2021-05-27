import FormLabel from '@/FormLabel';
import HourSelect from '@/Select/HourSelect';
import MinuteSelect from '@/Select/MinuteSelect';
import NumberSelect from '@/Select/NumberSelect';
import React from 'react';

interface HourlyValue {
    intervalHours?: number;
    startHours?: number;
    startMinutes?: number;
    endHours?: number;
}

export interface HourInputProps {
    value?: HourlyValue;
    onChange?: (value: HourlyValue) => void;
}

interface HourInputState {
    intervalHours?: number;
    startHours?: number;
    startMinutes?: number;
    endHours?: number;
}

export default class HourInput extends React.PureComponent<
    HourInputProps,
    HourInputState
> {
    triggerChange(value: HourInputState) {
        const { onChange } = this.props;
        const newValue = {
            ...this.props.value,
            ...value,
        };
        console.log(newValue);
        onChange && onChange(newValue);
    }

    onValueChange(key: string, value?: string | number | null) {
        this.triggerChange({ [key]: value });
    }

    render() {
        const {
            intervalHours = 0,
            startHours = 0,
            startMinutes = 0,
            endHours = 0,
        } = this.props.value || {};

        return (
            <div>
                <FormLabel label="间隔小时" suffix="时">
                    <NumberSelect
                        length={23}
                        start={1}
                        value={intervalHours}
                        onChange={this.onValueChange.bind(
                            this,
                            'intervalHours',
                        )}
                    />
                </FormLabel>

                <FormLabel label="起始时间" suffix="时" inline={true}>
                    <HourSelect
                        value={startHours}
                        onChange={this.onValueChange.bind(this, 'startHours')}
                    />
                </FormLabel>
                <FormLabel suffix="分" inline={true}>
                    <MinuteSelect
                        value={startMinutes}
                        onChange={this.onValueChange.bind(this, 'startMinutes')}
                    />
                </FormLabel>

                <FormLabel label="结束时间" suffix="时 59 分">
                    <HourSelect
                        value={endHours}
                        onChange={this.onValueChange.bind(this, 'endHours')}
                    />
                </FormLabel>
            </div>
        );
    }
}
