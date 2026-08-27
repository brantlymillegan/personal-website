import MobileCollapsibleList from "./mobile-collapsible-list";
import ThemeToggle from "./theme-toggle";

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
            <img
              className="project-logo"
              src="ens-logo.png"
              alt=""
              width="64"
              height="64"
            />
            <div>
              <h3>
                <a href="https://ens.domains/">
                  Ethereum Name Service (ENS)
                </a>
              </h3>
              <p className="project-role">
                Director of Operations{" "}
                <span className="meta-pill">2019-2022</span>
              </p>
              <MobileCollapsibleList label="Ethereum Name Service">
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
            <img
              className="project-logo"
              src="ens-dao-logo.png"
              alt=""
              width="64"
              height="64"
            />
            <div>
              <h3>
                <a href="https://ensdao.org/">ENS DAO</a>
              </h3>
              <div className="project-roles">
                <p className="project-role">
                  Launch lead <span className="meta-pill">2021</span>
                </p>
                <p className="project-role">
                  ENS Foundation, founding director{" "}
                  <span className="meta-pill">2021 - 2023</span>
                </p>
                <p className="project-role">
                  Security Council{" "}
                  <span className="meta-pill">2024 - 2026</span>
                </p>
                <p className="project-role">
                  Top Delegate{" "}
                  <span className="meta-pill">2021 - 2026</span>
                </p>
              </div>
              <MobileCollapsibleList label="ENS DAO">
                <li>DAO manages key components of the ENS protocol</li>
                <li>$ENS token voting</li>
              </MobileCollapsibleList>
            </div>
          </article>

          <article className="project-entry">
            <img
              className="project-logo"
              src="siwe-logo.png"
              alt=""
              width="64"
              height="64"
            />
            <div>
              <h3>
                <a href="https://siwe.xyz/">Sign in with Ethereum (SIWE)</a>
              </h3>
              <div className="project-roles">
                <p className="project-role">
                  Creator <span className="meta-pill">2021</span>
                </p>
                <p className="project-role">
                  <a
                    href="https://eips.ethereum.org/EIPS/eip-4361"
                    target="_blank"
                    rel="noreferrer"
                  >
                    EIP 4361
                  </a>{" "}
                  co-author <span className="meta-pill">2021</span>
                </p>
                <p className="project-role">
                  Project Director{" "}
                  <span className="meta-pill">2021-2022, 2025-2026</span>
                </p>
              </div>
              <MobileCollapsibleList label="Sign in with Ethereum">
                <li>Authentication standard for Ethereum accounts</li>
                <li>Used by MetaMask, OpenRouter, Polymarket, and more</li>
              </MobileCollapsibleList>
            </div>
          </article>

          <article className="project-entry">
            <img
              className="project-logo ethid-logo"
              src="ethid-logo.png"
              alt=""
              width="64"
              height="64"
            />
            <div>
              <h3>
                <a href="https://ethid.org/">EthID</a>
              </h3>
              <p className="project-role">
                Founder, Executive Director{" "}
                <span className="meta-pill">2024 - 2026</span>
              </p>
              <MobileCollapsibleList label="EthID">
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
                    <img
                      className="subproject-logo"
                      src="grails-logo.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    <div>
                      <h3 className="subproject-title">
                        <a href="https://grails.app/">Grails</a>
                      </h3>
                      <MobileCollapsibleList label="Grails">
                        <li>
                          Best bulk management tool and secondary market for
                          ENS names
                        </li>
                      </MobileCollapsibleList>
                    </div>
                  </article>

                  <article className="subproject-entry">
                    <img
                      className="subproject-logo"
                      src="efp-logo.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    <div>
                      <h3 className="subproject-title">
                        <a href="https://efp.app/">
                          Ethereum Follow Protocol (EFP)
                        </a>
                      </h3>
                      <MobileCollapsibleList label="Ethereum Follow Protocol">
                        <li>
                          Onchain social graph protocol for Ethereum accounts,
                          a primitive of the Ethereum identity stack that
                          complements ENS and Sign in with Ethereum.
                        </li>
                      </MobileCollapsibleList>
                    </div>
                  </article>

                  <article className="subproject-entry">
                    <img
                      className="subproject-logo"
                      src="eik-logo.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    <div>
                      <h3 className="subproject-title">
                        <a href="https://ethidentitykit.com/">
                          Ethereum Identity Kit (EIK)
                        </a>
                      </h3>
                      <MobileCollapsibleList label="Ethereum Identity Kit">
                        <li>
                          Component library and API for integrating the Ethereum
                          identity stack
                        </li>
                      </MobileCollapsibleList>
                    </div>
                  </article>

                  <article className="subproject-entry">
                    <img
                      className="subproject-logo"
                      src="ensmarketbot-logo.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    <div>
                      <h3 className="subproject-title">
                        <a href="https://x.com/ENSMarketBot">ENSMarketBot</a>
                      </h3>
                      <MobileCollapsibleList label="ENSMarketBot">
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
            <img
              className="project-logo"
              src="churchpop-logo.png"
              alt=""
              width="64"
              height="64"
            />
            <div>
              <h3>
                <a href="https://www.churchpop.com/">ChurchPOP</a>
              </h3>
              <p className="project-role">
                Founder and Editor-in-Chief{" "}
                <span className="meta-pill">2014 - 2022</span>
              </p>
              <MobileCollapsibleList label="ChurchPOP">
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
              <p className="project-role">
                Co-Founder, Editor <span className="meta-pill">2013</span>
              </p>
              <MobileCollapsibleList label="Second Nature Journal">
                <li>
                  Online journal for critical thinking about technology and new
                  media in light of the Christian tradition.
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
            <img
              className="education-logo"
              src="logo-catholic-university.png"
              alt=""
              width="64"
              height="64"
            />
            <div>
              <h3>
                <a href="https://www.catholic.edu/">
                  Catholic University of America (DC)
                </a>
              </h3>
              <p>
                Ph.D. coursework, Moral Theology{" "}
                <span className="meta-pill">Not completed</span>
              </p>
            </div>
          </article>

          <article className="education-entry">
            <img
              className="education-logo"
              src="st-thomas-logo.png"
              alt=""
              width="64"
              height="64"
            />
            <div>
              <h3>
                <a href="https://www.stthomas.edu/">
                  University of St. Thomas (MN)
                </a>
              </h3>
              <p>
                M.A., Systematic Theology{" "}
                <span className="meta-pill">2015</span>
              </p>
            </div>
          </article>

          <article className="education-entry">
            <img
              className="education-logo"
              src="logo-wheaton-shield.svg"
              alt=""
              width="64"
              height="64"
            />
            <div>
              <h3>
                <a href="https://www.wheaton.edu/">Wheaton College (IL)</a>
              </h3>
              <p>
                B.A., Philosophy{" "}
                <span className="meta-pill">2010</span>
              </p>
            </div>
          </article>
        </div>
      </section>

    </main>
  );
}
