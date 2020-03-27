var homePageComponent={
    controller:'HomePageController',
    template:`
            <div class="container">
                <ul>
                    <li ng-repeat='p in products'><card item='p'></card></li>
                </ul>
            </div>
            `
}

export default homePageComponent;