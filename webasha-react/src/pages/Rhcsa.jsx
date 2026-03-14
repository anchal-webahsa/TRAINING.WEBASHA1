import { useState } from "react";

const RHCSACoursePage = () => {
  const [activeTab, setActiveTab] = useState("curriculum");
  const [openModule, setOpenModule] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const modules = [
    {
      title: "Module 1: Getting Started with Red Hat Enterprise Linux",
      duration: "4 hrs",
      lessons: ["RHEL Installation & Setup", "Understanding the Linux File System", "Navigating the CLI", "Getting Help with man & info", "Working with Virtual Machines"],
    },
    {
      title: "Module 2: Managing Files & Directories",
      duration: "3.5 hrs",
      lessons: ["Creating, Moving & Deleting Files", "File Permissions & Ownership (chmod, chown)", "Hard Links vs Soft Links", "Finding Files with find & locate", "Archiving with tar & gzip"],
    },
    {
      title: "Module 3: Users, Groups & Permissions",
      duration: "4 hrs",
      lessons: ["Creating & Managing Users (useradd, usermod)", "Group Management (groupadd, gpasswd)", "sudo & su Configuration", "Password Policies & Aging", "Special Permissions: SUID, SGID, Sticky Bit"],
    },
    {
      title: "Module 4: Package Management with RPM & DNF",
      duration: "3 hrs",
      lessons: ["Understanding RPM Packages", "Installing & Removing with DNF", "Managing Repositories", "Package Groups & Module Streams", "Building a Local Repository"],
    },
    {
      title: "Module 5: Storage & File System Management",
      duration: "5 hrs",
      lessons: ["Partitioning with fdisk & gdisk (MBR vs GPT)", "Creating & Mounting File Systems (ext4, xfs)", "Logical Volume Management (LVM)", "Swap Space Configuration", "AutoFS & /etc/fstab"],
    },
    {
      title: "Module 6: Networking Configuration",
      duration: "4 hrs",
      lessons: ["Configuring Network Interfaces (nmcli, nmtui)", "Static & Dynamic IP Configuration", "Hostname & DNS Setup", "Firewall Management with firewalld", "SSH Server Configuration"],
    },
    {
      title: "Module 7: Service Management with systemd",
      duration: "3.5 hrs",
      lessons: ["Understanding systemd Units", "Starting, Stopping & Enabling Services", "Creating Custom systemd Services", "Boot Targets & Runlevels", "Troubleshooting Boot Issues"],
    },
    {
      title: "Module 8: Security — SELinux & firewalld",
      duration: "4.5 hrs",
      lessons: ["SELinux Modes (Enforcing, Permissive, Disabled)", "Managing SELinux Contexts", "Booleans & Port Labels", "Troubleshooting SELinux Denials", "firewalld Zones, Services & Ports"],
    },
    {
      title: "Module 9: Containers with Podman",
      duration: "3 hrs",
      lessons: ["Introduction to Containers & OCI", "Running Containers with Podman", "Managing Container Images", "Persistent Storage for Containers", "Running Containers as systemd Services"],
    },
  ];

  const videos = [
    {
      id: 1,
      title: "RHCSA EX200 Course Introduction",
      desc: "Full overview of the RHCSA exam objectives, format, and study plan",
      thumb: "https://img.youtube.com/vi/RmGFGG0GBJI/hqdefault.jpg",
      url: "https://www.youtube.com/embed/RmGFGG0GBJI",
      duration: "22:10",
      tag: "Free Preview",
    },
    {
      id: 2,
      title: "LVM — Logical Volume Management",
      desc: "Complete hands-on walkthrough of creating and managing LVM on RHEL",
      thumb: "https://img.youtube.com/vi/dMHFArkANP8/hqdefault.jpg",
      url: "https://www.youtube.com/embed/dMHFArkANP8",
      duration: "34:18",
      tag: "Free Preview",
    },
    {
      id: 3,
      title: "SELinux for RHCSA",
      desc: "Understand SELinux contexts, booleans, and audit2allow for the EX200 exam",
      thumb: "https://img.youtube.com/vi/y2JJDAt5FMs/hqdefault.jpg",
      url: "https://www.youtube.com/embed/y2JJDAt5FMs",
      duration: "28:44",
      tag: "Free Preview",
    },
  ];

  const faqs = [
    { q: "What is the RHCSA and who should take it?", a: "RHCSA (Red Hat Certified System Administrator) — EX200 — is Red Hat's entry-level Linux certification. It validates your ability to perform core system administration tasks on RHEL. It's ideal for sysadmins, DevOps engineers, and anyone building a Linux career." },
    { q: "What is the exam format?", a: "The EX200 is a 3-hour hands-on, performance-based exam. There are no multiple choice questions — you perform real tasks on a live RHEL system and are graded on results, not methodology." },
    { q: "Do I need prior Linux experience?", a: "Basic familiarity with the Linux command line is helpful but not required. Our course starts from fundamentals and progressively builds to exam-level difficulty with guided labs at every step." },
    { q: "Is the exam voucher included?", a: "Yes — your enrollment includes one official Red Hat EX200 exam attempt. The exam is proctored online and can be taken from home or at an authorized Red Hat testing center." },
    { q: "How long does preparation take?", a: "Most students prepare in 6–10 weeks with 2–3 hours of daily study. Our structured curriculum, 90-day lab access, and weekly mock exams ensure you're exam-ready on time." },
  ];

  return (
    <div style={s.page}>

      {/* HERO */}
      <section style={s.hero}>
        <div style={s.heroGrid} />
        <div style={s.heroGlow} />
        <div style={s.container}>
          <div style={s.heroBadge}><span style={s.pulse} />Red Hat Certified · EX200</div>
          <h1 style={s.heroTitle}>Red Hat Certified<br /><span style={s.accent}>System Administrator</span></h1>
          <p style={s.heroSub}>Master Linux system administration on Red Hat Enterprise Linux. Earn your RHCSA — the industry's most respected Linux certification — through hands-on, lab-driven training.</p>
          <div style={s.metaRow}>
            {[{icon:"🐧",label:"Beginner Friendly"},{icon:"⏱",label:"90+ Hours"},{icon:"🖥",label:"90-Day Lab"},{icon:"🏆",label:"RHCSA Certified"},{icon:"📋",label:"3-Hr Practical Exam"}].map((m,i)=>(
              <div key={i} style={s.chip}><span>{m.icon}</span><span>{m.label}</span></div>
            ))}
          </div>
          <div style={s.actions}>
            <button style={s.btnRed}>Enroll Now — ₹29,999</button>
            <button style={s.btnOutline}>Download Syllabus</button>
          </div>
          <div style={s.statsRow}>
            {[{v:"3,800+",l:"Students Trained"},{v:"4.9★",l:"Course Rating"},{v:"96%",l:"Pass Rate"},{v:"#1",l:"RHCSA Institute Pune"}].map((st,i)=>(
              <div key={i} style={s.stat}><span style={s.statV}>{st.v}</span><span style={s.statL}>{st.l}</span></div>
            ))}
          </div>
        </div>
        {/* Terminal */}
        <div style={s.terminal}>
          <div style={s.termBar}>
            {["#ff5f56","#ffbd2e","#27c93f"].map((c,i)=><span key={i} style={{...s.dot,background:c}}/>)}
            <span style={s.termTitle}>rhcsa-lab ~ bash</span>
          </div>
          <div style={s.termBody}>
            {[
              {c:"#27c93f",t:"$ lvcreate -L 2G -n data vg0"},
              {c:"#e0e0e0",t:"  Logical volume 'data' created"},
              {c:"#27c93f",t:"$ mkfs.xfs /dev/vg0/data"},
              {c:"#e0e0e0",t:"  meta-data=/dev/vg0/data"},
              {c:"#27c93f",t:"$ mount /dev/vg0/data /mnt/data"},
              {c:"#27c93f",t:"$ sestatus"},
              {c:"#ffd93d",t:"  SELinux status: enabled"},
              {c:"#ffd93d",t:"  Current mode:   enforcing"},
              {c:"#27c93f",t:"$ _"},
            ].map((l,i)=><div key={i} style={{...s.termLine,color:l.c}}>{l.t}</div>)}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section style={s.outcomes}>
        <div style={s.container}>
          <div style={s.secHead}><span style={s.badge}>Learning Outcomes</span><h2 style={s.secTitle}>What You'll <span style={s.accent}>Master</span></h2></div>
          <div style={s.grid6}>
            {[
              {icon:"📁",title:"File & Storage Management",desc:"Partition disks, manage LVM, configure XFS/ext4 file systems, and automate mounts with /etc/fstab and AutoFS."},
              {icon:"👤",title:"User & Group Administration",desc:"Create and manage users, groups, sudo access, password policies, and special permissions like SUID and sticky bit."},
              {icon:"📦",title:"Package Management",desc:"Install, update, and manage software using DNF, manage repositories, module streams, and build local package repos."},
              {icon:"🌐",title:"Network Configuration",desc:"Configure static and dynamic IP addresses, DNS, hostnames, and SSH using nmcli and nmtui tools."},
              {icon:"🔒",title:"SELinux & Security",desc:"Manage SELinux contexts, booleans, port labels, and troubleshoot Access Vector Cache (AVC) denial logs."},
              {icon:"📦",title:"Containers with Podman",desc:"Run, manage, and persist container workloads using Podman, including rootless containers and systemd integration."},
            ].map((c,i)=>(
              <div key={i} style={s.card}>
                <div style={s.cardIcon}>{c.icon}</div>
                <h3 style={s.cardTitle}>{c.title}</h3>
                <p style={s.cardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAM BANNER */}
      <section style={s.examBanner}>
        <div style={s.container}>
          <div style={s.examFlex}>
            <div style={s.examText}>
              <h3 style={s.examTitle}>📋 EX200 Exam Format</h3>
              <p style={s.examDesc}>The RHCSA exam is a 3-hour performance-based practical test. You'll perform real Linux administration tasks on a live RHEL system — no multiple choice, no theory. You pass by doing.</p>
            </div>
            <div style={s.examStats}>
              {[{v:"3 hrs",l:"Exam Duration"},{v:"210 pts",l:"Total Points"},{v:"70%",l:"Pass Score"},{v:"100%",l:"Hands-On"} ].map((e,i)=>(
                <div key={i} style={s.examStat}><span style={s.examV}>{e.v}</span><span style={s.examL}>{e.l}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section style={s.tabSec}>
        <div style={s.container}>
          <div style={s.tabs}>
            {["curriculum","videos","faq"].map(t=>(
              <button key={t} style={{...s.tab,...(activeTab===t?s.tabOn:{})}} onClick={()=>setActiveTab(t)}>
                {t.charAt(0).toUpperCase()+t.slice(1)}
              </button>
            ))}
          </div>

          {activeTab==="curriculum" && (
            <div>
              <div style={s.tabTop}><div><h3 style={s.tabTitle}>Course Curriculum</h3><p style={s.tabSub}>9 Modules · 35+ Hours · 80+ Lab Tasks</p></div><div style={s.tabBadge}>EX200 Aligned</div></div>
              <div style={s.modList}>
                {modules.map((m,i)=>(
                  <div key={i} style={s.modCard}>
                    <button style={s.modBtn} onClick={()=>setOpenModule(openModule===i?null:i)}>
                      <div style={s.modLeft}><span style={s.modNum}>{String(i+1).padStart(2,"0")}</span><div><div style={s.modName}>{m.title}</div><div style={s.modMeta}>{m.lessons.length} lessons · {m.duration}</div></div></div>
                      <span style={{...s.chev,transform:openModule===i?"rotate(180deg)":"none"}}>▾</span>
                    </button>
                    {openModule===i && (
                      <div style={s.lessons}>
                        {m.lessons.map((l,j)=>(
                          <div key={j} style={s.lesson}><span style={s.lesPlay}>▶</span><span style={s.lesTxt}>{l}</span><span style={{...s.lesTag,...(j===0?s.freeTag:{})}}>{j===0?"Free":"Lab"}</span></div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab==="videos" && (
            <div>
              <div style={s.tabTop}><div><h3 style={s.tabTitle}>Free Preview Lectures</h3><p style={s.tabSub}>Sample lessons before you enroll</p></div></div>
              <div style={s.vidGrid}>
                {videos.map(v=>(
                  <div key={v.id} style={s.vidCard}>
                    {playingVideo===v.id
                      ? <div style={s.ifWrap}><iframe src={`${v.url}?autoplay=1`} title={v.title} frameBorder="0" allow="autoplay;encrypted-media" allowFullScreen style={s.iframe}/></div>
                      : <div style={s.thumbWrap} onClick={()=>setPlayingVideo(v.id)}><img src={v.thumb} alt={v.title} style={s.thumb}/><div style={s.overlay}><div style={s.play}>▶</div></div><div style={s.dur}>{v.duration}</div><div style={s.freeLabel}>{v.tag}</div></div>
                    }
                    <div style={s.vidInfo}><h4 style={s.vidTitle}>{v.title}</h4><p style={s.vidDesc}>{v.desc}</p></div>
                  </div>
                ))}
              </div>
              <div style={s.resBx}>
                <h4 style={s.resTitle}>📺 More Resources</h4>
                <div style={s.resGrid}>
                  {[{l:"RHCSA EX200 Full Course Overview",u:"https://www.youtube.com/watch?v=RmGFGG0GBJI"},{l:"LVM Explained — Practical Guide",u:"https://www.youtube.com/watch?v=dMHFArkANP8"},{l:"SELinux From Scratch",u:"https://www.youtube.com/watch?v=y2JJDAt5FMs"},{l:"Podman Containers on RHEL",u:"https://www.youtube.com/watch?v=Za36qHbrf3g"}].map((r,i)=>(
                    <a key={i} href={r.u} target="_blank" rel="noopener noreferrer" style={s.resLink}><span>🔗</span>{r.l}</a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab==="faq" && (
            <div>
              <div style={s.tabTop}><div><h3 style={s.tabTitle}>Frequently Asked Questions</h3><p style={s.tabSub}>Everything about our RHCSA training</p></div></div>
              <div style={s.faqList}>
                {faqs.map((f,i)=>(
                  <div key={i} style={s.faqCard}>
                    <button style={s.faqQ} onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{f.q}</span><span style={{...s.faqPlus,transform:openFaq===i?"rotate(45deg)":"none"}}>+</span></button>
                    {openFaq===i && <div style={s.faqA}>{f.a}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TOOLS */}
      <section style={s.toolSec}>
        <div style={s.container}>
          <div style={s.secHead}><span style={s.badge}>Admin Toolkit</span><h2 style={s.secTitle}>Tools You'll <span style={s.accent}>Use</span></h2></div>
          <div style={s.toolGrid}>
            {[{n:"nmcli/nmtui",t:"Network Mgmt",c:"#27ae60"},{n:"firewalld",t:"Firewall",c:"#c0392b"},{n:"SELinux",t:"Mandatory AC",c:"#8e44ad"},{n:"LVM",t:"Storage Mgmt",c:"#2980b9"},{n:"DNF/RPM",t:"Packages",c:"#e67e22"},{n:"Podman",t:"Containers",c:"#16a085"},{n:"systemd",t:"Service Mgmt",c:"#2c3e50"},{n:"AutoFS",t:"Auto Mounting",c:"#d35400"}].map((t,i)=>(
              <div key={i} style={{...s.toolCard,borderTop:`3px solid ${t.c}`}}><div style={{...s.toolDot,background:t.c}}/><div style={s.toolN}>{t.n}</div><div style={s.toolT}>{t.t}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={s.cta}>
        <div style={s.ctaGlow}/>
        <div style={s.ctaInner}>
          <div style={s.ctaBadge}>Next Batch Starting Soon · Limited Seats</div>
          <h2 style={s.ctaTitle}>Start Your RHCSA Journey Today</h2>
          <p style={s.ctaSub}>Join 3,800+ Linux professionals certified through WebAsha Technologies — Pune's #1 Red Hat training institute.</p>
          <div style={s.ctaAct}><button style={s.btnRed}>Enroll Now — ₹29,999</button><button style={{...s.btnOutline,borderColor:"rgba(255,255,255,0.3)",color:"#fff"}}>Talk to Counsellor</button></div>
          <p style={s.ctaNote}>✓ EX200 Exam Voucher Included &nbsp;·&nbsp; ✓ 90-Day Lab &nbsp;·&nbsp; ✓ Lifetime Updates</p>
        </div>
      </section>
    </div>
  );
};

const s = {
  page:{fontFamily:"Georgia,'Times New Roman',serif",background:"#0a0a0f",color:"#e8e8e8",minHeight:"100vh",overflowX:"hidden"},
  container:{maxWidth:"1200px",margin:"0 auto",padding:"0 24px",position:"relative",zIndex:2},
  hero:{background:"linear-gradient(135deg,#050a0a,#0a1010,#050a08)",padding:"100px 0 80px",position:"relative",overflow:"hidden"},
  heroGrid:{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(39,174,96,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(39,174,96,0.04) 1px,transparent 1px)",backgroundSize:"60px 60px"},
  heroGlow:{position:"absolute",top:"-20%",left:"30%",width:"600px",height:"600px",background:"radial-gradient(circle,rgba(39,174,96,0.08) 0%,transparent 70%)",pointerEvents:"none"},
  heroBadge:{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(39,174,96,0.15)",border:"1px solid rgba(39,174,96,0.4)",color:"#27ae60",padding:"6px 16px",borderRadius:"100px",fontSize:"13px",fontFamily:"monospace",marginBottom:"24px",letterSpacing:"0.05em"},
  pulse:{width:"8px",height:"8px",borderRadius:"50%",background:"#27ae60",boxShadow:"0 0 8px #27ae60",display:"inline-block"},
  heroTitle:{fontSize:"clamp(36px,5vw,64px)",fontWeight:"700",lineHeight:"1.1",color:"#fff",maxWidth:"680px",marginBottom:"20px",letterSpacing:"-0.02em"},
  accent:{color:"#27ae60",fontStyle:"italic"},
  heroSub:{fontSize:"18px",color:"#9ca3af",maxWidth:"560px",lineHeight:"1.7",marginBottom:"32px"},
  metaRow:{display:"flex",flexWrap:"wrap",gap:"10px",marginBottom:"32px"},
  chip:{display:"flex",alignItems:"center",gap:"8px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",padding:"7px 14px",borderRadius:"8px",fontSize:"13px",color:"#d1d5db"},
  actions:{display:"flex",gap:"14px",flexWrap:"wrap",marginBottom:"44px"},
  btnRed:{background:"linear-gradient(135deg,#1e8449,#27ae60)",color:"#fff",border:"none",padding:"14px 32px",borderRadius:"8px",fontSize:"16px",fontWeight:"600",cursor:"pointer",boxShadow:"0 4px 24px rgba(39,174,96,0.35)"},
  btnOutline:{background:"transparent",color:"#d1d5db",border:"1px solid rgba(255,255,255,0.2)",padding:"14px 32px",borderRadius:"8px",fontSize:"16px",cursor:"pointer"},
  statsRow:{display:"flex",gap:"36px",flexWrap:"wrap"},
  stat:{display:"flex",flexDirection:"column"},
  statV:{fontSize:"26px",fontWeight:"700",color:"#fff",fontFamily:"monospace"},
  statL:{fontSize:"12px",color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.08em"},
  terminal:{position:"absolute",right:"4%",top:"50%",transform:"translateY(-50%)",background:"#161b22",border:"1px solid #30363d",borderRadius:"12px",width:"340px",boxShadow:"0 20px 60px rgba(0,0,0,0.5)",overflow:"hidden"},
  termBar:{background:"#21262d",padding:"10px 16px",display:"flex",alignItems:"center",gap:"6px"},
  dot:{width:"12px",height:"12px",borderRadius:"50%",display:"inline-block"},
  termTitle:{marginLeft:"auto",fontSize:"12px",color:"#6e7681",fontFamily:"monospace"},
  termBody:{padding:"16px",fontFamily:"monospace",fontSize:"12px"},
  termLine:{lineHeight:"2.1",whiteSpace:"nowrap",overflow:"hidden"},
  outcomes:{padding:"80px 0",background:"#0d1117"},
  secHead:{textAlign:"center",marginBottom:"48px"},
  badge:{display:"inline-block",background:"rgba(39,174,96,0.15)",border:"1px solid rgba(39,174,96,0.3)",color:"#27ae60",padding:"4px 14px",borderRadius:"100px",fontSize:"12px",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"12px",fontFamily:"monospace"},
  secTitle:{fontSize:"clamp(28px,4vw,42px)",fontWeight:"700",color:"#fff",letterSpacing:"-0.02em"},
  grid6:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"20px"},
  card:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"26px"},
  cardIcon:{fontSize:"30px",marginBottom:"14px"},
  cardTitle:{fontSize:"17px",fontWeight:"600",color:"#fff",marginBottom:"8px"},
  cardDesc:{fontSize:"14px",color:"#9ca3af",lineHeight:"1.7"},
  examBanner:{padding:"48px 0",background:"rgba(39,174,96,0.06)",borderTop:"1px solid rgba(39,174,96,0.15)",borderBottom:"1px solid rgba(39,174,96,0.15)"},
  examFlex:{display:"flex",flexWrap:"wrap",gap:"32px",alignItems:"center"},
  examText:{flex:"1 1 300px"},
  examTitle:{fontSize:"20px",fontWeight:"700",color:"#fff",marginBottom:"10px"},
  examDesc:{fontSize:"14px",color:"#9ca3af",lineHeight:"1.7"},
  examStats:{display:"flex",gap:"20px",flexWrap:"wrap"},
  examStat:{display:"flex",flexDirection:"column",alignItems:"center",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"10px",padding:"16px 20px",minWidth:"90px"},
  examV:{fontSize:"22px",fontWeight:"700",color:"#27ae60",fontFamily:"monospace"},
  examL:{fontSize:"12px",color:"#6b7280",marginTop:"4px",textAlign:"center"},
  tabSec:{padding:"80px 0",background:"#0a0a0f"},
  tabs:{display:"flex",gap:"4px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"10px",padding:"4px",marginBottom:"36px",overflowX:"auto"},
  tab:{flex:1,padding:"10px 20px",background:"transparent",border:"none",color:"#6b7280",fontSize:"15px",cursor:"pointer",borderRadius:"7px",whiteSpace:"nowrap"},
  tabOn:{background:"#1e8449",color:"#fff",fontWeight:"600"},
  tabTop:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"24px",flexWrap:"wrap",gap:"12px"},
  tabTitle:{fontSize:"22px",fontWeight:"700",color:"#fff",marginBottom:"4px"},
  tabSub:{fontSize:"14px",color:"#6b7280"},
  tabBadge:{background:"rgba(39,174,96,0.15)",border:"1px solid rgba(39,174,96,0.3)",color:"#27ae60",padding:"6px 14px",borderRadius:"6px",fontSize:"13px",fontFamily:"monospace"},
  modList:{display:"flex",flexDirection:"column",gap:"8px"},
  modCard:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"10px",overflow:"hidden"},
  modBtn:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 22px",background:"transparent",border:"none",color:"#fff",cursor:"pointer",textAlign:"left"},
  modLeft:{display:"flex",alignItems:"center",gap:"14px"},
  modNum:{fontFamily:"monospace",fontSize:"13px",color:"#27ae60",fontWeight:"700",minWidth:"24px"},
  modName:{fontSize:"15px",fontWeight:"600",color:"#e8e8e8"},
  modMeta:{fontSize:"13px",color:"#6b7280",marginTop:"2px"},
  chev:{color:"#6b7280",fontSize:"18px",transition:"transform 0.2s"},
  lessons:{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"6px 0"},
  lesson:{display:"flex",alignItems:"center",gap:"10px",padding:"9px 22px 9px 60px"},
  lesPlay:{fontSize:"9px",color:"#27ae60"},
  lesTxt:{flex:1,fontSize:"14px",color:"#9ca3af"},
  lesTag:{fontSize:"11px",padding:"2px 8px",borderRadius:"4px",background:"rgba(39,174,96,0.12)",color:"#27ae60",border:"1px solid rgba(39,174,96,0.25)",fontFamily:"monospace"},
  freeTag:{background:"rgba(231,76,60,0.12)",color:"#e74c3c",border:"1px solid rgba(231,76,60,0.25)"},
  vidGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"20px",marginBottom:"24px"},
  vidCard:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",overflow:"hidden"},
  thumbWrap:{position:"relative",cursor:"pointer",aspectRatio:"16/9",overflow:"hidden"},
  thumb:{width:"100%",height:"100%",objectFit:"cover",display:"block"},
  overlay:{position:"absolute",inset:0,background:"rgba(0,0,0,0.4)",display:"flex",alignItems:"center",justifyContent:"center"},
  play:{width:"52px",height:"52px",background:"rgba(30,132,73,0.9)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",color:"#fff"},
  dur:{position:"absolute",bottom:"8px",right:"8px",background:"rgba(0,0,0,0.75)",color:"#fff",fontSize:"12px",padding:"2px 8px",borderRadius:"4px",fontFamily:"monospace"},
  freeLabel:{position:"absolute",top:"8px",left:"8px",background:"#27ae60",color:"#fff",fontSize:"11px",padding:"2px 10px",borderRadius:"4px",fontWeight:"600"},
  ifWrap:{aspectRatio:"16/9",width:"100%"},
  iframe:{width:"100%",height:"100%",border:"none"},
  vidInfo:{padding:"14px"},
  vidTitle:{fontSize:"15px",fontWeight:"600",color:"#fff",marginBottom:"6px"},
  vidDesc:{fontSize:"13px",color:"#6b7280",lineHeight:"1.6"},
  resBx:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"22px"},
  resTitle:{fontSize:"15px",fontWeight:"600",color:"#fff",marginBottom:"14px"},
  resGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"10px"},
  resLink:{display:"flex",alignItems:"center",gap:"10px",background:"rgba(39,174,96,0.08)",border:"1px solid rgba(39,174,96,0.2)",borderRadius:"8px",padding:"10px 14px",color:"#27ae60",textDecoration:"none",fontSize:"13px"},
  faqList:{display:"flex",flexDirection:"column",gap:"8px"},
  faqCard:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"10px",overflow:"hidden"},
  faqQ:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 22px",background:"transparent",border:"none",color:"#e8e8e8",fontSize:"15px",fontWeight:"500",cursor:"pointer",textAlign:"left",gap:"14px"},
  faqPlus:{fontSize:"22px",color:"#27ae60",fontWeight:"300",transition:"transform 0.2s",flexShrink:0},
  faqA:{padding:"14px 22px 18px",fontSize:"14px",color:"#9ca3af",lineHeight:"1.8",borderTop:"1px solid rgba(255,255,255,0.06)"},
  toolSec:{padding:"80px 0",background:"#0d1117"},
  toolGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:"14px"},
  toolCard:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"10px",padding:"22px"},
  toolDot:{width:"10px",height:"10px",borderRadius:"50%",marginBottom:"10px"},
  toolN:{fontSize:"15px",fontWeight:"600",color:"#fff",marginBottom:"3px"},
  toolT:{fontSize:"13px",color:"#6b7280"},
  cta:{padding:"96px 0",background:"linear-gradient(135deg,#020d07,#0d0d0d)",position:"relative",overflow:"hidden",textAlign:"center"},
  ctaGlow:{position:"absolute",inset:0,backgroundImage:"radial-gradient(ellipse at 50% 50%,rgba(39,174,96,0.12) 0%,transparent 70%)"},
  ctaInner:{position:"relative",zIndex:2,maxWidth:"680px",margin:"0 auto",padding:"0 24px"},
  ctaBadge:{display:"inline-block",background:"rgba(39,174,96,0.15)",border:"1px solid rgba(39,174,96,0.3)",color:"#27ae60",padding:"6px 16px",borderRadius:"100px",fontSize:"13px",marginBottom:"22px",fontFamily:"monospace"},
  ctaTitle:{fontSize:"clamp(26px,4vw,46px)",fontWeight:"700",color:"#fff",marginBottom:"14px",letterSpacing:"-0.02em"},
  ctaSub:{fontSize:"16px",color:"#9ca3af",marginBottom:"32px",lineHeight:"1.7"},
  ctaAct:{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap",marginBottom:"20px"},
  ctaNote:{fontSize:"13px",color:"#6b7280"},
};

export default RHCSACoursePage;