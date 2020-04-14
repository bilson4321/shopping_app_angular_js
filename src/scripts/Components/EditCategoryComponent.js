var editCategoryComponent={
    controller:'EditCategoryController',
    template:`
            <div class="container">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <form class="my-4">
                        <h4>Add Category</h4>
                        <div class="form-group">
                            <label for="name">Category Name</label>
                            <input type="text" class="form-control" placeholder="Enter category name" id="name" ng-model="name">
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
export default editCategoryComponent;