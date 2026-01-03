/**
 * Model - Gerencia dados no popup
 */
class PopupModel {
    constructor() {
        this.storageKey = 'savedContents';
        this.contents = [];
    }

    /**
     * Carrega todos os conteúdos
     */
    async loadContents() {
        return new Promise((resolve) => {
            chrome.storage.local.get([this.storageKey], (result) => {
                this.contents = result[this.storageKey] || [];
                resolve(this.contents);
            });
        });
    }

    /**
     * Obtém todos os conteúdos
     */
    getContents() {
        return this.contents;
    }

    /**
     * Obtém conteúdo por índice
     */
    getContentByIndex(index) {
        return this.contents[index];
    }

    /**
     * Remove conteúdo por índice
     */
    async deleteContent(index) {
        this.contents.splice(index, 1);

        return new Promise((resolve, reject) => {
            chrome.storage.local.set({ [this.storageKey]: this.contents }, () => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(true);
                }
            });
        });
    }

    /**
     * Formata data para exibição
     */
    formatDate(isoDate) {
        const date = new Date(isoDate);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    /**
     * Verifica se há conteúdos salvos
     */
    hasContents() {
        return this.contents.length > 0;
    }

    /**
     * Obtém contagem de conteúdos
     */
    getCount() {
        return this.contents.length;
    }
}