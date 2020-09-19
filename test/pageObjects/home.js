const Header = require('./components/Header');
const FilterMenu = require('./components/FilterMenu');

class Home {
    constructor () {
        this.url = `./gridHackathonV${global.appVersion}.html`;
        this.filterNames = [
            'type',
            'colors',
            'brand',
            'price'
        ];
    }

    load () {
        browser.url(this.url);
    }

    get header () { return new Header(); }

    get filters () {
        const filterComponents = {};

        this.filterNames.forEach(name => {
            filterComponents[name] = new FilterMenu(name);
        })

        return filterComponents;
    }

    get $filterSearch () { return $('button=Filter'); }

    get $filterToggle () { return $('=Filters'); }
    get $productGrid () { return $('#product_grid'); }
    get $$visibleProducts () { return this.$productGrid.$$('.grid_item'); }
}

module.exports = new Home();