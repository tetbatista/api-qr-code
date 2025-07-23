# 📸 API de Geração de QR Code

API simples e funcional para gerar QR Codes a partir de qualquer texto ou link.  
Desenvolvida com **Node.js**, **Express** e **TypeScript**.

## 🛠️ Tecnologias

- Node.js
- TypeScript
- Express

---

## 📁 Estrutura do projeto
```text
src/
├── routes/
│   └── qrcode.ts
├── server.ts
tmp/
.env
.gitignore
package.json
tsconfig.json
```

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/) (já vem com o Node.js)

## 🚀 Como rodar o projeto

```bash
git clone https://github.com/tetbatista/api-qr-code.git
cd api-qr-code
```
Instale as dependências:
```bash
npm install
```

Inicie o projeto com:
```bash
npm run dev
```

**A API estará disponível em http://localhost:3000**

## ⚙️ Como testar a API:
Você pode testar usando o Postman, Insomnia ou qualquer cliente HTTP/

Endpoint
POST http://localhost:3000/qrcode

Body (JSON):
```text

{
  "text": "https://github.com/tetbatista"
}
```


Resposta:
- A imagem PNG do QR Code gerado (pode ser exibida ou baixada diretamente pelo navegador)

---

📱 Dica extra: Escaneie o QR Code!
Após receber a imagem, você pode escanear o QR Code com a câmera do seu celular ou um aplicativo leitor de QR Codes para abrir o link ou texto codificado. 
Isso facilita o acesso rápido sem precisar digitar URLs manualmente!


