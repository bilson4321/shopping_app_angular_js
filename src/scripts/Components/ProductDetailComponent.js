var productDetailComponent={
    controller:'ProductDetailController',
    template:`
        <div class="container">
            <h1>Detail</h1>
            <div style="display:inline-block;width:400px;vertical-align:top">
                <img src={{product.photo}} class="image"></img>
            </div>
            <div style="display:inline-block;width:400px;">
                <h4>Name: {{product.name}}</h4>
                <h4>Price: {{product.price}}</h4>
                <h3>Description</h3>
                <h4>{{product.description}}</h4>
            </div>
        </div>
    `
}
export default productDetailComponent;