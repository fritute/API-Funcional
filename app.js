/******************************************************************
 *Objetivo: API para uma escola
 * Data: 06/12/2024
 * Autor : Gustavo Zumba
 * versão 1.0
 ******************************************************************/
 const express = require('express')
 const cors = require('cors')
 const bodyParser = require('body-parser')

//iniciando o express através do objeto app
 const app = express()
//request - Dados que chegam na API
//response - Dados QUE SAEM DA API




 app.use((request,response,next)=>{
    //Permissão de acesso para liberar quais computadores pode acessar a API
    response.header('Access-Control-Allow-Origin', '*')
    // Permissão de acesso para liberar os verbos da requisição da API

    response.header('Access-Control-Allow-Methods','GET')
    
    app.use(cors())//Ativando as configurações no cors

   next()
 })
//EndPoint para retornar as siglas dos estados
const estudo = require('./MÓDULO/funcoes.js')


 app.get('/v1/lion-school/cursos' , cors(), async function(request,response){
   //Import do arquivo de funções


   let curso = estudo.listarCursos()

  if(curso){
     response.status(200)
      response.json(curso)
  }else{
    response.status(404)
    response.json({'status': 404, 'message' :  'Não foi possível encontrar os dados dos cursos'})

  }
 })
 app.get('/v1/lion-school/alunos' , cors(), async function(request,response){
  //Recebe o parametro(variavel) :sigla pela URL
    let uf = request.params.alunos

    let dados = estudo.listarAluno(uf)

    if(dados){
      response.status(200)
      response.json(dados)
    }else{
      response.status(404)
      response.json({'status': 404, 'message':  'Não foi possível encontrar os dados dos Alunos'})
    }
 })
 app.get('/v1/lion-school/alunos/' ,cors(), async function(request,response){
  let uf = request.query.matricula

  let dados = estudo.MatriculaAluno(uf)

  if(dados){
    response.status(200)
    response.json(dados)
  }else{
    response.status(404)
    response.json({'status': 404, 'message' :  'Não foi possível encontrar os dados da matricula'})
  }
})
app.get('/v1/lion-school/alunos/cursos/' ,cors(), async function(request,response){
  let uf = request.query.curso

  let dados = estudo.filtrocurso(uf)

  if(dados){
    response.status(200)
    response.json(dados)
  }else{
    response.status(404)
    response.json({'status': 404, 'message' :  'Não foi possível encontrar os dados da matricula'})
  }
})
app.get('/v1/lion-school/alunos/filtro' ,cors(), async function(request,response){
  let uf = request.query.status

  let dados = estudo.listarAlunosPorStatus(uf)

  if(dados){
    response.status(200)
    response.json(dados)
  }else{
    response.status(404)
    response.json({'status': 404, 'message' :  'Não foi possível encontrar os dados da matricula'})
  }
})


 app.listen('8080', function(){
   console.log('API aguardando requisições ...')
})
