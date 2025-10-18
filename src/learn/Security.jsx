const Security = () => {
    return (
        <div>
            <h1>Security</h1>
            <div>
                <p>See Security old for the old page.</p>
                <p>This page lists the processes, tools, and mechanisms the OpenWrt project uses for the security of
                    OpenWrt. This policy covers the OpenWrt distribution with the official package feeds hosted at
                    https://github.com/openwrt/ and also the OpenWrt specific tools hosted at https://git.openwrt.org/
                    such as procd, ubus, and libubox.</p>
            </div>
            <h2>Vulnerability reporting</h2>
            <div>
                <p>Security bugs should be reported in confidentiality to contact@openwrt.org, please see Reporting
                    security bugs and High-level security incident response handling process for additional details. The
                    contact@openwrt.org mail box is not well monitored, probably we will not notice when you send a mail
                    to this mail address. In case you do not get an answer or it is important please use our public
                    mailing list openwrt-adm@lists.openwrt.org.</p>
            </div>
            <h2>Security advisories</h2>
            <div>&nbsp;</div>
            <div>
                <h3>OpenWrt Security Advisories</h3>
                <div>
                    <p>&nbsp;</p>
                    <div>
                        <ol>
                            <li>
                                <div>OpenWrt Security Advisories</div>
                            </li>
                            <li>
                                <div>Security Advisory 2024-12-06-1 - OpenWrt Attended SysUpgrade server: Build artifact
                                    poisoning via truncated SHA-256 hash and command injection (CVE-2024-54143)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2022-10-17-1 - Multiple issues in mac80211 and cfg80211
                                    (CVE-2022-41674, CVE-2022-42719, CVE-2022-42720, CVE-2022-42721 and CVE-2022-42722)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2022-10-04-1 - wolfSSL buffer overflow during a TLS 1.3 handshake
                                    (CVE-2022-39173)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2021-08-01-3 - luci-app-ddns: Multiple authenticated RCEs
                                    (CVE-2021-28961)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2021-08-01-2 - Stored XSS in hostname UCI variable
                                    (CVE-2021-33425)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2021-08-01-1 - XSS via missing input validation of host names
                                    displayed (CVE-2021-32019)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2021-02-02-2 - wolfSSL heap buffer overflow in RsaPad_PSS
                                    (CVE-2020-36177)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2021-02-02-1 - netifd and odhcp6c routing loop on IPv6 point to
                                    point links (CVE-2021-22161)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2021-01-19-1 - dnsmasq multiple vulnerabilities (CVE-2020-25681,
                                    CVE-2020-25682, CVE-2020-25683, CVE-2020-25684, CVE-2020-25685, CVE-2020-25686,
                                    CVE-2020-25687)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2021-01-17-1 - OpenWrt forum break-in on 16-Jan-2021</div>
                            </li>
                            <li>
                                <div>Security Advisory 2020-12-09-2 - libuci import heap use after free
                                    (CVE-2020-28951)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2020-12-09-1 - Linux kernel - ICMP rate limiting can be used to
                                    facilitate DNS poisoning attack (CVE-2020-25705)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2020-05-06-2 - relayd out-of-bounds reads of heap data and
                                    possible buffer overflow (CVE-2020-11752)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2020-05-06-1 - umdns out-of-bounds reads of heap data and
                                    possible buffer overflow (CVE-2020-11750)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2020-02-21-1 - ppp buffer overflow vulnerability
                                    (CVE-2020-8597)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2020-01-31-2 - libubox tagged binary data JSON serialization
                                    vulnerability (CVE-2020-7248)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2020-01-31-1 - Opkg susceptible to MITM (CVE-2020-7982)</div>
                            </li>
                            <li>
                                <div>Security Advisory 2020-01-13-1 - uhttpd invalid data access via HTTP POST request
                                    (CVE-2019-19945)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2019-11-05-3 - ustream-ssl information disclosure (CVE-2019-5101,
                                    CVE-2019-5102)
                                </div>
                            </li>
                            <li>
                                <div>Security Advisory 2019-11-05-2 - LuCI CSRF vulnerability (CVE-2019-17367)</div>
                            </li>
                            <li>
                                <div>Security Advisory 2019-11-05-1 - LuCI stored XSS</div>
                            </li>
                        </ol>
                        <div>&nbsp;</div>
                    </div>
                    <p>&nbsp;</p>
                </div>
            </div>
            <div>
                <p>This only lists security advisories for components directly maintained by the OpenWrt project. This
                    does not list fixed security problems in third-party components used by OpenWrt which may also
                    affect the security of OpenWrt. We do not list known security problems in the Linux kernel, openssl,
                    and other third-party components even when they affect use cases relevant to OpenWrt. The OpenWrt
                    project monitors the upstream projects and backports security fixes for components used in the
                    OpenWrt core repository to supported OpenWrt versions. For example 159 CVEs were assigned for the
                    Linux kernel in 2021 alone, OpenWrt regularly updates the minor Linux kernel version to get these
                    recent fixes.</p>
            </div>
            <h2>Support Status</h2>
            <div>
                <p>This table lists the support status of various OpenWrt releases:</p>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Version</th>
                            <th>Current status</th>
                            <th>Initial Release</th>
                            <th>EoL (Projected)</th>
                            <th>Latest Release</th>
                            <th>Release Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>24.10</td>
                            <td>Supported</td>
                            <td>2025, February 06</td>
                            <td>(2026, February)</td>
                            <td>24.10.3</td>
                            <td>2025, September 23</td>
                        </tr>
                        <tr>
                            <td>23.05</td>
                            <td>End of Life</td>
                            <td>2023, October 13</td>
                            <td>2025, August</td>
                            <td>23.05.6</td>
                            <td>2025, August 20</td>
                        </tr>
                        <tr>
                            <td>22.03</td>
                            <td>End of Life</td>
                            <td>2022, September 06</td>
                            <td>2024, July</td>
                            <td>22.03.7</td>
                            <td>2024, July 25</td>
                        </tr>
                        <tr>
                            <td>21.02</td>
                            <td>End of Life</td>
                            <td>2021, September 04</td>
                            <td>2023, May</td>
                            <td>21.02.7</td>
                            <td>2023, May 01</td>
                        </tr>
                        <tr>
                            <td>19.07</td>
                            <td>End of Life</td>
                            <td>2020, January 06</td>
                            <td>2022, April</td>
                            <td>19.07.10</td>
                            <td>2022, April 20</td>
                        </tr>
                        <tr>
                            <td>18.06</td>
                            <td>End of Life</td>
                            <td>2018, July 31</td>
                            <td>2020, December</td>
                            <td>18.06.9</td>
                            <td>2020, December 09</td>
                        </tr>
                        <tr>
                            <td>17.01</td>
                            <td>End of Life</td>
                            <td>2017, February 22</td>
                            <td>2019, June</td>
                            <td>17.01.7</td>
                            <td>2019, June 20</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <p>The listed <strong>Version</strong> numbers reference the code base and the support status applies to
                    the the latest minor release of that branch:</p>
                <ul>
                    <li>
                        <div><strong>Supported</strong>: The OpenWrt project will provide updates for the core packages
                            fixing security and other problems we are aware of.
                        </div>
                    </li>
                    <li>
                        <div><strong>Security Maintenance</strong>: The OpenWrt project will fix only security problems
                            in this release, existing bugs will remain.
                        </div>
                    </li>
                    <li>
                        <div><strong>End of Life</strong>: The OpenWrt project will <strong>NOT</strong> provide any
                            updates, even for severe security vulnerabilities, please update to a more recent version.
                        </div>
                    </li>
                </ul>
                <p>A major release will be <strong>Supported</strong> after its initial release.</p>
                <p>When the next major release is published, the previous version will move into <strong>Security
                    Maintenance</strong> status.</p>
                <p>A major release will move into <strong>End of Life</strong> status one year after the initial
                    release, or 6 months after the next major release, whichever date is later. The project aims to do a
                    final minor release at the end of the support cycle.</p>
            </div>
            <h4>Notes</h4>
            <div>
                <p> This timeline only covers core OpenWrt packages and not the external package feeds hosted on
                    GitHub.</p>
                <p> Some package feed maintainers do not support all OpenWrt versions that are still supported by the
                    OpenWrt project.</p>
                <p> For the best security support we strongly suggest that every device is upgraded to the most recent
                    stable version.</p>
                <p> The <strong>Projected EoL</strong> date may be subject to change depending on circumstances, such as
                    the timing of the next release.</p>
            </div>
            <h2>Identifying problems</h2>
            <div>
                <p>The OpenWrt project uses multiple tools to identify potential security problems. This information is
                    normally available to everyone and we appreciate fixes for problems reported by these tools from
                    everyone.</p>
            </div>
            <h3>uscan</h3>
            <div>
                <p>The uscan report shows the version number of all packages from the base and the package repository
                    and compares it against the recent upstream released versions. In addition the tool which generates
                    this page also checks for existing CVEs assigned to the packages based on the Common Platform
                    Enumeration (CPE) which is listed in the PKG_CPE_ID variable of many packages. That page is updated
                    weekly for master and the active release branches.</p>
            </div>
            <h3>Coverity Scan</h3>
            <div>
                <p>OpenWrt uses the commercial Coverity Scan tool which is available for free to open source projects to
                    do static code analyses on the OpenWrt components. This scans one OpenWrt build per week and reports
                    the problems found in the components developed in the OpenWrt project like procd and ubus, but not
                    on (patched) third party components.</p>
            </div>
            <h2>Reproducible builds</h2>
            <div>
                <p>The reproducible builds project checks that OpenWrt master is still reproducible. This proves that
                    the produced releases really match the delivered source code and no backdoors were introduced in the
                    build process.</p>
            </div>
            <h2>Deliver to users</h2>
            <div>
                <p>OpenWrt operates multiple build bot instances which are building snapshots of
                    the <code>master</code> and the supported release branches.</p>
                <p>When a change to a package is committed to the OpenWrt base repository of package feed, the build
                    bots are automatically detecting this change and will rebuild this package. The newly built package
                    can then be installed with opkg or be integrated with the image builder by users of OpenWrt. This
                    allows us to ship updates in about 2 days to the end users.</p>
                <p>The kernel is normally located in its own partition and upgrades are not so easily possible.
                    Therefore this mechanism currently does not work for the kernel itself and kernel modules and a new
                    minor release is needed to ship fixes to end users.</p>
            </div>
            <h2>Hardening build options</h2>
            <div>
                <p>OpenWrt activates some build hardening options in the build configuration at compile time for all
                    package builds. Note that individual packages and/or targets may ignore or otherwise not respect
                    these settings.</p>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>.config line</th>
                            <th>Enabled by default</th>
                            <th>Notes</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><code>CONFIG_PKG_CHECK_FORMAT_SECURITY=y</code></td>
                            <td>Yes</td>
                            <td><code>-Wformat -Werror=format-security</code></td>
                        </tr>
                        <tr>
                            <td><code>CONFIG_PKG_CC_STACKPROTECTOR_REGULAR=y</code></td>
                            <td>Yes</td>
                            <td><code>-fstack-protector</code></td>
                        </tr>
                        <tr>
                            <td><code>CONFIG_PKG_CC_STACKPROTECTOR_STRONG=y</code></td>
                            <td>No</td>
                            <td><code>-fstack-protector-strong</code></td>
                        </tr>
                        <tr>
                            <td><code>CONFIG_KERNEL_CC_STACKPROTECTOR_REGULAR=y</code></td>
                            <td>Yes</td>
                            <td>Kernel config CONFIG_STACKPROTECTOR</td>
                        </tr>
                        <tr>
                            <td><code>CONFIG_KERNEL_CC_STACKPROTECTOR_STRONG=y</code></td>
                            <td>No</td>
                            <td>Kernel config CONFIG_STACKPROTECTOR_STRONG</td>
                        </tr>
                        <tr>
                            <td><code>CONFIG_PKG_FORTIFY_SOURCE_1=y</code></td>
                            <td>Yes</td>
                            <td><code>-D_FORTIFY_SOURCE=1</code> (Using fortify-headers for musl libc)</td>
                        </tr>
                        <tr>
                            <td><code>CONFIG_PKG_FORTIFY_SOURCE_2=y</code></td>
                            <td>No</td>
                            <td><code>-D_FORTIFY_SOURCE=2</code> (Using fortify-headers for musl libc)</td>
                        </tr>
                        <tr>
                            <td><code>CONFIG_PKG_RELRO_FULL=y</code></td>
                            <td>Yes</td>
                            <td><code>-Wl,-z,now -Wl,-z,relro</code></td>
                        </tr>
                        <tr>
                            <td><code>CONFIG_PKG_ASLR_PIE_REGULAR=y</code></td>
                            <td>Yes</td>
                            <td><code>-fPIC</code> CFLAGS and <code>-specs=hardened-build-ld</code> LDFLAGS<br/> PIE is
                                activated for some binaries, mostly network exposed applications
                            </td>
                        </tr>
                        <tr>
                            <td><code>CONFIG_PKG_ASLR_PIE_ALL=y</code></td>
                            <td>No</td>
                            <td>PIE is activated for all applications</td>
                        </tr>
                        <tr>
                            <td><code>CONFIG_KERNEL_SECCOMP</code></td>
                            <td>Yes</td>
                            <td>Kernel config CONFIG_SECCOMP</td>
                        </tr>
                        <tr>
                            <td><code>CONFIG_SELINUX</code></td>
                            <td>No</td>
                            <td>Kernel config SECURITY_SELINUX</td>
                        </tr>
                        </tbody>
                    </table>
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

Security.propTypes = {}

export default Security;
