const osData = {
    windows: `Microsoft Windows remains the dominant force in the desktop market, utilizing a <strong>Hybrid Kernel</strong> architecture. It balances performance with broad hardware support, making it ideal for gaming and enterprise environments where compatibility with legacy software is a high priority. Windows manages memory through a sophisticated Virtual Memory Manager that utilizes "paging" to swap data between RAM and the hard drive, ensuring smooth performance even under heavy loads. For security, modern versions like Windows 11 require TPM 2.0 hardware and utilize Windows Defender and BitLocker to protect data at rest and in transit. Its massive market share—often cited between 66% and 73%—makes it the standard for global business operations and high-end consumer gaming.
    <br><br>
    <table class="os-table">
        <tr><th>Feature</th><th>Technical Specification</th></tr>
        <tr><td>Kernel Type</td><td>Hybrid (NT)</td></tr>
        <tr><td>File System</td><td>NTFS</td></tr>
        <tr><td>Market Share</td><td>~70% Worldwide</td></tr>
        <tr><td>Security</td><td>Windows Defender / TPM</td></tr>
        <tr><td>Source Model</td><td>Proprietary</td></tr>
    </table>`,
    
    mac: `macOS is built on a <strong>Unix-based</strong> foundation known as Darwin, utilizing the XNU kernel which combines Mach microkernel features with BSD's modularity. This design provides incredible stability and an advanced security layer known as System Integrity Protection (SIP), which prevents even administrative users from modifying critical system files. Memory management is highly efficient on Apple’s Silicon (M-series) chips, using a Unified Memory Architecture that allows the CPU and GPU to share the same memory pool for lightning-fast creative workflows like 8K video rendering. While it holds a smaller market share (approx. 15-20%), it is the industry standard for design and media production due to its color accuracy and optimized software ecosystem.
    <br><br>
    <table class="os-table">
        <tr><th>Feature</th><th>Technical Specification</th></tr>
        <tr><td>Kernel Type</td><td>XNU (Mach/BSD)</td></tr>
        <tr><td>File System</td><td>APFS</td></tr>
        <tr><td>Security</td><td>FileVault / SIP / Gatekeeper</td></tr>
        <tr><td>Target Market</td><td>Creative Professionals</td></tr>
        <tr><td>Source Model</td><td>Proprietary</td></tr>
    </table>`,
    
    linux: `Linux is a powerful <strong>Monolithic Kernel</strong> OS where all core services—like device drivers and file system management—reside in the kernel space for maximum execution speed. Because it is open-source under the GPL license, it is highly customizable, allowing developers to choose from various Desktop Environments (DE) like GNOME or KDE. Linux is the undisputed king of the server world, powering nearly 100% of the world's supercomputers and the vast majority of web infrastructure due to its legendary uptime and security. Its security model is based on strict user permissions (Root vs User), and its transparency allows for rapid patching of vulnerabilities by the global community. It supports a wide array of file systems like ext4 and Btrfs, offering flexible data management for DevOps and cloud computing.
    <br><br>
    <table class="os-table">
        <tr><th>Feature</th><th>Technical Specification</th></tr>
        <tr><td>Kernel Type</td><td>Monolithic</td></tr>
        <tr><td>File System</td><td>ext4, Btrfs, XFS</td></tr>
        <tr><td>Security</td><td>Permission-based (Sudo)</td></tr>
        <tr><td>License</td><td>Open Source (GPL)</td></tr>
        <tr><td>Primary Use</td><td>Servers & Development</td></tr>
    </table>`
};

function expand(os) {
    const cardId = os.substring(0,3) + '-card';
    const selectedCard = document.getElementById(cardId);
    const contentDiv = selectedCard.querySelector('.content');
    const body = document.body;

    if (selectedCard.classList.contains('expanded')) {
        selectedCard.classList.remove('expanded');
        contentDiv.innerHTML = "";
        body.className = ""; 
    } else {
        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('expanded');
            card.querySelector('.content').innerHTML = "";
        });

        selectedCard.classList.add('expanded');
        contentDiv.innerHTML = `<p>${osData[os]}</p>`;
        body.className = 'bg-' + os;
    }
}