var viewProductComponent={
    controller:'ViewProductController',
    template:`
            <div class="container">
                    <div class="row">
                        <div class="col-md-12 mx-auto my-4">
                            <h4>Product List</h4>
                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr ng-repeat='p in products'>
                                        <td>{{p.name}}</td>
                                        <td>{{p.price}}</td>
                                        <td><a ui-sref="editProduct({productID:p._id})">Edit</a> |
                                        <a href='' ng-click="deleteProduct(p._id)"> Delete</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
    `
}
export default viewProductComponent;