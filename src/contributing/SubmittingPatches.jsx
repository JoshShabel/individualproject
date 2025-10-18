const SubmittingPatches = () => {
    return (
        <div>
            <h1>Submitting patches</h1>
            <div>
                <p>See also:</p>
                <ul>
                    <li>
                        <div>Sending patches by git send-email</div>
                    </li>
                    <li>
                        <div>If you are using GitHub, read also Working with GitHub.</div>
                    </li>
                </ul>
            </div>
            <h2>Deciding where to send the patch</h2>
            <div>
                <ul>
                    <li>
                        <div><strong>Patches to core packages and patches that add support for new
                            devices</strong> (i.e. code that is in the main OpenWrt repository ) can be submitted as a
                            pull request on the GitHub mirror or via the mailing list.
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div><strong>Patches for LuCI web interface and related packages</strong> can be submitted to
                            mailing list or to the Github mirror of the LuCI git repository. Specific guidelines and
                            hints for contributing to the <em>LuCI</em> repo may be found at Contributing Guidelines.
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div><strong>Patches for community packages about routing</strong> should go as a Github PR in
                            the OpenWrt community routing packages repo. Use the <em>packages</em> contributing
                            guidelines below when contributing to the <em>routing</em> repo.
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div><strong>Patches for community packages about telephony and SIP/VOIP</strong> should go as a
                            Github PR in the OpenWrt community telephony packages repo. Use
                            the <em>packages</em> contributing guidelines below when contributing to
                            the <em>telephony</em> repo.
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div><strong>Patches for miscellaneous community packages</strong> should go as a Github PR in
                            the OpenWrt community package repo. Specific guidelines and hints for contributing to
                            the <em>packages</em> repo may be found at Contributing Guidelines.
                        </div>
                    </li>
                </ul>
                <div>
                    <p><strong>If you want to add a new package that is not specific for a device</strong> nor crucial
                        to compile or use OpenWrt on a device, (i.e. tools, compilers, runtimes libraries, VPNs, media
                        servers, backup servers and more), <strong>open a PR in the appropriate community packages
                            repository mentioned above.</strong> Note that if you add a package you usually must assign
                        yourself as &ldquo;maintainer&rdquo; of it.</p>
                </div>
            </div>
            <h2>Submission Guidelines</h2>
            <div>
                <p>Submissions should follow the following guidelines:</p>
                <ul>
                    <li>
                        <div>use a different git branch for each pull request (GitHub does this automatically when using
                            web interface)
                        </div>
                    </li>
                    <li>
                        <div>write commit subject and message in the imperative form: &ldquo;add support for X&rdquo;,
                            NOT &ldquo;added support for X&rdquo;</div>
                    </li>
                    <li>
                        <div><strong>code formatting</strong></div>
                        <ul>
                            <li>
                                <div>use the same indentation you find in the file you are modifying, use only tabs or
                                    only spaces depending on what was done in the rest of the file
                                </div>
                            </li>
                            <li>
                                <div>entries in lists should be placed in alphabetical order</div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div><strong>commit subject</strong></div>
                        <ul>
                            <li>
                                <div>must have a prefix that depends from what you are doing in the commit</div>
                                <ul>
                                    <li>
                                        <div><strong>kernel:</strong> for kernel and kmod (kernel module) packages</div>
                                    </li>
                                    <li>
                                        <div><strong>package name:</strong> for packages</div>
                                    </li>
                                    <li>
                                        <div><strong>device architecture:</strong> for devices (for
                                            example, <strong>mvebu:</strong> or <strong>ramips: add support to
                                                example_eval board</strong> )
                                        </div>
                                    </li>
                                    <li>
                                        <div><strong>tool name:</strong> for tools</div>
                                    </li>
                                    <li>
                                        <div><strong>build:</strong> for general buildsystem changes that are not
                                            targeted at something in /toolchain
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div>must be <em>less than 50 characters</em> long</div>
                            </li>
                            <li>
                                <div>must describe what the commit changes and why the commit is necessary.<br/> It is
                                    challenging to be both succinct and descriptive, but that is what a well-written
                                    summary should do
                                </div>
                            </li>
                            <li>
                                <div>don&#39;t capitalize first word after the prefix</div>
                            </li>
                            <li>
                                <div>don&#39;t write a full stop at the end of the subject line</div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div><strong>commit description</strong></div>
                        <ul>
                            <li>
                                <div>must have less than 75 characters per line</div>
                            </li>
                            <li>
                                <div>it will be committed to the source changelog, so <em>it should explain to a
                                    competent reader why you made this commit</em>.<br/> Include symptoms of the failure
                                    you are fixing (log messages, error messages, etc.), it will be useful
                                    for<br/> people searching the commit logs looking for a fix for their issue.<br/> If
                                    a patch fixes a compile failure, include only the most relevant part of the failure
                                    log
                                </div>
                            </li>
                            <li>
                                <div>If you add support for new hardware: Include in your commit message a short
                                    description of the hardware and how to install OpenWrt on it. Have a look at the
                                    recent additions for some examples.
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div><strong>all commits must contain <code>Signed-off-by: My
                            Name &lt;my@email.address&gt;</code> where you write your real name and real email
                            address</strong>, in accordance with Section 11 of the Linux Kernel patches guide
                        </div>
                        <ul>
                            <li>
                                <div>GitHub web interface or <abbr>GUI</abbr> application for git: you must append
                                    the <code>Signed-off-by:</code> line manually in the commit description
                                </div>
                            </li>
                            <li>
                                <div>git command-line interface:</div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <pre><span>git commit</span><span>--signoff</span></pre>
                <ul>
                    <li>
                        <div><strong>the <code>Author</code> field must match
                            the <code>Signed-off-by:</code> line</strong></div>
                        <ul>
                            <li>
                                <div>GitHub web interface: you must specify your real name in
                                    the <code>Name</code> field and the <code>Primary email address</code> to match
                                    the <code>Signed-off-by:</code> line
                                </div>
                            </li>
                            <li>
                                <div>git command-line interface:</div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <pre><span>git config</span><span>--global</span> user.name <span>&#34;my name&#34;</span>
<span>git config</span><span>--global</span> user.email <span>&#34;my@email.address&#34;</span></pre>
            </div>
            <h2>Patch merging and tree life cycle</h2>
            <div>
                <p>We encourage frequent committers to host their own staging trees where they aggregate patches that
                    they feel responsible for and/or ones that they created themselves. Once the tree has been reviewed
                    and tested it can be proposed for inclusion in the master branch.</p>
                <ol>
                    <li>
                        <div>Trees will be merged into master at any time</div>
                    </li>
                    <li>
                        <div>Bug fixes can be merged into master directly</div>
                    </li>
                    <li>
                        <div>PRs can be sent to the patches mailing list from any source and will always be considered
                            for inclusion if the quality of the tree is good and format of submission is correct
                        </div>
                    </li>
                    <li>
                        <div>Staging trees can be hosted as part of the projects git infrastructure, private servers,
                            GitHub ...
                        </div>
                    </li>
                </ol>
            </div>
            <h2>Patch backports</h2>
            <div>
                <p>Backporting refers to applying changes to a stable (release) branch like for
                    example <strong>openwrt-23.05</strong> from the <strong>main</strong> branch. Since new features are
                    not added to stable branches, backported changes are generally bug fixes and security fixes only.
                    The process is roughly following:</p>
                <ol>
                    <li>
                        <div>Changes needs to be first applied into the <strong>main</strong> branch</div>
                    </li>
                    <li>
                        <div>Afterwards those changes can be proposed to be applied into the stable (release) branch
                        </div>
                    </li>
                </ol>
                <p>When pulling the commits from the <strong>main</strong> branch, you need to use <code>git
                    cherry-pick</code> command with the <code>-x</code> argument and thus append a line that says <code>(cherry
                    picked from commit &lt;commit&gt;)</code> to the original commit message (example) in order to
                    indicate which commit this change was cherry-picked from. This is needed for traceability. It is
                    also required that you add the <code>--signoff</code> to the commits, if you did not create the
                    original commits.</p>
                <pre><span>$ </span><span>git cherry-pick</span><span>--signoff</span><span>-x</span><span>&lt;</span>commit<span>&gt;</span></pre>
            </div>
            <h2>Patch checklist</h2>
            <div>
                <ol>
                    <li>
                        <div>Single commit ( multiple commits must first be squashed, as described here )</div>
                    </li>
                    <li>
                        <div>Subject &lt; 50 characters</div>
                    </li>
                    <li>
                        <div>Blank line after subject</div>
                    </li>
                    <li>
                        <div>Each line of description &lt; 75 characters</div>
                    </li>
                    <li>
                        <div>Description explains <strong>what</strong> was changed</div>
                    </li>
                    <li>
                        <div>Description explains <strong>why</strong> it was changed</div>
                    </li>
                    <li>
                        <div>Description makes sense</div>
                    </li>
                    <li>
                        <div>Signoff line includes your real name</div>
                    </li>
                    <li>
                        <div>Signoff line includes your real email address</div>
                    </li>
                    <li>
                        <div>If it&#39;s a third-party patch, then preserve all Signoff lines from the original author
                            (in
                            other words don&#39;t change any existing attribution other than to add your own Signoff)
                        </div>
                    </li>
                    <li>
                        <div>Your Sender/Author name and email address must match your Signoff line&#39;s real name and
                            email address
                        </div>
                    </li>
                </ol>
            </div>
            <h2>DTS checklist</h2>
            <div>
                <ol>
                    <li>
                        <div>Don&#39;t forget to add proper license, consider
                            adding <code>SPDX-License-Identifier: <abbr>GPL</abbr>-2.0-or-later OR MIT</code> (details)
                        </div>
                    </li>
                    <li>
                        <div>Remove all ocurrencies of <code>default-state = &ldquo;off&rdquo;</code> properties under
                            your LED nodes (details)
                        </div>
                    </li>
                    <li>
                        <div>If you&#39;re adding MTD flash layout, and you&#39;ve <code>label
                            = &ldquo;firmware&rdquo;</code> or a node with the name <code>firmware@xyz</code>, please
                            check that you&#39;ve added proper <code>compatible</code> property (if applicable)
                            (details)
                        </div>
                    </li>
                    <li>
                        <div>If it&#39;s possible try to dedicate some of the LEDs for system status indication in
                            diag.sh
                            (example)
                        </div>
                    </li>
                    <li>
                        <div>The name of a node should reflect the function of the device and not its model. Examples
                            for generic node names can be found in Section Generic Names Recommendation
                        </div>
                    </li>
                    <li>
                        <div>Remove all device_type (deprecated) properties, unless
                            for &ldquo;memory&rdquo; or &ldquo;cpu&rdquo; nodes
                        </div>
                    </li>
                </ol>
                <p>An overview of non-mandatory guidelines for device support submissions is provided in Device support
                    policies / best practices</p>
            </div>
            <h2>In-depth process of preparing and submitting code to OpenWrt</h2>
            <div>
                <p>Based on Linux Kernel patch submission guidelines.</p>
                <p>OpenWrt is constantly being improved. We&#39;d like as many people to contribute to this as we can
                    get.
                    If you find a change useful, by all means try to get it incorporated into the project. This should
                    improve OpenWrt and it should help carry your changes forward into future versions.</p>
                <p>For a person or company who wishes to submit a change to OpenWrt, the process can sometimes be
                    daunting if you&#39;re not familiar with &ldquo;the system.&rdquo; This text is a collection of
                    suggestions which can greatly increase the chances of your change being accepted.</p>
                <p>It is important to do all these steps repeatedly:</p>
                <ul>
                    <li>
                        <div>Listen to what other people think.</div>
                    </li>
                    <li>
                        <div>Explain what problem you are addressing and your proposed solution.</div>
                    </li>
                    <li>
                        <div>Write useful patches including documentation.</div>
                    </li>
                    <li>
                        <div>Test, test, test.</div>
                    </li>
                </ul>
                <p>Where to listen and talk:</p>
                <ul>
                    <li>
                        <div>Google to find things related to your problem</div>
                    </li>
                    <li>
                        <div>OpenWrt wiki</div>
                    </li>
                    <li>
                        <div>Mailing Lists</div>
                    </li>
                    <li>
                        <div>IRC</div>
                    </li>
                    <li>
                        <div>OpenWrt Forum</div>
                    </li>
                    <li>
                        <div>GitHub - https://github.com/openwrt/openwrt - trunk development and bugtracking</div>
                    </li>
                    <li>
                        <div>(archived) TRAC - https://dev.openwrt.org/ - the issue/bug/change tracking system. (TRAC is
                            closed now, and only kept for archiving purposes.)
                        </div>
                    </li>
                </ul>
            </div>
            <h2>Documentation</h2>
            <div>
                <p>It is often best to document what you are doing before you do it. The process of documentation often
                    exposes possible improvements. Keep your documentation up to date.</p>
            </div>
            <h2>Creating and sending your change</h2>
            <div>
                <p>Read <span>Submit Checklist</span> for a list of items to check before submitting code.</p>
                <p>For patches against external package sources, refer to the quilt howto at
                    use-patches-with-buildsystem</p>
                <p>Please read Email clients for patches to find out how to make sure your email client doesn&#39;t
                    destroy
                    your patch.</p>
            </div>
            <h3>1. Creating a patch</h3>
            <div>
                <p>All changes to OpenWrt occur in the form of patches.</p>
                <p>Patches should be based in the root trunk, not in any lower subdirectory.</p>
                <p>Make sure your patch does not include any extra files which do not belong in a patch submission. Be
                    sure to review your patch <strong>after</strong> you have generated it, to ensure accuracy.</p>
                <p>If your changes produce a lot of deltas, you may want to look into splitting them into individual
                    patches which modify things in logical stages. This will facilitate easier reviewing by other
                    OpenWrt developers, which is very important if you want your patch to be accepted.</p>
                <p>The tools you can use to create a patch, in order of preference, are:</p>
                <ul>
                    <li>
                        <div>Git</div>
                    </li>
                    <li>
                        <div>SVN</div>
                    </li>
                    <li>
                        <div>diff</div>
                    </li>
                </ul>
                <p>To ease integration of smaller patches into trunk, developers can also make pull-requests into the
                    GitHub trunk tree - this is an addition over the earlier patchwork workflow. Larger patches, or
                    patches that require further discussion, should still be sent to
                    the <strong>openwrt-devel</strong> list, where they&#39;ll be commented upon, and committed into
                    trunk
                    at some point.</p>
            </div>
            <h3>2. Describe your changes</h3>
            <div>
                <p>Describe the technical detail of the change(s) your patch includes.</p>
                <p>Be as specific as possible. The WORST descriptions possible include things like &ldquo;changes for
                    package X&rdquo;, &ldquo;bug fix for package X&rdquo;, or &ldquo;this patch includes updates for
                    platform X. Please apply.&rdquo;</p>
                <p>The maintainer will thank you if you write your patch description in a form which can be used
                    unmodified as a commit message for OpenWrt source code management system. See par.13, below.</p>
                <p>If your description starts to get long, that&#39;s a sign that you probably need to split up your
                    patch.
                    See par.3, next.</p>
                <p>When you submit or resubmit a patch or patch series, include the complete patch description and
                    justification for it. Don&#39;t just say that this is version N of the patch (series). Don&#39;t
                    expect the
                    patch merger to refer back to earlier patch versions or referenced URLs to find the patch
                    description and put that into the patch. I.e., the patch (series) and its description should be
                    self-contained. This benefits both the patch merger(s) and reviewers. Some reviewers probably
                    didn&#39;t
                    even receive earlier versions of the patch.</p>
                <p>If the patch fixes a logged bug trac entry, refer to that bug entry by number.</p>
            </div>
            <h3>3. Separate your changes</h3>
            <div>
                <p>Separate <em>logical changes</em> into a single patch file.</p>
                <p>For example, if your changes include both bug fixes and enhancements for a single package, separate
                    those changes into two or more patches.</p>
                <p>On the other hand, if you make a single change to numerous files, group those changes into a single
                    patch. Thus a single logical change is contained within a single patch.</p>
                <p>If one patch depends on another patch in order for a change to be complete, that is OK. Simply
                    note &ldquo;this patch depends on patch X&rdquo; in your patch description.</p>
                <p>If you cannot condense your patch set into a smaller set of patches, then only post say 15 or so at a
                    time and wait for review and integration.</p>
            </div>
            <h3>4. Style check your changes</h3>
            <div>
                <p>Check your patch for basic style violations. Failure to do so simply wastes the reviewer&#39;s time
                    and
                    will get your patch rejected, probably without even being read.</p>
            </div>
            <h3>5. Select email destination</h3>
            <div>
                <p>Look in the Makefile if a MAINTAINER macro exists. If so, email that person. Unless you have a reason
                    NOT to do so, always CC openwrt-devel &lt;at&gt; lists.openwrt.org. If no maintainer is listed, send
                    your patch to the primary OpenWrt developer&#39;s mailing list. Most OpenWrt developers monitor this
                    email list, and can comment on your changes.</p>
            </div>
            <h3>6. No MIME, no links, no compression, no attachments, just plain text</h3>
            <div>
                <p>OpenWrt developers need to be able to read and comment on the changes you are submitting. It is
                    important for an OpenWrt developer to be able to &ldquo;quote&rdquo; your changes, using standard
                    email tools, so that they may comment on specific portions of your code.</p>
                <p>For this reason, all patches should be submitting email &ldquo;inline&rdquo;. WARNING: Be wary of
                    your editor&#39;s word-wrap corrupting your patch, if you choose to cut-n-paste your patch.</p>
                <p>Do not attach the patch as a MIME attachment, compressed or not. Many popular email applications will
                    not always transmit a MIME attachment as plain text, making it impossible to comment on your
                    code.</p>
                <p>Exception: If your mailer is mangling patches then someone may ask you to re-send them using
                    MIME.</p>
                <p>Mozilla Thunderbird requires that you change email defaults to send plain text email. read Plain text
                    email - Thunderbird disable flowed text</p>
            </div>
            <h3>7. Email size</h3>
            <div>
                <p>Large changes are not appropriate for mailing lists, and some maintainers. If your patch,
                    uncompressed, exceeds 300 kB in size, it is preferred that you store your patch on an
                    Internet-accessible server, and provide instead a <abbr>URL</abbr> (link) pointing to your patch.
                </p>
            </div>
            <h3>8. Remain objective, re-submit</h3>
            <div>
                <p>It&#39;s nothing personal. Code should work well for its intended purpose and results should adhere
                    to
                    many standards and requirements, so finding problems early is a good thing.</p>
                <p>After you have submitted your change, be patient and wait. If developers like your change and apply
                    it, it will appear as new revision in the source code management system.</p>
                <p>However, if your change doesn&#39;t appear in the source code management system, there could be any
                    number of reasons. It&#39;s YOUR job to narrow down those reasons, correct what was wrong, and
                    submit
                    your updated change.</p>
                <p>Sometimes, developers may &ldquo;drop&rdquo; your patch with or without comment. That&#39;s the
                    nature of
                    the system. If your patch is dropped, it could be due to:</p>
                <ul>
                    <li>
                        <div>Your patch did not apply cleanly to the latest OpenWrt revision.</div>
                    </li>
                    <li>
                        <div>Your patch was not sufficiently discussed on openwrt-devel.</div>
                    </li>
                    <li>
                        <div>A style issue.</div>
                    </li>
                    <li>
                        <div>An email formatting issue (re-read this section).</div>
                    </li>
                    <li>
                        <div>A technical problem with your change.</div>
                    </li>
                    <li>
                        <div>They get tons of email, and yours got lost in the shuffle.</div>
                    </li>
                    <li>
                        <div>You are being annoying.</div>
                    </li>
                </ul>
                <p>When in doubt, solicit comments on openwrt-devel mailing list.</p>
            </div>
            <h3>9. Include PATCH in the subject</h3>
            <div>
                <p>Due to high email traffic to openwrt-devel, it is common convention to prefix your subject line with
                    [PATCH]. This lets OpenWrt developers more easily distinguish patches from other email discussions,
                    and will also make its way to the patchwork automatically.</p>
            </div>
            <h3>10. Sign your work</h3>
            <div>
                <p>To provide tracking of who did what, we use a &ldquo;sign-off&rdquo; procedure on patches that are
                    being emailed around.</p>
                <p>The sign-off is a simple line at the end of the explanation for the patch, which certifies that you
                    wrote it or otherwise have the right to pass it on as an open-source patch. The rules are pretty
                    simple: if you can certify the below:</p>
                <pre>Developer&#39;s Certificate of Origin 1.1
By making a contribution to this project, I certify that:
(a) The contribution was created in whole or in part by me and I
 have the right to submit it under the open source license
 indicated in the file; or
(b) The contribution is based upon previous work that, to the best
 of my knowledge, is covered under an appropriate open source
 license and I have the right under that license to submit that
 work with modifications, whether created in whole or in part
 by me, under the same open source license (unless I am
 permitted to submit under a different license), as indicated
 in the file; or
(c) The contribution was provided directly to me by some other
 person who certified (a), (b) or (c) and I have not modified
 it.
(d) I understand and agree that this project and the contribution
 are public and that a record of the contribution (including all
 personal information I submit with it, including my sign-off) is
 maintained indefinitely and may be redistributed consistent with
 this project or the open source license(s) involved.</pre>
                <p>then you just add a line saying</p>
                <pre>Signed-off-by: Random J Developer <span>&lt;</span>random<span>@</span>developer.example.org<span>&gt;</span></pre>
                <p>using your real name (no pseudonyms or anonymous contributions.)</p>
                <p>If you are a package or target maintainer, sometimes you need to slightly modify patches you receive
                    in order to merge them, because the code is not exactly the same in your tree and the
                    submitters&#39;.
                    If you stick strictly to rule &copy;, you should ask the submitter to rediff, but this is a totally
                    counter-productive waste of time and energy. Rule (b) allows you to adjust the code, but then it is
                    very impolite to change one submitter&#39;s code and make them endorse your bugs. To solve this
                    problem,
                    it is recommended that you add a line between the last Signed-off-by header and yours, indicating
                    the nature of your changes. While there is nothing mandatory about this, it seems like prepending
                    the description with your mail and/or name, all enclosed in square brackets, is noticeable enough to
                    make it obvious that you are responsible for last-minute changes. Example :</p>
                <pre>Signed-off-by: Random J Developer <span>&lt;</span>random<span>@</span>developer.example.org<span>&gt;</span>
<span>[</span>lucky<span>@</span>maintainer.example.org: struct foo moved from foo.c to foo.h<span>]</span>
Signed-off-by: Lucky K Maintainer <span>&lt;</span>lucky<span>@</span>maintainer.example.org<span>&gt;</span></pre>
                <p>This practice is particularly helpful if you maintain a stable branch and want at the same time to
                    credit the author, track changes, merge the fix, and protect the submitter from complaints. Note
                    that under no circumstances can you change the author&#39;s identity (the From header), as it is the
                    one
                    which appears in the changelog.</p>
                <p>Special note to back-porters: It seems to be a common and useful practise to insert an indication of
                    the origin of a patch at the top of the commit message (just after the subject line) to facilitate
                    tracking. For instance:</p>
                <pre>Date: Wed Jul <span>25</span><span>15</span>:<span>14</span>:<span>50</span><span>2012</span> +0300
 <span>[</span>generic<span>]</span> add missing symbols
 <span>[</span>backport r12345<span>]</span></pre>
                <p>Whatever the format, this information provides valuable help to people tracking your trees, and to
                    people trying to trouble-shoot bugs in your tree.</p>
                <p>For the more convenient developers, git can automatically add a sign-off:</p>
                <pre><span>git commit</span><span>-s</span></pre>
            </div>
            <h3>11. When to use &#34;Acked-by:&#34; and &#34;Cc:&#34;</h3>
            <div>
                <p>The Signed-off-by: tag indicates that the signer was involved in the development of the patch, or
                    that they were in the patch&#39;s delivery path.</p>
                <p>If a person was not directly involved in the preparation or handling of a patch but wishes to signify
                    and record their approval of it then they can arrange to have an Acked-by: line added to the
                    patch&#39;s
                    changelog.</p>
                <p>Acked-by: is often used by the maintainer of the affected code when that maintainer neither
                    contributed to nor forwarded the patch.</p>
                <p>Acked-by: is not as formal as Signed-off-by:. It is a record that the acker has at least reviewed the
                    patch and has indicated acceptance. Hence patch mergers will sometimes manually convert an
                    acker&#39;s &ldquo;yep, looks good to me&rdquo; into an Acked-by:.</p>
                <p>Acked-by: does not necessarily indicate acknowledgement of the entire patch. For example, if a patch
                    affects multiple packages and has an Acked-by: from one package maintainer then this usually
                    indicates acknowledgement of just the part which affects that maintainer&#39;s code. Judgment should
                    be
                    used here.</p>
                <p>If a person has had the opportunity to comment on a patch, but has not provided such comments, you
                    may optionally add a &ldquo;Cc:&rdquo; tag to the patch. This is the only tag which might be added
                    without an explicit action by the person it names. This tag documents that potentially interested
                    parties have been included in the discussion.</p>
            </div>
            <h3>12. Using &#34;Reported-by:&#34;, &#34;Tested-by:&#34; and &#34;Reviewed-by:&#34;</h3>
            <div>
                <p>If this patch fixes a problem reported by somebody else, consider adding a Reported-by: tag to credit
                    the reporter for their contribution. Please note that this tag should not be added without the
                    reporter&#39;s permission, especially if the problem was not reported in a public forum. That said,
                    if
                    we diligently credit our bug reporters, they will, hopefully, be inspired to help us again in the
                    future.</p>
                <p>A Tested-by: tag indicates that the patch has been successfully tested (in some environment) by the
                    person named. This tag informs maintainers that some testing has been performed, provides a means to
                    locate testers for future patches, and ensures credit for the testers.</p>
                <p>Reviewed-by:, instead, indicates that the patch has been reviewed and found acceptable according to
                    the Reviewer&#39;s Statement:</p>
                <pre>Reviewer&#39;s statement of oversight
By offering my Reviewed-by: tag, I state that:
(a) I have carried out a technical review of this patch to
 evaluate its appropriateness and readiness for inclusion into
 OpenWrt.
(b) Any problems, concerns, or questions relating to the patch
 have been communicated back to the submitter. I am satisfied
 with the submitter&#39;s response to my comments.
(c) While there may be things that could be improved with this
 submission, I believe that it is, at this time, (1) a
 worthwhile modification to OpenWrt, and (2) free of known
 issues which would argue against its inclusion.
(d) While I have reviewed the patch and believe it to be sound, I
 do not (unless explicitly stated elsewhere) make any
 warranties or guarantees that it will achieve its stated
 purpose or function properly in any given situation.</pre>
                <p>A Reviewed-by tag is a statement of opinion that the patch is an appropriate modification of OpenWrt
                    without any remaining serious technical issues. Any interested reviewer (who has done the work) can
                    offer a Reviewed-by tag for a patch. This tag serves to give credit to reviewers and to inform
                    maintainers of the degree of review which has been done on the patch. Reviewed-by: tags, when
                    supplied by reviewers known to understand the subject area and to perform thorough reviews, will
                    normally increase the likelihood of your patch getting into OpenWrt.</p>
            </div>
            <h3>13. The canonical patch format</h3>
            <div>
                <p>The canonical patch subject line is:</p>
                <pre>Subject: <span>[</span>PATCH 001<span>/</span><span>123</span><span>]</span><span>[</span>section<span>]</span> summary phrase</pre>
                <p>The canonical patch message body contains the following:</p>
                <ul>
                    <li>
                        <div>A &ldquo;from&rdquo; line specifying the patch author.</div>
                    </li>
                    <li>
                        <div>An empty line.</div>
                    </li>
                    <li>
                        <div>The body of the explanation, which will be copied to the permanent changelog to describe
                            this patch.
                        </div>
                    </li>
                    <li>
                        <div>The &ldquo;Signed-off-by:&rdquo; lines, described above, which will also go in the
                            changelog.
                        </div>
                    </li>
                    <li>
                        <div>A marker line containing simply <code>---</code>.</div>
                    </li>
                    <li>
                        <div>Any additional comments not suitable for the changelog.</div>
                    </li>
                    <li>
                        <div>The actual patch (diff output).</div>
                    </li>
                </ul>
                <p>The Subject line format makes it very easy to sort the emails alphabetically by subject line - pretty
                    much any email reader will support that - since because the sequence number is zero-padded, the
                    numerical and alphabetic sort is the same.</p>
                <p>The &ldquo;section&rdquo; in the email&#39;s Subject should identify which section of OpenWrt is
                    being
                    patched. Some example sections are:</p>
                <ul>
                    <li>
                        <div>[a specific target name]</div>
                    </li>
                    <li>
                        <div>[a specific package name]</div>
                    </li>
                </ul>
                <p>The &ldquo;summary phrase&rdquo; in the email&#39;s Subject should concisely describe the patch which
                    that email contains. The &ldquo;summary phrase&rdquo; should not be a filename. Do not use the
                    same &ldquo;summary phrase&rdquo; for every patch in a whole patch series (where a &ldquo;patch
                    series&rdquo; is an ordered sequence of multiple, related patches).</p>
                <p>Bear in mind that the &ldquo;summary phrase&rdquo; of your email becomes a globally-unique identifier
                    for that patch. It propagates all the way into the source code management system changelog.
                    The &ldquo;summary phrase&rdquo; may later be used in developer discussions which refer to the
                    patch. People will want to google for the &ldquo;summary phrase&rdquo; to read discussion regarding
                    that patch. It will also be the only thing that people may quickly see when, two or three months
                    later, they are going through perhaps thousands of patches using source code management browsing
                    tools.</p>
                <p>For these reasons, the &ldquo;summary&rdquo; must be no more than 70-75 characters, and it must
                    describe both what the patch changes, as well as why the patch might be necessary. It is challenging
                    to be both succinct and descriptive, but that is what a well-written summary should do.</p>
                <p>The &ldquo;summary phrase&rdquo; may be prefixed by tags enclosed in square brackets: &ldquo;Subject:
                    [PATCH tag] &lt;summary phrase&gt;&rdquo;. The tags are not considered part of the summary phrase,
                    but describe how the patch should be treated. Common tags might include a version descriptor if the
                    multiple versions of the patch have been sent out in response to comments (i.e., &ldquo;v1, v2,
                    v3&rdquo;), or &ldquo;<abbr>RFC</abbr>&rdquo; to indicate a request for comments. If there are four
                    patches in a patch series the individual patches may be numbered like this: 1/4, 2/4, 3/4, 4/4. This
                    assures that developers understand the order in which the patches should be applied and that they
                    have reviewed or applied all of the patches in the patch series.</p>
                <p>Some example Subjects:</p>
                <pre>Subject: <span>[</span>PATCH<span>]</span> e2fsprogs: Bump to 1.41.3
Subject: <span>[</span>PATCH<span>]</span> x86 generic: switch to <span>3.3</span>
Subject: <span>[</span>PATCH v2 001<span>/</span><span>207</span><span>]</span> ar71xx <span>enable</span> sysupgrade on the WRT160Nl</pre>
                <p>The &ldquo;from&rdquo; line must be the very first line in the message body, and has the form:</p>
                <pre>From: Original Author <span>&lt;</span>author<span>@</span>example.com<span>&gt;</span></pre>
                <p>The &ldquo;from&rdquo; line specifies who will be credited as the author of the patch in the
                    permanent changelog. If the &ldquo;from&rdquo; line is missing, then the &ldquo;From:&rdquo; line
                    from the email header will be used to determine the patch author in the changelog.</p>
                <p>The explanation body will be committed to the permanent source changelog, so should make sense to a
                    competent reader who has long since forgotten the immediate details of the discussion that might
                    have led to this patch. Including symptoms of the failure which the patch addresses (kernel log
                    messages, oops messages, etc.) is especially useful for people who might be searching the commit
                    logs looking for the applicable patch. If a patch fixes a compile failure, it may not be necessary
                    to include _all_ of the compile failures; just enough that it is likely that someone searching for
                    the patch can find it. As in the &ldquo;summary phrase&rdquo;, it is important to be both succinct
                    as well as descriptive.</p>
                <p>The <code>---</code> marker line serves the essential purpose of marking for patch handling tools
                    where the changelog message ends.</p>
                <p>One good use for the additional comments after the <code>---</code> marker is for a diffstat, to show
                    what files have changed, and the number of inserted and deleted lines per file. A diffstat is
                    especially useful on bigger patches. Other comments relevant only to the moment or the maintainer,
                    not suitable for the permanent changelog, should also go here. A good example of such comments might
                    be &ldquo;patch changelogs&rdquo; which describe what has changed between the v1 and v2 version of
                    the patch.</p>
                <p>See more details on the proper patch format in the following References.</p>
            </div>
            <h2>Monitoring patches</h2>
            <div>
                <p>Patches sent to the Development mailing list can be followed on Patchwork at
                    https://patchwork.ozlabs.org/project/openwrt/list/.</p>
            </div>
            <h2>References</h2>
            <div>
                <ul>
                    <li>
                        <div>Andrew Morton, &ldquo;The perfect patch&rdquo; (tpp).</div>
                        <ul>
                            <li>
                                <div>http://userweb.kernel.org/~akpm/stuff/tpp.txt</div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>Jeff Garzik, &ldquo;Linux kernel patch submission format&rdquo;.</div>
                        <ul>
                            <li>
                                <div>http://linux.yyz.us/patch-format.html</div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>Greg Kroah-Hartman, &ldquo;How to piss off a kernel subsystem maintainer&rdquo;.</div>
                        <ul>
                            <li>
                                <div>http://www.kroah.com/log/linux/maintainer.html</div>
                            </li>
                            <li>
                                <div>http://www.kroah.com/log/linux/maintainer-02.html</div>
                            </li>
                            <li>
                                <div>http://www.kroah.com/log/linux/maintainer-03.html</div>
                            </li>
                            <li>
                                <div>http://www.kroah.com/log/linux/maintainer-04.html</div>
                            </li>
                            <li>
                                <div>http://www.kroah.com/log/linux/maintainer-05.html</div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>NO!!!! No more huge patch bombs to linux-kernel@&hellip; people!</div>
                        <ul>
                            <li>
                                <div>http://marc.theaimsgroup.com/?l=linux-kernel&amp;m=112112749912944&amp;w=2</div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>Linus Torvalds&#39;s mail on the canonical patch format:</div>
                        <ul>
                            <li>
                                <div>http://lkml.org/lkml/2005/4/7/183</div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>Andi Kleen, &ldquo;On submitting kernel patches&rdquo;</div>
                        <ul>
                            <li>
                                <div>Some strategies to get difficult or controversial changes in.</div>
                            </li>
                            <li>
                                <div>http://halobates.de/on-submitting-patches.pdf</div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <h2>Additional information</h2>
            <div>
                <ul>
                    <li>
                        <div>Be aware of line length limit (80).</div>
                    </li>
                    <li>
                        <div>Use <code>./scripts/checkpatch.pl</code> to check your patch - there might be false
                            positives.
                        </div>
                    </li>
                </ul>
            </div>
            <div>This website uses cookies. By using the website, you agree with storing cookies on your computer. Also
                you acknowledge that you have read and understand our Privacy Policy. If you do not agree leave the
                website.
                More information about cookies
            </div>
        </div>
    );
};

SubmittingPatches.propTypes = {}

export default SubmittingPatches;
