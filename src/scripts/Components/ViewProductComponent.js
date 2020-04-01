var viewProductComponent={
    controller:'ViewProductController',
    template:`
            <table border="1px solid black">
                <tr>
                    <th>Name</th>
                    <th>price</th>
                    <th>Action</th>
                </tr>
                <tr ng-repeat='p in products'>
                    <td>{{p.name}}</td>
                    <td>{{p.price}}</td>
                    <td><a ui-sref="editProduct({productID:p._id})">Edit</a> |
                    <a href='' ng-click="deleteProduct(p._id)"> Delete</a></td>
                </tr>
            </table>
    `
}
export default viewProductComponent;