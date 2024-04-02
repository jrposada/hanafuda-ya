import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';
import App from './app.js';

describe('Given <App />', () => {
    afterEach(cleanup);

    it('then renders component', () => {
        render(<App />);
    });
});
