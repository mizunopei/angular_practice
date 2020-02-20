angular.module('myApp', [])
  .controller('MyController', function($scope,CustomList){
    $scope.ctmls = CustomList();
    $scope.msg = 'hello world'
    $scope.today = new Date();
  })
 

  //valueメソッド
  .value('CustomList', function(){
    return [
      {
        title: 'bootstrapリファレンス',
        price: 12000,
        published: new Date(2019, 2,2)
      },
      {
        title: 'HTMLリファレンス',
        price: 2800,
        published: new Date(2019, 2,1)
      },
      {
        title: 'jQueryリファレンス',
        price: 7500,
        published: new Date(2016, 5, 18)
    },
    {
        title: 'mySQLリファレンス',
        price: 10000,
        published: new Date(2016, 4, 18)
    }
    ];
  });