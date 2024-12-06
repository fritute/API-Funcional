
/******************************************************************
 * Objetivo: Manipular dados utilizando ARRAY e JSON
 * Data:27/09/2024
 * Autor : Gustavo Zumba
 * versão 1.0
 ******************************************************************/
const { log } = require('console')
var alunos = require('./alunos')
const cursos = require('./cursos')
var retornaraluno = alunos.alunos
var retornarcurso = cursos.cursos
 
const listarCursos = function(){
    return cursos
}

const listarAluno = function(){
    let objetoaluno = {'alunos': retornaraluno}
    return objetoaluno
}
const MatriculaAluno = function(matricula){
    let numeroMat = matricula
    let retorno = false

    retornaraluno.forEach(function(aluno){
        if(aluno.matricula == numeroMat){
            retorno = aluno
        }
    })
    return retorno
}
const filtrocurso = function(cursonome){
    let nomecurso = cursonome
    let retorno = {curso : nomecurso, alunos :[]}

    retornaraluno.forEach(function(aluno){
        aluno.curso.forEach(function(curso){})
        if(aluno.curso == nomecurso){
            retorno.alunos.push(aluno)
        }
    })
    return retorno
}
const listarAlunosPorStatus = function(status) {
    let alunosFiltrados = retornaraluno.filter(function(aluno) {
        return aluno.status === status
    });
    return alunosFiltrados
}
const listarAlunosPorCursoEStatus = function(nomeCurso, status) {
    let alunosFiltrados = retornaraluno.filter(function(aluno) {
        console.log(`Verificando aluno: ${aluno.nome}, Curso: ${aluno.curso}, Status: ${aluno.status}`)
        return aluno.curso.includes(nomeCurso) && aluno.status === status
    })
    return alunosFiltrados
}
const listarAlunosPorCursoEAnodeConclusao = (nomeCurso, anoConclusao) => {
    console.log(retornaraluno)
    return retornaraluno.filter(aluno => {
        
        if (aluno.curso === undefined || aluno.anoConclusao === undefined) {
            console.log(`Aluno sem curso ou ano de conclusão: ${JSON.stringify(aluno)}`)
            return false
        }
        
        console.log(`Verificando aluno: ${aluno.nome}, Curso: ${aluno.curso}, Ano de Conclusão: ${aluno.anoConclusao}`)
        return aluno.curso.includes(nomeCurso) && aluno.anoConclusao === anoConclusao
    })
}



module.exports = {
    listarCursos,
    listarAluno,
    MatriculaAluno,
    filtrocurso,
    listarAlunosPorStatus,
    listarAlunosPorCursoEStatus,
    listarAlunosPorCursoEAnodeConclusao
}










//console.log(listarAlunosPorCursoEAnodeConclusao('RDS', 2023))
//console.log(listarAlunosPorCursoEStatus('RDS', 'Exame'));
//console.log(listarAlunosPorStatus('Finalizado'))
//console.log(filtrocurso('RDS'))
//console.log(MatriculaAluno('20151001001'))
//console.log(listarAluno())
//console.log(listarCursos())