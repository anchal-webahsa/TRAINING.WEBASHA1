// src/components/redhat/RedhatTrack.jsx

import { useState } from "react";

const tools = [
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

const RedhatTrack = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="contentcard lazy-section">
      <div className={`content-container${expanded ? " expanded" : ""}`} id="contentContainer2">

        <div className="summary-details">
          <h2 className="heading-main text-center">
            Red Hat Course Training <span className="red-color">Track</span>
          </h2>
          <img
            src="/assets/img/slider/redhat/redhat-track.webp"
            alt="RH124 v10 Course Training Tools Overview"
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
              {tools.map(([category, covered], i) => (
                <tr key={i}>
                  <td><strong>{category}</strong></td>
                  <td>{covered}</td>
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