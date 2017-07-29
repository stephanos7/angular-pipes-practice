import { AngularPipesPage } from './app.po';

describe('angular-pipes App', () => {
  let page: AngularPipesPage;

  beforeEach(() => {
    page = new AngularPipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
