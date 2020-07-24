angular.module("listaTelefonica").filter("nameFilter", function(){
    return function(input){
        let listadeNomes = input.split(" ");
        
        listadeNomes = listadeNomes.map(function(nome){
            return nome.charAt(0).toUpperCase()+nome.substring(1).toLowerCase();
        });
        
        return listadeNomes.join(" ");
    };
});

