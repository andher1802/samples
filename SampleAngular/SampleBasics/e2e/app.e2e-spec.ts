import { DirectoryAssingmentPage } from './app.po';

describe('directory-assingment App', () => {
  let page: DirectoryAssingmentPage;

  beforeEach(() => {
    page = new DirectoryAssingmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
