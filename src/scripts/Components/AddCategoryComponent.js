var addCategoryComponent={
    controller:'AddCategoryController',
    template:`
        <div class="container">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <form class="my-4" name="categoryForm" ng-submit="submit(categoryForm.$valid)" novalidate>
                        <h4>Add Category</h4>
                        <div class="form-group">
                            <label for="name">Category Name</label>
                            <input type="text" class="form-control" placeholder="Enter category name" id="name" ng-model="name" name="categoryName" required>
                            <span style="color:red" ng-show="categoryForm.$submitted && categoryForm.categoryName.$pristine">Name is required</span>
                        </div>
                        <div class="form-group">
                            <label for="description">Description:</label>
                            <textarea class="form-control" rows="5" id="description" ng-model="description" required ck-editor></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Add Category</button>
                    </form>
                </div>
            </div>
        </div>
    `
}
export default addCategoryComponent;