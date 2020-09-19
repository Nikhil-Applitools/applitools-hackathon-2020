const Header = require('./components/Header');

class ProductDetail {
    constructor (id) {
        this.url = 'gridHackathonProductDetailsV1.html?id=' + id;
    }

    load () {
        browser.url(this.url);
    }

    get header () { return new Header(); }

    get $name () { return $('#shoe_name'); }
    get $image () { return $('#shoe_img'); }
    get $sku () { return $('.prod_info').$('//*[starts-with(text(),"SKU: ")]'); }
    get $description () { return $('.prod_info p'); }
    get $addToCartButton () { return $('.btn_add_to_cart'); }

    getProductDetails () {
        const skuRegex = /SKU: [\w-]+[\n\r]/;
        const strippedText = this.$description.getText().replace(skuRegex, '');

        return {
            name: this.$name.getText(),
            sku: this.$sku.getText(),
            description: strippedText
        }
    }
}

module.exports = ProductDetail;