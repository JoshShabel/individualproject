const WikiRules = () => {
    return (
        <div>
            <h1>Wiki contribution guide</h1>
            <div>
                <p>The following standards should help keeping the wiki consistent, easy to understand for newbies, and
                    easy to edit for casual contributors.</p>
                <p>There can be exceptions in some cases where it makes sense, but there should be a good reason for
                    that.</p>
                <p>&nbsp;</p>
            </div>
            <div>
                <div>
                    <div>
                        <p><strong>Self-registration in the wiki has been disabled</strong><br/> If you want to
                            contribute to the OpenWrt wiki, please ask HERE in the forum or on IRC for access.</p>
                    </div>
                </div>
            </div>
            <div>&nbsp;</div>
            <h2>Mantras</h2>
            <div>
                <ol>
                    <li>
                        <div><strong>Articles must be easy to read and easy to edit, simpler is
                            better.</strong> Articles should be formatted only using basic features found in the
                            editor <abbr>GUI</abbr>, plus the code tag and table construct where necessary.<br/> Why?
                            More advanced formatting would give this wiki a more &ldquo;professional&rdquo; look, but it
                            will also be harder to read and edit for casual users and contributors. More advanced
                            layouts with tabs and buttons are more compact but are usually more confusing than a simpler
                            layout with just a single list of actions and links where readers scroll through and click.
                            Also a simple non-interactive layout allows easy printing. For example, look at this
                            tutorial Factory install: First-time installation on a device.<br/></div>
                    </li>
                    <li>
                        <div><strong>Avoid duplicating information within this wiki</strong> : Information on the same
                            topic shall appear in the wiki only <strong><em>once</em></strong>. If it is needed
                            somewhere else, we refer to it with a link!<br/> For example if you are writing a tutorial
                            and one of the step is &ldquo;configure USB storage&rdquo; you should link to Using storage
                            devices. DO NOT write down (or copy-paste) the same procedures in your new tutorial! <br/>
                        </div>
                    </li>
                    <li>
                        <div><strong>Avoid duplicating upstream documentation</strong> : consider contributing the more
                            generic parts of the documentation to <strong><em>upstream</em></strong>, and just link to
                            that in your article. This wiki exists for OpenWrt-related documentation, for example ipv4.
                            Some example upstream wikis: i.e. Linux WiFi drivers wiki, OpenVPN Wiki etc. Not all employ
                            wikis, and not all accept contributions from third parties. If upstream contributions are
                            impossible, then it&#34;s fine to have that info in the OpenWrt wiki. <br/></div>
                    </li>
                    <li>
                        <div><strong>Versioning information</strong>: the information in the articles should be valid
                            for the <strong><em>current stable release</em></strong>. Information that
                            applies <strong>only</strong> to older or snapshot releases (either deprecated or very new
                            features) should be marked as such. <br/></div>
                    </li>
                    <li>
                        <div><strong>Articles should be easy to find</strong> most people will search for information
                            with the search engine of their choice, or with the wiki&#34;s own internal search. Use
                            short,
                            descriptive titles and introductions that contain the right keywords to be found. You can
                            try to search for your article with your favorite search engine (after a few days you posted
                            the article, because search engines need time to update their indexes). If you won&#34;t
                            find
                            your own content, others probably won&#34;t as
                            well!<br/> E.g. <strong>installing.opkg.packages.in.mount.point.other.than.root</strong> is
                            a long title that could be replaced with something like <em>opkg -- Installation
                                Destinations</em>, but the latter will not be as easily be found as the first one when
                            someone does not browse the wiki, but uses a search engine instead. <br/></div>
                    </li>
                    <li>
                        <div><strong>Articles should explain why they exist, what is their goal</strong>. Please add
                            an &ldquo;introduction&rdquo; paragraph or two where you explain what is the feature you are
                            configuring, and what needs can be satisfied by following the instructions. It does not need
                            to be very verbose. For example, the first paragraph here: Using the Image Generator (Image
                            Builder) <br/></div>
                    </li>
                    <li>
                        <div><strong>Articles should contain VERIFIABLE information, speculation should be clearly
                            labeled as such</strong>. Really, this is very important in any wiki. Cite sources for
                            statements that aren&#34;t common knowledge, or write enough information to allow easy
                            google
                            searching for sources. For example: USB 3.0 and WiFi problems <br/></div>
                    </li>
                    <li>
                        <div><strong>All tutorials you write must be tested personally or must have a
                            warning</strong> stating that testing was not possible when writing them (and to remove the
                            warning when someone successfully tested it). <br/></div>
                    </li>
                    <li>
                        <div><strong>One topic per article</strong>. Articles should be focused on a single, focused
                            topic, for example &ldquo;<strong>installing and configuring Adblock</strong>&rdquo;.
                            General articles that span many different topics, for example &ldquo;<strong>filtering web
                                traffic</strong>&rdquo; (where you talk of Adblock, proxy servers, and maybe Tor and
                            VPNs) should be split up. <br/></div>
                    </li>
                    <li>
                        <div><strong>Large tutorials should be split up</strong>. Large tutorials where each step is
                            long should be split up in separate articles, each covering a part of the steps. This is
                            even more important if the tutorial contains conditional or optional steps (for
                            example: &ldquo;do step <strong>A</strong>, then you can do either
                            step <strong>B</strong> or <strong>C</strong>, then do <strong>D</strong>&rdquo;). For
                            example Factory install: First-time installation on a device or this &#34;Hello,
                            world!&#34; for
                            OpenWrt <br/></div>
                    </li>
                    <li>
                        <div><strong>Articles should be accessible from within the wiki</strong> Please make sure your
                            article has a link in one of the main Categories pages (links below) if it is some kind of
                            tutorial. Some articles may not need this if they are part of a multi-article tutorial, but
                            again make sure ALL articles can be reached either from the main Categories pages or from
                            the other pages of its multi-article tutorial. Very popular articles will also be linked
                            from within other tutorials, as explained in the <strong>Avoid duplicating information
                                within this wiki</strong> mantra above. For a handy list of pages linking to the current
                            page, click on the &ldquo;<strong>chain</strong>&rdquo; icon you find on the right tool
                            panel (it&#34;s under the <strong>clock</strong> icon). <br/></div>
                    </li>
                </ol>
            </div>
            <h2>Structure</h2>
            <div>
                <p>To give the Wiki a better structure, we
                    employ <code>namespaces</code> and <code>categories</code> (and <code>tags</code>):</p>
                <ul>
                    <li>
                        <div><strong>Namespaces</strong> are highest. In each of these upper namespaces, there shall be
                            a maximum of 3 (three) sublevels.
                        </div>
                        <ul>
                            <li>
                                <div><em>about</em> about the OpenWrt project in general</div>
                            </li>
                            <li>
                                <div><em>TOH</em> documentation about supported devices, called &ldquo;Table of
                                    Hardware&rdquo;.
                                </div>
                            </li>
                            <li>
                                <div><em>Packages</em> documentation about available packages</div>
                            </li>
                            <li>
                                <div><em>Downloads</em> landing page to download firmware for your device</div>
                            </li>
                            <li>
                                <div><em>Documentation</em> main documentation page</div>
                            </li>
                            <li>
                                <div><em>Wiki</em> pages about wiki functionality and wiki contribution rules</div>
                            </li>
                            <li>
                                <div><em>FAQ</em> is the place for <abbr>FAQ</abbr> lists</div>
                            </li>
                            <li>
                                <div><em>Inbox</em> place pages here you are working on and which are not mature enough
                                    yet
                                </div>
                            </li>
                            <li>
                                <div><em>Playground</em> is for trying out wiki syntax or similar shortlived actions
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div><strong>Categories</strong> provide the first level of the namespaces. They distinguish
                            different kinds of <strong>docs</strong>:
                        </div>
                        <ul>
                            <li>
                                <div><em>Quick Start</em> quick start tutorials, used for first installation and setup,
                                    or similar.
                                </div>
                            </li>
                            <li>
                                <div><em>User Guide</em> most of the documentation for users goes here</div>
                            </li>
                            <li>
                                <div><em>Developer Guide</em> developer documentation</div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div><strong>Tags</strong> are different. While the structure is exclusive, you can place an
                            article only in one subcategory, tags are more flexible. More of them can be placed
                            simultaneously in one article, and thus allow for a more flexible categorizing. To reproduce
                            this with the structure we could write symbolic articles, which are placed in different
                            subcategories and redirect to one article. But let&#34;s not do that. Tags will prove most
                            useful, when you want to search for routers with certain features.
                        </div>
                        <ul>
                            <li>
                                <div>tags Overview</div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p>To ease navigation, we use a sidebar.</p>
            </div>
            <div>This website uses cookies. By using the website, you agree with storing cookies on your computer. Also
                you acknowledge that you have read and understand our Privacy Policy. If you do not agree leave the
                website.
                More information about cookies
            </div>
        </div>
    );
};

WikiRules.propTypes = {}

export default WikiRules;
