const express = require('express');
const app = express();

// Configuration de EJS
app.set('view engine', 'ejs');

// Définir le dossier des fichiers statiques (CSS, images)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('accueilTest', { title: 'Accueil' });
});

app.get('/test', (req, res) => {
    res.render('test', { title: 'À propos' });
});

// Démarrer le serveur
app.listen(3000, () => {
    console.log('Serveur en cours sur http://localhost:3000');
});
