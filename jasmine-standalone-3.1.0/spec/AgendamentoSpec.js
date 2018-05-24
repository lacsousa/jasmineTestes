describe("Agendamento", function(){
    var gui;
    var agenda;
    beforeEach(function(){
        gui  = new PacienteBuilder().constroi();
        agenda = new Agendamento();
    });

    it("deve agendar retorno para 20 dias depois", function(){

        // em JS os meses começam com 0 .... esssa data abaixo é em agosto
        var consulta = new Consulta(gui, [],false, false, new Date(2018, 7, 1));
        var novaConsulta = agenda.para(consulta);

        expect(novaConsulta.getData().toString()).toEqual(new Date(2018, 7, 21).toString());
    });

    it("deve agendar proximo dia útil após fim de semana", function(){
        var consulta = new Consulta(gui, [], false, false, new Date(2018, 4, 7)); //maio
        var novaConsulta = agenda.para(consulta);

        expect(novaConsulta.getData().toString()).toEqual(new Date(2018, 4, 28).toString());    
    });

});