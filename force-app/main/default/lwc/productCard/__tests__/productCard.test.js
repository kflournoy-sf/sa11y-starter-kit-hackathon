import { createElement } from 'lwc';
import ProductCard from 'c/ProductCard';

describe('c-product-list-item', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    // example test so that Jest doesn't complain
    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
    });

    // ADD NEW SA11Y TEST HERE FOR PRODUCTCARD
});
