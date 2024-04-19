function testIsPrivateIPAddress() {
    const privateIPs = ['10.0.0.1', '192.168.1.1', '172.16.0.1'];
    const publicIPs = ['8.8.8.8', '216.58.200.110', '104.16.249.249'];

    console.log('Testing private IP addresses:');
    privateIPs.forEach(ip => {
        const result = isPrivateIPAddress(ip);
        console.log(`${ip} is ${result ? 'private' : 'public'}`);
    });

    console.log('Testing public IP addresses:');
    publicIPs.forEach(ip => {
        const result = isPrivateIPAddress(ip);
        console.log(`${ip} is ${result ? 'private' : 'public'}`);
    });
}

testIsPrivateIPAddress();
