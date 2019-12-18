import { getByText, render } from 'react-testing-library';
import HistoryBox from '../components/HistoryBox';

test('Has text element', () => {
    const { asFragment } = render(<span>Test</span>);
    const fragmentElement = asFragment().firstChild;
    const span = getByText(fragmentElement, 'Test');
    console.log(span)
    expect(span).not.toBe(null);
    expect(span).toMatchSnapshot();
  });
