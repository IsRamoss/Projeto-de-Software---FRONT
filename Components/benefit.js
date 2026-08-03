


class Benefit extends HTMLElement {
    connectedCallback() {
        const icon = this.getAttribute('icon') || 'users';
        const title = this.getAttribute('title') || 'Título padrão';
        const description = this.getAttribute('description') || 'Descrição padrão';
        const color = this.getAttribute('color') || 'purple'
        this.innerHTML = `
        <div class="benefit">
            <div class="circle" style="background-color: var(--${color}-light)">
                <svg style="color: var(--${color}-dark)">
                    <use href="assets/icons/sprite.svg#icon-clock"></use>
                </svg>
            </div>
            <div class="text">
                <h3 class="${color}">${title}</h3>
                <p>${description}</p>
            </div>
        </div>
      `;
    }
}

customElements.define('my-benefit', Benefit);