export class HomePage {

    static learnMore() {
        return cy.get('a[href=\'/about-strypes/\']').contains('Learn more');
    }

    static digitalTransformationBtn() {
        return cy.get('.elementor-heading-title > a[href=\'/digital-transformation/\']')
    }

    static nearsuranceLink() {
        return cy.get('a[href=\'/nearsurance/\']').contains('Nearsurance work model');
    }

    static articleLink(){
        return cy.get('a[href=\'https://strypes.eu/blog/strypes-at-the-robotics-strategy-forum-2021/\']').contains('Strypes at the Robotics Strategy Forum 2021');
    }

    static getInTouchBtn() {
        return cy.get('.cta_button').contains('Get in touch');
    }
}