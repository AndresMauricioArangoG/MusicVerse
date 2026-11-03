
class TabsPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-tabs no-router>

        <ion-tab tab="inicio" component="home-page"></ion-tab>

        <ion-tab tab="explorar">
          <div class="ion-page">
            <ion-header>
              <ion-toolbar>
                <ion-title>Explorar</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
              <h2>Explorar música</h2>
            </ion-content>
          </div>
        </ion-tab>

        <ion-tab tab="favoritos">
          <div class="ion-page">
            <ion-header>
              <ion-toolbar>
                <ion-title>Favoritos</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
              <h2>Mis favoritos</h2>
            </ion-content>
          </div>
        </ion-tab>

        <ion-tab tab="playlists">
          <div class="ion-page">
            <ion-header>
              <ion-toolbar>
                <ion-title>Playlists</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
              <h2>Mis playlists</h2>
            </ion-content>
          </div>
        </ion-tab>

        <ion-tab tab="perfil">
          <div class="ion-page">
            <ion-header>
              <ion-toolbar>
                <ion-title>Perfil</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
              <h2>Mi perfil</h2>
            </ion-content>
          </div>
        </ion-tab>

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="inicio">
            <ion-label>Inicio</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="explorar">
            <ion-label>Explorar</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="favoritos">
            <ion-label>Favoritos</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="playlists">
            <ion-label>Playlists</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="perfil">
            <ion-label>Perfil</ion-label>
          </ion-tab-button>
        </ion-tab-bar>

      </ion-tabs>
    `;
  }
}

customElements.define('tabs-page', TabsPage);
