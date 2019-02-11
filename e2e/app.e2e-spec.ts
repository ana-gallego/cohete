import { CohetePage } from './app.po';

describe('cohete App', function() {
  let page: CohetePage;

  beforeEach(() => {
    page = new CohetePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
