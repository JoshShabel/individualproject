const Bugs = () => {
    return (
        <div>
            <h1>Reporting bugs</h1>
            <div>&nbsp;</div>
            <h2>Bug or no bug?</h2>
            <div>
                <p>In case you are unsure if what you found is a bug, or if you have other issues that are not bugs,
                    please use the forum, IRC or mailing list.</p>
            </div>
            <h2>Issue trackers</h2>
            <div>
                <p>Report bugs pertaining OpenWrt functionality and device support using our issue trackers:</p>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Issue tracker</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>github.com/openwrt/openwrt</td>
                            <td>Core</td>
                        </tr>
                        <tr>
                            <td>github.com/openwrt/packages</td>
                            <td>Packages</td>
                        </tr>
                        <tr>
                            <td>github.com/openwrt/luci</td>
                            <td>LuCI</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <p>If you are unsure, please use the Packages tables to know where you should report the bug.</p>
                <p>When reporting bugs, please be sure to specify:</p>
                <ul>
                    <li>
                        <div>Name the tree/revision/version</div>
                    </li>
                    <li>
                        <div>Name the affected device</div>
                    </li>
                    <li>
                        <div>What does it do that it should not do / what does it not do that it should do</div>
                    </li>
                    <li>
                        <div>Steps to reproduce</div>
                    </li>
                    <li>
                        <div>What you have already done to workaround/fix the problem</div>
                    </li>
                    <li>
                        <div>Any additional info you think is important</div>
                    </li>
                </ul>
                <p>Remember, the better is your bug report, the more likely it is that it will be worked on, How to
                    Report Bugs Effectively is recommended reading.</p>
                <p> Reporting a bug is important as it raises awareness of an issue, but it does not constitute a claim
                    that anyone has to work on fixing it.</p>
            </div>
            <h2>Reporting security bugs</h2>
            <div>
                <p>If you found a (potential) security problem and would like to report this confidential to the OpenWrt
                    project please use contact@openwrt.org.</p>
                <p>Non-security related bug reports and support requests send to this email address will be ignored.
                    Mails send to this address are received by most of the developers with commit access. We haven&#39;t
                    set
                    up a PGP key to send encrypted mail for this mail address yet.</p>
                <p>Please also inform us about CVEs you opened against OpenWrt using that e-mail address, preferably
                    before the details are published, but please do so at latest at the time of publishing.</p>
            </div>
            <h2>Reporting user interface issues</h2>
            <div>
                <p>In the context of an ui issue, clear steps to reproduce would be:</p>
                <ul>
                    <li>
                        <div>Describing the initial state (starting of a fresh config, sysupgraded from older version
                            with retaining settings)
                        </div>
                    </li>
                    <li>
                        <div>Briefly mentioning the steps taken in which order, e.g.:</div>
                    </li>
                </ul>
                <ol>
                    <li>
                        <div>What page browsed to</div>
                    </li>
                    <li>
                        <div>What buttons pressed</div>
                    </li>
                    <li>
                        <div>Any settings/options checked/typed/selected</div>
                    </li>
                    <li>
                        <div>What button selected to save/apply</div>
                    </li>
                    <li>
                        <div><strong>Clearly note error</strong></div>
                    </li>
                </ol>
            </div>
            <div>This website uses cookies. By using the website, you agree with storing cookies on your computer. Also
                you acknowledge that you have read and understand our Privacy Policy. If you do not agree leave the
                website.
                More information about cookies
            </div>
        </div>
    );
};

Bugs.propTypes = {}

export default Bugs;
