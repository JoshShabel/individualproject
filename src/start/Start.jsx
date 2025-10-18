const Start = () => {
    return (
        <div>
            <h1>
                Welcome to the OpenWrt Project
            </h1>
            <p>
                The OpenWrt Project is a Linux operating system targeting embedded devices. Instead of trying to create
                a single, static firmware, OpenWrt provides a fully writable filesystem with package management. This
                frees you from the application selection and configuration provided by the vendor and allows you to
                customize the device through the use of packages to suit any application. For developers, OpenWrt is the
                framework to build an application without having to build a complete firmware around it; for users this
                means the ability for full customization, to use the device in ways never envisioned.
            </p>
            <h2>
                OpenWrt One router officially launched
            </h2>
            <p>
                November 29, 2024 marks the release of the OpenWrt One, the first router built with your right to repair
                and software freedom in mind. Powered by MediaTek MT7981B SoC, it boasts features like dual-band WiFi-6
                (3×3/2×2), PoE, dual Ethernet ports, and a mikroBUS expansion header. Priced at US$89, this
                hacker-friendly router is unbrickable and FCC-compliant.
                <br/>
                Regardless of where you buy from, for every purchase of a new OpenWrt One, a US$10 donation will go to
                the OpenWrt earmarked fund at SFC. Your purchase not only improves your software right to repair, but
                also helps OpenWrt and SFC continue to improve the important software and software freedom on which we
                all rely!
            </p>
            <h2>
                Current stable series: OpenWrt 24.10
            </h2>
            <p>
                The OpenWrt Community is proud to present the OpenWrt 24.10 stable version series. It is the successor
                of the previous 23.05 stable major release.

                Current stable release - OpenWrt 24.10.3

                The current stable version series of OpenWrt is 24.10, with v24.10.3 being the latest release of the
                series. It was released on 23. September 2025.
            </p>
            <h2>
                Why use OpenWrt?
            </h2>
            <p>
                People install OpenWrt because they believe it works better than the stock firmware from their vendor.
                They find it is more stable, offers more features, is more secure and has better support.
            </p>
            <ul>
                <li>Extensibility: OpenWrt provides many capabilities found only in high-end devices. Its 3000+
                    application packages are standardized, so you can easily replicate the same setup on any supported
                    device, including two (or even five) year old routers. More...
                </li>
                <li> Security: OpenWrt&#39;s standard installation is secure by default, with Wi-Fi disabled, no poor
                    passwords or backdoors. OpenWrt&#39;s software components are kept up-to-date, so vulnerabilities
                    get
                    closed shortly after they are discovered. More...
                </li>
                <li> Performance and Stability: OpenWrt firmware is made of standardized modules used in all supported
                    devices. This means each module will likely receive more testing and bug fixing than stock firmware
                    which can be tweaked for each product line and never touched again. More...
                </li>
                <li> Strong Community Support: OpenWrt team members are regular participants on the OpenWrt Forum,
                    OpenWrt Developer and OpenWrt Admin mailing lists, and OpenWrt&#39;s IRC channels. You can interact
                    directly with developers, volunteers managing the software modules and with other long-time OpenWrt
                    users, drastically increasing the chances you will solve the issue at hand. More...
                </li>
                <li> Research: Many teams use OpenWrt as a platform for their research into network performance. This
                    means that the improvements of their successful experiments will be available in OpenWrt first, well
                    before it gets incorporated into mainline, vendor firmware. More...
                </li>
                <li> Open Source/No additional cost: OpenWrt is provided without any monetary cost. It has been entirely
                    created by a team of volunteers: developers and maintainers, individuals and companies. If you enjoy
                    using OpenWrt, consider contributing some effort to help us improve it for others! All of the above
                    is possible because OpenWrt is part of the Open Source community, and powered by Linux kernel. Get
                    the source code...
                </li>
                <li> And more...</li>
            </ul>
            <h2>
                OpenWrt wants you!
            </h2>
            <p>
                Like any open source project, OpenWrt thrives on the efforts of its users and developers.
            </p>
            <ul>
                <li>
                    If you want to develop the software, please refer to our Developer Guide to learn how to get the
                    source code, build it, and contribute your changes back to the project.
                </li>
                <li>
                    If you&#39;re not a developer, you can still help. The documentation can always be improved (even if
                    it&#39;s to verify that the instructions match your experience), or you can help other community
                    members
                    with questions. Don’t hesitate to Register yourself in the wiki, or join our mailing list and IRC
                    channels to get in touch.
                </li>
            </ul>
        </div>
    );
};

Start.propTypes = {}

export default Start;

