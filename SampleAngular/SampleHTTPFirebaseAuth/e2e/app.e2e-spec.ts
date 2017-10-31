import { RequestTestPage } from './app.po';

describe('request-test App', () => {
  let page: RequestTestPage;

  beforeEach(() => {
    page = new RequestTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
