describe("Paciente", function(){
    var guilherme;

    beforeEach(function(){
        guilherme = new PacienteBuilder().constroi();

    });
    it("deve calcular o imc", function () {
       
       expect(guilherme.imc()).toEqual(72/(1.82^2));

    });

    //Um único Teste por Classe de Equivalência

    it("deve calcular o número de batimentos por ano", function () {
      
        expect(guilherme.batimentosCardiacosPorAno()).toEqual(28 * 365 * 24 * 60 * 80);
 
     });

});