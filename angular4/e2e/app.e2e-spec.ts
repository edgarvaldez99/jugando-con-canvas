import { Prueba1Page } from './app.po';

describe('prueba1 App', () => {
  let page: Prueba1Page;

  beforeEach(() => {
    page = new Prueba1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
