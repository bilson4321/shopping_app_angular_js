var shopByCategoryComponent={
    controller:'ShopByCategoryController',
    template:`
        <div class="wrapper my-2">
            <div class="container">
                <div class="card my-4">
                    <div class="card-body">{{categoryName}}</div>
                </div>
                <div class="card-columns">
                    <div class="card" ng-repeat='p in products'><card item='p'></card></div>
                </div>
            </div>
        </div>
    `
}

export default shopByCategoryComponent;