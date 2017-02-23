/**
 *
 * @authors Ben Van Aken (ben.vanaken@gmail.com)
 * @date    2017-02-23 11:39:28
 * @version $Id$
 */

(function(){

    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController (ShoppingListCheckOffService) {
        var toBuyList = this;

        toBuyList.itemName = "";
        toBuyList.itemQuantity = "";

        toBuyList.removeItem = function($index) {
            try {
                ShoppingListCheckOffService.removeItem(itemIndex);
            } catch (error) {
                toBuyList.errorMessage = error.message;
            }
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController (ShoppingListCheckOffService) {

    };


})();
