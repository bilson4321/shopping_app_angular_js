var customerOrderComponent={
    controller:"CustomerOrderController",
    template:`
        <div class="container">
            <div class="row">
                <div class="col-md-12 mx-auto my-4">
                    <h4>Your Order</h4>
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th>Order</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat='o in orders'>
                                <td>{{o.product.name}}</td>
                                <td>{{o.product.price}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
}
export default customerOrderComponent;