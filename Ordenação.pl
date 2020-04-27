% paciente(nome, idade, temp, cardiaca, resp, pressão, oxigênio, dispnéia, comorbidades)
paciente(p1, 35, 36, 90, 15, 120, 100, false, 0). % sem risco, liberado (verde)
paciente(p2, 75, 39, 110, 30, 120, 100, false, 1). % fica em observação (amarelo)
paciente(p3, 65, 37.5, 105, 20, 120, 100, false, 1). % fica em observação (amarelo)
paciente(p4, 22, 36, 100, 25, 90, 95, true, 0). % p_arterial e dispinéia grave (laranja)
paciente(p5, 21, 36, 150, 35, 110, 100, false, 0). % freq_respiratória gravissímo (vermelho)

%Idade: Baixo risco(amarelo) = 60 a 79 anos
idade(N):-paciente(N,I,_,_,_,_,_,_,_), I >= 60, paciente(N,I,_,_,_,_,_,_,_), I =< 79.

%Idade: Alto risco (laranja) = > 80 anos
idade2(N):-paciente(N,I,_,_,_,_,_,_,_), I > 80.

%Temperatura: Baixo risco(amarelo) = < que 35 ou entre 37 e 39 °C
temperatura(N):-paciente(N,_,T,_,_,_,_,_,_), T < 35 ; paciente(N,_,T,_,_,_,_,_,_), T >= 37, paciente(N,_,T,_,_,_,_,_,_), T =< 39.

%Temperatura: Alto risco (laranja) = > que 39 °C
temperatura2(N):-paciente(N,_,T,_,_,_,_,_,_), T > 39.

%Frequencia Cardiaca: Baixo risco(amarelo) = > 100 batimentos por minuto
cardiaca(N):-paciente(N,_,_,C,_,_,_,_,_), C > 100.

%Frequencia respiratória: Baixo risco(amarelo) = Entre 19 a 30 ipm
respiratoria(N):-paciente(N,_,_,_,R,_,_,_,_), R >= 19, paciente(N,_,_,_,R,_,_,_,_), R =< 30.

%Frequencia respiratória: Altissimo risco(vermelho) = > 30 ipm
respiratoria2(N):-paciente(N,_,_,_,R,_,_,_,_), R > 30.

%Pressão arterial: Alto risco (laranja) = > Entre 90 e 100 mmHg
pressao(N):-paciente(N,_,_,_,_,P,_,_,_), P >= 90, paciente(N,_,_,_,_,P,_,_,_), P =< 100.

%Pressão arterial: Altissimo risco(vermelho) = < 90 mmHg
pressao2(N):-paciente(N,_,_,_,_,P,_,_,_), P < 90.

%Saturação de Oxigênio: Altissimo risco(vermelho) = < 95%
oxigenio(N):-paciente(N,_,_,_,_,_,O,_,_), O < 95.

%Dispnéia: Altissimo risco(vermelho) = True
dispneia(N):-paciente(N,_,_,_,_,_,_,D,_), D = true.

%Comorbidades: Baixo risco(amarelo) = 1
comorbidade(N):-paciente(N,_,_,_,_,_,_,_,C), C = 1.

%Comorbidades: Alto risco (laranja) = 2 ou +
comorbidade2(N):-paciente(N,_,_,_,_,_,_,_,C), C >= 2.

% Categorização
% 
%  Paciente sem risco, mas deve ficar em observação:
medio(X):- idade(X), temperatura(X), cardiaca(X), respiratoria(X), comorbidade(X),
    print(X), write(" Rico médio\n").

%  Paciente com risco, deve ser encaminhado para hospital:
alto(X):-(idade2(X); temperatura2(X); respiratoria2(X); 
    pressao2(X); oxigenio(X); dispneia(X); 
    comorbidade2(X) ), print(X), 
    write(" Risco alto\n").

baixo(X):- not(idade(X)), not(idade2(X)), not(temperatura(X)), not(temperatura2(X)), 
	not(cardiaca(X)), not(respiratoria(X)), not(respiratoria2(X)),
	not(pressao(X)), not(pressao2(X)), not(oxigenio(X)), 
	not(dispneia(X)), not(comorbidade(X)), not(comorbidade2(X)), print(X), 
    write(" Risco baixo\n").

main(X):- medio(X); alto(X); baixo(X).
