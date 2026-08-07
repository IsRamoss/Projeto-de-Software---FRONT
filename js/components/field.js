class Field extends HTMLElement {
    connectedCallback() {
        const icon = this.getAttribute('icon') || 'user';
        const placeholder = this.getAttribute('placeholder') || 'Placeholder padrão';
        const stroke = this.getAttribute('stroke') || 1;
        const eye = this.getAttribute('eye') || 'none'
        this.innerHTML = `
        <div class="field">
            <div class="icon"">
                <svg style = "stroke-width: ${stroke};">
                    <use href="../../assets/icons/sprite.svg#icon-${icon}"></use>
                </svg>
            </div>
            <div class="text">
                <input type="text" placeholder="${placeholder}">
                <label>
                    <svg style = "display: ${eye}">
                        <use href="../../assets/icons/sprite.svg#icon-eye"></use>
                    </svg>
                </label>
            </div>
        </div>
      `;
    }
}

customElements.define('my-field', Field);