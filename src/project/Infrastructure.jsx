const Infrastructure = () => {
    return (
        <div>
            <h1>OpenWrt project infrastructure</h1>
            <div>
                <p>The OpenWrt project relies on the considerable efforts of its volunteer developers, the core
                    documentation team, the forum moderators, and the host of people who&#39;re actively using and
                    testing the products. The OpenWrt team has also provisioned many physical and virtual servers
                    that &ldquo;make the OpenWrt project go&rdquo;.</p>
            </div>
            <h2>Services</h2>
            <div>&nbsp;</div>
            <h3>Internally-managed services</h3>
            <div>
                <p>We run the following services internally to support the OpenWrt project:</p>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Service</th>
                            <th>Technology</th>
                            <th>Description</th>
                            <th>Server</th>
                            <th>Statistics</th>
                            <th>Admin(s)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Website and documentation</td>
                            <td>Dokuwiki</td>
                            <td>Primary OpenWrt website and documentation/wiki</td>
                            <td>DigitalOcean droplet</td>
                            <td>awstats</td>
                            <td>bobafetthotmail, jow, thess, zorun</td>
                        </tr>
                        <tr>
                            <td>Forum</td>
                            <td>Discourse</td>
                            <td>Provides a place for people to ask and answer questions about using OpenWrt, developing
                                it, and other topics
                            </td>
                            <td>DigitalOcean droplet</td>
                            <td>&nbsp;</td>
                            <td>hauke, jow, thess, psherman</td>
                        </tr>
                        <tr>
                            <td>Git server</td>
                            <td>gitweb</td>
                            <td>Primary OpenWrt source code repositories</td>
                            <td>DigitalOcean droplet</td>
                            <td>gitstats</td>
                            <td>jow, thess</td>
                        </tr>
                        <tr>
                            <td>Bug tracker</td>
                            <td>Github</td>
                            <td>The place where bugs and feature requests are tracked</td>
                            <td>Github</td>
                            <td>&nbsp;</td>
                            <td>jow, thess</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>exim/dovecot</td>
                            <td>Handles incoming emails to @openwrt.org domain and forum mail</td>
                            <td>DigitalOcean droplet</td>
                            <td>&nbsp;</td>
                            <td>jow, thess, stintel</td>
                        </tr>
                        <tr>
                            <td>Buildbot master</td>
                            <td>Buildbot</td>
                            <td>Coordinates builders</td>
                            <td>Hetzner</td>
                            <td>&nbsp;</td>
                            <td>jow, ynezz</td>
                        </tr>
                        <tr>
                            <td>Downloads</td>
                            <td>&nbsp;</td>
                            <td>Hosts all current and released images, SDK, Imagebuilder</td>
                            <td>Hetzner</td>
                            <td>awstats</td>
                            <td>jow, thess</td>
                        </tr>
                        <tr>
                            <td>Downloads archive</td>
                            <td>&nbsp;</td>
                            <td>Hosts old OpenWrt images and releases</td>
                            <td>private co-lo</td>
                            <td>&nbsp;</td>
                            <td>wigyori</td>
                        </tr>
                        <tr>
                            <td>Old wiki archive</td>
                            <td>&nbsp;</td>
                            <td>Old OpenWrt wiki with legacy / non-migrated content</td>
                            <td>private co-lo</td>
                            <td>&nbsp;</td>
                            <td>wigyori</td>
                        </tr>
                        <tr>
                            <td>Sources archive</td>
                            <td>&nbsp;</td>
                            <td>Hosts a copy of sources of all software used in OpenWrt</td>
                            <td>Hetzner</td>
                            <td>&nbsp;</td>
                            <td>jow, thess</td>
                        </tr>
                        <tr>
                            <td>Freescout</td>
                            <td>Freescout</td>
                            <td>Facilitates handling of shared mailboxes (testing)</td>
                            <td>DigitalOcean droplet</td>
                            <td>&nbsp;</td>
                            <td>stintel</td>
                        </tr>
                        <tr>
                            <td>Mailing lists</td>
                            <td>Mailman</td>
                            <td>Main medium of communication for developers and admin</td>
                            <td>infradead</td>
                            <td>&nbsp;</td>
                            <td>dwmw2</td>
                        </tr>
                        <tr>
                            <td>Firmware selector</td>
                            <td>&nbsp;</td>
                            <td>Search and download OpenWrt firmware for your device</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>Sysupgrade server</td>
                            <td>&nbsp;</td>
                            <td>Online ImageBuilder and upgrade server</td>
                            <td>&nbsp;</td>
                            <td>stats</td>
                            <td>aparcar</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h3>Externally-managed services</h3>
            <div>
                <p>We also rely on the following services that are run by external entities:</p>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Service</th>
                            <th>Technology</th>
                            <th>Description</th>
                            <th>Host</th>
                            <th>Liaison</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Patch tracking</td>
                            <td>Patchwork</td>
                            <td>Used to track patches sent to the openwrt-devel mailing list</td>
                            <td>Ozlab</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>Github mirror</td>
                            <td>Github</td>
                            <td>Mirror of OpenWrt repository. Pull-requests are accepted.</td>
                            <td>Github</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>CDN</td>
                            <td>Fastly</td>
                            <td>Content delivery network</td>
                            <td>aparcar</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h2>Hosting infrastructure and costs</h2>
            <div>&nbsp;</div>
            <h3>Servers</h3>
            <div>
                <p>All services that are managed internally are run on servers devoted to the OpenWrt project, except
                    for mailing lists which run on Infradead servers.</p>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Host</th>
                            <th>Servers</th>
                            <th>Services</th>
                            <th>Admin(s)</th>
                            <th>Expected cost</th>
                            <th>Actual cost</th>
                            <th>Comment</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>RS 8000 G9.5 a1 12M + 6TB storage</td>
                            <td>Downloads</td>
                            <td>aparcar</td>
                            <td>100&euro; / month</td>
                            <td>Free</td>
                            <td>Open source project support</td>
                        </tr>
                        <tr>
                            <td>7 droplets (prod)</td>
                            <td>wiki, forum, git, mails...</td>
                            <td>jow, ynezz, stintel</td>
                            <td>344.00 $ / month</td>
                            <td>Free</td>
                            <td>Open source project support</td>
                        </tr>
                        <tr>
                            <td>Hetzner</td>
                            <td>ax41-nvme</td>
                            <td>Buildbot master</td>
                            <td>OpenWrt sysadmins</td>
                            <td>35 &euro;&nbsp;/ month</td>
                            <td>35 &euro; / month</td>
                            <td>Paid privately</td>
                        </tr>
                        <tr>
                            <td>Hetzner</td>
                            <td>sb59</td>
                            <td>Archive</td>
                            <td>blogic</td>
                            <td>49.50 &euro; / month</td>
                            <td>49.50 &euro; / month</td>
                            <td>Paid privately</td>
                        </tr>
                        <tr>
                            <td>Hetzner</td>
                            <td>ax61-nvme + 2x 1.92 TB SSD</td>
                            <td>Downloads</td>
                            <td>jow</td>
                            <td>158.27 &euro; / month</td>
                            <td>158.27 &euro; / month</td>
                            <td>Paid privately</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h3>Buildbot workers</h3>
            <div>
                <p>Buildbot workers detect updates to the source and kick off the build process for each supported
                    device.</p>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Host</th>
                            <th>Name</th>
                            <th>Server <abbr>spec</abbr></th>
                            <th>Nb servers</th>
                            <th>Admin(s)</th>
                            <th>Cost</th>
                            <th>Comment</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Hetzner</td>
                            <td>truecz-dock-01</td>
                            <td>Xeon E3/32GB/2TB</td>
                            <td>1</td>
                            <td>ynezz</td>
                            <td>32&euro; / month</td>
                            <td>Paid privately</td>
                        </tr>
                        <tr>
                            <td>OVH</td>
                            <td>robimarko-dock-01</td>
                            <td>AMD Epyc 7351p, 16c/32t, 128GB RAM, 2x500GB NVME</td>
                            <td>1</td>
                            <td>robimarko, ynezz</td>
                            <td>43$ / month</td>
                            <td>Paid privately</td>
                        </tr>
                        <tr>
                            <td>OSUOSL</td>
                            <td>osuosl-vm-*</td>
                            <td>OpenStack VM (12 cores, 32 <abbr>GB</abbr> RAM, 320 <abbr>GB</abbr> disk)</td>
                            <td>4</td>
                            <td>zorun, ynezz, jow</td>
                            <td>Free</td>
                            <td>Open source project support</td>
                        </tr>
                        <tr>
                            <td>OSUOSL</td>
                            <td>osuosl-dock-*</td>
                            <td>12C, 24T, 64 <abbr>GB</abbr> RAM (2x Xeon X5680 3.33 <abbr>GHz</abbr>)</td>
                            <td>2</td>
                            <td>OpenWrt sysadmins</td>
                            <td>Free</td>
                            <td>Open source project support</td>
                        </tr>
                        <tr>
                            <td>VZFFNRMO</td>
                            <td>vzffnrmo-dock-*</td>
                            <td>Xeon E31230/16GB/100GB</td>
                            <td>1</td>
                            <td>OpenWrt sysadmins</td>
                            <td>?</td>
                            <td>Provided by the Freifunk Karlsruhe Project / VZFFNRMO e.V.</td>
                        </tr>
                        <tr>
                            <td>FFFFM</td>
                            <td>ffffm-dock-*</td>
                            <td>28C, 56T, 448GB RAM, 1.8TB (2x Xeon E5-2680v4 2.4GHz)</td>
                            <td>1</td>
                            <td>OpenWrt sysadmins</td>
                            <td>Free</td>
                            <td>Provided by Freifunk Frankfurt am Main e.V.</td>
                        </tr>
                        <tr>
                            <td>FFB</td>
                            <td>ffb-dock-*</td>
                            <td>12 cores E5-2630 + 64G RAM + 100G HDD</td>
                            <td>1</td>
                            <td>OpenWrt sysadmins</td>
                            <td>Free</td>
                            <td>Provided by Freifunk Berlin</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h4>Worker hardware requirements</h4>
            <div>
                <ul>
                    <li>
                        <div><strong>CPU</strong>: a good worker needs 4-8 CPU cores for phase1/images, and 8-16 CPU
                            cores for phase2/packages. Larger machines are split into several workers using Docker.
                        </div>
                    </li>
                    <li>
                        <div><strong>Memory</strong>: each worker needs a minimum of 1 <abbr>GB</abbr> of RAM for each
                            CPU hardware thread, 2 <abbr>GB</abbr> / thread is preferred. For example, a 16 cores / 32
                            threads machine needs between 32 <abbr>GB</abbr> and 64 <abbr>GB</abbr> of RAM in total.
                        </div>
                    </li>
                    <li>
                        <div><strong>Disk:</strong> each worker needs 50 <abbr>GB</abbr> of disk space (phase1/images)
                            or 100 <abbr>GB</abbr> of disk space (phase2/packages).
                        </div>
                    </li>
                </ul>
            </div>
            <h3>Other costs</h3>
            <div>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>What</th>
                            <th>Provider</th>
                            <th>Admin(s)</th>
                            <th>Expected cost</th>
                            <th>Actual cost</th>
                            <th>Comment</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Domain names</td>
                            <td>Tucows</td>
                            <td>SPI Hostmaster / jow</td>
                            <td>20-40 &euro; / year</td>
                            <td>Free</td>
                            <td>Held by Tucows on behalf of SPI</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h2>Buildbot build matrix</h2>
            <div>
                <p>There are several buildbot instances, phase1 to build images, and phase2 to build packages.</p>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Version</th>
                            <th>Phase 1 - Images</th>
                            <th>Phase 2 - Packages</th>
                            <th>Fail logs</th>
                            <th>Image downloads</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>main</td>
                            <td>Phase 1 - Images</td>
                            <td>Phase 2 - Packages</td>
                            <td>Fail logs</td>
                            <td>images</td>
                        </tr>
                        <tr>
                            <td>24.10</td>
                            <td>24.10 Images</td>
                            <td>24.10 Packages</td>
                            <td>Fail logs</td>
                            <td>images</td>
                        </tr>
                        <tr>
                            <td>23.05</td>
                            <td>23.05 Images</td>
                            <td>23.05 Packages</td>
                            <td>Fail logs</td>
                            <td>images</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h2>Finances</h2>
            <div>
                <ul>
                    <li>
                        <div>Each of the Hetzner servers costs about 50 Euros per month, for a total of 150
                            Euros/month.
                        </div>
                    </li>
                    <li>
                        <div>There is a small annual charge (20-40 Euros) for registering the domain names, etc.</div>
                    </li>
                    <li>
                        <div>As of late 2016, two core team members are personally covering the costs of the Hetzner
                            servers while another core team member picks up the other fees. So far, no one has stepped
                            up to fund the new servers that will be required in the coming months.
                        </div>
                    </li>
                    <li>
                        <div>Other private parties generously donate their time &amp; compute cycles, you know who you
                            are and we thank you.
                        </div>
                    </li>
                </ul>
            </div>
            <h2>Donations</h2>
            <div>
                <p>See the Donations&nbsp;page.</p>
            </div>
            <div>This website uses cookies. By using the website, you agree with storing cookies on your computer. Also
                you acknowledge that you have read and understand our Privacy Policy. If you do not agree leave the
                website.
                More information about cookies
            </div>
        </div>
    );
};

Infrastructure.propTypes = {}

export default Infrastructure;
