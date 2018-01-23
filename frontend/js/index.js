import '../sass/index.sass';
import 'normalize.css';

import createMenu from './menu';
let menu = createMenu(['Главная', 'Обо мне', 'Портфолио'], 'menu');
document.body.appendChild(menu);