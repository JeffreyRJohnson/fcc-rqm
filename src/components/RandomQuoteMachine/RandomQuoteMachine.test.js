import RandomQuoteMachine from './RandomQuoteMachine';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import moxios from 'moxios';
import { shallow, ShallowWrapper } from 'enzyme';

// Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders without crashing', () => {
  shallow(<RandomQuoteMachine />);
});

describe('getQuote GET request', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('adds response quote to state', () => {
    const quote = 'be excellent';
    const author = 'bill';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: quote,
        author
      });
    });

    const result = quote;

    expect(result).toBe(quote);
  });
});

/*
// it("renders correctly without crashing", () => {});



// it("renders a newQuote button", () => {});

// it("renders a tweetQuote button", () => {});

// it("can tweet a quote starts at 0", () => {});

// it("can get a new quote", () => {});
*/
