# Louis-Marie Audubert - Site Vitrine

Site officiel de Louis-Marie Audubert, acteur et musicien français.

## 🚀 Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **React 19**

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build

# Exporter pour déploiement statique
npm run build
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000).

## 📁 Structure du Projet

```
├── app/                    # Pages Next.js (App Router)
│   ├── bio/               # Page biographie
│   ├── cinema/            # Page cinéma
│   ├── theatre/           # Page théâtre
│   ├── musique/           # Page musique
│   ├── photos/            # Page galerie photo
│   └── infos/             # Page contact & actualités
├── components/            # Composants réutilisables
│   ├── Header.tsx        # Navigation principale
│   ├── Footer.tsx        # Pied de page
│   ├── PageHeader.tsx    # En-tête de page
│   ├── Section.tsx       # Wrapper de section
│   ├── Card.tsx          # Carte cliquable
│   ├── Timeline.tsx      # Timeline filmographie/théâtre
│   ├── GalleryGrid.tsx   # Grille galerie photo
│   ├── Lightbox.tsx      # Lightbox photo
│   ├── EmbedPlayer.tsx   # Lecteurs embed (YouTube, Spotify, etc.)
│   ├── Badge.tsx         # Badge/tag
│   └── CTA.tsx           # Bouton d'action
├── data/                 # Données centralisées
│   └── profile.ts        # Toutes les données du site
└── public/               # Assets statiques
```

## 🎨 Design System

Le site utilise le style **"Midnight Editorial"** avec :

- **Couleurs :**
  - Background primaire : `#050505` (Deep Black)
  - Background secondaire : `#0a0a0a` (Vantablack)
  - Foreground/Text : `#FFFFFF` (Pure White)
  - Accent Gold : `#DC965A`
  - Grays : `#242325`, `#B3B3B3`, `#C8C8C8`

- **Typographie :**
  - Display : 'Clash Display' (titres)
  - Body : 'Inter' (texte)

- **Animations :**
  - Reveal-up : `cubic-bezier(0.22, 1, 0.36, 1)`, 1s
  - Hover scale : 5-10% sur 2s

## 📝 Contenu

Toutes les données sont centralisées dans `data/profile.ts`. Pour modifier le contenu :

1. Ouvrir `data/profile.ts`
2. Modifier les objets correspondants (bio, cinema, theatre, music, etc.)
3. Les changements se reflètent automatiquement sur toutes les pages

## 🖼️ Images

Les images utilisent Unsplash en placeholder. Pour les remplacer :

1. Ajouter vos images dans `public/images/`
2. Mettre à jour les URLs dans `data/profile.ts`
3. Optimiser les images (format WebP recommandé)

## 🚢 Déploiement

Le site est configuré pour un export statique :

```bash
npm run build
# Le dossier 'out' contient le site statique
```

**Options de déploiement :**
- Vercel (recommandé)
- Netlify
- GitHub Pages
- Tout hébergeur de fichiers statiques

## ♿ Accessibilité

- Navigation clavier complète
- Focus visible sur tous les éléments interactifs
- Textes alternatifs sur les images
- Contraste WCAG AA conforme
- Structure sémantique HTML5

## 📱 Responsive

- Mobile-first approach
- Navigation mobile avec menu hamburger
- Grilles adaptatives
- Images optimisées par breakpoint

## 🎬 Composants Spécifiques

### Timeline
Utilisée pour la filmographie et les productions théâtrales avec images et catégories.

### GalleryGrid
Grille responsive avec filtres par catégorie et lightbox intégrée.

### EmbedPlayer
Supporte YouTube, Vimeo, Spotify et SoundCloud.

## 🔧 Personnalisation

### Couleurs
Modifier dans `tailwind.config.ts` :
```typescript
colors: {
  'lma-dark': '#242325',
  'lma-gold': '#DC965A',
  // ...
}
```

### Polices
Ajouter dans `app/layout.tsx` et `tailwind.config.ts`

## 📄 Licence

Propriété de Louis-Marie Audubert. Tous droits réservés.
