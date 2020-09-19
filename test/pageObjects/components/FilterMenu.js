class FilterMenu {
    constructor (name, options) {
        this.name = name;
    }

    get $origin () { return $('#sidebar_filters').$(`h4=${this.name}`); }
    get $container () { return this.$origin.$('..'); }
    get $$filterOptions () { return this.$container.$$('li'); }

    toggleOption (optionName) {
        const $option = this.$$filterOptions.find($el => {
            return $el.getText().includes(optionName);
        });

        if (!$option) {
            const optionNames = this.$$filterOptions.map($el => $el.getText().trim())
            throw new Error(`Option of '${optionName}' not found! Available options: ${optionNames}`)
        }

        $option.$('input[type="checkbox"]').click();
    }
}

module.exports = FilterMenu;