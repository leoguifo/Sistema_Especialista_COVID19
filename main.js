//Fatos
class Paciente {
    nome;
    idade;
    temperatura;
    freqCardiaca;
    freqRespiratoria;
    pressao;
    oxigenio;
    dispineia;
    comorbidades;
  }
  
  //Paciente sem risco
  paciente = new Paciente();
  paciente.nome = 'Leonardo';
  paciente.idade = 30;
  paciente.temperatura = 37;
  paciente.freqCardiaca = 99;
  paciente.freqRespiratoria = 17;
  paciente.dispineia = false;
  paciente.comorbidades = 0;
  paciente.oxigenio = 95;
  paciente.pressao = 110;
  
  //Paciente com baixo risco
  pacienteBaixo = new Paciente();
  pacienteBaixo.nome = 'Marcos';
  pacienteBaixo.idade = 50;
  pacienteBaixo.temperatura = 37;
  pacienteBaixo.freqCardiaca = 99;
  pacienteBaixo.freqRespiratoria = 25;
  pacienteBaixo.dispineia = false;
  pacienteBaixo.comorbidades = 1;
  pacienteBaixo.oxigenio = 95;
  pacienteBaixo.pressao = 110;
  
  //Paciente com alto risco
  pacienteAlto = new Paciente();
  pacienteAlto.nome = 'Lucien';
  pacienteAlto.idade = 30;
  pacienteAlto.temperatura = 37;
  pacienteAlto.freqCardiaca = 99;
  pacienteAlto.freqRespiratoria = 16;
  pacienteAlto.dispineia = true;
  pacienteAlto.comorbidades = 0;
  pacienteAlto.oxigenio = 95;
  pacienteAlto.pressao = 110;
  
  //Regras
  function idade_leve(paciente){
    return paciente.idade < 60;
  }
  
  function idade_media(paciente){
    return paciente.idade >= 60 && paciente.idade <= 79;
  }
  
  function idade_alta(paciente){
    return paciente.idade >= 80;
  }
  
  function temperatura_baixa(paciente){
    return paciente.temperatura >= 35 && paciente.temperatura <= 37; 
  }
  
  function temperatura_media(paciente){
    return paciente.temperatura < 35 && (paciente.temperatura >= 37 && paciente.temperatura <= 39);
  }
  
  function temperatura_alta(paciente){
    return paciente.temperatura > 39;
  }
  
  function freqCardiaca_baixa(paciente){
    return paciente.freqCardiaca <= 100;
  }
  
  function freqCardiaca_media(paciente){
    return paciente.freqCardiaca > 100;
  }
  
  function freqRespiratoria_baixa(paciente) {
    return paciente.freqRespiratoria < 18;
  }
  
  function freqRespiratoria_media(paciente) {
    return paciente.freqRespiratoria >= 19 && paciente.freqRespiratoria <= 30;
  }
  
  function freqRespiratoria_alta(paciente) {
    return paciente.freqRespiratoria > 30;
  }
  
  function pressao_arterial(paciente){
    return paciente.pressao > 100;
  }
  
  function oxigenio(paciente) {
    return paciente.oxigenio >= 95;
  }
  
  function dispineia(paciente) {
    return paciente.dispineia;
  }
  
  function comorbidades_baixa(paciente){
    return paciente.comorbidades == 0;
  }
  
  function comorbidades_media(paciente){
    return paciente.comorbidades == 1;
  }
  
  function comorbidades_alta(paciente){
    return paciente.comorbidades >= 2;
  }
  
  function paciente_sem_risco(paciente) {
    return (
      temperatura_baixa(paciente)
        && idade_leve(paciente)
        && freqCardiaca_baixa(paciente)
        && freqRespiratoria_baixa(paciente)
        && pressao_arterial(paciente)
        && oxigenio(paciente)
        && !dispineia(paciente)
        && comorbidades_baixa(paciente)
    );
  }
  
  function paciente_com_baixo_risco(paciente) {
    return (
      temperatura_media(paciente)
        || idade_media(paciente)
        || freqCardiaca_media(paciente)
        || freqRespiratoria_media(paciente)
        || !pressao_arterial(paciente)
        || !oxigenio(paciente)
        || dispineia(paciente)
        || comorbidades_media(paciente)
    );
  }
  
  function paciente_com_alto_risco(paciente) {
    return (
      temperatura_alta(paciente)
        || idade_alta(paciente)
        || freqRespiratoria_alta(paciente)
        || !pressao_arterial(paciente)
        || !oxigenio(paciente)
        || dispineia(paciente)
        || comorbidades_alta(paciente)
    );
  }
  
  function main(paciente) {
    return paciente_com_alto_risco(paciente) ? paciente.nome + ' encaminhe-se ao hospital, risco alto!' : 
    (paciente_com_baixo_risco(paciente) ? paciente.nome + ' está com baixo risco, fique em observação e permaneça em casa!' : (paciente_sem_risco(paciente) ? paciente.nome + ' está sem risco!' : ''));
  }
  
  //Execução dos testes!!!
  console.log(main(paciente));
  console.log(main(pacienteBaixo));
  console.log(main(pacienteAlto));