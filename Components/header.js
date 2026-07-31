class HeaderPadrao extends HTMLElement {
    connectedCallback() {   
      this.innerHTML = `
          <div class="logos">
              <img src="imgs/logos/logoL.png" alt="">
              <img src="imgs/logos/logoH.png" alt="">
          </div>
          <div class="botoes">
              <button class="botao-padrao" id= "vazio">
                  <p>Entrar</p>
              </button>
              <button class="botao-padrao">
                  <p>Criar Conta</p>
              </button>
          </div>
      `;
    }
  }

  customElements.define('header-padrao', HeaderPadrao);