import {AppPage} from './app.po';
import {browser, by, element} from 'protractor';

describe('angular-boilerplate App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('check title and welcome text', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('AngularBoilerplate');
  });

  it('check welcome text', () => {
    const el = element(by.tagName('h1'));
    expect(el.getText()).toContain('Angular - Boilerplate');
  });
});
