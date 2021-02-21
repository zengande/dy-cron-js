import React from 'react';
import styles from './index.less';
import { Radio, Form, RadioChangeEvent, Select } from 'antd';
import RangeInput from '@/RangeInput';
import HourlyInput from '@/HourlyInput';

const cycles = [
  { label: '时', value: 'H' },
  { label: '日', value: 'D' },
  { label: '周', value: 'W' },
  { label: '月', value: 'M' },
  { label: '季度', value: 'Q' },
];

const weeks = [
  { label: '星期天', value: 1 },
  { label: '星期一', value: 2 },
  { label: '星期二', value: 3 },
  { label: '星期三', value: 4 },
  { label: '星期四', value: 5 },
  { label: '星期五', value: 6 },
  { label: '星期六', value: 7 },
];

export interface CronProps {}

export interface CronState {
  cycle: string;
}

export default class Cron extends React.PureComponent<CronProps, CronState> {
  constructor(props: CronProps) {
    super(props);
    this.state = {
      cycle: cycles[0].value,
    };
  }

  reanderCycleContent(cycle: string) {
    if (cycle === 'H') {
      return <HourlyInput value={{ hours: 10 }} />;
    } else if (cycle === 'D') {
      return (
        <div>
          <Form.Item label="具体时间">
            <RangeInput min={1} max={23} />
            <span>时</span>
            <RangeInput min={0} max={59} />
            <span>分</span>
          </Form.Item>
        </div>
      );
    } else if (cycle === 'W') {
      return (
        <div>
          <Form.Item label="星期几">
            <Select>
              {weeks.map(week => (
                <Select.Option key={week.value} value={week.value}>
                  {week.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="具体时间">
            <RangeInput min={1} max={23} />
            <span>时</span>
            <RangeInput min={0} max={59} />
            <span>分</span>
          </Form.Item>
        </div>
      );
    } else if (cycle === 'M') {
      return (
        <div>
          <Form.Item label="选择日期">
            <Select>
              {new Array(31).fill(0).map((_, index) => (
                <Select.Option key={index + 1} value={index + 1}>
                  {index + 1}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="具体时间">
            <RangeInput min={1} max={23} />
            <span>时</span>
            <RangeInput min={0} max={59} />
            <span>分</span>
          </Form.Item>
        </div>
      );
    } else if (cycle === 'Q') {
      return (
        <div>
          <Form.Item label="选择月份">
            <Select>
              <Select.Option value={1}>第一个月</Select.Option>
              <Select.Option value={2}>第二个月</Select.Option>
              <Select.Option value={3}>第三个月</Select.Option>
              <Select.Option value={4}>第四个月</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="选择日期">
            <Select>
              {new Array(31).fill(0).map((_, index) => (
                <Select.Option key={index + 1} value={index + 1}>
                  {index + 1}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="具体时间">
            <RangeInput min={1} max={23} />
            <span>时</span>
            <RangeInput min={0} max={59} />
            <span>分</span>
          </Form.Item>
        </div>
      );
    }
  }

  onCycleChanged(e: RadioChangeEvent) {
    this.setState({ cycle: e.target.value });
  }

  render() {
    const { cycle } = this.state;

    return (
      <div className={styles.container}>
        <Radio.Group value={cycle} onChange={this.onCycleChanged.bind(this)}>
          {cycles.map(cycle => (
            <Radio key={cycle.value} value={cycle.value}>
              {cycle.label}
            </Radio>
          ))}
        </Radio.Group>
        {this.reanderCycleContent(cycle)}
      </div>
    );
  }
}
