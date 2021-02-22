import React from 'react';
import styles from './index.less';

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
        style={{ display: inline ? 'inline-block' : 'block' }}
        className={styles.container}
      >
        {label && (
          <span className={styles.label}>
            {label.endsWith(':') ? label : label + ':'}
          </span>
        )}
        <div className={styles.content}>{children}</div>
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>
    );
  }
}
