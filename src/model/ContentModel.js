/**
 * Model - Responsável pela lógica de dados e persistência
 */
class ContentModel {
    constructor() {
        this.storageKey = 'savedContents';
    }

    /**
     * Salva um novo conteúdo
     */
    async save(contentData) {
        try {
            const savedItem = {
                id: Date.now(),
                title: contentData.title.trim(),
                content: contentData.content,
                url: contentData.url,
                savedAt: new Date().toISOString()
            };

            const contents = await this.getAll();
            contents.unshift(savedItem);

            return new Promise((resolve, reject) => {
                chrome.storage.local.set({ [this.storageKey]: contents }, () => {
                    if (chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError);
                    } else {
                        resolve(savedItem);
                    }
                });
            });
        } catch (error) {
            console.error('Erro ao salvar conteúdo:', error);
            throw error;
        }
    }

    /**
     * Obtém todos os conteúdos salvos
     */
    async getAll() {
        return new Promise((resolve) => {
            chrome.storage.local.get([this.storageKey], (result) => {
                resolve(result[this.storageKey] || []);
            });
        });
    }

    /**
     * Obtém um conteúdo específico por ID
     */
    async getById(id) {
        const contents = await this.getAll();
        return contents.find(item => item.id === id);
    }

    /**
     * Remove um conteúdo por ID
     */
    async delete(id) {
        const contents = await this.getAll();
        const filtered = contents.filter(item => item.id !== id);

        return new Promise((resolve, reject) => {
            chrome.storage.local.set({ [this.storageKey]: filtered }, () => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(true);
                }
            });
        });
    }

    /**
     * Limpa todos os conteúdos salvos
     */
    async clear() {
        return new Promise((resolve, reject) => {
            chrome.storage.local.set({ [this.storageKey]: [] }, () => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(true);
                }
            });
        });
    }

    /**
     * Extrai dados do artigo DOM
     */
    extractContentData(articleElement) {
        const title = articleElement.querySelector('h1, h2, h3')?.textContent || 'Sem título';
        const content = articleElement.innerHTML;
        const url = window.location.href;

        return { title, content, url };
    }
}