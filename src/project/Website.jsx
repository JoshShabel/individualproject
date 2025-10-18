const Website = () => {
    return (
        <div>
            <h2>Who operates this site?</h2>
            <div>
                <ul>
                    <li>
                        <div>This site is from the community, and for the community.</div>
                    </li>
                    <li>
                        <div>The OpenWrt developers provide the facilities that make this site work, but are otherwise
                            equal members of the community.
                        </div>
                    </li>
                    <li>
                        <div>A few of the top-level pages about the community&#39;s governing rules are on read-only
                            pages.
                            The majority of the site is open for registered members to edit and improve.
                        </div>
                    </li>
                </ul>
            </div>
            <h2>Purpose</h2>
            <div>
                <p>The purpose of this site is to provide:</p>
                <ul>
                    <li>
                        <div>Hardware information about devices supported by OpenWrt</div>
                    </li>
                    <li>
                        <div>Installation instructions</div>
                    </li>
                    <li>
                        <div>Tutorials for e.g. <abbr>VPN</abbr>, WiFi, ...</div>
                    </li>
                </ul>
            </div>
            <h2>Editing Pages - Using the Dokuwiki Syntax</h2>
            <div>
                <p>Read Dokuwiki Syntax Tutorial for available markup commands and installed syntax plugins. Try them
                    out in the Playground Page!</p>
            </div>
            <h2>What to write - Making good and useful articles in the wiki</h2>
            <div>
                <p>Read Wiki contribution guide to see the guidelines to follow when writing articles.</p>
            </div>
            <h2>Pictures</h2>
            <div>
                <p>See Adding images to the OpenWrt Wiki on how to take good pictures and upload them to the site.</p>
            </div>
            <h2>Maintenance</h2>
            <div>
                <p>The site has built-in consistency tests. These pages are automatically generated to report
                    problems.</p>
                <ul>
                    <li>
                        <div>Regular maintenance helps to keep the site in good shape.</div>
                    </li>
                    <li>
                        <div>Check the To do list for tasks flagged as needing to be done</div>
                    </li>
                </ul>
            </div>
            <h2>Statistics</h2>
            <div>
                <p>See statistics for internally-managed services.</p>
            </div>
            <h2>Contributions are welcome!</h2>
            <div>
                <ul>
                    <li>
                        <div>Join the OpenWrt web site team!</div>
                    </li>
                    <li>
                        <div>Register yourself in the site</div>
                    </li>
                </ul>
            </div>
            <h2>Contact</h2>
            <div>
                <p>Below mentioned people can be contacted <strong>regarding questions about this website</strong>.</p>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>What</th>
                            <th>Who</th>
                            <th>Contact via</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Table of hardware</td>
                            <td>tmomas</td>
                            <td>Forum</td>
                        </tr>
                        <tr>
                            <td>Wiki in general (Usage, Syntax, ...)</td>
                            <td>tmomas</td>
                            <td>Forum</td>
                        </tr>
                        <tr>
                            <td>Package list</td>
                            <td>bobafetthotmail</td>
                            <td>Forum</td>
                        </tr>
                        <tr>
                            <td>Infrastructure (server outages, ...)</td>
                            <td>thess, jow</td>
                            <td>Bug tracker<sup>1)</sup></td>
                        </tr>
                        <tr>
                            <td>Other questions about openwrt.org</td>
                            <td>Forum</td>
                            <td>Forum</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr/>
            <div>
                <div><sup>1)</sup>
                    <div>There is also a page with more info about reporting bugs.</div>
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

Website.propTypes = {}

export default Website;
