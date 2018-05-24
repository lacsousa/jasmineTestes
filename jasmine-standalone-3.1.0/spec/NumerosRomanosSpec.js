describe("Números Romanos", function(){
    var num1;
    var num2;
    var num3;
    var numeroRomano = new NumeroRomano();

    beforeEach(function() {
        num1 = 1;
        num2 = 2;
        num3 = 3;
    });

    it("deve testar primeiros números romanos 1,2 e 3", function(){

       
       expect(num1).toEqual(numeroRomano.transforma("I"));

       expect(num2).toEqual(numeroRomano.transforma("II"));

       expect(num3).toEqual(numeroRomano.transforma("III"));

    });

    it("deve testar números com o IV", function(){
        expect(4).toEqual(numeroRomano.transforma("IV"));
    });

    it("deve testar números com o V", function(){
        expect(5).toEqual(numeroRomano.transforma("V"));
    });
});