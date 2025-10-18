const SupportedDevices = () => {
    return (
        <div>
            <h2>General requirements for OpenWrt support</h2>
            <div>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <ol>
                                    <li>
                                        <div>SoC / target supported by OpenWrt</div>
                                    </li>
                                    <li>
                                        <div>Sufficient Flash to accommodate OpenWrt firmware image</div>
                                        <ul>
                                            <li>
                                                <div>8MB min (bare minimum)</div>
                                            </li>
                                            <li>
                                                <div>16MB better (will fit other applications)</div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div>Sufficient RAM for stable operation</div>
                                        <ul>
                                            <li>
                                                <div>64MB min</div>
                                            </li>
                                            <li>
                                                <div>128MB better</div>
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </td>
                            <td>
                                <div>
                                    <div>
                                        <div>
                                            <p>
                                                <span><strong>DO NOT BUY DEVICES WITH 8MB FLASH / 64MB RAM</strong></span> if
                                                you intend to flash an up-to-date and secure OpenWrt version onto it!
                                                See <strong>8/64 warning</strong> for details.</p>
                                            <p><strong>8/64 devices do not have sufficient resources (flash and/or RAM)
                                                to provide secure and reliable operation.</strong> See <strong>OpenWrt
                                                on 8/64 devices</strong> what you can do now.</p>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h2>Tables answering your questions</h2>
            <div>
                <p>The table of hardware moved outside the wiki with improved search capabilities:</p>
                <ul>
                    <li>
                        <div>New table of hardware</div>
                    </li>
                </ul>
                <p>All device data is available as a JSON file</p>
                <ul>
                    <li>
                        <div>JSON dump of hardware data</div>
                    </li>
                </ul>
                <p>Add to device data used to generate table of hardware</p>
                <ul>
                    <li>
                        <div>Add a device to the Table of Hardware</div>
                    </li>
                </ul>
                <div>
                    <p>
                        <span>Over time the legacy table views (not device data editing) in the wiki will be removed.</span>
                    </p>
                </div>
            </div>
            <h3>Legacy Tables (may still answer questions)</h3>
            <div>
                <p>Search the full Table of Hardware (ToH) to find out if your device is supported by OpenWrt.</p>
                <p>There are easier to use the ToH views to choose a device to buy:</p>
                <ul>
                    <li>
                        <div>I want to buy a router that is supported (ToH available) by OpenWrt</div>
                    </li>
                    <li>
                        <div>List of WiFi 6 capable routers supported by OpenWrt.</div>
                    </li>
                    <li>
                        <div>List of switches supported by OpenWrt.</div>
                    </li>
                    <li>
                        <div>Many other views like powered by battery, USB or PoE, has SFP or LTE Modem.</div>
                    </li>
                    <li>
                        <div>See also Buyer&#39;s Guide.</div>
                    </li>
                    <li>
                        <div>Where can I download OpenWrt firmware for my router? (ToH_fwdownload)</div>
                    </li>
                </ul>
            </div>
            <h3>Legacy Hardware database CSV dump</h3>
            <div>
                <p>CSV dump of the hardware database, updated daily:</p>
                <ul>
                    <li>
                        <div>Hardware DB CSV zip</div>
                    </li>
                    <li>
                        <div>Hardware DB CSV gzip</div>
                    </li>
                </ul>
                <p>You can import it in LibreOffice Calc, MS Excel or other programs to visualize the data.</p>
            </div>
        </div>
    );
};

SupportedDevices.propTypes = {}

export default SupportedDevices;
