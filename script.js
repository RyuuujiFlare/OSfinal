const osData = {
    windows: `From what I learned in my research, Microsoft Windows is a versatile OS powered by a Hybrid Kernel architecture. I found that this design is a clever compromise, combining the speed of a monolithic core with the modularity of a microkernel to support millions of hardware drivers. In my analysis, Windows stands out because of its massive ecosystem; it is the industry standard for gaming and enterprise productivity software. I also discovered that its security has improved significantly with TPM 2.0 requirements. I believe its dominance comes from being the most user-friendly all-rounder available today.
    <table class="os-table">
    <tr><th>Feature</th><th>Technical Specification</th></tr>
        <tr><td>Kernel Type</td><td>Hybrid (NT)</td></tr>
        <tr><td>File System</td><td>NTFS</td></tr>
        <tr><td>Market Share</td><td>~70% Worldwide</td></tr>
        <tr><td>Security</td><td>Windows Defender / TPM</td></tr>
        <tr><td>Source Model</td><td>Proprietary</td></tr>

    </table>
    <div class="metrics-grid">
        <div><div class="pie-chart" style="background: conic-gradient(#0078d4 75%, #222 0);">75%</div><span class="metric-label">Security</span></div>
        <div><div class="pie-chart" style="background: conic-gradient(#0078d4 85%, #222 0);">85%</div><span class="metric-label">Stability</span></div>
        <div><div class="pie-chart" style="background: conic-gradient(#0078d4 95%, #222 0);">95%</div><span class="metric-label">Performance</span></div>
        <div><div class="pie-chart" style="background: conic-gradient(#0078d4 60%, #222 0);">60%</div><span class="metric-label">Custom</span></div>
        <div><div class="pie-chart" style="background: conic-gradient(#0078d4 98%, #222 0);">98%</div><span class="metric-label">Compat</span></div>
    </div>
    <div class="my-sign">DEVELOPED BY: NUMER JAN T. BANDE</div>`,
    
    mac: `Based on my study of Apple’s ecosystem, macOS is a Unix-based system that uses the XNU kernel, which I learned stands for "X is Not Unix". I found it fascinating how Apple optimizes its software specifically for its own Silicon hardware, leading to incredible energy efficiency and stability. From my perspective, macOS is the ultimate tool for creative professionals because of its sleek Aqua interface and robust security features like System Integrity Protection. I observed that while it is a "walled garden," the seamless integration between Mac and iPhone creates a productivity flow that I find unmatched elsewhere.
    <table class="os-table">
       <tr><th>Feature</th><th>Technical Specification</th></tr>
        <tr><td>Kernel Type</td><td>XNU (Mach/BSD)</td></tr>
        <tr><td>File System</td><td>APFS</td></tr>
        <tr><td>Security</td><td>FileVault / SIP / Gatekeeper</td></tr>
        <tr><td>Target Market</td><td>Creative Professionals</td></tr>
        <tr><td>Source Model</td><td>Proprietary</td></tr>
    </table>
    <div class="metrics-grid">
        <div><div class="pie-chart" style="background: conic-gradient(#fff 88%, #222 0);">88%</div><span class="metric-label">Security</span></div>
        <div><div class="pie-chart" style="background: conic-gradient(#fff 94%, #222 0);">94%</div><span class="metric-label">Stability</span></div>
        <div><div class="pie-chart" style="background: conic-gradient(#fff 90%, #222 0);">90%</div><span class="metric-label">Performance</span></div>
        <div><div class="pie-chart" style="background: conic-gradient(#fff 40%, #222 0);">40%</div><span class="metric-label">Custom</span></div>
        <div><div class="pie-chart" style="background: conic-gradient(#fff 70%, #222 0);">70%</div><span class="metric-label">Compat</span></div>
    </div>
    <div class="my-sign">DEVELOPED BY: NUMER JAN T. BANDE</div>`,
    
    linux: `In my technical exploration of open-source systems, I learned that Linux uses a Monolithic Kernel architecture. I found it impressive that all core OS services run in the kernel space, which I realized is why it is so fast and efficient for servers. From what I gathered, Linux is the backbone of the internet and supercomputers because it offers total transparency and freedom. I discovered that its security is superior because the global community can audit the code. I believe Linux is the best choice for developers who want complete control over their computing environment.
    <table class="os-table">
       <tr><th>Feature</th><th>Technical Specification</th></tr>
        <tr><td>Kernel Type</td><td>Monolithic</td></tr>
        <tr><td>File System</td><td>ext4, Btrfs, XFS</td></tr>
        <tr><td>Security</td><td>Permission-based (Sudo)</td></tr>
        <tr><td>License</td><td>Open Source (GPL)</td></tr>
        <tr><td>Primary Use</td><td>Servers & Development</td></tr>
    </table>
    <div class="metrics-grid">
        <div><div class="pie-chart" style="background: conic-gradient(#3fb950 98%, #222 0);">98%</div><span class="metric-label">Security</span></div>
        <div><div class="pie-chart" style="background: conic-gradient(#3fb950 99%, #222 0);">99%</div><span class="metric-label">Stability</span></div>
        <div><div class="pie-chart" style="background: conic-gradient(#3fb950 92%, #222 0);">92%</div><span class="metric-label">Performance</span></div>
        <div><div class="pie-chart" style="background: conic-gradient(#3fb950 100%, #222 0);">100%</div><span class="metric-label">Custom</span></div>
        <div><div class="pie-chart" style="background: conic-gradient(#3fb950 65%, #222 0);">65%</div><span class="metric-label">Compat</span></div>
    </div>
    <div class="my-sign">DEVELOPED BY: NUMER JAN T. BANDE</div>`
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
