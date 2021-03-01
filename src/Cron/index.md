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
    const [value, SetValue] = useState({
        cron: '00 43 10 ? * MON',
        cycle: 'M',
    });
    return (
        <Cron
            value={value}
            onChange={value => {
                console.log(value);
                SetValue(value);
            }}
            displayInput={true}
        />
    );
};
```
