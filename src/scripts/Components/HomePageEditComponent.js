var homePageEditComponent={
    controller:'HomePageEditController',
    template:`
            <div class="wrapper my-2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mx-auto">
                            <h3>Edit Home Page</h3>
                                <h1>ID:{{homePageData._id}}</h1>
                                <div class="form-group">
                                    <label for="price">Choose Image:</label>
                                    <input type="file" name="image" onchange="angular.element(this).scope().uploadedFile(this);" class="form-control" required >
                                    <button ng-click="addImage()" ng-disabled="homePageData.image.length>2">Upload</button>
                                </div>
                                
                                <div class="card-deck">
                                    <div class="card" style="width:30%" ng-repeat='i in homePageData.image'>
                                        <button class="cross-btn" ng-click="deleteFile(i)">&#9747</button>
                                        <img src={{i}} class="img-fluid">
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8 mx-auto">
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
                                        <button class="btn btn-primary" ng-disabled='homePageData.featuredProduct.length>3' ng-click="addFeatured()">Add</button>
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
                            <div class="card-deck">
                                    <div class="card" style="width:30%" ng-repeat='i in homePageData.featuredProduct'>
                                        <button class="cross-btn" ng-click="removeFeatured(i._id)">&#9747</button>
                                        <img src={{i.photo}} class="img-fluid">
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            `
}

export default homePageEditComponent;