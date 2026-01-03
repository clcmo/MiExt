/**
 * View - Responsável pela renderização da interface no site
 */
class ContentView {
    constructor() {
        this.buttonClass = 'save-for-later-btn';
    }

    /**
     * Cria o botão de salvar
     */
    createSaveButton() {
        const btn = document.createElement('button');
        btn.className = this.buttonClass;
        btn.innerHTML = '📚 Salvar para ler depois';
        btn.style.cssText = `
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      margin: 10px 0;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    `;

        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px)';
            btn.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
            btn.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });

        return btn;
    }

    /**
     * Adiciona botão ao artigo
     */
    addButtonToArticle(articleElement, onSaveCallback) {
        if (articleElement.querySelector(`.${this.buttonClass}`)) {
            return;
        }

        const btn = this.createSaveButton();
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            onSaveCallback(articleElement);
        });

        articleElement.insertBefore(btn, articleElement.firstChild);
    }

    /**
     * Encontra todos os artigos na página
     */
    findArticles() {
        const selectors = [
            'article',
            '.post',
            '.content-item',
            '.blog-post',
            '.article',
            '[role="article"]'
        ];

        return document.querySelectorAll(selectors.join(', '));
    }

    /**
     * Mostra mensagem de sucesso
     */
    showSuccessMessage(message = '✅ Conteúdo salvo com sucesso!') {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #4CAF50;
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10000;
      font-weight: 600;
      animation: slideIn 0.3s ease;
    `;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    /**
     * Mostra mensagem de erro
     */
    showErrorMessage(message = '❌ Erro ao salvar conteúdo') {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #f44336;
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10000;
      font-weight: 600;
    `;

        document.body.appendChild(toast);

        setTimeout(() => toast.remove(), 3000);
    }

    /**
     * Adiciona estilos de animação
     */
    injectStyles() {
        if (document.getElementById('save-extension-styles')) return;

        const style = document.createElement('style');
        style.id = 'save-extension-styles';
        style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
    `;
        document.head.appendChild(style);
    }
}