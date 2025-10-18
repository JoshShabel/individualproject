const Rules = () => {
    return (
        <div>
            <h1>OpenWrt/LEDE Project Rules</h1>
            <div>
                <ol>
                    <li>
                        <div>The only role distinction within the <em>OpenWrt</em> (former <em>LEDE</em>) project is
                            between committers and non-committers, there is no core developer group or other specially
                            privileged members.
                        </div>
                    </li>
                    <li>
                        <div>All committers have the right to vote and are invited to liberally exercise this voting
                            right in order to keep a broad consensus on project matters.
                        </div>
                    </li>
                    <li>
                        <div>Project matters, overall development directions etc. are decided by simple majority votes.
                            Votes may be held in different ways like simple yes/no decisions, majority decisions among
                            multiple proposed choices etc.
                        </div>
                    </li>
                    <li>
                        <div>Committers being unreachable for three months in a row shall get their commit and voting
                            rights revoked in order to retain the ability to do majority votes among the remaining
                            active committers.
                        </div>
                    </li>
                    <li>
                        <div>There shall be only full commit rights in any case, no partial access or otherwise
                            restricted access to the repositories.
                        </div>
                    </li>
                    <li>
                        <div>Frequent contributors may become committers after a simple majority agreement among
                            existing committers. Project members are free to suggest suitable people.
                        </div>
                    </li>
                    <li>
                        <div>Any votes and decisions made will be made public on the project websites.</div>
                    </li>
                    <li>
                        <div>Project infrastructure should be outsourced <abbr>FOSS</abbr> community operated services
                            whenever possible in order to allow project members to focus on actual development efforts.
                        </div>
                    </li>
                    <li>
                        <div>Any infrastructure that cannot be outsourced and/or is operated by the project itself shall
                            be administrable by at least three different people to reduce the likelyhood of the project
                            getting locked out due to operators being unreachable. Responsible operators for the various
                            services shall be documented publicly.
                        </div>
                    </li>
                    <li>
                        <div>The project will not offer email accounts under its project domain for privacy and equality
                            reasons.
                        </div>
                    </li>
                    <li>
                        <div>Changes to these rules require a two third majority among the committers holding voting
                            rights and shall be documented.
                        </div>
                    </li>
                    <li>
                        <div>Be nice to each other.</div>
                    </li>
                </ol>
            </div>
            <h3>Changes to these rules</h3>
            <div>&nbsp;</div>
            <h4>Mon, 10 May 2016</h4>
            <div>
                <p>Add the rule &ldquo;Be nice to each other&rdquo; Agreed in the meeting 9 May 2016</p>
            </div>
            <h4>Tue, 5 Apr 2016</h4>
            <div>
                <p>Changed wording of the rules and removed typos. Extended infrastructure rule to emphasize
                    the <abbr>FOSS</abbr> character of used hosting services, added requirement of documented
                    responsibilities. Agreed upon by 6 of 6 attending and 6 of 8 total people.</p>
            </div>
            <h4>Thu, 24 Mar 2016</h4>
            <div>
                <p>Initial draft, agreed upon by 6 of 6 attending people.</p>
            </div>
            <div>This website uses cookies. By using the website, you agree with storing cookies on your computer. Also
                you acknowledge that you have read and understand our Privacy Policy. If you do not agree leave the
                website.
                More information about cookies
            </div>
        </div>
    );
};

Rules.propTypes = {}

export default Rules;
