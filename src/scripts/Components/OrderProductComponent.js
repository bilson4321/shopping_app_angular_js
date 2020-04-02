var orderProductComponent={
    controller:'OrderProductController',
    template:`
        <div class="container">
            <div>Order Now</div>
            <div style="width:500px;display:inline-block;vertical-align:top">
                <img src="{{product.photo}}" width="400px">
                <h4>{{product.name}}</h4>
                <h4>{{product.price}}</h4>
            </div>
            <div style="display:inline-block">
                <button ng-click="order()">Confirm</button>
            </div>
        </div>
    `
}
export default orderProductComponent;