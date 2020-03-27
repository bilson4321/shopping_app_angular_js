var addProductComponent={
    controller:'AddProductController',
    template:`
            <div>
                <form>
                    <input type="text" ng-model="product_name">
                    <input type="text" ng-model="product_price">
                    <input type="submit" ng-click="submit()">
                    {{test}}
                </form>
            </div>
            `
}
export default addProductComponent;