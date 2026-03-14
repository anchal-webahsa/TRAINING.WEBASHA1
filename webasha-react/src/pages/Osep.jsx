import { useState } from "react";

const OSEPCoursePage = () => {
  const [activeTab, setActiveTab] = useState("curriculum");
  const [openModule, setOpenModule] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  const modules = [
    {
      title: "Module 1: Client-Side Code Execution with Office Macros",
      duration: "4.5 hrs",
      lessons: [
        "Introduction to VBA Macros",
        "Macro-based Shellcode Execution",
        "Bypassing AMSI with VBA",
        "PowerShell Integration via Macros",
        "Sandbox Detection & Evasion",
      ],
    },
    {
      title: "Module 2: Process Injection & Migration",
      duration: "5 hrs",
      lessons: [
        "DLL Injection Techniques",
        "Reflective DLL Injection",
        "Process Hollowing",
        "Thread Hijacking",
        "APC Injection",
      ],
    },
    {
      title: "Module 3: Advanced Antivirus Evasion",
      duration: "6 hrs",
      lessons: [
        "Static vs Dynamic AV Evasion",
        "Payload Encryption & Obfuscation",
        "Custom Shellcode Encoders",
        "Living off the Land (LOLBAS)",
        "AMSI Bypass Techniques",
      ],
    },
    {
      title: "Module 4: Application Whitelisting Bypass",
      duration: "4 hrs",
      lessons: [
        "AppLocker Architecture",
        "Bypassing AppLocker via DLLs",
        "Trusted Binary Abuse",
        "WDAC Policy Bypass",
        "MSHTA & Regsvr32 Abuse",
      ],
    },
    {
      title: "Module 5: Lateral Movement",
      duration: "7 hrs",
      lessons: [
        "Pass-the-Hash & Pass-the-Ticket",
        "WMI-based Lateral Movement",
        "DCOM Exploitation",
        "PsExec & SMB Techniques",
        "Kerberoasting & ASREPRoasting",
      ],
    },
    {
      title: "Module 6: Active Directory Exploitation",
      duration: "8 hrs",
      lessons: [
        "AD Enumeration with BloodHound",
        "ACL Abuse & Delegation Attacks",
        "DCSync & Golden Ticket",
        "Forest Trust Abuse",
        "Azure AD Attack Paths",
      ],
    },
    {
      title: "Module 7: Advanced Command & Control",
      duration: "5.5 hrs",
      lessons: [
        "Custom C2 Infrastructure",
        "Domain Fronting",
        "HTTPS C2 with Cobalt Strike",
        "DNS-based C2 Channels",
        "C2 Traffic Obfuscation",
      ],
    },
    {
      title: "Module 8: Bypassing Network Security",
      duration: "4 hrs",
      lessons: [
        "Firewall Evasion Strategies",
        "IDS/IPS Bypass",
        "Covert Tunneling Techniques",
        "Proxy-aware Implants",
        "Encrypted C2 Communications",
      ],
    },
  ];

  const videos = [
    {
      id: 1,
      title: "OSEP Course Introduction",
      desc: "Overview of what you'll learn in this advanced penetration testing course",
      thumb: "https://img.youtube.com/vi/9On1TnMHpJE/hqdefault.jpg",
      url: "https://www.youtube.com/embed/9On1TnMHpJE",
      duration: "12:34",
      tag: "Free Preview",
    },
    {
      id: 2,
      title: "Process Injection Deep Dive",
      desc: "Hands-on demonstration of advanced process injection techniques",
      thumb: "https://img.youtube.com/vi/aSB9tQfWa-4/hqdefault.jpg",
      url: "https://www.youtube.com/embed/aSB9tQfWa-4",
      duration: "28:15",
      tag: "Free Preview",
    },
    {
      id: 3,
      title: "Active Directory Attack Paths",
      desc: "Real-world AD exploitation using BloodHound and SharpHound",
      thumb: "https://img.youtube.com/vi/mEFtpcO0enQ/hqdefault.jpg",
      url: "https://www.youtube.com/embed/mEFtpcO0enQ",
      duration: "35:42",
      tag: "Free Preview",
    },
  ];

  const instructors = [
    {
      name: "Satyendra Pal",
      role: "Lead OSEP Instructor",
      exp: "14+ Years",
      certs: "OSEP · OSCP · CEH · CRTO",
      img: "https://ui-avatars.com/api/?name=Satyendra+Pal&background=c0392b&color=fff&size=120&bold=true",
      bio: "Former Red Team lead with enterprise pentesting experience across banking, defense & telecom sectors.",
    },
    {
      name: "Abhijeet Sharma",
      role: "Exploit Dev Specialist",
      exp: "9+ Years",
      certs: "OSED · OSEP · CRTE",
      img: "https://ui-avatars.com/api/?name=Abhijeet+Sharma&background=1a1a2e&color=fff&size=120&bold=true",
      bio: "Malware reverse engineer and exploit developer with deep expertise in Windows internals and kernel exploitation.",
    },
  ];

  const faqs = [
    {
      q: "Is OSEP harder than OSCP?",
      a: "Yes — OSEP (PEN-300) assumes you already hold OSCP and focuses on advanced evasion, custom C2, and bypassing enterprise defenses. It requires significantly more custom tooling and creative thinking.",
    },
    {
      q: "What are the prerequisites?",
      a: "You should hold OSCP or have equivalent hands-on experience with Metasploit, basic Active Directory concepts, PowerShell scripting, and Windows internals before enrolling.",
    },
    {
      q: "Does the course include lab access?",
      a: "Yes — you get 90 days of access to our private lab environment with fully patched enterprise networks including Windows Server, AD domains, and real endpoint security solutions.",
    },
    {
      q: "Is the official OffSec exam voucher included?",
      a: "The course fee includes one official OffSec OSEP exam attempt. Additional attempts can be purchased at a discounted rate for enrolled students.",
    },
    {
      q: "What tools will I learn to use?",
      a: "Cobalt Strike, Covenant, Sliver, BloodHound, SharpHound, Rubeus, Mimikatz, custom C# implants, PowerShell Empire, and many custom-built tools developed during the course.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={styles.page}>
      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.heroNoise} />
        <div style={styles.heroGrid} />
        <div style={styles.container}>
          <div style={styles.heroBadge}>
            <span style={styles.badgeDot} />
            OffSec Certified · PEN-300
          </div>
          <h1 style={styles.heroTitle}>
            Evasion Techniques &amp;{" "}
            <span style={styles.heroAccent}>Breaching Defenses</span>
          </h1>
          <p style={styles.heroSub}>
            Master advanced penetration testing techniques used by elite red teams.
            Bypass AV, EDR, and enterprise defenses with custom-built offensive tooling.
          </p>
          <div style={styles.heroMeta}>
            {[
              { icon: "🎯", label: "Advanced Level" },
              { icon: "⏱", label: "120+ Hours" },
              { icon: "🖥", label: "90-Day Lab" },
              { icon: "🏆", label: "OSEP Certified" },
            ].map((m, i) => (
              <div key={i} style={styles.metaChip}>
                <span>{m.icon}</span>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
          <div style={styles.heroActions}>
            <button style={styles.btnPrimary}>Enroll Now — ₹49,999</button>
            <button style={styles.btnGhost}>Download Syllabus</button>
          </div>
          <div style={styles.heroStats}>
            {[
              { val: "1,200+", label: "Students Certified" },
              { val: "4.9★", label: "Course Rating" },
              { val: "93%", label: "Pass Rate" },
            ].map((s, i) => (
              <div key={i} style={styles.statBox}>
                <span style={styles.statVal}>{s.val}</span>
                <span style={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Decorative terminal card */}
        <div style={styles.terminalCard}>
          <div style={styles.terminalBar}>
            <span style={{ ...styles.dot, background: "#ff5f56" }} />
            <span style={{ ...styles.dot, background: "#ffbd2e" }} />
            <span style={{ ...styles.dot, background: "#27c93f" }} />
            <span style={styles.terminalTitle}>osep-lab ~ shell</span>
          </div>
          <div style={styles.terminalBody}>
            {[
              { color: "#27c93f", text: "$ whoami" },
              { color: "#e0e0e0", text: "  NT AUTHORITY\\SYSTEM" },
              { color: "#27c93f", text: "$ net group 'Domain Admins' /domain" },
              { color: "#e0e0e0", text: "  Members: Administrator, svc_admin" },
              { color: "#27c93f", text: "$ mimikatz # sekurlsa::logonpasswords" },
              { color: "#ff6b6b", text: "  [*] Credential dump success" },
              { color: "#ffd93d", text: "  Hash: aad3b435b51404eeaad3b..." },
              { color: "#27c93f", text: "$ _" },
            ].map((line, i) => (
              <div key={i} style={{ ...styles.terminalLine, color: line.color }}>
                {line.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL LEARN ── */}
      <section style={styles.learnSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionBadge}>Learning Outcomes</span>
            <h2 style={styles.sectionTitle}>What You'll <span style={styles.accent}>Master</span></h2>
          </div>
          <div style={styles.learnGrid}>
            {[
              { icon: "🛡️", title: "AV & EDR Evasion", desc: "Craft custom payloads that bypass Windows Defender, CrowdStrike, and SentinelOne using obfuscation, encryption, and AMSI patching." },
              { icon: "🔗", title: "Process Injection", desc: "Master DLL injection, process hollowing, APC injection, and reflective loading to execute shellcode inside legitimate processes." },
              { icon: "🏰", title: "Active Directory Domination", desc: "Enumerate, exploit, and persist in enterprise AD environments including Kerberoasting, DCSync, and trust abuse." },
              { icon: "📡", title: "Custom C2 Frameworks", desc: "Build and operate covert command & control infrastructure using domain fronting, DNS tunneling, and HTTPS beacons." },
              { icon: "📋", title: "Whitelist Bypass", desc: "Circumvent AppLocker, WDAC, and software restriction policies using trusted binary abuse and policy misconfigurations." },
              { icon: "🔐", title: "Lateral Movement", desc: "Move through enterprise networks using Pass-the-Hash, WMI, DCOM, and credential relay attacks without detection." },
            ].map((item, i) => (
              <div key={i} style={styles.learnCard}>
                <div style={styles.learnIcon}>{item.icon}</div>
                <h3 style={styles.learnCardTitle}>{item.title}</h3>
                <p style={styles.learnCardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAB NAVIGATION ── */}
      <section style={styles.tabSection}>
        <div style={styles.container}>
          <div style={styles.tabs}>
            {["curriculum", "videos", "instructors", "faq"].map((tab) => (
              <button
                key={tab}
                style={{ ...styles.tab, ...(activeTab === tab ? styles.tabActive : {}) }}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* CURRICULUM */}
          {activeTab === "curriculum" && (
            <div style={styles.tabContent}>
              <div style={styles.curriculumHeader}>
                <div>
                  <h3 style={styles.curriculumTitle}>Course Curriculum</h3>
                  <p style={styles.curriculumSub}>8 Modules · 44+ Hours of Content · 60+ Labs</p>
                </div>
                <div style={styles.curriculumBadge}>PEN-300 Aligned</div>
              </div>
              <div style={styles.moduleList}>
                {modules.map((mod, i) => (
                  <div key={i} style={styles.moduleCard}>
                    <button
                      style={styles.moduleHeader}
                      onClick={() => setOpenModule(openModule === i ? null : i)}
                    >
                      <div style={styles.moduleLeft}>
                        <div style={styles.moduleNum}>{String(i + 1).padStart(2, "0")}</div>
                        <div>
                          <div style={styles.moduleName}>{mod.title}</div>
                          <div style={styles.moduleMeta}>{mod.lessons.length} lessons · {mod.duration}</div>
                        </div>
                      </div>
                      <span style={{ ...styles.moduleChevron, transform: openModule === i ? "rotate(180deg)" : "none" }}>▾</span>
                    </button>
                    {openModule === i && (
                      <div style={styles.lessonList}>
                        {mod.lessons.map((lesson, j) => (
                          <div key={j} style={styles.lessonItem}>
                            <span style={styles.lessonIcon}>▶</span>
                            <span style={styles.lessonText}>{lesson}</span>
                            <span style={styles.lessonBadge}>{j === 0 ? "Free" : "Lab"}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIDEOS */}
          {activeTab === "videos" && (
            <div style={styles.tabContent}>
              <div style={styles.curriculumHeader}>
                <div>
                  <h3 style={styles.curriculumTitle}>Preview Lectures</h3>
                  <p style={styles.curriculumSub}>Watch free sample lessons before enrolling</p>
                </div>
              </div>
              <div style={styles.videoGrid}>
                {videos.map((v) => (
                  <div key={v.id} style={styles.videoCard}>
                    {playingVideo === v.id ? (
                      <div style={styles.iframeWrap}>
                        <iframe
                          src={`${v.url}?autoplay=1`}
                          title={v.title}
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          style={styles.iframe}
                        />
                      </div>
                    ) : (
                      <div style={styles.thumbWrap} onClick={() => setPlayingVideo(v.id)}>
                        <img src={v.thumb} alt={v.title} style={styles.thumb} />
                        <div style={styles.playOverlay}>
                          <div style={styles.playBtn}>▶</div>
                        </div>
                        <div style={styles.videoDuration}>{v.duration}</div>
                        <div style={styles.videoTag}>{v.tag}</div>
                      </div>
                    )}
                    <div style={styles.videoInfo}>
                      <h4 style={styles.videoTitle}>{v.title}</h4>
                      <p style={styles.videoDesc}>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional YouTube Resource Links */}
              <div style={styles.resourceBox}>
                <h4 style={styles.resourceTitle}>📺 Additional Learning Resources</h4>
                <div style={styles.resourceGrid}>
                  {[
                    { label: "OffSec PEN-300 Official Overview", url: "https://www.youtube.com/watch?v=aZsysS4BaDs" },
                    { label: "OSEP Exam Review & Tips", url: "https://www.youtube.com/watch?v=9On1TnMHpJE" },
                    { label: "Cobalt Strike C2 Setup Guide", url: "https://www.youtube.com/watch?v=mEFtpcO0enQ" },
                    { label: "BloodHound AD Enumeration", url: "https://www.youtube.com/watch?v=aSB9tQfWa-4" },
                  ].map((r, i) => (
                    <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>
                      <span style={styles.resourceIcon}>🔗</span>
                      {r.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* INSTRUCTORS */}
          {activeTab === "instructors" && (
            <div style={styles.tabContent}>
              <div style={styles.curriculumHeader}>
                <div>
                  <h3 style={styles.curriculumTitle}>Your Instructors</h3>
                  <p style={styles.curriculumSub}>Learn from active red teamers with real-world operator experience</p>
                </div>
              </div>
              <div style={styles.instructorGrid}>
                {instructors.map((ins, i) => (
                  <div key={i} style={styles.instructorCard}>
                    <div style={styles.instructorTop}>
                      <img src={ins.img} alt={ins.name} style={styles.instructorImg} />
                      <div style={styles.instructorInfo}>
                        <h3 style={styles.instructorName}>{ins.name}</h3>
                        <p style={styles.instructorRole}>{ins.role}</p>
                        <div style={styles.instructorExp}>
                          <span style={styles.expBadge}>⚡ {ins.exp}</span>
                        </div>
                      </div>
                    </div>
                    <p style={styles.instructorBio}>{ins.bio}</p>
                    <div style={styles.certList}>
                      {ins.certs.split("·").map((c, j) => (
                        <span key={j} style={styles.certBadge}>{c.trim()}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Lab Environment */}
              <div style={styles.labSection}>
                <div style={styles.labContent}>
                  <div style={styles.labText}>
                    <h3 style={styles.labTitle}>🖥 Private Lab Environment</h3>
                    <p style={styles.labDesc}>
                      Get 90-day access to our enterprise-grade lab network featuring fully patched Windows Server environments, Active Directory domains, real AV/EDR solutions, and pre-configured vulnerable machines.
                    </p>
                    <div style={styles.labFeatures}>
                      {["Windows Server 2019 & 2022", "Active Directory Forest", "CrowdStrike Falcon (Lab)", "Cobalt Strike Team Server", "BloodHound + Neo4j", "Vulnerable Web Apps"].map((f, i) => (
                        <div key={i} style={styles.labFeature}>
                          <span style={styles.checkmark}>✓</span> {f}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={styles.labVisual}>
                    <img
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80"
                      alt="Lab Environment"
                      style={styles.labImg}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FAQ */}
          {activeTab === "faq" && (
            <div style={styles.tabContent}>
              <div style={styles.curriculumHeader}>
                <div>
                  <h3 style={styles.curriculumTitle}>Frequently Asked Questions</h3>
                  <p style={styles.curriculumSub}>Everything you need to know before enrolling</p>
                </div>
              </div>
              <div style={styles.faqList}>
                {faqs.map((faq, i) => (
                  <div key={i} style={styles.faqCard}>
                    <button
                      style={styles.faqQuestion}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span>{faq.q}</span>
                      <span style={{ ...styles.faqChevron, transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                    </button>
                    {openFaq === i && (
                      <div style={styles.faqAnswer}>{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── TOOLS SECTION ── */}
      <section style={styles.toolsSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionBadge}>Offensive Toolkit</span>
            <h2 style={styles.sectionTitle}>Tools You'll <span style={styles.accent}>Operate</span></h2>
          </div>
          <div style={styles.toolsGrid}>
            {[
              { name: "Cobalt Strike", type: "C2 Framework", color: "#c0392b" },
              { name: "BloodHound", type: "AD Enumeration", color: "#8e44ad" },
              { name: "Mimikatz", type: "Credential Dumping", color: "#2980b9" },
              { name: "Rubeus", type: "Kerberos Attacks", color: "#27ae60" },
              { name: "SharpHound", type: "Data Collection", color: "#e67e22" },
              { name: "Sliver C2", type: "Open-Source C2", color: "#16a085" },
              { name: "Covenant", type: ".NET C2", color: "#d35400" },
              { name: "PowerView", type: "AD Recon", color: "#2c3e50" },
            ].map((tool, i) => (
              <div key={i} style={{ ...styles.toolCard, borderTop: `3px solid ${tool.color}` }}>
                <div style={{ ...styles.toolDot, background: tool.color }} />
                <div style={styles.toolName}>{tool.name}</div>
                <div style={styles.toolType}>{tool.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaNoise} />
        <div style={styles.ctaContainer}>
          <div style={styles.ctaBadge}>Limited Seats · Next Batch Starting Soon</div>
          <h2 style={styles.ctaTitle}>Ready to Think Like an Adversary?</h2>
          <p style={styles.ctaSub}>
            Join 1,200+ certified professionals who advanced their red team careers with our OSEP training.
          </p>
          <div style={styles.ctaActions}>
            <button style={styles.btnPrimary}>Enroll Now — ₹49,999</button>
            <button style={{ ...styles.btnGhost, borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
              Talk to a Counsellor
            </button>
          </div>
          <p style={styles.ctaNote}>✓ Exam Voucher Included &nbsp;·&nbsp; ✓ 90-Day Lab Access &nbsp;·&nbsp; ✓ Lifetime Course Updates</p>
        </div>
      </section>
    </div>
  );
};

/* ══════════════════════════════════════════════
   STYLES
══════════════════════════════════════════════ */
const styles = {
  page: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    background: "#0a0a0f",
    color: "#e8e8e8",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    position: "relative",
    zIndex: 2,
  },

  /* HERO */
  hero: {
    background: "linear-gradient(135deg, #0a0a0f 0%, #0d1117 50%, #110a0a 100%)",
    padding: "100px 0 80px",
    position: "relative",
    overflow: "hidden",
  },
  heroNoise: {
    position: "absolute", inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
    opacity: 0.4,
  },
  heroGrid: {
    position: "absolute", inset: 0,
    backgroundImage: "linear-gradient(rgba(192,57,43,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(192,57,43,0.05) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
  },
  heroBadge: {
    display: "inline-flex", alignItems: "center", gap: "8px",
    background: "rgba(192,57,43,0.15)", border: "1px solid rgba(192,57,43,0.4)",
    color: "#e74c3c", padding: "6px 16px", borderRadius: "100px",
    fontSize: "13px", fontFamily: "monospace", marginBottom: "24px",
    letterSpacing: "0.05em",
  },
  badgeDot: {
    width: "8px", height: "8px", borderRadius: "50%",
    background: "#e74c3c",
    boxShadow: "0 0 8px #e74c3c",
    display: "inline-block",
  },
  heroTitle: {
    fontSize: "clamp(36px, 5vw, 68px)",
    fontWeight: "700",
    lineHeight: "1.1",
    color: "#fff",
    maxWidth: "700px",
    marginBottom: "20px",
    letterSpacing: "-0.02em",
  },
  heroAccent: {
    color: "#e74c3c",
    fontStyle: "italic",
  },
  heroSub: {
    fontSize: "18px", color: "#9ca3af",
    maxWidth: "580px", lineHeight: "1.7",
    marginBottom: "32px",
    fontFamily: "Georgia, serif",
  },
  heroMeta: {
    display: "flex", flexWrap: "wrap", gap: "12px",
    marginBottom: "36px",
  },
  metaChip: {
    display: "flex", alignItems: "center", gap: "8px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "8px 16px", borderRadius: "8px",
    fontSize: "14px", color: "#d1d5db",
  },
  heroActions: {
    display: "flex", gap: "16px", flexWrap: "wrap",
    marginBottom: "48px",
  },
  btnPrimary: {
    background: "linear-gradient(135deg, #c0392b, #e74c3c)",
    color: "#fff", border: "none",
    padding: "14px 32px", borderRadius: "8px",
    fontSize: "16px", fontWeight: "600",
    cursor: "pointer", letterSpacing: "0.02em",
    boxShadow: "0 4px 24px rgba(231,76,60,0.4)",
    transition: "all 0.2s",
  },
  btnGhost: {
    background: "transparent",
    color: "#d1d5db", border: "1px solid rgba(255,255,255,0.2)",
    padding: "14px 32px", borderRadius: "8px",
    fontSize: "16px", fontWeight: "500",
    cursor: "pointer",
  },
  heroStats: {
    display: "flex", gap: "40px", flexWrap: "wrap",
  },
  statBox: {
    display: "flex", flexDirection: "column",
  },
  statVal: {
    fontSize: "28px", fontWeight: "700",
    color: "#fff", fontFamily: "monospace",
  },
  statLabel: {
    fontSize: "13px", color: "#6b7280",
    textTransform: "uppercase", letterSpacing: "0.08em",
  },

  /* Terminal */
  terminalCard: {
    position: "absolute", right: "5%", top: "50%",
    transform: "translateY(-50%)",
    background: "#161b22",
    border: "1px solid #30363d",
    borderRadius: "12px",
    width: "360px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
    overflow: "hidden",
    display: "none", // hide on small screens; shown via media query logic below
  },
  terminalBar: {
    background: "#21262d", padding: "10px 16px",
    display: "flex", alignItems: "center", gap: "6px",
  },
  dot: { width: "12px", height: "12px", borderRadius: "50%" },
  terminalTitle: {
    marginLeft: "auto", fontSize: "12px",
    color: "#6e7681", fontFamily: "monospace",
  },
  terminalBody: { padding: "16px", fontFamily: "monospace", fontSize: "13px" },
  terminalLine: { lineHeight: "2", whiteSpace: "nowrap" },

  /* LEARN SECTION */
  learnSection: {
    padding: "80px 0",
    background: "#0d1117",
  },
  sectionHeader: {
    textAlign: "center", marginBottom: "48px",
  },
  sectionBadge: {
    display: "inline-block",
    background: "rgba(192,57,43,0.15)",
    border: "1px solid rgba(192,57,43,0.3)",
    color: "#e74c3c", padding: "4px 14px",
    borderRadius: "100px", fontSize: "12px",
    letterSpacing: "0.1em", textTransform: "uppercase",
    marginBottom: "12px", fontFamily: "monospace",
  },
  sectionTitle: {
    fontSize: "clamp(28px, 4vw, 42px)",
    fontWeight: "700", color: "#fff",
    letterSpacing: "-0.02em",
  },
  accent: { color: "#e74c3c", fontStyle: "italic" },
  learnGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  learnCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px", padding: "28px",
    transition: "border-color 0.2s",
  },
  learnIcon: { fontSize: "32px", marginBottom: "16px" },
  learnCardTitle: {
    fontSize: "18px", fontWeight: "600",
    color: "#fff", marginBottom: "10px",
  },
  learnCardDesc: { fontSize: "14px", color: "#9ca3af", lineHeight: "1.7" },

  /* TABS */
  tabSection: { padding: "80px 0", background: "#0a0a0f" },
  tabs: {
    display: "flex", gap: "4px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px", padding: "4px",
    marginBottom: "40px", overflowX: "auto",
  },
  tab: {
    flex: 1, padding: "10px 24px",
    background: "transparent", border: "none",
    color: "#6b7280", fontSize: "15px",
    cursor: "pointer", borderRadius: "7px",
    transition: "all 0.2s", whiteSpace: "nowrap",
    textTransform: "capitalize",
  },
  tabActive: {
    background: "#c0392b", color: "#fff",
    fontWeight: "600",
  },
  tabContent: { minHeight: "400px" },

  /* CURRICULUM */
  curriculumHeader: {
    display: "flex", justifyContent: "space-between",
    alignItems: "flex-start", marginBottom: "24px",
    flexWrap: "wrap", gap: "16px",
  },
  curriculumTitle: { fontSize: "24px", fontWeight: "700", color: "#fff", marginBottom: "4px" },
  curriculumSub: { fontSize: "14px", color: "#6b7280" },
  curriculumBadge: {
    background: "rgba(192,57,43,0.15)",
    border: "1px solid rgba(192,57,43,0.3)",
    color: "#e74c3c", padding: "6px 14px",
    borderRadius: "6px", fontSize: "13px",
    fontFamily: "monospace",
  },
  moduleList: { display: "flex", flexDirection: "column", gap: "8px" },
  moduleCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px", overflow: "hidden",
  },
  moduleHeader: {
    width: "100%", display: "flex",
    justifyContent: "space-between", alignItems: "center",
    padding: "18px 24px", background: "transparent",
    border: "none", color: "#fff", cursor: "pointer",
    textAlign: "left",
  },
  moduleLeft: { display: "flex", alignItems: "center", gap: "16px" },
  moduleNum: {
    fontFamily: "monospace", fontSize: "13px",
    color: "#e74c3c", fontWeight: "700",
    minWidth: "28px",
  },
  moduleName: { fontSize: "15px", fontWeight: "600", color: "#e8e8e8" },
  moduleMeta: { fontSize: "13px", color: "#6b7280", marginTop: "2px" },
  moduleChevron: { color: "#6b7280", fontSize: "18px", transition: "transform 0.2s" },
  lessonList: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    padding: "8px 0",
  },
  lessonItem: {
    display: "flex", alignItems: "center", gap: "12px",
    padding: "10px 24px 10px 68px",
  },
  lessonIcon: { fontSize: "10px", color: "#e74c3c" },
  lessonText: { flex: 1, fontSize: "14px", color: "#9ca3af" },
  lessonBadge: {
    fontSize: "11px", padding: "2px 8px",
    borderRadius: "4px", background: "rgba(39,174,96,0.15)",
    color: "#27ae60", border: "1px solid rgba(39,174,96,0.3)",
    fontFamily: "monospace",
  },

  /* VIDEOS */
  videoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px", marginBottom: "32px",
  },
  videoCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px", overflow: "hidden",
  },
  thumbWrap: {
    position: "relative", cursor: "pointer",
    aspectRatio: "16/9", overflow: "hidden",
  },
  thumb: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  playOverlay: {
    position: "absolute", inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  playBtn: {
    width: "56px", height: "56px",
    background: "rgba(192,57,43,0.9)",
    borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "18px", color: "#fff",
  },
  videoDuration: {
    position: "absolute", bottom: "10px", right: "10px",
    background: "rgba(0,0,0,0.7)", color: "#fff",
    fontSize: "12px", padding: "2px 8px", borderRadius: "4px",
    fontFamily: "monospace",
  },
  videoTag: {
    position: "absolute", top: "10px", left: "10px",
    background: "#e74c3c", color: "#fff",
    fontSize: "11px", padding: "2px 10px", borderRadius: "4px",
    fontWeight: "600", letterSpacing: "0.05em",
  },
  iframeWrap: { aspectRatio: "16/9", width: "100%" },
  iframe: { width: "100%", height: "100%", border: "none" },
  videoInfo: { padding: "16px" },
  videoTitle: { fontSize: "15px", fontWeight: "600", color: "#fff", marginBottom: "6px" },
  videoDesc: { fontSize: "13px", color: "#6b7280", lineHeight: "1.6" },
  resourceBox: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px", padding: "24px",
  },
  resourceTitle: { fontSize: "16px", fontWeight: "600", color: "#fff", marginBottom: "16px" },
  resourceGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" },
  resourceLink: {
    display: "flex", alignItems: "center", gap: "10px",
    background: "rgba(192,57,43,0.08)",
    border: "1px solid rgba(192,57,43,0.2)",
    borderRadius: "8px", padding: "12px 16px",
    color: "#e74c3c", textDecoration: "none",
    fontSize: "14px", transition: "background 0.2s",
  },
  resourceIcon: { fontSize: "16px" },

  /* INSTRUCTORS */
  instructorGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: "24px", marginBottom: "40px",
  },
  instructorCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px", padding: "28px",
  },
  instructorTop: { display: "flex", gap: "16px", marginBottom: "16px", alignItems: "center" },
  instructorImg: { width: "72px", height: "72px", borderRadius: "50%", objectFit: "cover" },
  instructorInfo: { flex: 1 },
  instructorName: { fontSize: "18px", fontWeight: "700", color: "#fff", marginBottom: "4px" },
  instructorRole: { fontSize: "14px", color: "#e74c3c", marginBottom: "8px" },
  instructorExp: {},
  expBadge: {
    background: "rgba(192,57,43,0.15)",
    border: "1px solid rgba(192,57,43,0.3)",
    color: "#e74c3c", padding: "3px 10px",
    borderRadius: "100px", fontSize: "12px",
    fontFamily: "monospace",
  },
  instructorBio: { fontSize: "14px", color: "#9ca3af", lineHeight: "1.7", marginBottom: "16px" },
  certList: { display: "flex", flexWrap: "wrap", gap: "8px" },
  certBadge: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#d1d5db", padding: "4px 10px",
    borderRadius: "6px", fontSize: "12px",
    fontFamily: "monospace",
  },
  labSection: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px", overflow: "hidden",
  },
  labContent: { display: "flex", flexWrap: "wrap" },
  labText: { flex: "1 1 320px", padding: "36px" },
  labTitle: { fontSize: "22px", fontWeight: "700", color: "#fff", marginBottom: "12px" },
  labDesc: { fontSize: "15px", color: "#9ca3af", lineHeight: "1.7", marginBottom: "24px" },
  labFeatures: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" },
  labFeature: { fontSize: "14px", color: "#d1d5db", display: "flex", alignItems: "center", gap: "8px" },
  checkmark: { color: "#27ae60", fontWeight: "700" },
  labVisual: { flex: "1 1 300px" },
  labImg: { width: "100%", height: "100%", objectFit: "cover", minHeight: "250px", display: "block" },

  /* FAQ */
  faqList: { display: "flex", flexDirection: "column", gap: "8px" },
  faqCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px", overflow: "hidden",
  },
  faqQuestion: {
    width: "100%", display: "flex",
    justifyContent: "space-between", alignItems: "center",
    padding: "18px 24px", background: "transparent",
    border: "none", color: "#e8e8e8",
    fontSize: "15px", fontWeight: "500",
    cursor: "pointer", textAlign: "left",
    gap: "16px",
  },
  faqChevron: {
    fontSize: "22px", color: "#e74c3c",
    fontWeight: "300", transition: "transform 0.2s",
    flexShrink: 0,
  },
  faqAnswer: {
    padding: "0 24px 20px",
    fontSize: "14px", color: "#9ca3af",
    lineHeight: "1.8",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    paddingTop: "16px",
  },

  /* TOOLS */
  toolsSection: { padding: "80px 0", background: "#0d1117" },
  toolsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
  },
  toolCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px", padding: "24px",
    transition: "transform 0.2s",
  },
  toolDot: { width: "10px", height: "10px", borderRadius: "50%", marginBottom: "12px" },
  toolName: { fontSize: "16px", fontWeight: "600", color: "#fff", marginBottom: "4px" },
  toolType: { fontSize: "13px", color: "#6b7280" },

  /* CTA */
  ctaSection: {
    padding: "100px 0",
    background: "linear-gradient(135deg, #1a0505 0%, #0d0d0d 50%, #0a0510 100%)",
    position: "relative", overflow: "hidden", textAlign: "center",
  },
  ctaNoise: {
    position: "absolute", inset: 0,
    backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(192,57,43,0.15) 0%, transparent 70%)",
  },
  ctaContainer: { position: "relative", zIndex: 2, maxWidth: "700px", margin: "0 auto", padding: "0 24px" },
  ctaBadge: {
    display: "inline-block",
    background: "rgba(192,57,43,0.2)", border: "1px solid rgba(192,57,43,0.4)",
    color: "#e74c3c", padding: "6px 16px", borderRadius: "100px",
    fontSize: "13px", marginBottom: "24px", fontFamily: "monospace",
  },
  ctaTitle: {
    fontSize: "clamp(28px, 4vw, 48px)", fontWeight: "700",
    color: "#fff", marginBottom: "16px", letterSpacing: "-0.02em",
  },
  ctaSub: { fontSize: "17px", color: "#9ca3af", marginBottom: "36px", lineHeight: "1.7" },
  ctaActions: { display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "24px" },
  ctaNote: { fontSize: "13px", color: "#6b7280" },
};

export default OSEPCoursePage;