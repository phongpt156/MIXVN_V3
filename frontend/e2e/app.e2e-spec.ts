import { MIXVNPage } from './app.po';
import {} from 'jasmine';

describe('mixvn App', () => {
  let page: MIXVNPage;

  beforeEach(() => {
    page = new MIXVNPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
