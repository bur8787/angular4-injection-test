import { Angular4InjectionTestPage } from './app.po';

describe('angular4-injection-test App', () => {
  let page: Angular4InjectionTestPage;

  beforeEach(() => {
    page = new Angular4InjectionTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
