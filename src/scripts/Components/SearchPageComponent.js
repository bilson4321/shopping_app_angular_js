var searchPageComponent={
    controller:"SearchPageController",
    template:`
            <div class="container">
                <h1>Search Result</h1>
                <ul>
                    <li ng-repeat='p in products'><card item='p'></card></li>
                </ul>
            </div>
    `
}
export default searchPageComponent;