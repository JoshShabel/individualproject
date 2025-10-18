const Downloads = () => {
    return (
        <div>
            <h1>Downloads</h1>
            <div>&nbsp;</div>
            <h2>Browse the OpenWrt firmware repository</h2>
            <div>
                <p>These links take you to the Downloads directory for the current hardware, grouped by processor type
                    of the devices.<br/> OpenWrt software has two distinct branches: a
                    stable <strong>Release</strong> build that is suitable for production use, and
                    a <strong>Development</strong> build that contains an ever-evolving set of enhancements.</p>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Stable Release builds</th>
                            <th>Development Snapshot builds</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>The <strong>Release</strong> builds have had significant testing. Use them for
                                production, or for your home where your family will rely on a functioning router.
                                More...
                            </td>
                            <td>Get the latest with a <strong>Development</strong> build. These contain the latest
                                technology, but may not work well, or at all. Be prepared to supply bug reports, etc.
                                More...
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h2>Download OpenWrt firmware specific for your device</h2>
            <div>
                <p>Go to the <strong>Table of Hardware</strong> or use firmware selector to locate the latest official
                    release firmware for your device hardware.</p>
                <ul>
                    <li>
                        <div>Refer to the file signing documentation to learn how to verify the integrity of the
                            firmware downloads.
                        </div>
                    </li>
                    <li>
                        <div>Refer to the Quick Start or User Guide, to install the firmware on your device</div>
                    </li>
                    <li>
                        <div>GL.iNet, Turris and some others routers already have an OpenWrt based firmware so you may
                            not need to install it manually.
                        </div>
                    </li>
                </ul>
            </div>
            <h2>Get additional software packages</h2>
            <div>
                <p>After you have installed the OpenWrt firmware to your device, you can install additional software
                    packages on your OpenWrt device.</p>
                <ul>
                    <li>
                        <div>Packages per instructionset</div>
                    </li>
                    <li>
                        <div>Find out which instructionset your device has</div>
                    </li>
                </ul>
            </div>
            <h2>Build your own firmware</h2>
            <div>
                <p>OpenWrt ships with its own complete build system. You can download and compile your own firmware from
                    source, adding advanced tweaks or modifications that can be done only at build time. The OpenWrt
                    build system produces reproducible builds with checksums and Git versioning, all firmware you
                    compile will be exactly the same until you change options or you update OpenWrt sources. Start here
                    if you want to compile your own firmware.</p>
            </div>
            <h2>Assemble your own firmware</h2>
            <div>
                <p>OpenWrt provides convenient tools to integrate pre-built packages into a custom firmware image,
                    striking a good balance between firmware customization and time/resources required. All packages
                    integrated this way will be downloaded from the same online repositories used for updates, so the
                    process will take minutes even on weak PCs. Start here if you want to assemble your own
                    firmware.</p>
            </div>
            <h2>Build your own packages</h2>
            <div>
                <p>If you just want to compile your program and create a custom package without compiling from source a
                    whole firmware for all architectures you want to support, OpenWrt provides a convenient SDK package
                    to do so. Start here if you want to create packages for your own software.</p>
            </div>
            <h2>Buildbot activity</h2>
            <div>
                <p>OpenWrt has a number of Buildbot computers building firmware releases. If you are interested in the
                    latest developer snapshot release build activities, you can find the Buildbot activity in the
                    following links:</p>
                <ul>
                    <li>
                        <div>Phase 1: target/subtargets</div>
                    </li>
                    <li>
                        <div>Phase 2: packages</div>
                    </li>
                </ul>
            </div>
            <h2>Source code: Git repositories</h2>
            <div>
                <p>The master OpenWrt source code repositories reside on the OpenWrt Git server.</p>
            </div>
            <h2>Source code: GitHub mirrors</h2>
            <div>
                <p>The mirror of the master OpenWrt repository is located on GitHub.</p>
            </div>
            <h2>Mirrors</h2>
            <div>
                <p>The contents of the download server are available on several mirrors as well. Please refer to the
                    list below for alternative locations.</p>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td><strong>Country</strong></td>
                            <td><strong><abbr>HTTP</abbr></strong></td>
                            <td><strong><abbr>HTTPS</abbr></strong></td>
                            <td><strong><abbr>FTP</abbr></strong></td>
                            <td><strong>RSYNC</strong></td>
                            <td><strong>Sponsor</strong></td>
                            <td><strong>Notes</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Austria</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>rsync://mirror.kumi.systems/openwrt/</td>
                            <td>Kumi Systems e.U.</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td><strong>Belgium</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>-</td>
                            <td>Arnold Dechamps</td>
                            <td>Synced every 12 hours (No Snapshots)</td>
                        </tr>
                        <tr>
                            <td><strong>Brazil</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>rsync://openwrt.c3sl.ufpr.br/openwrt/</td>
                            <td>Universidade Federal do Paran&aacute;</td>
                            <td>Only a few releases</td>
                        </tr>
                        <tr>
                            <td><strong>China</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>-</td>
                            <td>Shanghai Jiao Tong University Linux User Group</td>
                            <td>Only releases</td>
                        </tr>
                        <tr>
                            <td><strong>China</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>rsync://mirrors.tuna.tsinghua.edu.cn/openwrt/</td>
                            <td>Tsinghua University TUNA Association</td>
                            <td>Only releases</td>
                        </tr>
                        <tr>
                            <td><strong>China</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>rsync://rsync.mirrors.ustc.edu.cn/openwrt/</td>
                            <td>University of Science and Technology of China</td>
                            <td>Only releases</td>
                        </tr>
                        <tr>
                            <td><strong>China</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>-</td>
                            <td>Alibaba Cloud Computing (Beijing) Co., Ltd.</td>
                            <td>Only releases</td>
                        </tr>
                        <tr>
                            <td><strong>China</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>-</td>
                            <td>Tencent</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td><strong>China</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>-</td>
                            <td>MirrorZ</td>
                            <td>10+ mirrors</td>
                        </tr>
                        <tr>
                            <td><strong>France</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>rsync://openwrt.tetaneutral.net/openwrt/</td>
                            <td>tetaneutral.net</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td><strong>India/Guwahati</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>&nbsp;</td>
                            <td>NKN</td>
                            <td>Only releases</td>
                        </tr>
                        <tr>
                            <td><strong>Italy</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>&nbsp;</td>
                            <td>GARR Mirror</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td><strong>Japan</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>&nbsp;</td>
                            <td>rsync://repo.jing.rocks/openwrt/</td>
                            <td>Jing Luo</td>
                            <td>Synced every 23 hours</td>
                        </tr>
                        <tr>
                            <td><strong>Japan</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>&nbsp;</td>
                            <td>rsync://mirror.hashy0917.net/openwrt/</td>
                            <td>hashy0917</td>
                            <td>Synced every 12 hours,All-Flash storage,10GBps Network</td>
                        </tr>
                        <tr>
                            <td><strong>Kazakhstan</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>rsync://mirror.hoster.kz/openwrt/</td>
                            <td>hoster.kz</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td><strong>Kazakhstan/Almaty</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>FTP</td>
                            <td>-</td>
                            <td>PS Internet Company</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td><strong>Morocco</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>rsync://mirror.marwan.ma/openwrt/</td>
                            <td>Moroccan National Research and Education Network</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td><strong>Netherlands</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>FTP</td>
                            <td>rsync://ftp.snt.utwente.nl/lede/</td>
                            <td>SNT, University of Twente</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td><strong>Romania</strong></td>
                            <td>HTTP</td>
                            <td>-</td>
                            <td>FTP</td>
                            <td>rsync://mirrors.linux.ro/lede/downloads/</td>
                            <td>RCS&amp;RDS</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td><strong>UK</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>rsync://mirror.autkin.net/openwrt/</td>
                            <td>Andriy Utkin</td>
                            <td>only latest minor.major.micro release</td>
                        </tr>
                        <tr>
                            <td><strong>United States</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>-</td>
                            <td>Starburst Services</td>
                            <td>
                                <del>Only releases</del>
                                Temporarily suspended
                            </td>
                        </tr>
                        <tr>
                            <td><strong>CDN (Cloudflare)</strong></td>
                            <td>HTTP</td>
                            <td>HTTPS</td>
                            <td>-</td>
                            <td>-</td>
                            <td>cicku.me</td>
                            <td>&nbsp;</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h3>How to mirror</h3>
            <div>
                <p>Please only setup a mirror if really needed: e.g. if you don&#39;t have good connectivity to existing
                    mirrors, or if you have many downstream users. In all cases, the official OpenWrt download service
                    won&#39;t automatically use your mirror.</p>
            </div>
            <h4>Space requirements</h4>
            <div>
                <p>The total amount of data is 2.6 TB (2.4 TiB) as of January 2024, and it increases by around
                    600-700 <abbr>GB</abbr> per year. The space needed per release is shown below, in <abbr>GB</abbr> =
                    10^9 bytes. Each number adds up all minor releases for a given major release.</p>
                <p>Feel free to exclude part of the repository to save space (e.g. ignore older releases) or to save
                    bandwidth (e.g. ignore snapshots since they change daily).</p>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td><strong>Release</strong></td>
                            <td><strong>snapshots</strong></td>
                            <td><strong>23.05</strong></td>
                            <td><strong>22.03</strong></td>
                            <td><strong>21.02</strong></td>
                            <td><strong>19.07</strong></td>
                            <td><strong>18.06</strong></td>
                            <td><strong>17.01</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Size</strong></td>
                            <td>180 <abbr>GB</abbr></td>
                            <td>573 <abbr>GB</abbr></td>
                            <td>714 <abbr>GB</abbr></td>
                            <td>525 <abbr>GB</abbr></td>
                            <td>290 <abbr>GB</abbr></td>
                            <td>207 <abbr>GB</abbr></td>
                            <td>109 <abbr>GB</abbr></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h4>Mirroring with rsync</h4>
            <div>
                <p>Use <del><code>rsync://downloads.openwrt.org/downloads</code></del>
                    <code>rsync://rsync.openwrt.org/downloads</code> to obtain a copy of the download repository.
                </p>
                <p><strong>2023-12-18: We had to change the <abbr>DNS</abbr> name for rsync
                    to <code>rsync.openwrt.org</code> because <code>downloads.openwrt.org</code> is now served by a CDN.
                    Please update your mirror setup to use the new name.</strong></p>
                <p>Due to current bandwidth constraints, we kindly ask you to use an existing mirror when initially
                    pulling the data instead of the official repository. Syncing the downloads share every 12 to 24
                    hours is ideal, combined with something like <code>rsync --bwlimit=8000</code>.</p>
            </div>
            <h4>Announcing your mirror</h4>
            <div>
                <p>Once a mirror has been set up, feel free to announce it at <code>openwrt-adm@lists.openwrt.org</code>,
                    with details about which part of the repository you sync. It will be published on this page, but
                    this is only a convenience so that users can be made aware of available mirrors: there is no
                    automatic load-balancing system that exploits mirrors. Users can choose to manually use a mirror if
                    they find they have a better connectivity to it.</p>
            </div>
            <div>This website uses cookies. By using the website, you agree with storing cookies on your computer. Also
                you acknowledge that you have read and understand our Privacy Policy. If you do not agree leave the
                website.
                More information about cookies
            </div>
        </div>
    );
};

Downloads.propTypes = {}

export default Downloads;
