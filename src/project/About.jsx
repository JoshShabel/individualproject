const About = () => {
    return (
        <div>
            <h1>About the OpenWrt/LEDE project</h1>
            <div>
                <p>OpenWrt is a highly extensible GNU/Linux distribution for embedded devices (typically wireless
                    routers). Unlike many other distributions for these routers, OpenWrt is built from the ground up to
                    be a full-featured, easily modifiable operating system for your router. In practice, this means that
                    you can have all the features you need with none of the bloat, powered by a Linux kernel that&#39;s
                    more recent than most other distributions.</p>
            </div>
            <h2>What is OpenWrt?</h2>
            <div>
                <p>Instead of trying to create a single, static firmware, OpenWrt provides a fully writable filesystem
                    with optional package management. This frees you from the restrictions of the application selection
                    and configuration provided by the vendor and allows you to use packages to customize an embedded
                    device to suit any application. For developers, OpenWrt provides a framework to build an application
                    without having to create a complete firmware image and distribution around it. For users, this means
                    the freedom of full customization, allowing the use of an embedded device in ways the vendor never
                    envisioned.</p>
            </div>
            <h2>A reboot of the OpenWrt community</h2>
            <div>
                <p>In 2016, the LEDE project was founded as a spin-off of the OpenWrt project and shared many of the
                    same goals. The project aimed at building an embedded Linux distribution that makes it easy for
                    developers, system administrators or other Linux enthusiasts to build and customize software for
                    embedded devices, especially wireless routers. The name <em>LEDE</em> stood for <em>Linux Embedded
                        Development Environment</em>.</p>
                <p>Members of the project included a significant share of the most active members of the OpenWrt
                    community and intended to bring new life to Embedded Linux development by creating a community with
                    a strong focus on transparency, collaboration and decentralisation.</p>
                <p>LEDE&rsquo;s stated goals were:</p>
                <ul>
                    <li>
                        <div>Build a great embedded Linux distribution with focus on stability and functionality.</div>
                    </li>
                    <li>
                        <div>Make regular, predictable release cycles coupled with community provided device testing
                            feedback.
                        </div>
                    </li>
                    <li>
                        <div>Establish transparent decision processes with broad community participation and public
                            meetings.
                        </div>
                    </li>
                </ul>
                <p>The formation of the LEDE project was decided to solve long standing issues that were deemed
                    unfixable from within the OpenWrt project/community:</p>
                <ol>
                    <li>
                        <div>Number of active core developers at an all time low, no process for getting more new people
                            involved.
                        </div>
                    </li>
                    <li>
                        <div>Unreliable infrastructure, fixes prevented by internal disagreements and single points of
                            failure.
                        </div>
                    </li>
                    <li>
                        <div>Lack of communication, transparency and coordination in the OpenWrt project, both inside
                            the core team and between the core team and the rest of the community.
                        </div>
                    </li>
                    <li>
                        <div>Not enough people with commit access to handle the incoming flow of patches, too little
                            attention to testing and regular builds.
                        </div>
                    </li>
                    <li>
                        <div>Lack of focus on stability and documentation.</div>
                    </li>
                </ol>
                <p>To address these issues, the LEDE project was set up in a different way compared to OpenWrt:</p>
                <ol>
                    <li>
                        <div>All communication channels are public, some read-only to non-members to maintain a good
                            signal-to-noise ratio.
                        </div>
                    </li>
                    <li>
                        <div>Decision making process is more open, with an approximate 50/50 mix of developers and power
                            users with voting rights.
                        </div>
                    </li>
                    <li>
                        <div>Infrastructure is simplified a lot, to ensure that it creates less maintenance work for
                            us.
                        </div>
                    </li>
                    <li>
                        <div>More liberal merge policy, based on our experience with the OpenWrt package github feed.
                        </div>
                    </li>
                    <li>
                        <div>Strong focus on automated testing combined with a simplified release process.</div>
                    </li>
                </ol>
            </div>
            <h2>Announcing the OpenWrt/LEDE merge</h2>
            <div>
                <p>As of January 2018, both the OpenWrt and LEDE projects agreed to re-merge back under the OpenWrt
                    name.</p>
                <p>The new, unified OpenWrt project is governed under the rules established by the former LEDE project.
                    Active members of both the former LEDE and OpenWrt projects contribute to the unified OpenWrt.</p>
            </div>
            <h3>Joint future</h3>
            <div>
                <p> LEDE&#39;s fork and subsequent re-merge into OpenWrt did not alter the overall technical direction
                    taken by the unified project. OpenWrt will continue to work on improving stability and release
                    maintenance while aiming for frequent minor releases to address critical bugs and security issues
                    like LEDE did with the 17.01 series and its multiple point releases until now.</p>
                <p>Old pre-15.05 OpenWrt CC releases are not supported by the merged project anymore, leaving them
                    without any future security or bug fixes. The OpenWrt CC 15.05 release series did receive a limited
                    amount of security and bug fixes, but due to its lacking integration in the release automation, no
                    further binary image releases were made.</p>
                <p>The merged project uses the code base of the former LEDE project. OpenWrt specific patches not
                    present in the LEDE repository but meeting LEDEs code quality requirements got integrated into the
                    new tree while the source code has been moved to git.openwrt.org with a continuously synchronized
                    mirror hosted at Github. The original OpenWrt codebase has been archived on Github for future
                    reference.</p>
                <p>The remerged OpenWrt project is legally represented by the Software in the Public Interest (SPI) - an
                    US 501(c)(3) non-profit organization which is managing our OpenWrt trademark, handling our donations
                    and helping us with legal problems.</p>
                <p>Infrastructure formerly available under the lede-project.org domain has been mostly moved to
                    corresponding openwrt.org subdomains and redirects were put in place when appropriate.</p>
            </div>
            <h2>Name</h2>
            <div>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td>The name <em>OpenWrt</em> stems from the beginning of the open wireless router
                                movements, starting with the first White Russian releases for WRT54G routers, marking
                                the start of future wireless router firmware development.
                            </td>
                        </tr>
                        <tr>
                            <td>The name <em>LEDE</em> is an abbreviation for Linux Embedded Development Environment, a
                                reference to its flexibility and embedded buildroot origins, making it a solid choice
                                for embedded Linux applications far beyond the wireless router and network appliance
                                realm.
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h2>Meeting Logs</h2>
            <div>
                <p><abbr>IRC</abbr> meeting logs done during the LEDE fork can be viewed here.</p>
                <p>Real life / F2F meetings</p>
            </div>
            <h2>People</h2>
            <div>
                <p>Here you can find an alphabetically ordered list of the current people involved
                    in <em>OpenWrt</em> Project:</p>
                <div>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th>Developers</th>
                                <th>Nickname</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Adrian Schmutzler</td>
                                <td>adrianschmutzler</td>
                            </tr>
                            <tr>
                                <td>Alexander Couzens</td>
                                <td>lynxis</td>
                            </tr>
                            <tr>
                                <td>&Aacute;lvaro Fern&aacute;ndez Rojas</td>
                                <td>noltari</td>
                            </tr>
                            <tr>
                                <td>Baptiste Jonglez</td>
                                <td>zorun</td>
                            </tr>
                            <tr>
                                <td>Christian Lamparter</td>
                                <td>lach1012</td>
                            </tr>
                            <tr>
                                <td>Christian Marangi</td>
                                <td>ansuel</td>
                            </tr>
                            <tr>
                                <td>Chuanhong Guo</td>
                                <td>981213</td>
                            </tr>
                            <tr>
                                <td>Daniel Golle</td>
                                <td>dangole</td>
                            </tr>
                            <tr>
                                <td>David Woodhouse</td>
                                <td>dwmw2</td>
                            </tr>
                            <tr>
                                <td>David Bauer</td>
                                <td>blocktrron</td>
                            </tr>
                            <tr>
                                <td>Felix Fietkau</td>
                                <td>nbd</td>
                            </tr>
                            <tr>
                                <td>Florian Fainelli</td>
                                <td>[florian]</td>
                            </tr>
                            <tr>
                                <td>Hans Dedecker</td>
                                <td>dedeckeh</td>
                            </tr>
                            <tr>
                                <td>Hauke Mehrtens</td>
                                <td>hauke</td>
                            </tr>
                            <tr>
                                <td>Imre Kaloz</td>
                                <td>kaloz</td>
                            </tr>
                            <tr>
                                <td>Jo-Philipp Wich</td>
                                <td>jow</td>
                            </tr>
                            <tr>
                                <td>John Crispin</td>
                                <td>blogic</td>
                            </tr>
                            <tr>
                                <td>Jonas Gorski</td>
                                <td>jogo</td>
                            </tr>
                            <tr>
                                <td>Kevin Darbyshire-Bryant</td>
                                <td>ldir</td>
                            </tr>
                            <tr>
                                <td>Koen Vandeputte</td>
                                <td>xback</td>
                            </tr>
                            <tr>
                                <td>Luka Perkov</td>
                                <td>luka</td>
                            </tr>
                            <tr>
                                <td>Mathias Kresin</td>
                                <td>mkresin</td>
                            </tr>
                            <tr>
                                <td>Matthias Schiffer</td>
                                <td>neocturne</td>
                            </tr>
                            <tr>
                                <td>Mirko Vogt</td>
                                <td>mirko</td>
                            </tr>
                            <tr>
                                <td>Nick Hainke</td>
                                <td>nick</td>
                            </tr>
                            <tr>
                                <td>Paul Spooren</td>
                                <td>aparcar</td>
                            </tr>
                            <tr>
                                <td>Petr &Scaron;tetiar</td>
                                <td>ynezz</td>
                            </tr>
                            <tr>
                                <td>Piotr Dymacz</td>
                                <td>pepe2k</td>
                            </tr>
                            <tr>
                                <td>Rafał Miłecki</td>
                                <td>rmilecki</td>
                            </tr>
                            <tr>
                                <td>Roberto Marko</td>
                                <td>robimarko</td>
                            </tr>
                            <tr>
                                <td>Rui Salvaterra</td>
                                <td>rsalvaterra</td>
                            </tr>
                            <tr>
                                <td>Sander Vanheule</td>
                                <td>svanheule</td>
                            </tr>
                            <tr>
                                <td>Steven Barth</td>
                                <td>cyrus</td>
                            </tr>
                            <tr>
                                <td>Stijn Tintel</td>
                                <td>stintel</td>
                            </tr>
                            <tr>
                                <td>Sungbo Eo</td>
                                <td>mans0n</td>
                            </tr>
                            <tr>
                                <td>Ted Hess</td>
                                <td>thess</td>
                            </tr>
                            <tr>
                                <td>Yousong Zhou</td>
                                <td>yousong</td>
                            </tr>
                            <tr>
                                <td>Zoltan Herpai</td>
                                <td>wigyori</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th>Wiki Documentation</th>
                                <th>Nickname</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Thomas Endt</td>
                                <td>tmomas</td>
                            </tr>
                            <tr>
                                <td>Rich Brown</td>
                                <td>richb-hanover</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>This website uses cookies. By using the website, you agree with storing cookies on your computer. Also
                you acknowledge that you have read and understand our Privacy Policy. If you do not agree leave the
                website.
                More information about cookies
            </div>
        </div>
    );
};

About.propTypes = {}

export default About;
