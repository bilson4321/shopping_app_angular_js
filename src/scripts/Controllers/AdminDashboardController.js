export default function($scope)
{
    $scope.someData={
        labels : [
            'Apr',
            'May',
            'Jun'
        ],
        datasets : [
            {
                data:[1,7,15,19,31,40]
            },
            {
                data:[1,7,15,19,31,40]
            }
        ]
    };
    $scope.someOptions ={
        segementStrokeWidth: 20,
        segementStrokeColor: '#000'
    };
}