const Packages = () => {
    return (
        <div>
            <h1>
                Packages
            </h1>
            <p>
                OpenWrt provides several thousand packages to extend the functionality of your device. The browsable
                package lists in this wiki will always show packages available in the latest update of the stable
                release.
            </p>
            <h2>
                Package index
            </h2>
            <p>
                The package overview moved over to repology.org for a better user experience. Please visit the links
                below.
                <br/>
                <ul>
                    <li>24.10</li>
                    <li>23.05</li>
                    <li>Overview of all available packages grouped by type: Package index</li>
                    <li>Comprehensive and searchable package table: Package table</li>
                    <li>CSV dump of the package database, updated daily: Package DB</li>
                </ul>
            </p>
            <h2>
                Package management cheatsheet
            </h2>
            <p>
                After you have flashed the OpenWrt firmware to your device, you can install additional software packages
                via WebUI or CLI.
                <br/>
                If you are unsure how to access or configure your router within your environment see: Quick start guide
            </p>
            <h2>
                Web interface instructions
            </h2>
            <p>
                Manage packages using web interface.
            </p>
            <ol>
                <li>Navigate to LuCI → System → Software.</li>
                <li>Click Update lists button to fetch a list of available packages.</li>
                <li>Fill in Filter field and click Find package button to search for a specific package.</li>
                <li>Switch to Available packages tab to show and install available packages.</li>
                <li>Switch to Installed packages tab to show and remove installed packages.</li>
            </ol>
            <h2>
                Command-line instructions
            </h2>
            <p>
                Manage packages with Opkg using command-line interface.
            </p>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>
                            Command
                        </th>
                        <th>
                            Description
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            opkg update
                        </td>
                        <td>
                            Fetch a list of available packages from the OpenWrt package repository.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            opkg list
                        </td>
                        <td>
                            Display a list of available packages and their descriptions.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            opkg list | grep -e {'<'}search{'>'}
                        </td>
                        <td>
                            Filter the list by a search term in the package name or its description.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            opkg install {'<'}packages{'>'}
                        </td>
                        <td>
                            Install a package.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            opkg remove {'<'}packages{'>'}
                        </td>
                        <td>
                            Uninstall a previously installed package.
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <h2>
                Third-party packages
            </h2>
            <p>
                Third-party packages are untested and unsupported by OpenWrt developers. No guarantees or warranties are
                made about their safety or usefulness.
                <br/>
                Only install packages from sources you trust. Ask support for third-party packages from the maintainers
                of those packages, not the developers of OpenWrt.
                <br/>
                Common sources for such packages include: ipkg.be and NSLU2 optware.
            </p>
        </div>
    );
};

Packages.propTypes = {}

export default Packages;
