export class Products {


    static getProducts(){

        const product_1 = {
            name:'Fjell',
            price:100,
            layout: 0.60,
        }

        const product_2 = {
            name:'Klippe',
            price:100,
            layout: 0.60,
        }

        const product_3 = {
            name:'Type X',
            price:100,
            layout: 0.60,
        }

        const product_4 = {
            name:'Tind',
            price:100,
            layout: 0.60,
        }

        let products = [product_1,product_2,product_3,product_4];
        return products;
    }

}

export default Products;