var homePageComponent={
    controller:'HomePageController',
    template:`
            <div class="wrapper my-2">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="categories-container">
                            <ul class="list-group">
                                <li class="list-group-item" ng-repeat="c in categories"><a ui-sref="shopByCategory({categoryID:c._id})">{{c.name}}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-9">
                        <div id="demo" class="carousel slide" data-ride="carousel">
                            <style>
                                /* Make the image fully responsive */
                                .carousel-inner img {
                                    width: 100%;
                                    height: 100%;
                                }
                                </style>
                            <!-- The slideshow -->
                            <div class="carousel-inner">
                              <div class="carousel-item" ng-class="{active: $index===0}" ng-repeat="i in homePageData.image">
                                <img src="{{i}}" alt="Banner2" width="1100" height="500">
                              </div>
                            </div>
                            <!-- Left and right controls -->
                            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                              <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a class="carousel-control-next" href="#demo" data-slide="next">
                              <span class="carousel-control-next-icon"></span>
                            </a>
                          </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 my-5">
                        <div class="my-4 mx-auto">
                            <h4>Top Featured Product</h4>
                        </div>
                        <div class="card-deck">
                            <div class="card" ng-repeat='p in homePageData.featuredProduct'><card item='p'></card></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
}

export default homePageComponent;