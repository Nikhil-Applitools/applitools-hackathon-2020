const { viewports } = require('../../../utils/constants.js');
const home = require('../../pageObjects/home.js');

describe('Filter Functionality', function () {
    before(function () {
        home.load();
    });

    describe('Laptop View', function () {
        before(function() {
            const { width, height } = viewports.laptop;
            browser.setWindowSize(width, height);
        });

        it('should allow us to filter by color', function () {
            // Filter for “Black” shoes.
            home.filters['colors'].toggleOption('Black');

            home.$filterSearch.click();

            // Ensure that there are 2 black shoes
            // expect(home.$productGrid).toHaveChildren({ eq: 2 });
            expect(home.$$visibleProducts).toBeElementsArrayOfSize(2);

            // everything works and looks good
        });
    });

    describe('Tablet View', function () {
        before(function() {
            const { width, height } = viewports.laptop;
            browser.setWindowSize(width, height);
        });

        it('should allow us to filter by color', function () {
            home.$filterToggle.click();
            browser.pause(500);

            // Filter for “Black” shoes.
            home.filters['colors'].toggleOption('Black');

            home.$filterSearch.click();

            // Ensure that there are 2 black shoes
            // expect(home.$productGrid).toHaveChildren({ eq: 2 });
            expect(home.$$visibleProducts).toBeElementsArrayOfSize(2);

            // everything works and looks good
        });
    });
});
