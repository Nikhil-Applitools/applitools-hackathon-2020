const { viewports } = require('../../../utils/constants.js');
const home = require('../../pageObjects/home.js');

describe('Cross-device elements', function () {
    before(function () {
        home.load();
    });

    describe('Laptop View', function () {
        before(function() {
            const { width, height } = viewports.laptop;
            browser.setWindowSize(width, height);
        });

        it('should show the correct elements', function () {
            expect(home.header.$searchBox).toBeDisplayed();
            expect(home.header.$mainMenu).toBeDisplayedInViewport();
        });
    });

    describe('Tablet View', function () {
        before(function() {
            const { width, height } = viewports.tablet;
            browser.setWindowSize(width, height);
        });

        it('should show the correct elements', function () {
            expect(home.header.$searchBox).toBeDisplayed();
            expect(home.header.$mainMenu).not.toBeDisplayedInViewport();
        });
    });

    describe('Mobile View', function () {
        before(function() {
            const { width, height } = viewports.mobile;
            browser.setWindowSize(width, height);
        });

        it('should show the correct elements', function () {
            expect(home.header.$searchBox).not.toBeDisplayed();
            expect(home.header.$mainMenu).not.toBeDisplayedInViewport();
        });
    });
})