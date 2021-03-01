import React from 'react';
import { Radio, RadioChangeEvent, Input } from 'antd';
import HourInput from '@/CycleInput/HourInput';
import DayInput from '@/CycleInput/DayInput';
import WeekInput from '@/CycleInput/WeekInput';
import MonthInput from '@/CycleInput/MonthInput';
import QuarterInput from '@/CycleInput/QuarterInput';
import util from '@/util';

const cycles = [
    { label: '时', value: 'H' },
    { label: '日', value: 'D' },
    { label: '周', value: 'W' },
    { label: '月', value: 'M' },
    { label: '季度', value: 'Q' },
];

// interface CronValue {
//   /**
//    * cron 表达式
//    */
//   cron?: string;
//   /**
//    * 周期
//    */
//   cycle?: string;
// }

export interface CronProps {
    /**
     * class
     */
    className?: string;
    /**
     * 是否显示输入框
     */
    displayInput?: boolean;
    /**
     * 值
     */
    value?: {
        cron?: string;
        cycle?: string;
    };
    /**
     * 当值改变时
     */
    onChange?: (value: { cron: string; cycle: string }) => void;
}

export interface CronState {
    cycle: string;
    cron?: string;
}

export default class Cron extends React.PureComponent<CronProps, CronState> {
    constructor(props: CronProps) {
        super(props);

        var cron =
            props.value?.cron || util.generateRandomCron(cycles[0].value);

        const cronParserResult = util.cronParser(cron);
        this.state = {
            cycle: cronParserResult?.cycle || cycles[0].value,
            cron: cron,
        };
        if (!props.value?.cron) {
            this.triggerChange(
                cron,
                cronParserResult?.cycle || cycles[0].value,
            );
        }
    }

    renderCycleContent(cycle: string) {
        const { cron } = this.state;
        const cronParserResult = util.cronParser(cron);
        if (cycle === 'H') {
            return (
                <HourInput
                    onChange={this.onValueChange.bind(this)}
                    value={cronParserResult}
                />
            );
        } else if (cycle === 'D') {
            return (
                <DayInput
                    onChange={this.onValueChange.bind(this)}
                    value={cronParserResult}
                />
            );
        } else if (cycle === 'W') {
            return (
                <WeekInput
                    onChange={this.onValueChange.bind(this)}
                    value={cronParserResult}
                />
            );
        } else if (cycle === 'M') {
            return (
                <MonthInput
                    onChange={this.onValueChange.bind(this)}
                    value={cronParserResult}
                />
            );
        } else if (cycle === 'Q') {
            return (
                <QuarterInput
                    onChange={this.onValueChange.bind(this)}
                    value={cronParserResult}
                />
            );
        }
    }

    onValueChange(value: any) {
        const cron = util.generateCron(value);
        console.log('cron expression generated: ', cron);
        this.setState({ cron });

        this.triggerChange(cron, this.state.cycle);
    }

    onCycleChanged(e: RadioChangeEvent) {
        // change
        const cycle = e.target.value;
        const cron = util.generateRandomCron(cycle);
        this.setState({ cycle, cron });

        this.triggerChange(cron, cycle);
    }

    triggerChange(cron: string, cycle: string) {
        const { onChange } = this.props;
        onChange && onChange({ cron, cycle });
    }

    render() {
        let { cycle, cron } = this.state;
        const { displayInput, className } = this.props;
        return (
            <div className={className}>
                {displayInput && (
                    <Input value={cron} style={{ marginBottom: '10px' }} />
                )}
                <Radio.Group
                    style={{ marginBottom: '8px' }}
                    value={cycle}
                    onChange={this.onCycleChanged.bind(this)}
                >
                    {cycles.map(cycle => (
                        <Radio key={cycle.value} value={cycle.value}>
                            {cycle.label}
                        </Radio>
                    ))}
                </Radio.Group>
                {this.renderCycleContent(cycle)}
            </div>
        );
    }
}
