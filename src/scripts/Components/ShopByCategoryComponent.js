var shopByCategoryComponent={
    controller:'ShopByCategoryController',
    template:`
        <div class="wrapper my-2">
            <div class="container">
                <div class="card my-4">
                    <div class="card-body">{{categoryName}}</div>
                </div>
                <card-grid displaylist='products'></card-grid>
            </div>
        </div>
    `
}

export default shopByCategoryComponent;