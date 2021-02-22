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
  const [cron, setCron] = useState('00 12 11-23/01 * * ?');
  return <Cron value={cron} onChange={setCron} />;
};
```

显示输入框:

```tsx
import React from 'react';
import { Cron } from 'dy-cron-js';

export default () => <Cron value="00 43 10 ? * MON" displayInput={true} />;
```
