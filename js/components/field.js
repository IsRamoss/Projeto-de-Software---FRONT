class Field extends HTMLElement {
    connectedCallback() {
        const icon = this.getAttribute('icon') || 'user';
        const placeholder = this.getAttribute('placeholder') || 'Placeholder padrão';
        const stroke = this.getAttribute('stroke') || 1;
        this.innerHTML = `
        <div class="field">
            <div class="icon"">
                <svg style = "stroke-width: ${stroke};">
                    <use href="../../assets/icons/sprite.svg#icon-${icon}"></use>
                </svg>
            </div>
            <div class="text">
                <input type="text" placeholder="${placeholder}">
            </div>
        </div>
      `;
    }
}

customElements.define('my-field', Field);