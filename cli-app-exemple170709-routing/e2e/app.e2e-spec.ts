import { CliAppExemple170709RoutingPage } from './app.po';

describe('cli-app-exemple170709-routing App', () => {
  let page: CliAppExemple170709RoutingPage;

  beforeEach(() => {
    page = new CliAppExemple170709RoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
