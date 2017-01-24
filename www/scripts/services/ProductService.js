(function () {
  'use-strict';

  var User = function ($q, $timeout) {
    var o = {
      choosenItems: localStorage.getItem('cartContent') ? angular.fromJson(localStorage.getItem('cartContent')) : []
    }

    o.addItemToCart = function (item, index) {
      if (!item) return false;

      for (var i = 0; i < o.choosenItems.length; i++) {
        if (item.id == o.choosenItems[i].id) {
          alert('This item is already in your cart.');

          return false;
        }
      }

      item.count = 1;
      o.choosenItems.push(item);

      localStorage.setItem('cartContent', angular.toJson(o.choosenItems));
    }

    o.removeItemFromCart = function (item, index) {
      if (!item) return false;

      o.choosenItems.splice(index, 1);

      localStorage.setItem('cartContent', angular.toJson(o.choosenItems));
    }

    o.increaseItemCount = function (item, index) {
      if (!item) return false;

      o.choosenItems[index].count++;

      localStorage.setItem('cartContent', angular.toJson(o.choosenItems));
    }

    o.decreaseItemCount = function (item, index) {
      if (!item) return false;

      if (o.choosenItems[index].count > 1) {
        o.choosenItems[index].count--;

        localStorage.setItem('cartContent', angular.toJson(o.choosenItems));
      }
    }

    /*
      It's not the rightful place for this function
      but it would be alone in an other file :'(
    */
    o.sendConfirmation = function () {
      return $q(function (resolve, reject) {
        $timeout(function() {
          resolve('Thank you for your puchase!');
        }, 1500);

        //Here is the JSON formatted data
        console.log(angular.toJson(o.choosenItems, true));

        if ((2 + 2) == 5) {
          //Only to have a reject
          reject('Something went wrong.');
        }
      });
        /* EXAMPLE FOR A REAL SITUATION
          var request = {
            method: 'POST',
            url: api/order + token,
            data: $httpParamSerializerJQLike(angular.toJson(o.choosenItems, true)),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }

          return $q(function (resolve, reject) {
            $http(request).then(function (result) {
              resolve(result);
            }, function (error) {
                reject('Result is not set.', error);
            });
          });
        */
    }

    return o;
  };

  angular.module('shoppingCart').factory('User', User);
}());