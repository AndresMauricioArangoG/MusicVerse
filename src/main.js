
import { defineCustomElements } from '@ionic/core/loader';

import { addIcons } from 'ionicons';

import {
  personCircleOutline,
  searchOutline,
  musicalNotesOutline,
  headsetOutline,
  chevronForwardOutline,
  play,
  homeOutline,
compassOutline,
heartOutline,
albumsOutline,
personOutline
} from 'ionicons/icons';

// Registrar los iconos
addIcons({
  'person-circle-outline': personCircleOutline,
  'home-outline': homeOutline,
'compass-outline': compassOutline,
'heart-outline': heartOutline,
'albums-outline': albumsOutline,
'person-outline': personOutline,
  'search-outline': searchOutline,
  'musical-notes-outline': musicalNotesOutline,
  'headset-outline': headsetOutline,
  'chevron-forward-outline': chevronForwardOutline,
  'play': play
});
defineCustomElements(window);

// Estilos de Ionic
import '@ionic/core/css/core.css';
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';
