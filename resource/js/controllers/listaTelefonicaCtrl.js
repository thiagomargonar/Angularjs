angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasAPI){
    $scope.app = "Lista Telefonica";
    
    var carregarContato = function (){
        contatosAPI.getContatos().then(function (response){
            $scope.contatos=response.data;
        }).catch(function(response){
            $scope.message = "deu ruim"+response.data;
        });
    };

    var carregarOperadoras = function (){
        operadorasAPI.getOperadoras().then(function (response){
            $scope.operadoras=response.data;
        });
    };

    $scope.adicionarContato = function(contato){
       contatosAPI.saveContato(contato).then(function(){
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
        carregarContato();
        });
    };

    $scope.apagarContato = function(contatos){
        $scope.contatos = contatos.filter(function (contatos){
            if(!contatos.selecionado){
                return contatos;
            } 
        });
    };

    $scope.ordenarPor = function(campo){
        $scope.criterioOrdenacao = campo;
        $scope.ascendente = !$scope.ascendente;
    };
    
    $scope.classe = "selecionado";

    carregarContato();
    carregarOperadoras();
});