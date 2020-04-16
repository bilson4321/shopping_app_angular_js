var editProductComponent={
    controller:'EditProductController',
    template:`
    <div class="container">
            <div class="row">
                <div class="col-md-6 mx-2">
                    <form class="my-4">
                        <h4>Edit Product</h4>
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
                            <textarea class="form-control" rows="5" ck-editor id="description" ng-model="description"></textarea>
                        </div>
                        <button type="submit" ng-click="update()" class="btn btn-primary">Update</button>
                    </form>
                </div>
                <div class="col-md-4 mx-2">
                    <div class="my-4">
                        <h4>Recomended</h4>
                        <div class='search-container overflow-auto'>
                        <div class="input-group">
                        <input type="text" class="form-control my-2" 
                                            ng-keyup='fetchProduct()'
                                            ng-click='searchboxClicked($event)' 
                                            ng-model='productName' 
                                            placeholder="enter product name">
                        <div class="input-group-append">
                            <button class="btn btn-primary" ng-disabled='addRelatedDisable' ng-click="addRelated()">Add</button>
                        </div>
                        </div>
                        <ul id='searchResult'>
                            <li ng-click='setValue($index,$event)' ng-repeat='result in searchResult'>
                                {{result.name}}
                            </li>
                        </ul>
                        </div>
                        <ul class='list-group'>
                            <li class='list-group-item' ng-repeat='p in related'>{{p.name}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
}
export default editProductComponent;