function NumeroRomano() {

    var clazz = {
        transforma: function (strNumeroRomano) {
            var numeroInt = 0;
            
            // var numeroInt = _.count(strNumeroRomano, "I");
            for(var i=0 ; i < strNumeroRomano.length; i++){
                
                if(strNumeroRomano[i] == "V" ){
                    numeroInt += 5;
                    continue;
                }

                if(strNumeroRomano[i] == "I" && strNumeroRomano[i+1] == "V"){
                    numeroInt += 4;
                    continue;
                }
                if(strNumeroRomano[i] == "I"){
                    numeroInt += 1;
                }
            } 

            return numeroInt;
        }
    };

    return clazz;
}