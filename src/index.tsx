import { createRoot } from 'react-dom/client';
import Example3 from 'examples/example-3';

import 'assets/style.css';
import Example2 from 'examples/example-2';

const root = createRoot(document.getElementById('root')!);

root.render(
  <>
    <Example2 />
    <Example3 />
  </>
);
