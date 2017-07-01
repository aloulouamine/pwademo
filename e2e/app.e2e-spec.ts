import { PwademoPage } from './app.po';

describe('pwademo App', () => {
  let page: PwademoPage;

  beforeEach(() => {
    page = new PwademoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
