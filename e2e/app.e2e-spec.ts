import { Angular2tutorial2Page } from './app.po';

describe('angular2tutorial2 App', function() {
  let page: Angular2tutorial2Page;

  beforeEach(() => {
    page = new Angular2tutorial2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
