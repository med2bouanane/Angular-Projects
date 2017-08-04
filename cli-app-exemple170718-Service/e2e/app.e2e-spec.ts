import { CliAppExemple170718ServicePage } from './app.po';

describe('cli-app-exemple170718-service App', () => {
  let page: CliAppExemple170718ServicePage;

  beforeEach(() => {
    page = new CliAppExemple170718ServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
