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

        toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();

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

        var boughtList = this;

        boughtList.items = ShoppingListCheckOffService.getItemsBought();

    };

    function ShoppingListCheckOffService () {
        var service = this;

        var items1 = [
            {
                name: "Milk",
                quantity: "2"
            },
            {
                name: "Donuts",
                quantity: "100"
            },
            {
                name: "Cookies",
                quantity: "300"
            },
            {
                name: "Chocolate",
                quantity: "5"
            },
            {
                name: "Bread",
                quantity: "5"
            },
        ];

        var items2 = [];

        service.addItem = function (itemName, itemQuantity) {
            var item = {
                name: itemName,
                quantity: itemQuantity
            };
            items2.push(item);
        }

        service.removeItem = function(itemIndex) {

            var item = {
                name: items1[itemIndex].name,
                quantity: items1[itemIndex].quantity
            };

            items1.splice(itemIndex, 1);
            try {
                items2.push(item);
            } catch (e) {
                service.errorMessage = e.message;
            }
        };

        service.getItemsToBuy = function(){
            return items1;
        };

        service.getItemsBought = function(){
            return items2;
        };

    }


})();
