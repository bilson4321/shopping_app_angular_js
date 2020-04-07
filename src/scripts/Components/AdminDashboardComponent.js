var adminDashboardComponent={
    template:`
        <div class="container">
        Admin dashboard
            <ul>
                <li ui-sref="addProduct">add Product</li>
                <li ui-sref="viewProduct">View Product</li>
                <li ui-sref="addCategory">add Category</li>
                <li ui-sref="viewCategory">View Category</li>
            </ul>
        </div>
    `
}
export default adminDashboardComponent;