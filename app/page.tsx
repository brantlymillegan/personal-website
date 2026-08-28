import type { ReactNode } from "react";
import MobileCollapsibleList from "./mobile-collapsible-list";
import ThemeToggle from "./theme-toggle";

type LinkedLogoProps = {
  href: string;
  imageClassName: string;
  label: string;
  size: number;
  src: string;
};

function LinkedLogo({
  href,
  imageClassName,
  label,
  size,
  src,
}: LinkedLogoProps) {
  return (
    <a
      className="logo-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit ${label}`}
    >
      <img
        className={imageClassName}
        src={src}
        alt=""
        width={size}
        height={size}
      />
    </a>
  );
}

const placeIcons = {
  dc: {
    label: "District of Columbia",
    viewBox: "0 0 60 80",
    path: "M56.4 36.8l-34.16-34.24-18.24 18.56 9.84 8.32 2.24 2.96 10.32 6.48 1.76 16v10.8z",
  },
  mn: {
    label: "Minnesota",
    viewBox: "0 -1 64 81",
    path: "M18.24 4.48l-0.24-1.44-14-0.48 0.8 4-0.4 1.28v4.32l1.76 5.92-0.16 6.72 0.4 0.8-0.24 3.12 1.44 5.44-0.32 3.44-2.24 2.64 1.12 1.76 1.12 0.56 0.64 0.96-0.8 20 20.8 0.48 21.04-0.08-0.48-4.4-0.8-1.28-2.16-0.64-3.52-3.92-1.6-0.4-0.72-1.12-1.52-0.4-1.84-1.76 0.48-1.76-0.4-1.52 0.4-0.72v-1.52l0.64-1.68-0.64-1.52-1.04-0.08-0.24-1.36 1.68-2.32 3.12-2.08v-6.4h0.48l0.96-1.6 4.4-3.52 4.96-5.6 9.12-4.48-1.68-0.24-0.96 0.32-1.6-1.28-4.48 0.64-1.04-1.68-2.8 2h-2.4l-0.8-0.4-0.32-0.96-1.84-0.56-0.64-1.2-1.52 0.24-0.16 0.88-0.48 0.24-0.96-2.32-1.52-0.16 0.4-0.88-2.24-0.8-2.16-0.24-1.44 0.4-0.4 0.64-1.92 0.08-0.88-1.2-5.36-1.12-0.72-0.64v-0.96h-0.96l-1.04-1.2zM19.6-0.8v2.24l0.96-0.48 0.32-1.04-0.16-0.64z",
  },
  il: {
    label: "Illinois",
    viewBox: "0 0 44 80",
    path: "M37.04 0.72l-24.4-0.4 1.68 1.76 0.16 1.36 2.08 1.68-0.32 3.12-2.32 3.44-2.24 1.12-2.96 0.16-0.64 2.08 1.04 1.36 0.24 1.68-2 3.44-2.16 1.12 0.08 2.16-0.96 0.4-0.32 1.12 0.16 2.96 0.96 3.36 5.2 5.28 0.96 4.32 0.64 0.4 1.44-0.88 2.56 1.28-0.4 2.56-1.76 3.52 0.08 1.36 2.16 2.4 1.76 0.72 3.76 3.36v1.68l0.48 1.6-0.48 1.44 0.96 2.48 1.12 0.64-0.32-0.72 0.4-0.16 0.96 1.2h0.4l-0.48-1.04 1.68-1.84 4.4 1.84 0.72-0.24-0.32-3.52 3.6-1.2-0.64-1.68 1.04-1.52-0.48-0.72h0.48l-0.48-0.8h0.48v-1.84l0.88-0.32-0.64-0.16 0.88-0.88-0.72-0.72 0.56-0.88 0.72 0.32 0.96-2.08 1.04-0.48-0.16-0.72 1.44-2.4-0.24-2.16-1.36-1.92 0.8-1.04-0.32-1.36 0.88-0.32-0.08-27.76-2.64-5.92v-3.04z",
  },
} as const;

type PlaceIconKey = keyof typeof placeIcons;

function PlaceIcon({ place }: { place: PlaceIconKey }) {
  const icon = placeIcons[place];

  return (
    <>
      <span className="sr-only"> {icon.label}</span>
      <svg
        className={`place-icon place-icon-${place}`}
        viewBox={icon.viewBox}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        focusable="false"
      >
        <path d={icon.path} />
      </svg>
    </>
  );
}

