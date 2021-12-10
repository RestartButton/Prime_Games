# Prime_Games

Este é um projeto criado para a disciplina de Programação WEB da Universidade do Vale do Itajaí (UNIVALI), **PARA FINS EDUCACIONAIS**.
Criado pelos acadêmicos: Leonardo B da Silveira, Rogério FB Júnior e Victor T de Carvalho.

Antes de testar o projeto, é necessário criar o arquivo 'config.json' na raiz do projeto e colar o seguinte
código:

{
  "MYSQL_PASSWORD": "password"
}

onde no lugar de 'password' você deverá colocar a senha do usuário 'root' de seu banco de dados.


Para testar o projeto, siga os passos a seguir:
<ol>
  <li>Abra um console na raiz do projeto </li>
  <li>  Execute o comando 'node app.js'  </li>
  <li>No seu navegador, cole o link 'http://localhost:3333' na barra de navegação </li>
 </ol> 

Caso seja a sua primeira vez executando o projeto, talvez seja necessário executar os querries da pasta
'assets/bd_archives' no MySQL Workbench, para inicialização do banco de dados.

# Telas do site
![index](https://user-images.githubusercontent.com/63310837/145566882-fc15c8e7-4e0d-4d05-9fa7-e3a8dbb2913e.png)
![Catalogo](https://user-images.githubusercontent.com/63310837/145567540-85b0cb20-afe3-4956-bfdb-0bb5b2c7babd.png)
![Sobre](https://user-images.githubusercontent.com/63310837/145567556-802ecd91-dd04-4209-9c68-9eea7c75183f.png)
![Contato](https://user-images.githubusercontent.com/63310837/145567565-a1e89834-7f35-4741-811d-cd8134709352.png)
![Login](https://user-images.githubusercontent.com/63310837/145567575-06730063-d1b3-4864-9d0e-3bc1fa109900.png)
![Cadastro](https://user-images.githubusercontent.com/63310837/145567579-4241cca2-0b19-484e-b23f-e0bf13591dd2.png)

<br> 
<h4> Função especial de conta, que reconhece quando usuário está logado (mostrando log out ou opção de apagar cadastro) e quando não estiver logado, leva para o Login</h4>

![image](https://user-images.githubusercontent.com/63310837/145567504-004893e7-589d-42af-b063-d0c431ee89d1.png)
