import { useState } from "react";

const OSCPCoursePage = () => {
  const [activeTab, setActiveTab] = useState("curriculum");
  const [openModule, setOpenModule] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const modules = [
    {
      title: "Module 1: Penetration Testing with Kali Linux",
      duration: "5 hrs",
      lessons: [
        "Setting Up the Lab Environment",
        "Introduction to Kali Linux Tools",
        "Bash Scripting for Pentesters",
        "Passive & Active Reconnaissance",
        "Google Dorking & OSINT",
      ],
    },
    {
      title: "Module 2: Network Scanning & Enumeration",
      duration: "4 hrs",
      lessons: [
        "Nmap Advanced Techniques",
        "Service & Version Detection",
        "SMB, FTP, SSH Enumeration",
        "SNMP & NFS Enumeration",
        "Vulnerability Scanning with Nessus",
      ],
    },
    {
      title: "Module 3: Web Application Attacks",
      duration: "6 hrs",
      lessons: [
        "SQL Injection (Manual & sqlmap)",
        "Cross-Site Scripting (XSS)",
        "File Inclusion (LFI/RFI)",
        "Command Injection",
        "Burp Suite Mastery",
      ],
    },
    {
      title: "Module 4: Buffer Overflow Exploitation",
      duration: "7 hrs",
      lessons: [
        "x86 Stack-Based Buffer Overflow",
        "Finding EIP Offset with Pattern",
        "Bad Character Analysis",
        "Finding & Confirming JMP ESP",
        "Shellcode Generation with msfvenom",
      ],
    },
    {
      title: "Module 5: Privilege Escalation",
      duration: "6 hrs",
      lessons: [
        "Linux PrivEsc (SUID, Cron, PATH)",
        "Windows PrivEsc (Services, Registry)",
        "Token Impersonation",
        "Unquoted Service Paths",
        "Automated PrivEsc Scripts",
      ],
    },
    {
      title: "Module 6: Client-Side Attacks",
      duration: "4 hrs",
      lessons: [
        "Malicious Macros in Office Docs",
        "HTML Application (HTA) Attacks",
        "Browser-Based Exploitation",
        "Phishing Payload Delivery",
        "Antivirus Evasion Basics",
      ],
    },
    {
      title: "Module 7: Post-Exploitation",
      duration: "5 hrs",
      lessons: [
        "Establishing Persistence",
        "Dumping Credentials (Mimikatz)",
        "Port Forwarding & Tunneling",
        "Pivoting Through Networks",
        "Covering Your Tracks",
      ],
    },
    {
      title: "Module 8: Active Directory Attacks",
      duration: "6 hrs",
      lessons: [
        "AD Enumeration with PowerView",
        "Pass-the-Hash & Pass-the-Ticket",
        "Kerberoasting",
        "DCSync Attack",
        "BloodHound for Attack Path Mapping",
      ],
    },
  ];

  const videos = [
    {
      id: 1,
      title: "OSCP Course Introduction & Roadmap",
      desc: "Complete overview of the PEN-200 course structure, exam format, and preparation strategy",
      thumb: "https://img.youtube.com/vi/M9Qv3ZiRVek/hqdefault.jpg",
      url: "https://www.youtube.com/embed/M9Qv3ZiRVek",
      duration: "18:22",
      tag: "Free Preview",
    },
    {
      id: 2,
      title: "Buffer Overflow — Step by Step",
      desc: "Full walkthrough of x86 stack-based buffer overflow from scratch to working exploit",
      thumb: "https://img.youtube.com/vi/1S0aBV-Waeo/hqdefault.jpg",
      url: "https://www.youtube.com/embed/1S0aBV-Waeo",
      duration: "42:10",
      tag: "Free Preview",
    },
    {
      id: 3,
      title: "Active Directory Attacks for OSCP",
      desc: "Kerberoasting, Pass-the-Hash, and BloodHound walkthrough for the OSCP exam",
      thumb: "https://img.youtube.com/vi/mEFtpcO0enQ/hqdefault.jpg",
      url: "https://www.youtube.com/embed/mEFtpcO0enQ",
      duration: "31:05",
      tag: "Free Preview",
    },
  ];

  const instructors = [
    {
      name: "Satyendra Pal",
      role: "Lead OSCP Instructor",
      exp: "14+ Years",
      certs: "OSCP · OSEP · CEH · CRTO",
      img: "https://ui-avatars.com/api/?name=Satyendra+Pal&background=c0392b&color=fff&size=120&bold=true",
      bio: "Senior Red Team consultant with 14+ years of enterprise pentesting experience across banking, defense, and telecom. Has trained 500+ OSCP certified professionals.",
    },
    {
      name: "Abhijeet Sharma",
      role: "Web & Network Exploit Specialist",
      exp: "9+ Years",
      certs: "OSCP · CEH · CPENT · eWPT",
      img: "https://ui-avatars.com/api/?name=Abhijeet+Sharma&background=1a1a2e&color=fff&size=120&bold=true",
      bio: "Certified EC-Council instructor specializing in web application security and network exploitation. Expert in Burp Suite, SQLi, and privilege escalation techniques.",
    },
  ];

  const faqs = [
    {
      q: "What is OSCP and who is it for?",
      a: "OSCP (Offensive Security Certified Professional) is the gold standard entry-level penetration testing certification by OffSec. It's designed for security professionals, sysadmins, and IT staff who want to validate real-world exploitation skills through a 24-hour practical exam.",
    },
    {
      q: "Do I need programming knowledge to pass OSCP?",
      a: "Basic Bash and Python scripting is helpful but not mandatory. You should be able to modify existing scripts and understand code at a high level. Our course covers all the scripting you'll need from the ground up.",
    },
    {
      q: "How long does it take to prepare for OSCP?",
      a: "Most students take 3–6 months of dedicated practice. With our structured curriculum, lab access, and mock exams, our students average 4 months from enrollment to passing the exam.",
    },
    {
      q: "Is the OffSec exam voucher included?",
      a: "Yes — your enrollment includes one official OffSec PEN-200 (OSCP) exam attempt plus 90 days of our private lab access. Additional exam attempts are available at a discount for enrolled students.",
    },
    {
      q: "What makes WebAsha's OSCP training different?",
      a: "We combine OffSec's official PEN-200 curriculum with our own extended lab environment, live doubt sessions, and a private Discord community of 1,000+ OSCP students. Our 93% first-attempt pass rate speaks for itself.",
    },
  ];

  return (
    <div style={s.page}>

      {/* ── HERO ── */}
      <section style={s.hero}>
        <div style={s.heroGrid} />
        <div style={s.heroGlow} />
        <div style={s.container}>
          <div style={s.heroBadge}>
            <span style={s.badgePulse} />
            OffSec Certified · PEN-200
          </div>
          <h1 style={s.heroTitle}>
            Offensive Security<br />
            <span style={s.heroAccent}>Certified Professional</span>
          </h1>
          <p style={s.heroSub}>
            The world's most recognized penetration testing certification.
            Learn to compromise real systems through hands-on labs and
            earn your OSCP with WebAsha's expert-led training.
          </p>
          <div style={s.heroMeta}>
            {[
              { icon: "🎯", label: "Intermediate Level" },
              { icon: "⏱", label: "100+ Hours" },
              { icon: "🖥", label: "90-Day Lab" },
              { icon: "🏆", label: "OSCP Certified" },
              { icon: "📋", label: "24-Hr Exam" },
            ].map((m, i) => (
              <div key={i} style={s.metaChip}>
                <span>{m.icon}</span><span>{m.label}</span>
              </div>
            ))}
          </div>
          <div style={s.heroActions}>
            <button style={s.btnPrimary}>Enroll Now — ₹39,999</button>
            <button style={s.btnGhost}>Download Syllabus</button>
          </div>
          <div style={s.heroStats}>
            {[
              { val: "2,500+", label: "Students Trained" },
              { val: "4.9★", label: "Course Rating" },
              { val: "93%", label: "Pass Rate" },
              { val: "#1", label: "OSCP Institute Pune" },
            ].map((s2, i) => (
              <div key={i} style={s.statBox}>
                <span style={s.statVal}>{s2.val}</span>
                <span style={s.statLabel}>{s2.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal */}
        <div style={s.terminal}>
          <div style={s.termBar}>
            {["#ff5f56","#ffbd2e","#27c93f"].map((c,i)=>(
              <span key={i} style={{...s.dot, background:c}}/>
            ))}
            <span style={s.termTitle}>oscp-lab ~ nmap</span>
          </div>
          <div style={s.termBody}>
            {[
              {c:"#27c93f", t:"$ nmap -sV -sC 192.168.1.10"},
              {c:"#e0e0e0", t:"  PORT   STATE SERVICE  VERSION"},
              {c:"#ffd93d", t:"  80/tcp open  http     Apache 2.4.49"},
              {c:"#ffd93d", t:"  445/tcp open  microsoft-ds"},
              {c:"#27c93f", t:"$ searchsploit Apache 2.4.49"},
              {c:"#ff6b6b", t:"  [!] CVE-2021-41773 Path Traversal"},
              {c:"#27c93f", t:"$ python3 exploit.py 192.168.1.10"},
              {c:"#ff6b6b", t:"  [*] Shell obtained! UID=www-data"},
              {c:"#27c93f", t:"$ _"},
            ].map((l,i)=>(
              <div key={i} style={{...s.termLine, color:l.c}}>{l.t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL LEARN ── */}
      <section style={s.learnSection}>
        <div style={s.container}>
          <div style={s.sectionHeader}>
            <span style={s.badge}>Learning Outcomes</span>
            <h2 style={s.sectionTitle}>Skills You'll <span style={s.accent}>Gain</span></h2>
          </div>
          <div style={s.learnGrid}>
            {[
              {icon:"🔍", title:"Reconnaissance & Scanning", desc:"Master Nmap, Shodan, and OSINT tools to enumerate targets and identify attack surfaces before exploitation."},
              {icon:"🌐", title:"Web Application Exploitation", desc:"Exploit SQLi, XSS, LFI/RFI, and command injection vulnerabilities using manual techniques and Burp Suite."},
              {icon:"💥", title:"Buffer Overflow Exploits", desc:"Write working exploits from scratch for x86 stack-based buffer overflows — a core OSCP exam requirement."},
              {icon:"⬆️", title:"Privilege Escalation", desc:"Escalate from low-privilege user to SYSTEM/root on both Windows and Linux using misconfigurations and exploits."},
              {icon:"🏰", title:"Active Directory Attacks", desc:"Enumerate and exploit AD environments using Kerberoasting, Pass-the-Hash, and BloodHound attack paths."},
              {icon:"🔗", title:"Pivoting & Tunneling", desc:"Move laterally through segmented networks using SSH tunnels, proxychains, and port forwarding techniques."},
            ].map((item,i)=>(
              <div key={i} style={s.learnCard}>
                <div style={s.learnIcon}>{item.icon}</div>
                <h3 style={s.learnTitle}>{item.title}</h3>
                <p style={s.learnDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXAM INFO BANNER ── */}
      <section style={s.examBanner}>
        <div style={s.container}>
          <div style={s.examGrid}>
            <div style={s.examText}>
              <h3 style={s.examTitle}>📋 OSCP Exam Format</h3>
              <p style={s.examDesc}>The OSCP exam is a 24-hour hands-on practical assessment. You must compromise a set of target machines and submit a professional penetration testing report within 24 additional hours.</p>
            </div>
            <div style={s.examStats}>
              {[
                {val:"24 hrs", label:"Exam Duration"},
                {val:"70 pts", label:"Passing Score"},
                {val:"100 pts", label:"Total Points"},
                {val:"+10 pts", label:"Bonus Points Available"},
              ].map((e,i)=>(
                <div key={i} style={s.examStat}>
                  <span style={s.examStatVal}>{e.val}</span>
                  <span style={s.examStatLabel}>{e.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TABS ── */}
      <section style={s.tabSection}>
        <div style={s.container}>
          <div style={s.tabs}>
            {["curriculum","videos","instructors","faq"].map(tab=>(
              <button
                key={tab}
                style={{...s.tab, ...(activeTab===tab ? s.tabActive : {})}}
                onClick={()=>setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase()+tab.slice(1)}
              </button>
            ))}
          </div>

          {/* CURRICULUM */}
          {activeTab==="curriculum" && (
            <div>
              <div style={s.tabHeader}>
                <div>
                  <h3 style={s.tabTitle}>Course Curriculum</h3>
                  <p style={s.tabSub}>8 Modules · 43+ Hours · 70+ Practice Labs</p>
                </div>
                <div style={s.tabBadge}>PEN-200 Aligned</div>
              </div>
              <div style={s.moduleList}>
                {modules.map((mod,i)=>(
                  <div key={i} style={s.moduleCard}>
                    <button style={s.moduleBtn} onClick={()=>setOpenModule(openModule===i?null:i)}>
                      <div style={s.moduleLeft}>
                        <span style={s.moduleNum}>{String(i+1).padStart(2,"0")}</span>
                        <div>
                          <div style={s.moduleName}>{mod.title}</div>
                          <div style={s.moduleMeta}>{mod.lessons.length} lessons · {mod.duration}</div>
                        </div>
                      </div>
                      <span style={{...s.chevron, transform: openModule===i?"rotate(180deg)":"none"}}>▾</span>
                    </button>
                    {openModule===i && (
                      <div style={s.lessonList}>
                        {mod.lessons.map((lesson,j)=>(
                          <div key={j} style={s.lesson}>
                            <span style={s.lessonPlay}>▶</span>
                            <span style={s.lessonText}>{lesson}</span>
                            <span style={{...s.lessonTag, ...(j===0?s.freeTag:{})}}>{j===0?"Free":"Lab"}</span>
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
          {activeTab==="videos" && (
            <div>
              <div style={s.tabHeader}>
                <div>
                  <h3 style={s.tabTitle}>Free Preview Lectures</h3>
                  <p style={s.tabSub}>Watch sample lessons before you enroll</p>
                </div>
              </div>
              <div style={s.videoGrid}>
                {videos.map(v=>(
                  <div key={v.id} style={s.videoCard}>
                    {playingVideo===v.id ? (
                      <div style={s.iframeWrap}>
                        <iframe src={`${v.url}?autoplay=1`} title={v.title}
                          frameBorder="0" allow="autoplay; encrypted-media"
                          allowFullScreen style={s.iframe}/>
                      </div>
                    ):(
                      <div style={s.thumbWrap} onClick={()=>setPlayingVideo(v.id)}>
                        <img src={v.thumb} alt={v.title} style={s.thumb}/>
                        <div style={s.overlay}>
                          <div style={s.playBtn}>▶</div>
                        </div>
                        <div style={s.duration}>{v.duration}</div>
                        <div style={s.freeLabel}>{v.tag}</div>
                      </div>
                    )}
                    <div style={s.videoInfo}>
                      <h4 style={s.videoTitle}>{v.title}</h4>
                      <p style={s.videoDesc}>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={s.resourceBox}>
                <h4 style={s.resourceTitle}>📺 More Learning Resources</h4>
                <div style={s.resourceGrid}>
                  {[
                    {label:"OffSec PEN-200 Official Overview", url:"https://www.youtube.com/watch?v=M9Qv3ZiRVek"},
                    {label:"OSCP Exam Tips & Strategy 2024", url:"https://www.youtube.com/watch?v=1S0aBV-Waeo"},
                    {label:"Buffer Overflow Complete Guide", url:"https://www.youtube.com/watch?v=mEFtpcO0enQ"},
                    {label:"Active Directory for OSCP", url:"https://www.youtube.com/watch?v=aSB9tQfWa-4"},
                  ].map((r,i)=>(
                    <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={s.resourceLink}>
                      <span>🔗</span>{r.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* INSTRUCTORS */}
          {activeTab==="instructors" && (
            <div>
              <div style={s.tabHeader}>
                <div>
                  <h3 style={s.tabTitle}>Meet Your Instructors</h3>
                  <p style={s.tabSub}>Learn from active penetration testers with real-world offensive experience</p>
                </div>
              </div>
              <div style={s.instructorGrid}>
                {instructors.map((ins,i)=>(
                  <div key={i} style={s.instructorCard}>
                    <div style={s.instructorTop}>
                      <img src={ins.img} alt={ins.name} style={s.instructorImg}/>
                      <div>
                        <h3 style={s.instructorName}>{ins.name}</h3>
                        <p style={s.instructorRole}>{ins.role}</p>
                        <span style={s.expBadge}>⚡ {ins.exp}</span>
                      </div>
                    </div>
                    <p style={s.instructorBio}>{ins.bio}</p>
                    <div style={s.certList}>
                      {ins.certs.split("·").map((c,j)=>(
                        <span key={j} style={s.certBadge}>{c.trim()}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Lab Environment */}
              <div style={s.labCard}>
                <div style={s.labInner}>
                  <div style={s.labText}>
                    <h3 style={s.labTitle}>🖥 Private Practice Lab</h3>
                    <p style={s.labDesc}>Get 90 days of access to our OSCP-style lab environment with 50+ vulnerable machines across Windows and Linux, replicating real exam scenarios.</p>
                    <div style={s.labFeatures}>
                      {["50+ Vulnerable Machines","Windows & Linux Targets","Active Directory Domain","Real CVE Exploits","Daily Machine Resets","Guided Walkthroughs"].map((f,i)=>(
                        <div key={i} style={s.labFeature}><span style={s.check}>✓</span>{f}</div>
                      ))}
                    </div>
                  </div>
                  <div style={s.labImgWrap}>
                    <img src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&q=80" alt="Lab" style={s.labImg}/>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FAQ */}
          {activeTab==="faq" && (
            <div>
              <div style={s.tabHeader}>
                <div>
                  <h3 style={s.tabTitle}>Frequently Asked Questions</h3>
                  <p style={s.tabSub}>Everything you need to know about our OSCP course</p>
                </div>
              </div>
              <div style={s.faqList}>
                {faqs.map((faq,i)=>(
                  <div key={i} style={s.faqCard}>
                    <button style={s.faqQ} onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                      <span>{faq.q}</span>
                      <span style={{...s.faqPlus, transform:openFaq===i?"rotate(45deg)":"none"}}>+</span>
                    </button>
                    {openFaq===i && <div style={s.faqA}>{faq.a}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section style={s.toolsSection}>
        <div style={s.container}>
          <div style={s.sectionHeader}>
            <span style={s.badge}>Pentesting Toolkit</span>
            <h2 style={s.sectionTitle}>Tools You'll <span style={s.accent}>Master</span></h2>
          </div>
          <div style={s.toolsGrid}>
            {[
              {name:"Nmap",       type:"Network Scanner",      color:"#27ae60"},
              {name:"Burp Suite", type:"Web Proxy",            color:"#e67e22"},
              {name:"Metasploit", type:"Exploit Framework",    color:"#2980b9"},
              {name:"sqlmap",     type:"SQL Injection",        color:"#8e44ad"},
              {name:"Gobuster",   type:"Directory Bruteforce", color:"#c0392b"},
              {name:"Impacket",   type:"AD Attacks",           color:"#16a085"},
              {name:"BloodHound", type:"AD Enumeration",       color:"#d35400"},
              {name:"Mimikatz",   type:"Cred Dumping",         color:"#2c3e50"},
            ].map((t,i)=>(
              <div key={i} style={{...s.toolCard, borderTop:`3px solid ${t.color}`}}>
                <div style={{...s.toolDot, background:t.color}}/>
                <div style={s.toolName}>{t.name}</div>
                <div style={s.toolType}>{t.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={s.cta}>
        <div style={s.ctaGlow}/>
        <div style={s.ctaInner}>
          <div style={s.ctaBadge}>Next Batch Starting Soon · Limited Seats</div>
          <h2 style={s.ctaTitle}>Start Your OSCP Journey Today</h2>
          <p style={s.ctaSub}>Join 2,500+ professionals who certified with WebAsha Technologies — Pune's #1 OSCP training institute.</p>
          <div style={s.ctaActions}>
            <button style={s.btnPrimary}>Enroll Now — ₹39,999</button>
            <button style={{...s.btnGhost, borderColor:"rgba(255,255,255,0.3)", color:"#fff"}}>Talk to Counsellor</button>
          </div>
          <p style={s.ctaNote}>✓ Exam Voucher Included &nbsp;·&nbsp; ✓ 90-Day Lab &nbsp;·&nbsp; ✓ Lifetime Updates</p>
        </div>
      </section>
    </div>
  );
};

/* ── STYLES ── */
const s = {
  page:         { fontFamily:"Georgia,'Times New Roman',serif", background:"#0a0a0f", color:"#e8e8e8", minHeight:"100vh", overflowX:"hidden" },
  container:    { maxWidth:"1200px", margin:"0 auto", padding:"0 24px", position:"relative", zIndex:2 },

  hero:         { background:"linear-gradient(135deg,#0a0a0f,#0d1117,#0a0a10)", padding:"100px 0 80px", position:"relative", overflow:"hidden" },
  heroGrid:     { position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(192,57,43,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(192,57,43,0.04) 1px,transparent 1px)", backgroundSize:"60px 60px" },
  heroGlow:     { position:"absolute", top:"-20%", left:"30%", width:"600px", height:"600px", background:"radial-gradient(circle,rgba(192,57,43,0.08) 0%,transparent 70%)", pointerEvents:"none" },
  heroBadge:    { display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(192,57,43,0.15)", border:"1px solid rgba(192,57,43,0.4)", color:"#e74c3c", padding:"6px 16px", borderRadius:"100px", fontSize:"13px", fontFamily:"monospace", marginBottom:"24px", letterSpacing:"0.05em" },
  badgePulse:   { width:"8px", height:"8px", borderRadius:"50%", background:"#e74c3c", boxShadow:"0 0 8px #e74c3c", display:"inline-block" },
  heroTitle:    { fontSize:"clamp(36px,5vw,64px)", fontWeight:"700", lineHeight:"1.1", color:"#fff", maxWidth:"680px", marginBottom:"20px", letterSpacing:"-0.02em" },
  heroAccent:   { color:"#e74c3c", fontStyle:"italic" },
  heroSub:      { fontSize:"18px", color:"#9ca3af", maxWidth:"560px", lineHeight:"1.7", marginBottom:"32px" },
  heroMeta:     { display:"flex", flexWrap:"wrap", gap:"10px", marginBottom:"32px" },
  metaChip:     { display:"flex", alignItems:"center", gap:"8px", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", padding:"7px 14px", borderRadius:"8px", fontSize:"13px", color:"#d1d5db" },
  heroActions:  { display:"flex", gap:"14px", flexWrap:"wrap", marginBottom:"44px" },
  btnPrimary:   { background:"linear-gradient(135deg,#c0392b,#e74c3c)", color:"#fff", border:"none", padding:"14px 32px", borderRadius:"8px", fontSize:"16px", fontWeight:"600", cursor:"pointer", boxShadow:"0 4px 24px rgba(231,76,60,0.4)" },
  btnGhost:     { background:"transparent", color:"#d1d5db", border:"1px solid rgba(255,255,255,0.2)", padding:"14px 32px", borderRadius:"8px", fontSize:"16px", cursor:"pointer" },
  heroStats:    { display:"flex", gap:"36px", flexWrap:"wrap" },
  statBox:      { display:"flex", flexDirection:"column" },
  statVal:      { fontSize:"26px", fontWeight:"700", color:"#fff", fontFamily:"monospace" },
  statLabel:    { fontSize:"12px", color:"#6b7280", textTransform:"uppercase", letterSpacing:"0.08em" },

  terminal:     { position:"absolute", right:"4%", top:"50%", transform:"translateY(-50%)", background:"#161b22", border:"1px solid #30363d", borderRadius:"12px", width:"340px", boxShadow:"0 20px 60px rgba(0,0,0,0.5)", overflow:"hidden" },
  termBar:      { background:"#21262d", padding:"10px 16px", display:"flex", alignItems:"center", gap:"6px" },
  dot:          { width:"12px", height:"12px", borderRadius:"50%", display:"inline-block" },
  termTitle:    { marginLeft:"auto", fontSize:"12px", color:"#6e7681", fontFamily:"monospace" },
  termBody:     { padding:"16px", fontFamily:"monospace", fontSize:"12px" },
  termLine:     { lineHeight:"2.1", whiteSpace:"nowrap", overflow:"hidden" },

  learnSection: { padding:"80px 0", background:"#0d1117" },
  sectionHeader:{ textAlign:"center", marginBottom:"48px" },
  badge:        { display:"inline-block", background:"rgba(192,57,43,0.15)", border:"1px solid rgba(192,57,43,0.3)", color:"#e74c3c", padding:"4px 14px", borderRadius:"100px", fontSize:"12px", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"12px", fontFamily:"monospace" },
  sectionTitle: { fontSize:"clamp(28px,4vw,42px)", fontWeight:"700", color:"#fff", letterSpacing:"-0.02em" },
  accent:       { color:"#e74c3c", fontStyle:"italic" },
  learnGrid:    { display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"20px" },
  learnCard:    { background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"12px", padding:"26px" },
  learnIcon:    { fontSize:"30px", marginBottom:"14px" },
  learnTitle:   { fontSize:"17px", fontWeight:"600", color:"#fff", marginBottom:"8px" },
  learnDesc:    { fontSize:"14px", color:"#9ca3af", lineHeight:"1.7" },

  examBanner:   { padding:"48px 0", background:"rgba(192,57,43,0.08)", borderTop:"1px solid rgba(192,57,43,0.2)", borderBottom:"1px solid rgba(192,57,43,0.2)" },
  examGrid:     { display:"flex", flexWrap:"wrap", gap:"32px", alignItems:"center" },
  examText:     { flex:"1 1 300px" },
  examTitle:    { fontSize:"20px", fontWeight:"700", color:"#fff", marginBottom:"10px" },
  examDesc:     { fontSize:"14px", color:"#9ca3af", lineHeight:"1.7" },
  examStats:    { display:"flex", gap:"28px", flexWrap:"wrap" },
  examStat:     { display:"flex", flexDirection:"column", alignItems:"center", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"10px", padding:"16px 20px", minWidth:"100px" },
  examStatVal:  { fontSize:"22px", fontWeight:"700", color:"#e74c3c", fontFamily:"monospace" },
  examStatLabel:{ fontSize:"12px", color:"#6b7280", marginTop:"4px", textAlign:"center" },

  tabSection:   { padding:"80px 0", background:"#0a0a0f" },
  tabs:         { display:"flex", gap:"4px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"10px", padding:"4px", marginBottom:"36px", overflowX:"auto" },
  tab:          { flex:1, padding:"10px 20px", background:"transparent", border:"none", color:"#6b7280", fontSize:"15px", cursor:"pointer", borderRadius:"7px", whiteSpace:"nowrap" },
  tabActive:    { background:"#c0392b", color:"#fff", fontWeight:"600" },
  tabHeader:    { display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"24px", flexWrap:"wrap", gap:"12px" },
  tabTitle:     { fontSize:"22px", fontWeight:"700", color:"#fff", marginBottom:"4px" },
  tabSub:       { fontSize:"14px", color:"#6b7280" },
  tabBadge:     { background:"rgba(192,57,43,0.15)", border:"1px solid rgba(192,57,43,0.3)", color:"#e74c3c", padding:"6px 14px", borderRadius:"6px", fontSize:"13px", fontFamily:"monospace" },

  moduleList:   { display:"flex", flexDirection:"column", gap:"8px" },
  moduleCard:   { background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"10px", overflow:"hidden" },
  moduleBtn:    { width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"16px 22px", background:"transparent", border:"none", color:"#fff", cursor:"pointer", textAlign:"left" },
  moduleLeft:   { display:"flex", alignItems:"center", gap:"14px" },
  moduleNum:    { fontFamily:"monospace", fontSize:"13px", color:"#e74c3c", fontWeight:"700", minWidth:"24px" },
  moduleName:   { fontSize:"15px", fontWeight:"600", color:"#e8e8e8" },
  moduleMeta:   { fontSize:"13px", color:"#6b7280", marginTop:"2px" },
  chevron:      { color:"#6b7280", fontSize:"18px", transition:"transform 0.2s" },
  lessonList:   { borderTop:"1px solid rgba(255,255,255,0.06)", padding:"6px 0" },
  lesson:       { display:"flex", alignItems:"center", gap:"10px", padding:"9px 22px 9px 60px" },
  lessonPlay:   { fontSize:"9px", color:"#e74c3c" },
  lessonText:   { flex:1, fontSize:"14px", color:"#9ca3af" },
  lessonTag:    { fontSize:"11px", padding:"2px 8px", borderRadius:"4px", background:"rgba(39,174,96,0.12)", color:"#27ae60", border:"1px solid rgba(39,174,96,0.25)", fontFamily:"monospace" },
  freeTag:      { background:"rgba(231,76,60,0.12)", color:"#e74c3c", border:"1px solid rgba(231,76,60,0.25)" },

  videoGrid:    { display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"20px", marginBottom:"24px" },
  videoCard:    { background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"12px", overflow:"hidden" },
  thumbWrap:    { position:"relative", cursor:"pointer", aspectRatio:"16/9", overflow:"hidden" },
  thumb:        { width:"100%", height:"100%", objectFit:"cover", display:"block" },
  overlay:      { position:"absolute", inset:0, background:"rgba(0,0,0,0.4)", display:"flex", alignItems:"center", justifyContent:"center" },
  playBtn:      { width:"52px", height:"52px", background:"rgba(192,57,43,0.9)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"16px", color:"#fff" },
  duration:     { position:"absolute", bottom:"8px", right:"8px", background:"rgba(0,0,0,0.75)", color:"#fff", fontSize:"12px", padding:"2px 8px", borderRadius:"4px", fontFamily:"monospace" },
  freeLabel:    { position:"absolute", top:"8px", left:"8px", background:"#e74c3c", color:"#fff", fontSize:"11px", padding:"2px 10px", borderRadius:"4px", fontWeight:"600" },
  iframeWrap:   { aspectRatio:"16/9", width:"100%" },
  iframe:       { width:"100%", height:"100%", border:"none" },
  videoInfo:    { padding:"14px" },
  videoTitle:   { fontSize:"15px", fontWeight:"600", color:"#fff", marginBottom:"6px" },
  videoDesc:    { fontSize:"13px", color:"#6b7280", lineHeight:"1.6" },
  resourceBox:  { background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"12px", padding:"22px" },
  resourceTitle:{ fontSize:"15px", fontWeight:"600", color:"#fff", marginBottom:"14px" },
  resourceGrid: { display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"10px" },
  resourceLink: { display:"flex", alignItems:"center", gap:"10px", background:"rgba(192,57,43,0.08)", border:"1px solid rgba(192,57,43,0.2)", borderRadius:"8px", padding:"10px 14px", color:"#e74c3c", textDecoration:"none", fontSize:"13px" },

  instructorGrid:  { display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:"20px", marginBottom:"32px" },
  instructorCard:  { background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"12px", padding:"26px" },
  instructorTop:   { display:"flex", gap:"14px", alignItems:"center", marginBottom:"14px" },
  instructorImg:   { width:"68px", height:"68px", borderRadius:"50%", objectFit:"cover" },
  instructorName:  { fontSize:"17px", fontWeight:"700", color:"#fff", marginBottom:"3px" },
  instructorRole:  { fontSize:"13px", color:"#e74c3c", marginBottom:"6px" },
  expBadge:        { background:"rgba(192,57,43,0.15)", border:"1px solid rgba(192,57,43,0.3)", color:"#e74c3c", padding:"3px 10px", borderRadius:"100px", fontSize:"12px", fontFamily:"monospace" },
  instructorBio:   { fontSize:"14px", color:"#9ca3af", lineHeight:"1.7", marginBottom:"14px" },
  certList:        { display:"flex", flexWrap:"wrap", gap:"6px" },
  certBadge:       { background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", color:"#d1d5db", padding:"3px 10px", borderRadius:"6px", fontSize:"12px", fontFamily:"monospace" },
  labCard:         { background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"12px", overflow:"hidden" },
  labInner:        { display:"flex", flexWrap:"wrap" },
  labText:         { flex:"1 1 300px", padding:"32px" },
  labTitle:        { fontSize:"20px", fontWeight:"700", color:"#fff", marginBottom:"10px" },
  labDesc:         { fontSize:"14px", color:"#9ca3af", lineHeight:"1.7", marginBottom:"20px" },
  labFeatures:     { display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" },
  labFeature:      { fontSize:"14px", color:"#d1d5db", display:"flex", alignItems:"center", gap:"8px" },
  check:           { color:"#27ae60", fontWeight:"700" },
  labImgWrap:      { flex:"1 1 280px" },
  labImg:          { width:"100%", height:"100%", objectFit:"cover", minHeight:"240px", display:"block" },

  faqList:  { display:"flex", flexDirection:"column", gap:"8px" },
  faqCard:  { background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"10px", overflow:"hidden" },
  faqQ:     { width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"16px 22px", background:"transparent", border:"none", color:"#e8e8e8", fontSize:"15px", fontWeight:"500", cursor:"pointer", textAlign:"left", gap:"14px" },
  faqPlus:  { fontSize:"22px", color:"#e74c3c", fontWeight:"300", transition:"transform 0.2s", flexShrink:0 },
  faqA:     { padding:"0 22px 18px", fontSize:"14px", color:"#9ca3af", lineHeight:"1.8", borderTop:"1px solid rgba(255,255,255,0.06)", paddingTop:"14px" },

  toolsSection: { padding:"80px 0", background:"#0d1117" },
  toolsGrid:    { display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))", gap:"14px" },
  toolCard:     { background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"10px", padding:"22px" },
  toolDot:      { width:"10px", height:"10px", borderRadius:"50%", marginBottom:"10px" },
  toolName:     { fontSize:"15px", fontWeight:"600", color:"#fff", marginBottom:"3px" },
  toolType:     { fontSize:"13px", color:"#6b7280" },

  cta:       { padding:"96px 0", background:"linear-gradient(135deg,#120505,#0d0d0d)", position:"relative", overflow:"hidden", textAlign:"center" },
  ctaGlow:   { position:"absolute", inset:0, backgroundImage:"radial-gradient(ellipse at 50% 50%,rgba(192,57,43,0.15) 0%,transparent 70%)" },
  ctaInner:  { position:"relative", zIndex:2, maxWidth:"680px", margin:"0 auto", padding:"0 24px" },
  ctaBadge:  { display:"inline-block", background:"rgba(192,57,43,0.2)", border:"1px solid rgba(192,57,43,0.4)", color:"#e74c3c", padding:"6px 16px", borderRadius:"100px", fontSize:"13px", marginBottom:"22px", fontFamily:"monospace" },
  ctaTitle:  { fontSize:"clamp(26px,4vw,46px)", fontWeight:"700", color:"#fff", marginBottom:"14px", letterSpacing:"-0.02em" },
  ctaSub:    { fontSize:"16px", color:"#9ca3af", marginBottom:"32px", lineHeight:"1.7" },
  ctaActions:{ display:"flex", gap:"14px", justifyContent:"center", flexWrap:"wrap", marginBottom:"20px" },
  ctaNote:   { fontSize:"13px", color:"#6b7280" },
};

export default OSCPCoursePage;