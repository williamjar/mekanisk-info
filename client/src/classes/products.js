export class Products {


    static getProducts(){

        const product_1 = {
            name:'Fjell',
            price:100,
            layout: 0.60,
            image: "https://i.imgur.com/sWiD32b.jpg"
        }

        const product_2 = {
            name:'Klippe',
            price:100,
            layout: 0.60,
            image: "https://i.imgur.com/sWiD32b.jpg"
        }

        const product_3 = {
            name:'Type X',
            price:100,
            layout: 0.60,
            image: "https://i.imgur.com/sWiD32b.jpg"
        }

        const product_4 = {
            name:'Tind',
            price:100,
            layout: 0.60,
            image: "https://i.imgur.com/sWiD32b.jpg"
        }

        const product_5 = {
            name:'Tind',
            price:100,
            layout: 0.60,
            image: "https://i.imgur.com/sWiD32b.jpg"
        }

        let products = [product_1,product_2,product_3,product_4, product_5];
        return products;
    }

}

export default Products;