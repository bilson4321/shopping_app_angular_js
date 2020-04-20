var viewProductComponent={
    controller:'ViewProductController',
    template:`
            <div class="container">
                    <div class="row">
                        <div class="col-md-12 mx-auto my-4">
                            <h4>Product List</h4>
                            <table-shopping heading='tableHeading' data='products' action='true' editlink="editProduct" loading='loading' deletelink="deleteProduct(id)"></table-shopping>
                        </div>
                    </div>
            </div>
    `
}
export default viewProductComponent;