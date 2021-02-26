---
nav:
  title: Components
  path: /components
---

## Cron

基本用法

```tsx
import React, { useState } from 'react';
import { Cron } from 'dy-cron-js';

export default () => {
  const [cron, setCron] = useState(undefined);
  return (
    <Cron
      value={cron}
      onChange={value => {
        console.log(value);
        setCron(value.cron);
      }}
    />
  );
};
```

显示输入框:

```tsx
import React, { useState } from 'react';
import { Cron } from 'dy-cron-js';

export default () => {
  const [cron, setCron] = useState('00 43 10 ? * MON');
  return (
    <Cron
      value={cron}
      onChange={value => {
        console.log(value);
        setCron(value.cron);
      }}
      displayInput={true}
    />
  );
};
```
