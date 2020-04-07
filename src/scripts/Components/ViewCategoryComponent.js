var viewCategoryComponent={
    controller:'ViewCategoryController',
    template:`
            <div class="container">
                    <div class="row">
                        <div class="col-md-12 mx-auto my-4">
                            <h4>Category List</h4>
                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th>Category Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr ng-repeat='c in categories'>
                                        <td>{{c.name}}</td>
                                        <td><a ui-sref="editCategory({categoryID:c._id})">Edit</a> |
                                        <a href='' ng-click="deleteCategory(c._id)"> Delete</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
    `
}
export default viewCategoryComponent;