# 📚 MiExt from Camila Oliveira - Extensão de Leitura Salva

Extensão para navegadores que permite salvar conteúdos do site camilaloliveira.com para ler depois em um popup conveniente enquanto você navega pela internet.

[![GitHub license](https://img.shields.io/github/license/clcmo/MiExt?style=for-the-badge)](https://github.com/clcmo/MiExt)
[![GitHub stars](https://img.shields.io/github/stars/clcmo/MiExt?style=for-the-badge)](https://github.com/clcmo/MiExt/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/clcmo/MiExt?style=for-the-badge)](https://github.com/clcmo/MiExt/network)
[![GitHub issues](https://img.shields.io/github/issues/clcmo/MiExt?style=for-the-badge)](https://github.com/clcmo/MiExt/issues)
[![GitHub donate](https://img.shields.io/github/sponsors/clcmo?color=pink&style=for-the-badge)](https://github.com/sponsors/clcmo)

---

## ✨ Funcionalidades

- 📌 **Salvar conteúdos** diretamente do site camilaloliveira.com
- 📖 **Ler offline** em um popup bonito e funcional
- 🗑️ **Gerenciar** seus conteúdos salvos (remover quando quiser)
- 🎨 **Interface moderna** com design responsivo
- 💾 **Armazenamento local** - seus dados ficam no seu navegador (e nada mais)

## 🖥️ Compatibilidade

- ✅ Google Chrome
- ✅ Microsoft Edge
- ✅ Opera
- ✅ Brave
- ✅ Mozilla Firefox
- ✅ Qualquer navegador baseado em Chromium

---

## 📦 Estrutura do Projeto

```
MiExt/
├── manifest.json
├── popup.html
├── icons/
│   ├── icon16.png
│   ├── icon32.png
│   └── icon180.png
└── src/
    ├── styles/
    │   └── popup.css
    ├── models/
    │   ├── ContentModel.js
    │   └── PopupModel.js
    ├── views/
    │   ├── ContentView.js
    │   └── PopupView.js
    └── controllers/
        ├── ContentController.js
        └── PopupController.js
```

---

## 🚀 Instalação Passo a Passo

### Passo 1: Baixar os Arquivos

1. Clone este repositório ou baixe como ZIP:

   ```bash
   git clone https://github.com/clcmo/MiExt.git
   ```

2. Ou faça download manual e extraia para uma pasta no seu computador

### Passo 2: 🔧 Abrir o Navegador

Abra o navegador onde deseja instalar a extensão.

### Google Chrome / Edge / Opera / Brave

1. **Abra a página de extensões**:
   - Chrome: Digite `chrome://extensions/` na barra de endereços
   - Edge: Digite `edge://extensions/`
   - Opera: Digite `opera://extensions/`
   - Brave: Digite `brave://extensions/`

2. **Ative o Modo Desenvolvedor**:
   - Localize o botão "Modo do desenvolvedor" no canto superior direito
   - Clique para ativar (toggle para ON)

3. **Carregue a extensão**:
   - Clique no botão **"Carregar sem compactação"** ou **"Load unpacked"**
   - Navegue até a pasta da extensão
   - Selecione a pasta (não os arquivos individuais)
   - Clique em "Selecionar pasta"

4. **Pronto!** 🎉
   - A extensão aparecerá na lista
   - Você verá o ícone na barra de ferramentas

### Mozilla Firefox

1. **Abra a página de debugging**:
   - Digite `about:debugging#/runtime/this-firefox` na barra de endereços

2. **Carregue a extensão**:
   - Clique em **"Carregar extensão temporária"** ou **"Load Temporary Add-on"**
   - Navegue até a pasta da extensão
   - Selecione o arquivo `manifest.json`
   - Clique em "Abrir"

3. **Nota**: No Firefox, extensões temporárias são removidas ao fechar o navegador

4. **Pronto!** 🎉

---

## 📖 Como Usar

### 1. Salvando Conteúdo

1. Acesse **camilaloliveira.com**
2. Você verá botões **"📚 Salvar para ler depois"** nos artigos
3. Clique no botão para salvar
4. Uma notificação confirmará que foi salvo ✅

### 2. Lendo Conteúdo Salvo

1. Clique no **ícone da extensão** na barra de ferramentas
2. Você verá a lista de todos os conteúdos salvos
3. Clique em **"📖 Ler agora"** para abrir o conteúdo
4. Use o botão **"← Voltar"** para retornar à lista

### 3. Removendo Conteúdo

1. Abra o popup da extensão
2. Clique em **"🗑️ Remover"** no conteúdo que deseja excluir
3. Confirme a exclusão

---

## 🛠️ Personalização

### Ajustar Seletores de Artigos

Se os botões não aparecerem nos artigos do seu site, você precisa ajustar os seletores:

1. Abra o arquivo `src/views/ContentView.js`
2. Localize o método `findArticles()`
3. Adicione seus seletores CSS personalizados:

```javascript
findArticles() {
  const selectors = [
    'article',
    '.post',
    '.seu-seletor-aqui',  // Adicione seu seletor
    '.outra-classe'        // Pode adicionar vários
  ];
  return document.querySelectorAll(selectors.join(', '));
}
```

### Mudar as Cores

1. Abra `./src/styles/popup.css`
2. Procure por `#667eea` (cor principal roxa)
3. Substitua pela cor desejada em todos os lugares

### Personalizar Mensagens

Edite os arquivos em `./src/views/` para alterar textos e mensagens.

---

## 🐛 Solução de Problemas

### Os botões não aparecem no site

**Solução**: 

- Verifique se você está no site correto (camilaloliveira.com)
- Atualize a página (F5)
- Ajuste os seletores conforme explicado acima

### O popup não abre

**Solução**:

- Verifique se a extensão está ativada
- Recarregue a extensão na página de extensões
- Verifique o console (F12) por erros

### Conteúdos não salvam

**Solução**:

- Verifique as permissões da extensão
- Limpe o cache do navegador
- Reinstale a extensão

### Ícones não aparecem

**Solução**:

- Verifique se os arquivos PNG estão na pasta `icons/`
- Certifique-se que os nomes estão corretos
- Recarregue a extensão

---

## 🏗️ Arquitetura (MVC)

Esta extensão segue o padrão **Model-View-Controller**:

- **Models**: Gerenciam dados e lógica de negócio
- **Views**: Renderizam a interface do usuário
- **Controllers**: Coordenam Models e Views

Veja `ARCHITECTURE.md` para mais detalhes técnicos.

---

## 📝 Desenvolvimento

### Pré-requisitos

- Conhecimento básico de JavaScript
- Navegador moderno
- Editor de código (VS Code, Sublime, etc)

### Estrutura de Desenvolvimento

```bash
# Clone o projeto
git clone [url-do-projeto]

# Faça suas alterações
# Recarregue a extensão no navegador para testar

# Commit suas mudanças
git add .
git commit -m "Descrição das mudanças"
git push
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👩‍💻 Autora

**Camila L. Oliveira**

- Website: [camilaloliveira.com](https://camilaloliveira.com)
- GitHub: [@clcmo](https://github.com/clcmo)

---

## 🙏 Agradecimentos

- Ícones by [Lucide Icons](https://lucide.dev)
- Inspiração no design do [Pocket](https://getpocket.com)

---

## 📞 Suporte

Encontrou um bug ou tem uma sugestão?

- 🐛 [Abra uma issue](https://github.com/clcmo/miext/issues)
- 💬 Entre em contato pelo site
- ⭐ Dê uma estrela no projeto se achou útil!

---

**Feito com 💜 por Camila L. Oliveira**
