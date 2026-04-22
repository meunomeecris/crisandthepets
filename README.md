# 🐾 PataVerde – Site Pet Sitter Grenoble

Votre landing page professionnelle et fun pour votre activité de Pet Sitter à Grenoble !

## Structure du projet

```
petsitter/
├── index.html        ← Page principale
├── css/
│   └── style.css     ← Tous les styles (variables, layout, animations)
├── js/
│   └── main.js       ← Interactions, scroll reveal, easter eggs
└── images/           ← Dossier pour vos photos (à remplir !)
```

## 🛠️ Comment personnaliser

### 1. Vos coordonnées (index.html)
Cherchez et remplacez :
- `+33XXXXXXXXX` → votre numéro de téléphone
- `votre@email.fr` → votre email
- `PataVerde` → votre nom/marque si différent

### 2. Votre photo (index.html)
Dans la section "À propos", remplacez le bloc `.photo-placeholder` par :
```html
<img src="images/votre-photo.jpg" alt="[Votre prénom], Pet Sitter à Grenoble" 
     style="width:100%; height:100%; object-fit:cover; border-radius:28px;" />
```

### 3. Les photos des chats (section témoignages)
Remplacez les emojis `.cat-emoji` par de vraies photos :
```html
<img src="images/monsieur-bisou.jpg" alt="Monsieur Bisou" 
     style="width:80px; height:80px; border-radius:50%; object-fit:cover;" />
```

### 4. Couleurs (css/style.css)
Toutes les couleurs sont dans les variables CSS en haut du fichier :
```css
:root {
  --vert:       #2d8c4e;   ← vert principal
  --vert-clair: #4ab36a;   ← vert clair
  --jaune:      #f5c842;   ← jaune accent
  ...
}
```

### 5. Vos villes (index.html)
Ajoutez ou supprimez des `<span>` dans `.zone-cities` selon votre zone.

## 🐾 Fonctionnalités fun incluses

- **Cliquer sur les emojis de chats** → traduction aléatoire du miaou
- **Konami Code** (↑↑↓↓←→←→BA) → pluie de pattes sur l'écran 🐾
- **Scroll reveal** → les sections apparaissent au défilement
- **Nav sticky** → la navigation se fixe en haut au scroll
- **Formulaire** → confirmation fun à l'envoi

## 🌐 Mettre en ligne sur GitHub Pages

1. Créez un repository public sur GitHub (ex: `petsitter-grenoble`)
2. Uploadez tous les fichiers (gardez la structure)
3. Settings → Pages → Source : `main` branch → `/ (root)`
4. Votre site sera dispo sur `https://votrenom.github.io/petsitter-grenoble`

## 📱 QR Code pour vos adesivos

Une fois votre site en ligne, générez un QR code gratuit sur :
- [qr-code-generator.com](https://qr-code-generator.com)
- [qrcode-monkey.com](https://qrcode-monkey.com) (personnalisable en vert 💚)

Texte pour l'adesivo :
> **La meilleure pet sitter de Grenoble** 🐾
> [QR CODE]
> Scannez pour me rencontrer !

---
Fait avec 💚 pour les animaux de Grenoble
