export class Products {


    static getProducts(){

        const product_1 = {
            name:'Fjell',
            price:100,
            layout: 60,
            image: "https://i.imgur.com/sWiD32b.jpg"
        }

        const product_2 = {
            name:'Klippe',
            price:100,
            layout: 60,
            image: "https://i.imgur.com/Vre6x0Z.jpg"
        }

        const product_3 = {
            name:'Type X',
            price:100,
            layout: 60,
            image: "https://cdn.shopify.com/s/files/1/1347/2157/products/89260896-B63F-4C66-A04F-0D3A7A73FE7E_1800x1800.jpg?v=1574967860"
        }

        const product_4 = {
            name:'Tind',
            price:100,
            layout: 60,
            image: "https://cdn.shopify.com/s/files/1/1347/2157/products/fjellpro2_newtop_2020-Jan-02_09-30-58AM-000_CustomizedView7057297033_png_1800x1800.png?v=1578955791"
        }

        const product_5 = {
            name:'Tind R1',
            price:100,
            layout: 60,
            image: "https://i.imgur.com/sWiD32b.jpg"
        }

        const product_6 = {
            name:'Tind R2',
            price:100,
            layout: 60,
            image: "https://i.imgur.com/sWiD32b.jpg"
        }

        const product_7 = {
            name:'Tind R4',
            price:100,
            layout: 60,
            image: "https://i.imgur.com/sWiD32b.jpg"
        }

        let products = [product_1,product_2,product_3,product_4, product_5, product_6, product_7];
        return products;
    }

}

export default Products;