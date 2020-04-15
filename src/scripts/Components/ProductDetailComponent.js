var productDetailComponent={
    controller:'ProductDetailController',
    template:`
        <div class="wrapper my-2">
        <div class="container">
            <div class="row my-5">
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
            <div class="row my-5">
                <div class="col-sm-12">
                    <h3>Recomended Product</h3>
                    <div class="card-deck">
                        <div class="card" ng-repeat='p in relatedProducts'><card item='p'></card></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}
export default productDetailComponent;