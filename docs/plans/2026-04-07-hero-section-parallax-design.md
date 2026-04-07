# Design: Hero Section Parallax & Particules Dorées

**Date:** 2026-04-07
**Sujet:** Refonte de la hero section avec animation créative
**Statut:** Approuvé

## Problème

La hero section actuelle manque de vie et l'image de fond ne s'affiche pas (URL invalide). L'utilisateur souhaite une animation créative qui corresponde à l'identité d'un artiste pluridisciplinaire.

## Solution Approchée

**Approche 1 sélectionnée : Parallax cinématographique avec particules dorées**

Cette approche offre un équilibre optimal entre élégance, performance et impact visuel, tout en s'harmonisant avec l'esthétique existante du site (accents gold/lma-gold).

## Architecture

### Nouveaux Composants

**`ParallaxHero.tsx`**
- Composant principal qui gère l'effet parallax
- Intègre le système de particules
- Orchestre les animations d'entrée du contenu
- Remplace la hero section actuelle dans `app/page.tsx`

**`FloatingParticles.tsx`**
- Système de particules légères en CSS pur
- 30-50 particules de tailles variées (2-6px)
- Mouvement flottant avec vitesses/directions aléatoires
- Couleur : variations autour de `lma-gold`
- Opacité subtile (0.2-0.5)

**`AnimatedText.tsx`**
- Texte qui apparaît avec stagger delay
- Réutilise le composant `ScrollReveal` existant
- Garantit la cohérence avec le reste du site

### Modifications

**`app/page.tsx`**
- Remplacer la hero section statique (lignes 14-60)
- Intégrer le nouveau `ParallaxHero`
- Conserver la structure de la carte semi-transparente

## Effets Visuels

### Parallax Effect
- L'image de fond se déplace de 15-20% plus lentement que le scroll
- Crée une sensation de profondeur cinématographique
- Implementation: CSS transform + requestAnimationFrame pour 60fps

### Particules Dorées
- Flottent doucement avec animations CSS keyframes
- Positions aléatoires dans l'espace de la hero
- Responsive : 20-30 sur mobile, 30-50 sur desktop
- Performance optimisée avec `will-change`

### Animations d'Entrée
- **Titre** : fade-in + slide-up (0.6s, ease-out)
- **Description** : stagger delay 0.2s
- **CTAs** : stagger delay 0.4s
- Hover effects sur les boutons (scale + glow)

### Image de Fond
- URL Unsplash valide et haute qualité
- Thématique : portrait artistique ou scène de théâtre
- Overlay gradient existant conservé (from-black/70 via-black/60 to-black/80)

## Performance

- Particules en CSS pur (pas de Canvas)
- `will-change` optimisé sur éléments animés
- `requestAnimationFrame` pour parallax smooth
- Lazy loading des images au-delà du fold
- Image adaptative avec Next/Image

## Accessibilité

- Détection de `prefers-reduced-motion` → désactive parallax et particules
- Overlay gradient suffisant pour lisibilité du texte
- Focus visible sur CTAs
- Aria labels sur éléments interactifs
- Fallback gracieux si JS désactivé

## Responsive

- Particules réduites sur mobile
- Parallax moins prononcé sur petit écran
- Image adaptative avec Next/Image
- Layout adapté aux différentes tailles d'écran

## Fallback

- Si l'image échappe à charger → gradient solide élégant
- Si JS désactivé → design statique mais lisible
- Toujours accessible et fonctionnel

## Technologies

- React (Next.js)
- TypeScript
- Tailwind CSS
- Framer Motion (optionnel pour animations avancées)
- Next/Image optimisé

## Success Criteria

- [ ] L'image de fond s'affiche correctement
- [ ] Effet parallax fonctionnel et smooth (60fps)
- [ ] Particules dorées visibles mais non intrusives
- [ ] Animations d'entrée fluides
- [ ] Performance acceptable (< 16ms par frame)
- [ ] Accessibilité respectée (prefers-reduced-motion)
- [ ] Responsive sur tous les appareils
