var editCategoryComponent={
    controller:'EditCategoryController',
    template:`
            <div class="container">
                <label>name</label>
                <input type="text" ng-model="name"><br>
                <label>Description</label>
                <textarea ng-model="description"></textarea><br>
                <button ng-click="update()">Update</button>
            </div>
    `
}
export default editCategoryComponent;