// const products =[
//     {
//         title: 'A pillow', 
//         imageUrl: 'https://www.premierinnathome.com/wp-content/uploads/2021/02/WH45718_PI_Bed_03_2112305_RET-scaled.jpg', 
//         price: 19.99, 
//         description : 'A sort Pillow!'},
//         {
//             title: 'A carpet', 
//             imageUrl: 'https://m.media-amazon.com/images/I/61i5XSPkngL._SL1080_.jpg', 
//             price: 89.99, 
//             description : 'A carpet which you might like- or not!'}
// ];

class Product {
    title = 'DEFAUTLT';
    imageUrl;
    description;
    price;

    constructor(title, image, desc, price){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ProductItem {
    constructor(product){
        this.product = product;
    }
addToCart(){
console.log('Adding product to cart');
console.log(this.product);
}

    render(){
        const prodEl =document.createElement('li');
        prodEl.className ='product-item';
        prodEl.innerHTML=`
            <div>
                <image src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            
            </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click',this.addToCart.bind(this));
        return prodEl;
    }
}

class ProductList {
    products = [
        
            new Product('A pillow','https://www.premierinnathome.com/wp-content/uploads/2021/02/WH45718_PI_Bed_03_2112305_RET-scaled.jpg','A sort Pillow!',19.99),
            new Product ('A carpet','https://m.media-amazon.com/images/I/61i5XSPkngL._SL1080_.jpg','A carpet which you might like- or not!',89.99),
        
    ];

    constructor(){}

    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className ='product-list';
        for (const prod of this.products){
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}
const productList = new ProductList();
productList.render();
