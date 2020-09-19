class Header {
    get $mainMenu () { return $('.main-menu'); }

    get $searchBox () { return $('.custom-search-input'); }
    get $searchBoxSubmit () { return this.$searchBox.$('button[type="submit"]'); }
}

module.exports = Header;