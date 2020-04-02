var customerDashboardComponent={
    controller:"CustomerDashboardController",
    template:`
        <div class="container">
            <h1>Welcome</h1>
            <h4>Your orders</h4>
            <li ng-repeat="o in orders">{{o.product.name}}</li>
        </div>
    `
}
export default customerDashboardComponent;