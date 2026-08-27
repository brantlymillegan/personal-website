import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const html = await readFile(
    new URL("../dist/index.html", import.meta.url),
    "utf8",
  );

  return new Response(html, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

test("pre-renders Brantly's static personal website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Brantly Millegan<\/title>/i);
  assert.match(html, /href="\.\/favicon\.svg\?v=2"/);
  assert.match(html, /href="https:\/\/x\.com\/BrantlyMillegan"/);
  assert.match(html, />@brantlymillegan</);
  assert.match(html, /x-logo\.png/);
  assert.match(html, />South Carolina, USA</);
  assert.match(html, /us-flag-square\.png/);
  assert.ok(
    html.indexOf("me@brantly.com") < html.indexOf("South Carolina, USA"),
  );
  assert.match(html, />Projects</);
  assert.match(html, />Education</);
  assert.doesNotMatch(html, />About Me</);
  assert.equal(html.match(/class="mobile-collapsible"/g)?.length, 10);
  assert.equal(html.match(/class="mobile-collapsible-toggle"/g)?.length, 10);
  assert.equal(html.match(/aria-expanded="false"/g)?.length, 10);
  assert.match(html, /aria-label="Show details for Ethereum Name Service"/);
  assert.match(html, /aria-label="Show details for ENSMarketBot"/);
  const titleLinks = [
    ["https://ens.domains/", "Ethereum Name Service (ENS)"],
    ["https://ensdao.org/", "ENS DAO"],
    ["https://siwe.xyz/", "Sign in with Ethereum (SIWE)"],
    ["https://ethid.org/", "EthID"],
    ["https://grails.app/", "Grails"],
    ["https://efp.app/", "Ethereum Follow Protocol (EFP)"],
    ["https://ethidentitykit.com/", "Ethereum Identity Kit (EIK)"],
    ["https://x.com/ENSMarketBot", "ENSMarketBot"],
    ["https://www.churchpop.com/", "ChurchPOP"],
    [
      "https://www.catholic.edu/",
      "Catholic University of America (DC)",
    ],
    ["https://www.stthomas.edu/", "University of St. Thomas (MN)"],
    ["https://www.wheaton.edu/", "Wheaton College (IL)"],
  ];
  const escapeRegExp = (value) =>
    value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  for (const [href, title] of titleLinks) {
    assert.match(
      html,
      new RegExp(
        `href="${escapeRegExp(href)}"[^>]*>${escapeRegExp(title)}</a>`,
      ),
    );
  }
  assert.equal(html.match(/<h3[^>]*><a href=/g)?.length, titleLinks.length);
  assert.match(html, /Ethereum Name Service \(ENS\)/);
  assert.match(html, /ens-logo\.png/);
  assert.match(html, /Director of Operations/);
  assert.match(html, /class="meta-pill">2019-2022<\/span>/);
  assert.match(html, /ENS is the leading blockchain naming system/);
  assert.match(html, /Led the core team during its strongest period of growth/);
  assert.doesNotMatch(
    html,
    /I led the core team during its strongest period of growth/,
  );
  assert.match(html, /Led launch of \$ENS token and DAO in late 2021/);
  assert.match(html, /Grew integrations from 12 to (?:&gt;|>)400/);
  assert.match(html, /including Coinbase, Opera, Brave/);
  assert.match(html, /Led strategy, communications, integrations/);
  assert.match(html, /Presented at ICANN, DNS-OARC, Devcon, Federal Reserve/);
  assert.match(html, /EthGlobal events/);
  assert.doesNotMatch(
    html,
    /(?:Opera, Brave|communications, integrations|EthGlobal events), and more/,
  );
  assert.match(html, /ENS DAO/);
  assert.match(html, /ens-dao-logo\.png/);
  assert.match(html, /Launch lead/);
  assert.match(html, /Top Delegate/);
  assert.match(html, /class="meta-pill">2021 - 2026<\/span>/);
  assert.match(html, /Security Council/);
  assert.match(html, /class="meta-pill">2024 - 2026<\/span>/);
  assert.match(html, /ENS Foundation, founding director/);
  assert.match(html, /class="meta-pill">2021 - 2023<\/span>/);
  assert.ok(
    html.indexOf("ENS Foundation, founding director") <
      html.indexOf("Security Council"),
  );
  assert.ok(html.indexOf("Security Council") < html.indexOf("Top Delegate"));
  assert.doesNotMatch(html, /Service Provider Program recipient/);
  assert.match(html, /DAO manages key components of the ENS protocol/);
  assert.match(html, /ChurchPOP/);
  assert.ok(
    html.indexOf("Ethereum Name Service (ENS)") <
      html.indexOf("ENS DAO"),
  );
  assert.ok(
    html.indexOf("ENS DAO") < html.indexOf("Sign in with Ethereum (SIWE)"),
  );
  assert.ok(
    html.indexOf("Sign in with Ethereum (SIWE)") <
      html.indexOf("EthID"),
  );
  assert.ok(
    html.indexOf("EthID") <
      html.indexOf("Grails"),
  );
  assert.ok(
    html.indexOf("Grails") <
      html.indexOf("Ethereum Follow Protocol (EFP)"),
  );
  assert.ok(
    html.indexOf("Ethereum Follow Protocol (EFP)") <
      html.indexOf("Ethereum Identity Kit (EIK)"),
  );
  assert.ok(
    html.indexOf("Ethereum Identity Kit (EIK)") <
      html.indexOf("ENSMarketBot"),
  );
  assert.ok(
    html.indexOf("ENSMarketBot") <
      html.indexOf("ChurchPOP"),
  );
  assert.ok(
    html.indexOf("ChurchPOP") <
      html.indexOf("Second Nature Journal"),
  );
  assert.match(html, /section-content projects-content/);
  assert.match(html, /class="meta-pill">2014 - 2022<\/span>/);
  assert.doesNotMatch(html, /\(2014 - 2022\)/);
  assert.match(html, /Catholic culture brand that’s fun, informative, and/);
  assert.match(html, /Acquired by EWTN 2015/);
  assert.match(html, /Editions in English, Spanish, Portuguese, and Italian/);
  assert.match(
    html,
    /Original content on Web, Twitter, Facebook, Instagram, Snapchat, etc/,
  );
  assert.match(html, /churchpop-logo\.png/);
  assert.match(html, /<h3>Second Nature Journal<\/h3>/);
  assert.doesNotMatch(
    html,
    /<h3[^>]*><a[^>]*>Second Nature Journal<\/a><\/h3>/,
  );
  assert.match(html, /second-nature-logo\.png/);
  assert.match(html, /Co-Founder, Editor/);
  assert.match(html, /class="meta-pill">2013<\/span>/);
  assert.match(
    html,
    /Online journal for critical thinking about technology and new media in light of the Christian tradition\./,
  );
  assert.match(html, /Sign in with Ethereum \(SIWE\)/);
  assert.match(html, /siwe-logo\.png/);
  assert.match(html, /Creator/);
  assert.match(html, /class="meta-pill">2021<\/span>/);
  assert.equal(
    html.match(/class="meta-pill">2021<\/span>/g)?.length,
    3,
  );
  assert.match(html, /Project Director/);
  assert.match(html, /class="meta-pill">2021-2022, 2025-2026<\/span>/);
  assert.ok(html.indexOf("EIP 4361") < html.indexOf("Project Director"));
  assert.match(
    html,
    /href="https:\/\/eips\.ethereum\.org\/EIPS\/eip-4361"/,
  );
  assert.match(html, />EIP 4361<\/a>/);
  assert.match(
    html,
    /class="project-role"><a href="https:\/\/eips\.ethereum\.org\/EIPS\/eip-4361"/,
  );
  assert.doesNotMatch(
    html,
    /<li><a href="https:\/\/eips\.ethereum\.org\/EIPS\/eip-4361"/,
  );
  assert.match(html, /Authentication standard for Ethereum accounts/);
  assert.match(html, /Used by MetaMask, OpenRouter, Polymarket, and more/);
  assert.match(html, />EthID</);
  assert.match(html, /ethid-logo\.png/);
  assert.match(html, /class="project-logo ethid-logo"/);
  assert.match(html, /Founder, Executive Director/);
  assert.equal(
    html.match(/class="meta-pill">2024 - 2026<\/span>/g)?.length,
    2,
  );
  assert.match(
    html,
    /Dedicated to developing the Ethereum identity stack/,
  );
  assert.doesNotMatch(html, /Organization dedicated to developing/);
  assert.match(
    html,
    /Recipient of ENS DAO Service Provider Program funding in Seasons 1, 2, and 3 \(we declined Season 3\)/,
  );
  assert.doesNotMatch(
    html,
    /EFP, EthIDKit, Grails, SIWE, ENSMarketBot, and more/,
  );
  assert.match(html, /class="subprojects"/);
  assert.equal(html.match(/class="subproject-entry"/g)?.length, 4);
  assert.equal(html.match(/class="project-entry"/g)?.length, 6);
  assert.match(html, />Grails</);
  assert.match(
    html,
    /class="subproject-title"><a href="https:\/\/grails\.app\/">Grails<\/a><\/h3>/,
  );
  assert.match(html, /grails-logo\.png/);
  assert.doesNotMatch(html, /Creator, Project Director/);
  assert.doesNotMatch(html, /class="meta-pill">2025 - 2026<\/span>/);
  assert.match(
    html,
    /Best bulk management tool and secondary market for ENS names/,
  );
  assert.match(html, /Ethereum Follow Protocol \(EFP\)/);
  assert.match(
    html,
    /class="subproject-title"><a href="https:\/\/efp\.app\/">Ethereum Follow Protocol \(EFP\)<\/a><\/h3>/,
  );
  assert.match(html, /efp-logo\.png/);
  assert.doesNotMatch(html, /class="meta-pill">2023<\/span>/);
  assert.doesNotMatch(html, /class="meta-pill">2023 - 2026<\/span>/);
  assert.match(
    html,
    /Onchain social graph protocol for Ethereum accounts, a primitive of the Ethereum identity stack that complements ENS and Sign in with Ethereum\./,
  );
  assert.match(html, /Ethereum Identity Kit \(EIK\)/);
  assert.match(html, /eik-logo\.png/);
  assert.match(
    html,
    /Component library and API for integrating the Ethereum identity stack/,
  );
  assert.match(html, /ENSMarketBot/);
  assert.match(html, /ensmarketbot-logo\.png/);
  assert.match(
    html,
    /Best Twitter bot tracking significant ENS name sales, offers, and registrations/,
  );
  assert.match(html, /Wheaton College \(IL\)/);
  assert.match(html, /University of St\. Thomas \(MN\)/);
  assert.match(html, /Catholic University of America \(DC\)/);
  assert.ok(
    html.indexOf("Catholic University of America (DC)") <
      html.indexOf("University of St. Thomas (MN)"),
  );
  assert.ok(
    html.indexOf("University of St. Thomas (MN)") <
      html.indexOf("Wheaton College (IL)"),
  );
  assert.match(html, /logo-wheaton-shield\.svg/);
  assert.match(html, /st-thomas-logo\.png/);
  assert.match(html, /logo-catholic-university\.png/);
  assert.match(html, /class="meta-pill">2010<\/span>/);
  assert.match(html, /class="meta-pill">2015<\/span>/);
  assert.match(html, /class="meta-pill">Not completed<\/span>/);
  assert.doesNotMatch(html, /\(not completed\)/);
  assert.doesNotMatch(html, /—\s*(?:2010|2015)/);
  assert.doesNotMatch(html, /I’m Catholic, married, and have a big family\./);
  assert.doesNotMatch(html, /Faith and family are at the center/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("removes all temporary starter preview code", async () => {
  const [page, index, globals, packageJson, favicon] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../index.html", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../public/favicon.svg", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Brantly Millegan/);
  assert.match(index, /<title>Brantly Millegan<\/title>/);
  assert.match(index, /rel="canonical" href="https:\/\/brantly\.com\/"/);
  assert.match(globals, /font-size: 135%/);
  assert.match(globals, /font-size: clamp\(2\.25rem, 8\.1vw, 3rem\)/);
  assert.match(globals, /max-width: 1140px/);
  assert.match(globals, /max-width: 750px/);
  assert.match(globals, /\.project-entry li::before/);
  assert.match(globals, /content: "⟢"/);
  assert.match(favicon, />⟢<\/text>/);
  assert.match(favicon, /fill="#1b1b1b"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(
    packageJson,
    /vinext|wrangler|@cloudflare|@openai\/sites-vite-plugin|drizzle/,
  );
  assert.match(packageJson, /vite build && node scripts\/prerender\.mjs/);
  await assert.rejects(
    access(new URL("../dist/server/index.js", import.meta.url)),
  );
});
