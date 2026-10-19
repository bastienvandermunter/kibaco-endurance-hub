<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Décisions du projet

- Les cinq pages partagent les couleurs et la typographie sémantiques de `src/styles.css` et le cadre de `site-layout.tsx`, pour garantir une identité cohérente.
- Les images affichées vivent dans `public/images/` et sont référencées par chemin absolu (`/images/...`), pour fonctionner sur tout hébergeur (ex. Vercel) sans 404.
- Les avis Google sont lus côté serveur via la connexion Google Business Profile et mis en cache 15 minutes, afin de protéger les identifiants et d’éviter des appels à chaque affichage.
