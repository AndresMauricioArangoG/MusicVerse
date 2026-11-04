import './HomePage.css';

class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="ion-page home-page">

        <ion-content class="home-content" fullscreen>

          <div class="home-screen">
            <header class="home-header">
              <div class="brand">
                <span class="brand-name">MusicVerse</span>
                <span class="brand-subtitle">YOUR MUSIC UNIVERSE</span>
              </div>

              <button class="profile-button" aria-label="Perfil">
                <ion-icon name="person-circle-outline"></ion-icon>
              </button>
            </header>

            <section class="welcome-section">
              <span class="section-eyebrow">BIENVENIDO A TU UNIVERSO</span>

              <h1>
                Encuentra tu próximo
                <span>soundtrack.</span>
              </h1>

              <p>
                La música que acompaña cada momento de tu historia.
              </p>
            </section>

            <section class="search-section">
              <div class="search-box">
                <ion-icon name="search-outline"></ion-icon>
                <input
                  type="search"
                  placeholder="Canciones, artistas o álbumes..."
                  aria-label="Buscar música"
                />
              </div>
            </section>

            <section class="hero-banner">
              <div class="hero-content">
                <span class="hero-tag">DESCUBRE NUEVOS SONIDOS</span>

                <h2>
                  Cada canción
                  cuenta una historia.
                </h2>

                <p>Encuentra música que conecte contigo.</p>
              </div>

              <div class="hero-decoration"></div>
            </section>

            <!-- Recomendaciones -->
            <section class="content-section">
              <div class="section-heading">
                <h2>Para descubrir</h2>
                <button class="see-more">Ver más</button>
              </div>

              <div class="music-grid">

                <article class="music-card">
                  <div class="cover cover-purple">
                    <span>01</span>
                    <ion-icon name="musical-notes-outline"></ion-icon>
                  </div>

                  <h3>Midnight Dreams</h3>
                  <p>Artista independiente</p>
                </article>

                <article class="music-card">
                  <div class="cover cover-red">
                    <span>02</span>
                    <ion-icon name="headset-outline"></ion-icon>
                  </div>

                  <h3>Lost in the Night</h3>
                  <p>Artista independiente</p>
                </article>

              </div>
            </section>

            <!-- Playlists -->
            <section class="content-section playlist-section">
              <div class="section-heading">
                <h2>Tus playlists</h2>
                <button class="see-more">Ver todas</button>
              </div>

              <div class="playlist-card">
                <div class="playlist-icon">
                  <ion-icon name="musical-notes-outline"></ion-icon>
                </div>

                <div class="playlist-info">
                  <h3>Mis favoritos</h3>
                  <p>Tu colección musical</p>
                </div>

                <ion-icon
                  class="playlist-arrow"
                  name="chevron-forward-outline">
                </ion-icon>
              </div>
            </section>

            <!-- Reproductor de muestra -->
            <section class="mini-player">
              <div class="player-cover">
                <ion-icon name="musical-notes-outline"></ion-icon>
              </div>

              <div class="player-info">
                <h3>Selecciona una canción</h3>
                <p>Tu música te espera</p>
              </div>

              <button class="player-control" aria-label="Reproducir">
                <ion-icon name="play"></ion-icon>
              </button>
            </section>

          </div>
        </ion-content>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);