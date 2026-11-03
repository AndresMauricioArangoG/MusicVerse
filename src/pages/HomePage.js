
class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="ion-page">

        <ion-header>
          <ion-toolbar>
            <ion-title>MusicVerse</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <div id="container">
            <strong>¡Bienvenido a MusicVerse!</strong>

            <p>
              Comienza a descubrir música y compartir tus gustos.
            </p>
          </div>
        </ion-content>

      </div>
    `;
  }
}

customElements.define('home-page', HomePage);
