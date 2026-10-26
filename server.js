const express = require("express");
const app = express();


app.get("/", function(req,res){
    res.send("<h1>Site para exercício do conteúdo de hoje GIT do Ian e do Alan</h1>");
})


   app.get("/sobre", function(req, res){
       res.send("<h1>Sobre</h1><p>Projeto feito por Ian.</p>");
   })

   app.get("/contato", function(req, res){
    res.send("<h1>Contato</h1><p>Entre em contato pelo email: naosei@gmail.com");
   })

   app.get("/gestao", function(req, res){
    res.send("<h1>Gestão</h1><p>Gestão de produtos e serviços.</p>");
   })

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicaÃ§Ã£o na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})
