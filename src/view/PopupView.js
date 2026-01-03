/**
 * View - Renderiza a interface do popup
 */
class PopupView {
  constructor() {
    this.listView = document.getElementById('listView');
    this.emptyState = document.getElementById('emptyState');
    this.savedList = document.getElementById('savedList');
    this.readingView = document.getElementById('readingView');
    this.readingContent = document.getElementById('readingContent');
    this.backBtn = document.getElementById('backBtn');
  }

  /**
   * Renderiza a lista de conteúdos
   */
  renderList(contents, onRead, onDelete) {
    if (contents.length === 0) {
      this.showEmptyState();
      return;
    }

    this.hideEmptyState();
    
    this.savedList.innerHTML = contents.map((item, index) => `
      <div class="saved-item">
        <h3>${this.escapeHtml(item.title)}</h3>
        <div class="saved-item-meta">
          Salvo em ${item.formattedDate}
        </div>
        <div class="saved-item-actions">
          <button class="btn btn-read" data-index="${index}">
            📖 Ler agora
          </button>
          <button class="btn btn-delete" data-index="${index}">
            🗑️ Remover
          </button>
        </div>
      </div>
    `).join('');

    // Adiciona event listeners
    this.savedList.querySelectorAll('.btn-read').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        onRead(index);
      });
    });

    this.savedList.querySelectorAll('.btn-delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        onDelete(index);
      });
    });
  }

  /**
   * Mostra estado vazio
   */
  showEmptyState() {
    this.emptyState.style.display = 'block';
    this.savedList.innerHTML = '';
  }

  /**
   * Esconde estado vazio
   */
  hideEmptyState() {
    this.emptyState.style.display = 'none';
  }

  /**
   * Mostra view de leitura
   */
  showReading(content) {
    this.readingContent.innerHTML = `
      <h2>${this.escapeHtml(content.title)}</h2>
      <div style="margin-bottom: 20px; color: #999; font-size: 12px;">
        <a href="${content.url}" target="_blank" style="color: #667eea; text-decoration: none;">
          🔗 Abrir original
        </a>
      </div>
      <div class="content-body">
        ${content.content}
      </div>
    `;

    this.listView.style.display = 'none';
    this.readingView.classList.add('active');
  }

  /**
   * Mostra view de lista
   */
  showList() {
    this.listView.style.display = 'block';
    this.readingView.classList.remove('active');
  }

  /**
   * Configura botão de voltar
   */
  setupBackButton(onBack) {
    this.backBtn.addEventListener('click', onBack);
  }

  /**
   * Mostra confirmação
   */
  confirm(message) {
    return window.confirm(message);
  }

  /**
   * Escapa HTML para prevenir XSS
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Mostra loading
   */
  showLoading() {
    this.savedList.innerHTML = '<div style="text-align: center; padding: 40px;">Carregando...</div>';
  }
}