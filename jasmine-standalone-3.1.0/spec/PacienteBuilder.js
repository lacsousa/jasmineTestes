function PacienteBuilder(){
    // Padrão de Projeto Builder
    // TEST DATA BUILDER

    var nome = "Guilherme";
    var idade = 28;
    var peso = 72;
    var altura = 1.80;

    var clazz = {
        constroi : function (){
            return Paciente(nome, idade, peso, altura);
        },

        comIdade: function(valor){
            idade = valor;
            return this;
        },

        comPeso: function (valor){
            peso = valor;
            return this;
        },

        comAltura: function(valor){
            altura = valor;
            return this;
        }
    };

    return clazz;
}