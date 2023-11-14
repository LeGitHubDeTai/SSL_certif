/*-----------------------------------------------------------------------------------------------------------\
|  _____     _   _____ _             _ _          _____  _____  _____  __      _______  _____  _____  _____  |
| |_   _|   (_) /  ___| |           | (_)        / __  \|  _  |/ __  \/  |    / / __  \|  _  |/ __  \|____ | |
|   | | __ _ _  \ `--.| |_ _   _  __| |_  ___    `' / /'| |/' |`' / /'`| |   / /`' / /'| |/' |`' / /'    / / |
|   | |/ _` | |  `--. \ __| | | |/ _` | |/ _ \     / /  |  /| |  / /   | |  / /   / /  |  /| |  / /      \ \ |
|   | | (_| | | /\__/ / |_| |_| | (_| | | (_) |  ./ /___\ |_/ /./ /____| |_/ /  ./ /___\ |_/ /./ /___.___/ / |
|   \_/\__,_|_| \____/ \__|\__,_|\__,_|_|\___/   \_____/ \___/ \_____/\___/_/   \_____/ \___/ \_____/\____/  |
\-----------------------------------------------------------------------------------------------------------*/
const fs = require('fs');
const crypto = require('crypto');

// Récupérer les arguments de la ligne de commande
const args = process.argv.slice(2);

// Créer un objet pour stocker les arguments
const arguments = {};

// Parcourir les arguments de la ligne de commande
args.forEach((arg) => {
    // Vérifier si l'argument commence par "--"
    if (arg.startsWith("--")) {
        // Diviser l'argument en nom et en valeur en utilisant le "=" comme séparateur
        const parts = arg.split("=");
        if (parts.length === 2) {
            const key = parts[0].substring(2); // Supprimer le "--"
            const value = parts[1];
            arguments[key] = value;
        }
    }
});

const privateKeyFile = arguments.private || 'private-key.pem';
const publicKeyFile = arguments.public || 'public-key.pem';

// Générer une paire de clés RSA
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
});

// Enregistrer la clé privée dans un fichier
fs.writeFileSync(privateKeyFile, privateKey);
console.log('Clé privée enregistrée dans', privateKeyFile);

// Enregistrer la clé publique dans un fichier
fs.writeFileSync(publicKeyFile, publicKey);
console.log('Clé publique enregistrée dans', publicKeyFile);
