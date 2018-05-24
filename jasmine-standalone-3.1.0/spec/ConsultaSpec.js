describe("Consulta", function () {

    var guilherme;

    beforeEach(function () {
        guilherme = new PacienteBuilder().constroi();
        // guilherme = new PacienteBuilder().comPeso(100).comIdade(35).comAltura(1.65).constroi();
    });

    // PENSAR EM CLASSES DE EQUIVALÊNCIA

    describe("Consultas do Tipo Retorno", function () {

        it("nao deve cobrar nada se for um retorno", function () {
            // var guilherme = new Paciente("Guilherme", 28,72, 1.82);
            var consulta = new Consulta(guilherme, [], true, true);
            expect(consulta.preco()).toEqual(0);

        });


    });

    describe("Consultas com procedimentos comuns", function () {

        it("deve cobrar 25 por cada procedimento comum", function () {
            // var guilherme = new Paciente("Guilherme", 28,72, 1.82);
            var consulta = new Consulta(guilherme, ["proc1", "proced2"], false, false);
            expect(consulta.preco()).toEqual(50);

        });

        it("deve dobrar o preço da consulta particular com procedimentos comuns", function () {
            // var guilherme = new Paciente("Guilherme", 28, 72, 1.82);
            var consulta = new Consulta(guilherme, ["procedimento-comum1", "proced-comum-2"], true, false);
            expect(consulta.preco()).toEqual(100);

        });

    });

    describe("Consultas com procedimentos especiais", function () {

        it("deve cobrar preço específico dependendo do procedimento", function () {
            // var guilherme = new Paciente("Guilherme", 28, 72, 1.82);
            var consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum2", "gesso"], false, false);
            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);

        });


        it("deve dobrar o preço da consulta particular com procedimentos especiais", function () {
            // var guilherme = new Paciente("Guilherme", 28, 72, 1.82);
            var consulta = new Consulta(guilherme, ["raio-x", "gesso"], true, false);
            expect(consulta.preco()).toEqual((55 + 32) * 2);

        });

    });


});