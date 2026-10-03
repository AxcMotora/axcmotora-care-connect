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

## Project architecture
- Keep public business pages as separate top-level TanStack routes for SSR and route-specific metadata.
- Keep staff CRM under the integration-managed `_authenticated` layout; every data operation also uses authenticated server functions and database role checks.
- Public booking never writes customer data; it validates locally and hands details to WhatsApp.
- Keep homepage presentation in a compact industrial bento composition using shared semantic theme tokens so all public pages stay visually consistent.
