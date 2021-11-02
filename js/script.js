//alert("Criado por Rodolfo Rondinely contatos 9715-93195 ") 

function fundo() {
    
    
    if (document.querySelector("#whitecolor").checked){
        document.querySelector("body").style.backgroundColor="white"
        document.querySelector("body").style.color="black"

    }
    else if(document.querySelector("#blackcolor").checked){
        document.querySelector("body").style.backgroundColor="black"
        document.querySelector("body").style.color="white"

        

}
}
document.querySelector(".navest").addEventListener("mousemove",function(){
    
    
    let t =document.querySelector(".navest")
    t.style.height="150px"
    t.style.backgroundColor="#ccc"
    document.querySelector("h1").style.marginTop="170px"

    let es = document.querySelectorAll(".estru ul li")

    for( let i in es ){
        es[i].style.display='flex'
    }

 })
 document.querySelector(".navest").addEventListener("mouseout",function(){
    
    
    let t =document.querySelector(".navest")
    t.style.height="40px"
    t.style.backgroundColor="#ccc"
    document.querySelector("h1").style.marginTop="60px"
    
    let es = document.querySelectorAll(".estru ul li")

    for( let i in es ){
        es[i].style.display='none'
    }



 })


 





/* 
Comandos do Git
	git version <- versão do git
	git init <- cria repositório do git
	git init --bare <- cria o repositorio no diretorio atual
	git status <- verifica o status do repositorio

	git remote add "nome do repositorio" "caminho do repositorio <- adiciona repositorio remoto usar "" no endereço
	git remote -v <- vizualisa o repositorio remoto 
	git clone url <- copia o repositorio do github
	git push "nome do repositorio remoto" "branch" <- envia o repositorio local para o repositorio remoto
	git pull "nome do repositorio remoto" "branch" <- busca repositorio remoto para o repositorio local
		
	git config --global user.name "Nome doo Criador" <- Adiciona o nome do desenvolvedor
	git config --global user.email "email@do desenvolvedor" <- adiciona o e-mail do dev
	git config -l <- lista as configuração do git
	git config --global core.excludesfile ~/.gitignore <- cria um gitignore pra todo o computador
	git config --global core.editor <- escolhe o editor do git
	
	git add arquivo <- adiciona o arquivo na area de trabalho do git
	git commit -m "mensagem de alteração" <- add o arquivo da area de trabalho do git pro repositorio com comentario
	git commit -a -m "mensagem de alteração" <- adiciona arquivo direto no repositorio com comentario
	git commit <- adiciona o comentario pelo editor
	git add . <- adiciona todos or arquivos na area de trabalho do git
	git add --all <- adiciona e remove arquivos de uma vez
	git add -f <- adiciona arquivos que estão no gitignore
	git rm arquivo <- remove o arquivo do git
	git rm -f arquivo <- força a remoçao do arquivo
	git rm -rf arquivo --cached <- remove do repositorio e area de trabalho
	
	git log <- ver o historico do repositório
	git log --name-status <- ver o historico mais o nome do arquivo
	git log --oneline <- historico Resumido
	git log --abbrev-commit <- abrevia o commit
	git log --stat <- historico com estatisticas
	git log -p <- historico com alterações no arquivo
	git log -p - 4 <- historico com alterações no arquivo dos 4 ultimos commits 

	git diff <- mostra as modificaões do arquivo
	git diff --staged <- mostra modificações da area de trabalho
	git diff arquivo <- mostra a modificação do arquivo
	git diff 7 digitos do commit <- comprar o comite digitado com o atual
	git diff commit1 cammit2 <- comparação entre os commits
	echo "alexandre" >> .gitignore <- adiciona os arquivos pra ser ignorado
	.gitignore <- lista de aquivos ignorados

	git branch <- mostra a branch
	git branch nome <- cria uma branch "nome"
	git branch -d nome <- apaga a branch "nome"
	git branch -m "nome" <- renomeia a branch
	git merge css <- coloca a branch css dentro da branch ativa
	git checkout nome <- muda pra branch "nome"
	git checkout -b <- cria a branch e entra na branch
	git checkout --orphan "nome" <- cria umma branch em branco */