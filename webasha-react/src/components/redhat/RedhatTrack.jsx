// src/components/redhat/RedhatTrack.jsx

const defaultTools = [
  ["Command Line Tools",     "bash, ls, cd, pwd, cp, mv, rm, mkdir, rmdir, touch"],
  ["File Editing Tools",     "vi, vim, nano"],
  ["User Management Tools",  "useradd, usermod, userdel, groupadd, groupmod, passwd"],
  ["Permission Tools",       "chmod, chown, chgrp, umask"],
  ["Process Management Tools", "ps, top, kill, pkill, nice, renice"],
  ["Service Management Tools", "systemctl, service"],
  ["Networking Tools",       "nmcli, nmtui, ip, ifconfig, ping, traceroute, netstat, ss"],
  ["Software Management Tools", "yum, dnf, rpm"],
  ["File System Tools",      "df, du, fdisk, mkfs, mount, umount"],
  ["Security Tools",         "firewall-cmd, ssh, scp, sudo"],
  ["Logging Tools",          "journalctl, rsyslog"],
  ["Virtualization Tools",   "virt-manager, virsh"],
];

const RedhatTrack = ({ trackImage, courseName, trackTools }) => {
  const displayName = courseName ? courseName.replace(/Certification|Training/gi, "").trim() : "Red Hat";

  const renderTools = trackTools && trackTools.length > 0
    ? trackTools.map(t => ({ category: t.category, tools_covered: t.tools_covered }))
    : defaultTools.map(([category, tools_covered]) => ({ category, tools_covered }));

  return (
    <section className="contentcard lazy-section">
      <div className="content-container" id="contentContainer2" style={{ maxHeight: 'none', overflow: 'visible' }}>

        <div className="summary-details">
          <h2 className="heading-main text-center">
            {displayName} Course Training <span className="red-color">Track</span>
          </h2>
          <img
            src={trackImage || "/assets/img/slider/redhat/redhat-track.webp"}
            alt={`${displayName} Course Training Track`}
            width="900"
            height="400"
            className="img-fluid mb-3"
            loading="lazy"
          />
        </div>

        <div className="table-responsive custom-table mb-4">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th scope="col" className="subs-title">Category</th>
                <th scope="col" className="subs-title">Tools Covered</th>
              </tr>
            </thead>
            <tbody>
              {renderTools.map((tool, i) => (
                <tr key={i}>
                  <td><strong>{tool.category}</strong></td>
                  <td>{tool.tools_covered}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default RedhatTrack;