type RoleLineProps = {
  children: ReactNode;
  toggle?: ReactNode | null;
  years: string;
};

function RoleLine({ children, toggle = null, years }: RoleLineProps) {
  return (
    <p className="project-role">
      <span className="project-role-label">{children}</span>
      <span className="project-role-meta mobile-summary-tail">
        <span className="meta-pill">{years}</span>
        {toggle}
      </span>
    </p>
  );
}

export default function Home() {
  return (
    <main className="page">
      <ThemeToggle />
      <header>
        <h1>Brantly Millegan</h1>
        <div className="contact-links">
          <a
            className="social-link"
            href="https://x.com/BrantlyMillegan"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-logo"
              src="x-logo.png"
              alt=""
              width="20"
              height="21"
            />
            <span>@brantlymillegan</span>
          </a>
          <a className="social-link" href="mailto:me@brantly.com">
            <img
              className="social-logo"
              src="email-icon.svg"
              alt=""
              width="20"
              height="21"
            />
            <span>me@brantly.com</span>
          </a>
          <div className="location-line">
            <img
              className="location-flag"
              src="us-flag-square.png"
              alt=""
              width="20"
              height="20"
            />
            <span>South Carolina, USA</span>
          </div>
        </div>
      </header>

      <section>
        <h2>Projects</h2>
        <div className="section-content projects-content">
          <article className="project-entry">
            <LinkedLogo
              href="https://ens.domains/"
              label="Ethereum Name Service website"
              imageClassName="project-logo"
              src="ens-logo.png"
              size={64}
            />
            <div>
              <h3>
                <a
                  href="https://ens.domains/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ethereum Name Service (ENS)
                </a>
              </h3>
              <MobileCollapsibleList
                label="Ethereum Name Service"
                mobileFullWidth
                summary={(toggle) => (
                  <div className="project-roles">
                    <RoleLine years="2019 – 2022" toggle={toggle}>
                      Director of Operations
                    </RoleLine>
                  </div>
                )}
              >
                <li>ENS is the leading blockchain naming system</li>
                <li>Led the core team during its strongest period of growth</li>
                <li>Led launch of $ENS token and DAO in late 2021</li>
                <li>
                  Grew integrations from 12 to &gt;400, including Coinbase,
                  Opera, Brave
                </li>
                <li>Led strategy, communications, integrations</li>
                <li>
                  Presented at ICANN, DNS-OARC, Devcon, Federal Reserve,
                  EthGlobal events
                </li>
              </MobileCollapsibleList>
            </div>
          </article>

          <article className="project-entry">
            <LinkedLogo
              href="https://ensdao.org/"
              label="ENS DAO website"
              imageClassName="project-logo"
              src="ens-dao-logo.png"
              size={64}
            />
            <div>
              <h3>
                <a
                  href="https://ensdao.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ENS DAO
                </a>
              </h3>
              <MobileCollapsibleList
                label="ENS DAO"
                mobileFullWidth
                summary={(toggle) => (
                  <div className="project-roles">
                    <RoleLine years="2021">Launch Lead</RoleLine>
                    <RoleLine years="2021 – 2023">
                      ENS Foundation, Founding Director
                    </RoleLine>
                    <RoleLine years="2024 – 2026">Security Council</RoleLine>
                    <RoleLine years="2021 – 2026" toggle={toggle}>
                      Top Delegate
                    </RoleLine>
                  </div>
                )}
              >
                <li>DAO manages key components of the ENS protocol</li>
                <li>$ENS token voting</li>
              </MobileCollapsibleList>
            </div>
          </article>

          <article className="project-entry">
            <LinkedLogo
              href="https://siwe.xyz/"
              label="Sign in with Ethereum website"
              imageClassName="project-logo"
              src="siwe-logo.png"
              size={64}
            />
            <div>
              <h3>
                <a
                  href="https://siwe.xyz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sign in with Ethereum (SIWE)
                </a>
              </h3>
              <MobileCollapsibleList
                label="Sign in with Ethereum"
                mobileFullWidth
                summary={(toggle) => (
                  <div className="project-roles">
                    <RoleLine years="2021">Creator</RoleLine>
                    <RoleLine years="2021">
                      <a
                        href="https://eips.ethereum.org/EIPS/eip-4361"
                        target="_blank"
                        rel="noreferrer"
                      >
                        EIP 4361
                      </a>{" "}
                      Co-Author
                    </RoleLine>
                    <RoleLine years="2021 – 2022 · 2025 – 2026">
                      Project Director
                    </RoleLine>
                    <RoleLine years="2026 – present" toggle={toggle}>
                      Advisor
                    </RoleLine>
                  </div>
                )}
              >
                <li>Authentication standard for Ethereum accounts</li>
                <li>Used by MetaMask, OpenRouter, Polymarket, and more</li>
              </MobileCollapsibleList>
            </div>
          </article>

          <article className="project-entry">
            <LinkedLogo
              href="https://ethid.org/"
              label="EthID website"
              imageClassName="project-logo ethid-logo"
              src="ethid-logo.png"
              size={64}
            />
            <div>
              <h3>
                <a
                  href="https://ethid.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  EthID
                </a>
              </h3>
              <MobileCollapsibleList
                label="EthID"
                mobileFullWidth
                summary={(toggle) => (
                  <div className="project-roles">
                    <RoleLine years="2024 – 2026" toggle={toggle}>
                      Founder, Executive Director
                    </RoleLine>
                  </div>
                )}
              >
                <li>
                  Dedicated to developing the Ethereum identity stack
                </li>
                <li>
                  Recipient of ENS DAO Service Provider Program funding in
                  Seasons 1, 2, and 3 (we declined Season 3)
                </li>
              </MobileCollapsibleList>
              <div className="subprojects">
                <div className="subproject-list">
                  <article className="subproject-entry">
                    <LinkedLogo
                      href="https://grails.app/"
                      label="Grails website"
                      imageClassName="subproject-logo"
                      src="grails-logo.png"
                      size={32}
                    />
                    <div>
                      <MobileCollapsibleList
                        label="Grails"
                        summary={(toggle) => (
                          <div className="subproject-summary">
                            <h4
                              className="subproject-title"
                              aria-label="Grails"
                            >
                              <a
                                href="https://grails.app/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Grails
                              </a>
                            </h4>
                            <span className="mobile-summary-tail">
                              {toggle}
                            </span>
                          </div>
                        )}
                      >
                        <li>
                          Best bulk management tool and secondary market for
                          ENS names
                        </li>
                      </MobileCollapsibleList>
                    </div>
                  </article>

                  <article className="subproject-entry">
                    <LinkedLogo
                      href="https://efp.app/"
                      label="Ethereum Follow Protocol website"
                      imageClassName="subproject-logo"
                      src="efp-logo.png"
                      size={32}
                    />
                    <div>
                      <MobileCollapsibleList
                        label="Ethereum Follow Protocol"
                        summary={(toggle) => (
                          <div className="subproject-summary">
                            <h4
                              className="subproject-title"
                              aria-label="Ethereum Follow Protocol (EFP)"
                            >
                              <a
                                href="https://efp.app/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Ethereum Follow Protocol (EFP)
                              </a>
                            </h4>
                            <span className="mobile-summary-tail">
                              {toggle}
                            </span>
                          </div>
                        )}
                      >
                        <li>
                          Onchain social graph protocol for Ethereum accounts
                        </li>
                      </MobileCollapsibleList>
                    </div>
                  </article>

                  <article className="subproject-entry">
                    <LinkedLogo
                      href="https://ethidentitykit.com/"
                      label="Ethereum Identity Kit website"
                      imageClassName="subproject-logo"
                      src="eik-logo.png"
                      size={32}
                    />
                    <div>
                      <MobileCollapsibleList
                        label="Ethereum Identity Kit"
                        summary={(toggle) => (
                          <div className="subproject-summary">
                            <h4
                              className="subproject-title"
                              aria-label="Ethereum Identity Kit (EIK)"
                            >
                              <a
                                href="https://ethidentitykit.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Ethereum Identity Kit (EIK)
                              </a>
                            </h4>
                            <span className="mobile-summary-tail">
                              {toggle}
                            </span>
                          </div>
                        )}
                      >
                        <li>
                          Component library and API for integrating the Ethereum
                          identity stack
                        </li>
                      </MobileCollapsibleList>
                    </div>
                  </article>

                  <article className="subproject-entry">
                    <LinkedLogo
                      href="https://x.com/ENSMarketBot"
                      label="ENSMarketBot on X"
                      imageClassName="subproject-logo"
                      src="ensmarketbot-logo.png"
                      size={32}
                    />
                    <div>
                      <MobileCollapsibleList
                        label="ENSMarketBot"
                        summary={(toggle) => (
                          <div className="subproject-summary">
                            <h4
                              className="subproject-title"
                              aria-label="ENSMarketBot"
                            >
                              <a
                                href="https://x.com/ENSMarketBot"
                                target="_blank"
                                rel="noreferrer"
                              >
                                ENSMarketBot
                              </a>
                            </h4>
                            <span className="mobile-summary-tail">
                              {toggle}
                            </span>
                          </div>
                        )}
                      >
                        <li>
                          Best Twitter bot tracking significant ENS name sales,
                          offers, and registrations
                        </li>
                      </MobileCollapsibleList>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </article>

          <article className="project-entry">
            <LinkedLogo
              href="https://www.churchpop.com/"
              label="ChurchPOP website"
              imageClassName="project-logo"
              src="churchpop-logo.png"
              size={64}
            />
            <div>
              <h3>
                <a
                  href="https://www.churchpop.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ChurchPOP
                </a>
              </h3>
              <MobileCollapsibleList
                label="ChurchPOP"
                mobileFullWidth
                summary={(toggle) => (
                  <div className="project-roles">
                    <RoleLine years="2014 – 2022" toggle={toggle}>
                      Founder and Editor-in-Chief
                    </RoleLine>
                  </div>
                )}
              >
                <li>
                  Catholic culture brand that’s fun, informative, and
                  inspirational
                </li>
                <li>Acquired by EWTN 2015</li>
                <li>Editions in English, Spanish, Portuguese, and Italian</li>
                <li>
                  Original content on Web, Twitter, Facebook, Instagram,
                  Snapchat, etc
                </li>
              </MobileCollapsibleList>
            </div>
          </article>

          <article className="project-entry">
            <img
              className="project-logo"
              src="second-nature-logo.png"
              alt=""
              width="64"
              height="64"
            />
            <div>
              <h3>Second Nature Journal</h3>
              <MobileCollapsibleList
                label="Second Nature Journal"
                mobileFullWidth
                summary={(toggle) => (
                  <div className="project-roles">
                    <RoleLine years="2013" toggle={toggle}>
                      Co-Founder, Editor
                    </RoleLine>
                  </div>
                )}
              >
                <li>
                  Online journal for critical thinking about technology and new
                  media in light of the Christian tradition
                </li>
              </MobileCollapsibleList>
            </div>
          </article>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div className="section-content education-list">
          <article className="education-entry">
            <LinkedLogo
              href="https://www.catholic.edu/"
              label="Catholic University of America website"
              imageClassName="education-logo education-logo-cua"
              src="logo-catholic-university.png"
              size={64}
            />
            <div>
              <h3>
                <a
                  href="https://www.catholic.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Catholic University of America
                  <PlaceIcon place="dc" />
                </a>
              </h3>
              <p>
                Ph.D. coursework, Moral Theology{" "}
                <span className="meta-pill">INC</span>
              </p>
            </div>
          </article>

          <article className="education-entry">
            <LinkedLogo
              href="https://www.stthomas.edu/"
              label="University of St. Thomas website"
              imageClassName="education-logo education-logo-st-thomas"
              src="st-thomas-logo.png"
              size={64}
            />
            <div>
              <h3>
                <a
                  href="https://www.stthomas.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  University of St. Thomas
                  <PlaceIcon place="mn" />
                </a>
              </h3>
              <p>
                M.A., Systematic Theology{" "}
                <span className="meta-pill">2015</span>
              </p>
            </div>
          </article>

          <article className="education-entry">
            <LinkedLogo
              href="https://www.wheaton.edu/"
              label="Wheaton College website"
              imageClassName="education-logo education-logo-wheaton"
              src="logo-wheaton-shield.svg"
              size={64}
            />
            <div>
              <h3>
                <a
                  href="https://www.wheaton.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wheaton College
                  <PlaceIcon place="il" />
                </a>
              </h3>
              <p>
                B.A., Philosophy{" "}
                <span className="meta-pill">2010</span>
              </p>
            </div>
          </article>
        </div>
      </section>
      <footer className="site-footer">
        <p>Last updated August 2026</p>
      </footer>
    </main>
  );
}
