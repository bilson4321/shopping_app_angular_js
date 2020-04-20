var viewCategoryComponent={
    controller:'ViewCategoryController',
    template:`
            <div class="container">
                    <div class="row">
                        <div class="col-md-12 mx-auto my-4">
                            <h4>Category List</h4>
                            <table-shopping heading='tableHeading' action='true' data='categories' editlink='editCategory' loading='false' deletelink="deleteCategory(id)"></table-shopping>
                        </div>
                    </div>
            </div>
    `
}
export default viewCategoryComponent;