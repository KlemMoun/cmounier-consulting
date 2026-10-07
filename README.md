# cmounierconsulting.com

Static bilingual (EN/FR) website for CMounier Consulting SASU, hosted on GitHub Pages.

## Edit content
| What | File |
|---|---|
| Name, email, LinkedIn, legal info (SIREN, address…) | `config.js` |
| All texts, EN + FR | `i18n.js` |
| Games portfolio | `games.js` + images in `assets/games/<slug>/` |
| Styles | `styles.css` |

### Add a game
1. Put `icon.png` (512×512) and screenshots (portrait PNG/JPG, ~1290×2796 or smaller) in `assets/games/<slug>/`.
2. Copy the template in `games.js`, fill it, set `status: "soon"` then `"live"` with the App Store URL once released.
3. Commit & push — the site updates in ~1 min.

App Store Connect needs a **Privacy Policy URL** and **Support URL** per app:
`https://www.cmounierconsulting.com/privacy.html` and `https://www.cmounierconsulting.com/support.html`.

## Custom domain (one-time)
1. Buy `cmounierconsulting.com` at a registrar (OVH, Gandi, Cloudflare, Namecheap…).
2. DNS records:
   - `A` @ → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` @ → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` www → `<github-username>.github.io`
3. GitHub repo → Settings → Pages → Custom domain `www.cmounierconsulting.com` → tick **Enforce HTTPS**.
4. (Recommended) Verify the domain in GitHub account Settings → Pages to prevent takeover.
5. (Optional) Set up `contact@cmounierconsulting.com` forwarding and update `contactEmail` in `config.js`.
