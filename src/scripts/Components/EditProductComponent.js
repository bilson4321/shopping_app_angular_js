var editProductComponent={
    controller:'EditProductController',
    template:`
    <div class="container">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <form class="my-4">
                        <h4>Add Product</h4>
                        <div class="form-group">
                            <label for="name">Product Name</label>
                            <input type="text" class="form-control" placeholder="Enter product name" id="name" ng-model="name">
                        </div>
                        <div class="form-group">
                            <label for="price">Price:</label>
                            <input type="text" class="form-control" placeholder="Enter product Price" id="price" ng-model="price">
                        </div>
                        <div class="form-group">
                            <label for="description">Description:</label>
                            <textarea class="form-control" rows="5" id="description" ng-model="description"></textarea>
                        </div>
                        <button type="submit" ng-click="update()" class="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    `
}
export default editProductComponent;