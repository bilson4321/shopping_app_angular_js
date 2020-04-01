var viewCategoryComponent={
    controller:'ViewCategoryController',
    template:`
            <table border="1px solid black">
                <tr>
                    <th>Category Name</th>
                    <th>Action</th>
                </tr>
                <tr ng-repeat='c in categories'>
                    <td>{{c.name}}</td>
                    <td><a ui-sref="editCategory({categoryID:c._id})">Edit</a> |
                    <a href='' ng-click="deleteCategory(c._id)"> Delete</a></td>
                </tr>
            </table>
    `
}
export default viewCategoryComponent;