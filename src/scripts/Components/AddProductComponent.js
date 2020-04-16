var addProductComponent={
    controller:'AddProductController',
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
                            <label for="categories">Categories</label>
                            <select class="form-control" id="categories" ng-model="categoryID">
                                <option ng-repeat="c in categories" value="{{c._id}}">{{c.name}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="price">Price:</label>
                            <input type="text" class="form-control" placeholder="Enter product Price" id="price" ng-model="price">
                        </div>
                        <div class="form-group">
                            <label for="price">Choose Image:</label>
                            <image-upload outputuri='image'></image-upload> 
                                <image-crop imagetocrop='image' croppedimage='cimage'></image-crop>
                        </div>
                        <img src='{{cimage}}'>
                        <div class="form-group">
                            <label for="description">Description:</label>
                            <textarea class="form-control" rows="5" id="description" ng-model="description" ck-editor></textarea>
                        </div>
                        <button type="submit" ng-click="submit()" class="btn btn-primary">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    `
}
export default addProductComponent;
//<input type="file" class="form-control-file border name="image" onchange="angular.element(this).scope().uploadedFile(this);" required ">