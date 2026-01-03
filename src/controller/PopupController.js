/**
 * Controller - Coordena Model e View do Popup
 */
class PopupController {
    constructor() {
        this.model = new PopupModel();
        this.view = new PopupView();
        this.init();
    }

    /**
     * Inicializa o controller
     */
    async init() {
        this.view.showLoading();
        this.view.setupBackButton(() => this.handleBack());
        await this.loadAndRender();
    }

    /**
     * Carrega e renderiza conteúdos
     */
    async loadAndRender() {
        try {
            await this.model.loadContents();
            const contents = this.model.getContents();

            // Adiciona data formatada a cada conteúdo
            const contentsWithFormattedDate = contents.map(content => ({
                ...content,
                formattedDate: this.model.formatDate(content.savedAt)
            }));

            this.view.renderList(
                contentsWithFormattedDate,
                (index) => this.handleRead(index),
                (index) => this.handleDelete(index)
            );
        } catch (error) {
            console.error('Erro ao carregar conteúdos:', error);
        }
    }

    /**
     * Manipula leitura de conteúdo
     */
    handleRead(index) {
        const content = this.model.getContentByIndex(index);
        if (content) {
            this.view.showReading(content);
        }
    }

    /**
     * Manipula exclusão de conteúdo
     */
    async handleDelete(index) {
        const confirmed = this.view.confirm('Tem certeza que deseja remover este conteúdo?');

        if (confirmed) {
            try {
                await this.model.deleteContent(index);
                await this.loadAndRender();
            } catch (error) {
                console.error('Erro ao deletar conteúdo:', error);
                alert('Erro ao remover conteúdo. Tente novamente.');
            }
        }
    }

    /**
     * Manipula volta para lista
     */
    handleBack() {
        this.view.showList();
    }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new PopupController();
});