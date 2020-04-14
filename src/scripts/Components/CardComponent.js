var cardComponent={
    controller:'CardController',
    bindings:{
        item:'='
    },
    template:`
                <img class="card-img-top" src="{{$ctrl.item.photo}}" alt="Card image">
                <div class="card-body">
                    <h4 class="card-title">{{$ctrl.item.name}}</h4>
                    <p class="card-text">Price: Rs.{{$ctrl.item.price}}</p>
                    <a ui-sref="detail({productID:$ctrl.item._id})" class="btn btn-primary">See Profile</a>
                </div>
    `
}

export default cardComponent;