import {HomePage} from "../page/home.view";

describe('Test cases for Home page', () => {
  it('Make sure different elements on "Home" page are working', () => {
    HomePage.learnMore().click();
    cy.url().should('eq', 'https://strypes.eu/about-strypes/') // => true
  });

  it('Open "Digital transformation" service from home page ', () => {
    HomePage.digitalTransformationBtn().click();
    cy.url().should('eq', 'https://strypes.eu/digital-transformation/') // => true
  });

  it('Click on "Nearsurance work model" link in "Our Services" section', () => {
    HomePage.nearsuranceLink().click();
    cy.url().should('eq', 'https://strypes.eu/nearsurance/')
  });

  it('Open article "Strypes at the Robotics Strategy Forum 2021" from home page', () => {
    HomePage.articleLink().click();
    cy.url().should('eq', 'https://strypes.eu/blog/strypes-at-the-robotics-strategy-forum-2021/')
  });

  it('Click on "Get in Touch" button from "Do you want to learn more?" section', () => {
    HomePage.getInTouchBtn().click();
    cy.url().should('include', 'https://strypes.eu/contact/')
  });
});