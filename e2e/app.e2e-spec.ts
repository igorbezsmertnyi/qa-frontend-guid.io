import { QaFronendTutorialPage } from './app.po';

describe('qa-fronend-tutorial App', () => {
  let page: QaFronendTutorialPage;

  beforeEach(() => {
    page = new QaFronendTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
