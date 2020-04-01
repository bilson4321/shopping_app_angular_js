var addProductComponent={
    controller:'AddProductController',
    template:`
        <div class="container">
            <label>name</label>
            <input type="text" ng-model="name"><br>
            <label>Categories</labe>
            <select ng-model="categoryID">
                <option ng-repeat="c in categories" value="{{c._id}}">{{c.name}}</option>
            </select><br>
            <label>price</label>
            <input type="text" ng-model="price"><br>
            <label>image</label>
            <input type=file><br>
            <label>Description</label>
            <textarea ng-model="description"></textarea><br>
            <button ng-click="submit()">Submit</button>
        </div>
    `
}
export default addProductComponent;