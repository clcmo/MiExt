/**
 * Controller - Coordena Model e View
 */
class ContentController {
    constructor() {
        this.model = new ContentModel();
        this.view = new ContentView();
        this.init();
    }

    /**
     * Inicializa o controller
     */
    init() {
        this.view.injectStyles();

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupArticles());
        } else {
            this.setupArticles();
        }

        // Observa mudanças no DOM para novos artigos carregados dinamicamente
        this.observeDOMChanges();
    }

    /**
     * Configura botões em todos os artigos
     */
    setupArticles() {
        const articles = this.view.findArticles();
        articles.forEach(article => {
            this.view.addButtonToArticle(article, (articleEl) => {
                this.handleSave(articleEl);
            });
        });
    }

    /**
     * Manipula o salvamento de conteúdo
     */
    async handleSave(articleElement) {
        try {
            const contentData = this.model.extractContentData(articleElement);
            await this.model.save(contentData);
            this.view.showSuccessMessage();
        } catch (error) {
            console.error('Erro ao salvar:', error);
            this.view.showErrorMessage();
        }
    }

    /**
     * Observa mudanças no DOM para conteúdo carregado dinamicamente
     */
    observeDOMChanges() {
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.addedNodes.length) {
                    this.setupArticles();
                }
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}

// Inicializa o controller quando o script carregar
new ContentController();