

var myApp = angular.module('myApp',[]);
    		



myApp.controller('adminController',function ($scope) {
  jQuery.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:3000/select',
    dataType: 'json', // ** ensure you add this line **
    success: function(data) {
 console.log(data);

        jQuery.each(data, function(index, item) {
            //now you can access properties using dot notation

              $scope.nom=item.Nom;
              console.log(item.Nom);
              $('#pseudo').val(item.Login);
              $('#email').val(item.Mail);
              $('#nom').val(item.Nom);
              $('#prenom').val(item.Prenom);
              $('#address').val(item.Adresse);
              $('#tel').val(item.Telephone);

        });
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("some error");
    }
}); 
    });
