# 📜 Générateur de Clés RSA 🧑‍💻

Ce script Node.js permet de générer une paire de clés RSA (clé privée et clé publique) et de les enregistrer dans des fichiers.

## 🚀 Utilisation

1. Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre machine.
2. Exécutez le script en utilisant la commande suivante dans votre terminal :

    ```bash
    npm start --private=chemin/vers/clé-privée.pem --public=chemin/vers/clé-publique.pem
    ```

3. Les clés seront générées et enregistrées dans les fichiers spécifiés ou dans `private-key.pem` et `public-key.pem` par défaut.

## 📁 Fichiers Générés

- La clé privée est enregistrée dans le fichier : `private-key.pem`
- La clé publique est enregistrée dans le fichier : `public-key.pem`

## 📝 Remarque

- Si aucun chemin de fichier n'est spécifié, les fichiers par défaut seront utilisés.
- Les clés générées sont au format PEM.

Happy coding! 🚀
