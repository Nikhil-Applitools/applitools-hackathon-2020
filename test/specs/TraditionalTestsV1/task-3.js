const { viewports } = require('../../../utils/constants.js');
const home = require('../../pageObjects/home.js');
const ProductDetail = require('../../pageObjects/ProductDetail.js');
const productDetail = new ProductDetail();

function runAssertions () {
    const details = productDetail.getProductDetails();
    expect(details.name).toEqual('Appli Air x Night');
    expect(details.sku).toEqual('SKU: MTKRY-001');
    expect(details.description.startsWith('These boots are comfortable')).toEqual(true);

    expect(productDetail.$image).toBeVisible();
    expect(productDetail.$addToCartButton).toBeVisible();
}

describe('Product Detail Page', function () {
    before(function () {
        home.load();

        // Filter for “Black” shoes.
        home.filters['colors'].toggleOption('Black');

        home.$filterSearch.click();

        // click the first result
        home.$$visibleProducts[0].$('a').click();
    });

    describe('Laptop View', function () {
        before(function() {
            const { width, height } = viewports.laptop;
            browser.setWindowSize(width, height);
        });

        it('should show the right product', function () {
            runAssertions();
        });
    });

    describe('Tablet View', function () {
        before(function() {
            const { width, height } = viewports.laptop;
            browser.setWindowSize(width, height);
        });

        it('should show the right product', function () {
            runAssertions();
        });
    });

    describe('Mobile View', function () {
        before(function() {
            const { width, height } = viewports.mobile;
            browser.setWindowSize(width, height);
        });

        it('should show the right product', function () {
            runAssertions();
        });
    });
});
