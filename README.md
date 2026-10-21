# Osobní portfolio & Digitální vizitka – Matěj Janoška

Moderní, plně responzivní a profesionální studentské portfolio a digitální vizitka. Web slouží k prezentaci pro účely ucházení se o studentskou stáž, odbornou brigádu nebo zaměstnání v oboru elektrotechniky a příbuzných technických oblastech.

---

## 🚀 Klíčové vlastnosti a obsah

Web je rozdělen do 6 přehledných sekcí s intuitivní navigací:
1. **Úvodní představení (Hero):** Představení studenta, profesní motto, rychlé statistiky a hlavní profilová fotografie.
2. **O mně:** Vyvážený profil kombinující technické myšlení, sportovní disciplínu z fotbalu a pozitivní týmový přístup.
3. **Moje dovednosti:** Strukturovaný přehled znalostí rozdělený do 4 kategorií:
   - Elektrotechnika & Praxe (rozvody, schémata, měření, bezpečnost),
   - Software & IT nástroje (CAD, Office, webové technologie, Git),
   - Jazyky & Komunikace (Čeština C2, Angličtina B1),
   - Osobní přednosti (spolehlivost, týmovost, samostatnost).
4. **Moje projekty a úspěchy:** Ukázky praktických a studijních výstupů doplněné o **interaktivní filtr** (Elektrotechnika, Web & IT, Sport & Úspěchy).
5. **Moje budoucnost:** Kariérní časová osa směřující od maturity přes VŠ až po autorizovaného revizního technika.
6. **Kontakt:** Přehledný kontaktní blok s přímým odkazem na e-mail (`mailto:`), odkazem na GitHub repozitář a profilem.

### UX a designové prvky:
- **Tmavý & světlý režim:** Plynulé přepínání motivu s trvalým uložením volby do `localStorage`.
- **Filtrování projektů:** Možnost okamžitého filtrování kategorií bez nutnosti znovunačtení stránky.
- **Plynulý scroll & Scroll-reveal:** Automatické odkrývání prvků při skrolování (`IntersectionObserver`).
- **Responzivita:** Optimalizováno pro stolní monitory, notebooky, tablety i mobilní telefony s hamburger menu.
- **SEO ochrana:** Obsahuje `<meta name="robots" content="noindex, nofollow">` zabraňující nechtěné indexaci vyhledávači.

---

## 🛠 Použité technologie

- **HTML5:** Sémantický, přístupný a validní kód.
- **CSS3:** Moderní CSS proměnné, Grid, Flexbox, ambientní grafické pozadí a responzivní zarážky.
- **JavaScript (Vanilla ES6+):** Žádné těžké či placené knihovny, rychlý a lehký kód.
- **Ikony & Písma:** Font Awesome 6.5.1, Google Fonts (*Outfit*, *Plus Jakarta Sans*).

---

## 💻 Lokální spuštění

Web je čistě statický, takže nepotřebuje žádnou instalaci závislostí ani kompilaci.

### Možnost 1: Otevření v prohlížeči
Stačí poklepat na soubor `index.html` nebo jej přetáhnout do libovolného moderního webového prohlížeče (Chrome, Edge, Firefox, Safari).

### Možnost 2: Lokální HTTP server (doporučeno)
V kořenové složce projektu spusťte např.:

```bash
# Pomocí Pythonu:
python -m http.server 8000

# Nebo pomocí Node.js:
npx serve
```
Následně otevřete v prohlížeči adresu `http://localhost:8000`.

---

## 🌐 Postup publikování na GitHub Pages

Projekt je připraven pro bezproblémové publikování na **GitHub Pages**:
- Všechny cesty k assetům (fotografie, styly, skripty) jsou relativní.
- Obsahuje soubor `.nojekyll` pro zabránění ignorování skrytých složek ze strany Jekyll generátoru.
- Kořenový soubor se jmenuje `index.html`.

### Krok za krokem:

1. **Uložení a nahrání změn do repozitáře:**
   ```bash
   git add .
   git commit -m "feat: premena na profesionalni studentske portfolio"
   git push origin main
   ```

2. **Aktivace GitHub Pages na GitHubu:**
   1. Otevřete svůj repozitář na GitHubu: [https://github.com/matjanoska-prog/vizitka](https://github.com/matjanoska-prog/vizitka)
   2. Přejděte do záložky **Settings** (Nastavení repozitáře).
   3. V levém bočním menu klikněte na **Pages**.
   4. V sekci **Build and deployment**:
      - **Source:** zvolte `Deploy from a branch`.
      - **Branch:** vyberte větev `main` a složku `/ (root)`.
      - Klikněte na tlačítko **Save**.
   5. Během 1–2 minut GitHub vygeneruje živou webovou stránku, jejíž adresu uvidíte na stejném místě v horní části (např. `https://matjanoska-prog.github.io/vizitka/`).

---

## 🔒 Bezpečnost a správa dat

- V repozitáři se **nenachází žádné citlivé informace**, tokeny ani API klíče.
- Soubor `.gitignore` spolehlivě blokuje `.env` soubory a systémová či dočasná data.
- Všechny doplňující a budoucí údaje (např. specifické certifikace nebo odkaz na LinkedIn) jsou v kódu zřetelně označeny komentářem `<!-- TODO: doplnit -->`.
