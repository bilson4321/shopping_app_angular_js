var editProductComponent={
    controller:'EditProductController',
    template:`
    <div class="container">
        <label>name</label>
        <input type="text" ng-model="name"><br>
        <label>price</label>
        <input type="text" ng-model="price"><br>
        <label>image</label>
        <input type=file><br>
        <label>Description</label>
        <textarea ng-model="description"></textarea><br>
        <button ng-click="update()">Update</button>
    </div>
    `
}
export default editProductComponent;