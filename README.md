# Citation Explorer

**Find and explore every paper that cites a paper, with abstracts, fields and keywords, for your literature review.**

🔗 **Open it:** https://cypherumang65.github.io/citation-explorer/

Works in any modern browser, including on phones. You don't need an account or any install, and there's no tracking.

---

## How to use it

1. **Paste a paper** into the box. This can be a title, DOI, arXiv ID, Google Scholar link, citation or BibTeX entry.
2. **Pick the right paper** if it asks. Tick both the preprint and the published version to combine their citations.
3. **Read the Summary** that appears under the paper.
4. **Get citations.** Every citing paper loads with its abstract, field, topics and keywords.
5. **Explore and export.** Filter, use the review tabs, then export or send papers to Zotero.

Tip: you can also paste several papers (one per line), or import a list from Scholar, Zotero, Scopus, Web of Science, Publish or Perish, RIS or BibTeX.

---

## What it does

**Paper summary**
- One-line TL;DR (from Semantic Scholar), research area, keywords and impact: citations, field-weighted impact and top-% rank.
- Citations per year, which fields cite it most, and its most-cited citing papers.
- The abstract, plus a link to a free-to-read copy when one exists.
- **Summarize with AI**, free and with no key needed (see below).

**Citing papers (or the reference list)**
- Abstract, authors, institutions, countries, journal, year, research field, subfield, topics, keywords, open-access link.
- Filter by year, field, keyword, author, institution or country. You can also show only papers with an abstract, or hide self-citations.
- **How they cite it**: the sentence where each paper cites yours, and whether the citation is influential.
- **What am I missing?**: works often cited alongside yours.
- **New since last time**: highlights papers that are new since your last search.

**Literature-review tabs**
- **Topics**: what the citing papers are about.
- **Trends**: how citations change over time.
- **Key papers**: the most important citing papers.
- **People and places**: top authors, institutions and countries.
- **Screen**: go through papers one by one and mark them Include, Maybe or Exclude.
- **Review table and report**: a table you can export, or a printable report.

**Your own work**
- **Find my papers** from your ORCID, and save them as "my papers".
- **Copy impact summary**: a ready paragraph for a CV or fellowship form.

**Export and Zotero**
- Export to **CSV** (Excel), **RIS** (Zotero, Mendeley, EndNote) or **BibTeX** (LaTeX).
- **Zotero**: connect your library, see which papers you already have, send new ones to a collection, or load papers from a collection.
- Back up and restore your marks and notes.

---

## AI summaries: free, no key needed

Under a paper's summary, the **Summarize with AI** row offers:

| Button | Cost | What it does |
|---|---|---|
| **Open in Claude ↗** / **Open in ChatGPT ↗** | Free | Opens your own Claude or ChatGPT account in a new tab with the paper's title and abstract and a summary request ready. A free account works. |
| **Copy prompt** | Free | Copies the same request to paste into any AI. |
| **Summarize on this device** | Free | Uses Chrome's built-in AI on your computer, so nothing is sent anywhere. Appears only on desktop Chrome where it's supported; Chrome downloads the model once. |
| **Summarize with Claude (your key)** | About 1 US cent | Appears only if you add your own Anthropic API key in ⚙ Settings. |

AI summaries use only the title and abstract, so check them against the paper.

---

## Keys and privacy

None of these is needed. They're optional, and you add them in ⚙ **Settings**:

| Key | Why add it | Where to get it |
|---|---|---|
| OpenAlex | Larger searches (over 10,000 papers) and no "too many requests" errors on busy networks | Free: openalex.org/settings/api |
| Semantic Scholar | Faster, more reliable TL;DRs, abstracts and citing sentences | Free: semanticscholar.org/product/api |
| Zotero | Connect your Zotero library | Free: zotero.org/settings/keys |
| Anthropic | AI summaries inside the page | Paid: console.anthropic.com |

- **Keys never leave your browser** except to the service they belong to (for example, your Zotero key goes only to zotero.org). They're never sent to this site.
- Keys are **not saved** unless you tick "Remember keys in this browser". "Forget saved keys" removes them.
- Marks, notes and saved papers are kept **only in your browser**.
- The page talks only to OpenAlex, Crossref, Semantic Scholar and, if you use them, Zotero and Anthropic. All traffic uses HTTPS, enforced by a strict Content Security Policy. There are no trackers, analytics or outside code.

---

## Good to know

- **Citation counts** come from OpenAlex and are usually lower than Google Scholar's, because Scholar also counts theses, slides and duplicates.
- **Google Scholar results aren't available on the website**, because SerpApi can't be called directly from a browser.
- **"Too many requests"?** OpenAlex and Semantic Scholar have free daily limits shared by everyone on the same network (common on campus Wi-Fi). A free key fixes this.
- **Some papers have no abstract** in the free databases, so their AI summary buttons don't appear.

---

## Data sources

[OpenAlex](https://openalex.org) · [Crossref](https://www.crossref.org) · [Semantic Scholar](https://www.semanticscholar.org) · [Zotero](https://www.zotero.org). Many thanks to these open services.
