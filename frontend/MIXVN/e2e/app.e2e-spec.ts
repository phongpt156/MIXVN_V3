import { MIXVNPage } from './app.po';

describe('mixvn App', () => {
  let page: MIXVNPage;

  beforeEach(() => {
    page = new MIXVNPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
