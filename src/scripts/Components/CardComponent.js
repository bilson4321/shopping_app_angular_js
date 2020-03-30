var cardComponent={
    controller:'CardController',
    bindings:{
        item:'='
    },
    template:`
            <div class="card">
                <a ui-sref="detail({productID:$ctrl.item._id})">
                    <img src='{{$ctrl.item.photo}}' class="image"></img>
                    <p>name:{{$ctrl.item.name}}</p>
                    <p>price:{{$ctrl.item.price}}</p>
                <a>
            </div>
    `
}

export default cardComponent;