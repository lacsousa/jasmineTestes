describe("Maior e Menor", function(){
    it("deveria entender números em ordem não sequencial", function(){

        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5,15,7,9]);

        // expect na área de Testes chamamos isso de Asserts
        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("deveria entender números em ordem crescente", function(){

        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5,7,9,15]);


        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("deveria entender números em ordem decrescente", function(){

        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([15,9,7,5]);


        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("deveria entender uma lista com apenas 1 elemento", function(){

        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([1]);


        expect(algoritmo.pegaMaior()).toEqual(1);
        expect(algoritmo.pegaMenor()).toEqual(1);
    });

});