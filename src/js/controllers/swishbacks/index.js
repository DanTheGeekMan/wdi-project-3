angular
.module("swishListApp")
.controller("SwishbackIndexCtrl", SwishbackIndexCtrl);

SwishbackIndexCtrl.$inject = ["ClothesItem", "$stateParams"];
function SwishbackIndexCtrl(ClothesItem, $stateParams){
  const vm = this;
  ClothesItem
  .query($stateParams)
  .$promise
  .then(data => {
    vm.items = data.clothesItems;
    for (var i = 0; i < vm.items.length; i++) {
      if (!vm.items[i].available){
        vm.items.splice(i,1);
        i--;
      }
    }
  });
}
