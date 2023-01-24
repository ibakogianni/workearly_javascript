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
}
console.log(new Product());
const productList = {
    products:[
        //new Product()
        {
            title: 'A pillow', 
            imageUrl: 'https://www.premierinnathome.com/wp-content/uploads/2021/02/WH45718_PI_Bed_03_2112305_RET-scaled.jpg', 
            price: 19.99, 
            description : 'A sort Pillow!'
        },
            {
                title: 'A carpet', 
                imageUrl: 'https://m.media-amazon.com/images/I/61i5XSPkngL._SL1080_.jpg', 
                price: 89.99, 
                description : 'A carpet which you might like- or not!'}
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className ='product-list';
        for (const prod of this.products){
            const prodEl =document.createElement('li');
            prodEl.className ='product-item';
            prodEl.innerHTML=`
                <div>
                    <image src="${prod.imageUrl}" alt="${prod.title}">
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};
productList.render();