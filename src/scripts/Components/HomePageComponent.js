var homePageComponent={
    controller:'HomePageController',
    template:`
            <div class="banner">
                <img src="/images/banner.jpg" class="image"></img>
            </div>
            <div class="container">
                <ul>
                    <li ng-repeat='p in products'><card item='p'></card></li>
                </ul>
            </div>
            `
}

export default homePageComponent;