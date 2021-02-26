import React from 'react';

export interface FormLabelProps {
  label?: string;
  suffix?: string;
  inline?: boolean;
}

export default class FormLabel extends React.PureComponent<FormLabelProps> {
  render() {
    const { label, suffix, children, inline } = this.props;

    return (
      <div
        style={{
          marginBottom: '8px',
          display: inline ? 'inline-block' : 'block',
        }}
      >
        {label && (
          <span style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.85)' }}>
            {label.endsWith(':') ? label : label + ':'}
          </span>
        )}
        <div
          style={{
            display: 'inline-block',
            margin: '0px 8px',
            minWidth: '84px',
          }}
        >
          {children}
        </div>
        {suffix && (
          <span style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.85)' }}>
            {suffix}
          </span>
        )}
      </div>
    );
  }
}
