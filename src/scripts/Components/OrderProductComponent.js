var orderProductComponent={
    controller:'OrderProductController',
    template:`
        <div class="container">
            <h3 class="my-4">Order Now</h3>
            <div class="row">
                <div class="col-md-6">
                    <img src="{{product.photo}}" width="400px">
                    <p>{{product.name}}</p>
                    <p>Price:{{product.price}}</p>
                    <p>Shipping Charge: 100</p>
                    <p>TotalPrice:{{product.price+100}}</p>
                </div>
                <div class="col-md-6">
                    <button ng-click="order()" class="btn btn-primary">Confirm</button>
                </div>
            </div>
        </div>
    `
}
export default orderProductComponent;