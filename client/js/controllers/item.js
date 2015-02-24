angular
    .module('app')
    .controller('ItemController', ['$scope', '$state', 'Item', 'Category', function ($scope, $state, Item, Category) {

        $scope.items = [];
        $scope.addtags = [];
        $scope.categories = [];
        var id = 1;
        //Get Swapper's Items
        function getItems() {
            Item
                .find()
                .$promise
                .then(function (results) {
                    $scope.items = results;
                });
        }
        getItems();
        //Get Swapper Categories
        function getCategories() {
            Category
                .find()
                .$promise
                .then(function (results) {
                    $scope.categories = results;
                });
        }
        getCategories();
        //Add a Tag to be added for an Item
        $scope.addTag = function () {
            id += 1;
            $scope.addtags.push({
                tagname: $scope.tag,
                id: id
            })
        };
        //Add an Item
        $scope.addItem = function () {
            Item
                .create({
                    name: $scope.newItem.name,
                    category: $scope.newItem.category,
                    tags: $scope.newItem.tags,
                    sid: $scope.sid,
                    description: $scope.newItem.description
                })
                .$promise
                .then(function (item) {
                    $scope.newItem = '';
                    $scope.itemForm.name.$setPristine();
                    $scope.itemForm.category.$setPristine();
                    $scope.itemForm.tags.$setPristine();
                    $scope.itemForm.description.$setPristine();
                    $('.focus').focus();
                    getItems();
                });
        };
        //Remove an Item
        $scope.removeItem = function (item) {
            Item
                .deleteById(item)
                .$promise
                .then(function () {
                    getItems();
                });
        };
      }]);