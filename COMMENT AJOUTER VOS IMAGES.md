# Comment ajouter vos propres images

## 📁 Méthode recommandée : Dossier `public/`

### 1. Organiser vos images

Créez un dossier pour organiser vos images :

```bash
public/
├── images/
│   ├── hero/              # Images pour la page d'accueil
│   ├── bio/               # Photos de bio
│   ├── cinema/            # Affiches de films
│   ├── theatre/           # Photos de théâtre
│   ├── musique/           # Covers albums
│   └── galerie/           # Photos pour la galerie
```

### 2. Ajouter vos images

Copiez vos images dans les dossiers correspondants. Par exemple :

```
public/images/hero/hero-bg.jpg
public/images/bio/portrait.jpg
public/images/cinema/film1.jpg
```

### 3. Mettre à jour les URLs dans `data/profile.ts`

Remplacez les URLs Unsplash par les chemins de vos images :

**Avant :**
```typescript
image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
```

**Après :**
```typescript
image: "/images/bio/portrait.jpg"
```

### 4. Exemples concrets

#### Pour la hero section (page d'accueil)

Dans `app/page.tsx`, ligne 16 :
```typescript
<Image
  src="/images/hero/hero-bg.jpg"  // Remplacez par votre image
  alt="Louis-Marie Audubert"
  fill
  className="object-cover opacity-30"
  priority
  sizes="100vw"
/>
```

#### Pour la photo de bio

Dans `app/page.tsx`, ligne 73 :
```typescript
<Image
  src="/images/bio/portrait.jpg"  // Remplacez par votre photo
  alt={profile.name}
  fill
  className="object-cover"
  sizes="(max-width: 1024px) 100vw, 33vw"
/>
```

#### Pour les photos de galerie

Dans `data/profile.ts`, modifiez le tableau `photos` :
```typescript
photos: [
  {
    id: 1,
    url: "/images/galerie/photo1.jpg",  // Votre image
    category: "Portrait",
    title: "Portrait studio 2024"
  },
  // ...
],
```

## 🖼️ Optimisation des images

### Formats recommandés

- **WebP** : Meilleur rapport qualité/poids (recommandé)
- **JPEG** : Pour les photos avec beaucoup de détails
- **PNG** : Pour les images avec transparence

### Tailles recommandées

- **Hero background** : 1920x1080px minimum
- **Photos bio** : 800x1000px (ratio 4:5)
- **Galerie** : 800x1000px (ratio 4:5)
- **Théâtre/Cinéma** : 600x450px (ratio 4:3)

### Compression

Utilisez des outils en ligne pour compresser vos images :
- [TinyPNG](https://tinypng.com/) - Gratuit, jusqu'à 5MB
- [Squoosh](https://squoosh.app/) - Google, gratuit
- [ImageOptim](https://imageoptim.com/) - Mac, gratuit

## ⚡ Next.js Image Optimization

Next.js optimise automatiquement vos images avec le composant `Image`. Pas besoin de pré-comprimer, mais c'est mieux de le faire quand même.

Le composant va :
- Convertir en WebP automatiquement
- Servir la bonne taille selon l'écran
- Lazy-loading automatique

## 📝 Check-list pour vos images

1. ✅ Copier les images dans `public/images/`
2. ✅ Renommer avec des noms simples (pas d'espaces)
3. ✅ Compresser les images
4. ✅ Mettre à jour les URLs dans `data/profile.ts`
5. ✅ Tester que les images s'affichent correctement

## 🎯 Exemple complet

Disons que vous avez une photo `louis-marie-portrait.jpg` :

1. Copiez-la dans `public/images/bio/louis-marie-portrait.jpg`
2. Dans `data/profile.ts`, modifiez :
   ```typescript
   bio: {
     // ...
     photo: "/images/bio/louis-marie-portrait.jpg"
   }
   ```
3. Dans `app/page.tsx`, utilisez :
   ```typescript
   <Image
     src={profile.bio.photo}  // ou directement "/images/bio/louis-marie-portrait.jpg"
     alt={profile.name}
     // ...
   />
   ```

## 🔧 Problèmes fréquents

**L'image ne s'affiche pas ?**
- Vérifiez que le chemin commence par `/`
- Vérifiez que l'image est bien dans `public/`
- Regardez la console (F12) pour les erreurs

**L'image est floue ?**
- Utilisez une image plus grande
- Vérifiez le ratio de l'image

**L'image est trop lourde ?**
- Compressez avec TinyPNG
- Réduisez les dimensions
