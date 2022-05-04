import express from 'express'; // Import lib para configurar o servidor
import dotenv from 'dotenv';//Import lib para variáveis de ambiente
import mustache from 'mustache-express'; //Import engine mustache
import path from 'path'; //Import lib para tratativa de caminho
import mainRoutes from './routes/index'; //Importando a rota do arquivo index.ts

//Configuração das variáveis de ambiente.
dotenv.config()
//Configuração de inicialização do servidor
const server = express()
//Setando os template engine utilizando o mustache
server.set('view engine','mustache');
//Apontando o diretório das views utilizando o path.join juntando com o caminho /views
server.set('views', path.join(__dirname, 'views'));
//Setando o template engine para utilizar o mustache
server.engine('mustache', mustache());
//Arquivos publicos 
server.use(express.static(path.join(__dirname, '../public')));

//Rotas

server.use(mainRoutes);

server.use((req, res)=>{
    res.send('Página não encontrada!')
});


//Configuração das rotas
server.listen(process.env.PORT);

