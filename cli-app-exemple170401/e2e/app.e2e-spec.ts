import { CliAppExemple170401Page } from './app.po';

describe('cli-app-exemple170401 App', () => {
  let page: CliAppExemple170401Page;

  beforeEach(() => {
    page = new CliAppExemple170401Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
