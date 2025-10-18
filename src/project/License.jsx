const License = () => {
    return (
        <div>
            <h1>License</h1>
            <div>
                <p>OpenWrt is free software, provided AS-IS and without any warranty.</p>
                <p>If not otherwise stated in the source files, the OpenWrt build environment is provided under the
                    terms of the GNU General Public License Version 2. The exact GPLv2 license text can be found in the
                    file LICENSE in the source repository.</p>
                <p>The OpenWrt distribution (precompiled images etc.) bundles a lot of third party applications and
                    modules which are available under various other Open Source licenses or Public Domain. The sources
                    for those packages can be found on the OpenWrt source archive. Please refer to these source packages
                    to find out which license applies to them.</p>
                <p>We expect that you are knowledgeable about GNU/Linux and basic networking concepts, before you
                    install OpenWrt on your router. Support may be provided on a voluntary basis by developers and
                    fellow users, but is not guaranteed.</p>
                <p>OpenWrt has joined The Software Freedom Conservancy (SFC): openwrt_joins_conservancy. They zealously
                    pursue <abbr>GPL</abbr> violations that are reported to them, and if you&#39;re aware of one, please
                    do
                    email them at compliance@sfconservancy.org immediately.</p>
            </div>
            <div>This website uses cookies. By using the website, you agree with storing cookies on your computer. Also
                you acknowledge that you have read and understand our Privacy Policy. If you do not agree leave the
                website.
                More information about cookies
            </div>
        </div>
    );
};

License.propTypes = {}

export default License;
