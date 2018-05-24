function Agendamento() {

    var clazz = {
        para: function (consulta) {
            //    var novaData = new Date(2018,7,21);
            // getTime() - retorna uma data em milisegundos desde 1970 
            var umDiaEmMiliSegundos = 24 * 60 * 60 * 1000;
            var vinteDiasEmMiliSegundos = 20 * umDiaEmMiliSegundos;

            var novaData = new Date(consulta.getData().getTime() + vinteDiasEmMiliSegundos);

            while(novaData.getDay() == 0 || novaData.getDay() == 6 ){
                novaData = new Date(novaData.getTime() + umDiaEmMiliSegundos);
            }    

            var novaConsulta = new Consulta(consulta.getNome(), consulta.getProcedimentos(),
                consulta.isParticular(), true, novaData);

            return novaConsulta;
        }
    };

    return clazz;
}