import React from 'react';

export interface FormLabelProps {
  label?: string;
  suffix?: string;
}

export default class FormLabel extends React.PureComponent<FormLabelProps> {
  render() {
    const { label, suffix, children } = this.props;

    return (
      <>
        {label && <span>{label.endsWith(':') ? label : label + ':'}</span>}
        {children}
        {suffix && <span>{suffix}</span>}
      </>
    );
  }
}
