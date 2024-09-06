const multer  = require('multer')

//Configurando o multer para armazenar os arquivos na memória temporariamente(buffer)
const storage = multer.memoryStorage()

//Criando uma instancia do multer com a configuração de armazenamento definida no código acima
const upload = multer({storage: storage})

//Exportar a instância criada
module.exports = upload