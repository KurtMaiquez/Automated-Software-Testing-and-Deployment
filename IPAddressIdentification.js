function isPrivateIPAddress(ipAddress) {
    // Define private IP address ranges
    const privateRanges = [
        '10.0.0.0/8',      // Private network
        '172.16.0.0/12',   // Private network
        '192.168.0.0/16',  // Private network
        '127.0.0.0/8',     // Loopback
        '169.254.0.0/16',  // Link-local
        'fc00::/7',        // Unique local IPv6 unicast
        'fe80::/10'        // Link-local IPv6 unicast
    ];

    // Parse the IP address
    const ip = ipAddress.split('.').map(Number);

    // Convert IP address to binary string
    const ipBinary = ip.map(part => part.toString(2).padStart(8, '0')).join('');

    // Check if the IP address falls within any of the private ranges
    return privateRanges.some(range => {
        const [rangeStart, rangeBits] = range.split('/');
        const rangeStartBinary = rangeStart.split('.').map(part => parseInt(part, 10).toString(2)).join('');
        const rangeMask = parseInt(rangeBits, 10);
        const ipNetwork = ipBinary.substr(0, rangeMask);
        const rangeNetwork = rangeStartBinary.substr(0, rangeMask);

        return ipNetwork === rangeNetwork;
    });
}

// Example usage
const ipAddress = prompt("Enter an IP address:");
if (isPrivateIPAddress(ipAddress)) {
    console.log(`${ipAddress} is a private IP address.`);
} else {
    console.log(`${ipAddress} is a public IP address.`);
}
