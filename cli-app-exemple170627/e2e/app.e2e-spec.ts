import { CliAppExemple170627Page } from './app.po';

describe('cli-app-exemple170627 App', () => {
  let page: CliAppExemple170627Page;

  beforeEach(() => {
    page = new CliAppExemple170627Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
