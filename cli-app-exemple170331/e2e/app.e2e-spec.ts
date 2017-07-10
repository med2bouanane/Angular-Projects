import { CliAppExemple170331Page } from './app.po';

describe('cli-app-exemple170331 App', () => {
  let page: CliAppExemple170331Page;

  beforeEach(() => {
    page = new CliAppExemple170331Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
