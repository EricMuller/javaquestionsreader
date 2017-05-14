import { QuestionsreaderPage } from './app.po';

describe('questionsreader App', () => {
  let page: QuestionsreaderPage;

  beforeEach(() => {
    page = new QuestionsreaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
