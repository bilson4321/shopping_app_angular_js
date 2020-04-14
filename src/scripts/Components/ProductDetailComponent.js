var productDetailComponent={
    controller:'ProductDetailController',
    template:`
        <div class="wrapper my-2">
        <div class="container">
            <div class="row">
                <div class="col-sm-8">
                    <img src={{product.photo}} class="img-fluid">
                </div>
                <div class="col-sm-4"> 
                    <h1>{{product.name}}</h1>
                    <p>Price: Rs.{{product.price}}</p>
                    <h3>Description</h3>
                    <p>{{product.description}}</p>
                    <button class="btn btn-primary" ui-sref=order({productID:product._id})>Buy</button>
                </div>
            </div>
        </div>
    </div>
    `
}
export default productDetailComponent;