var addCategoryComponent={
    controller:'AddCategoryController',
    template:`
        <div class="container">
            <label>name</label>
            <input type="text" ng-model="name"><br>
            <label>Description</label>
            <textarea ng-model="description"></textarea><br>
            <button ng-click="submit()">Submit</button>
        </div>
    `
}
export default addCategoryComponent;