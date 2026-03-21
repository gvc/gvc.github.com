---
title: "PERIMETER_ALERT: UNKNOWN_ORIGIN_REQUEST"
description: "Detected multiple unauthorized access attempts originating from non-standard protocol masks. Firewall protocols engaged. All primary nodes secured. Investigating potential vulnerabilities in the legacy proxy gateway."
date: 2024-05-18T03:10:44
severity: warning
tags: ["PATCH_REQUIRED", "SECURITY_BREACH_ATTEMPT"]
icon: "emergency"
---

## Incident Report

At 03:10:44 UTC, the perimeter monitoring system flagged a cluster of anomalous connection attempts targeting the legacy proxy gateway on ports 8443 and 9090.

### Timeline

- **03:10:44** — First anomalous packet detected. Source IP obfuscated via non-standard protocol masking.
- **03:10:47** — Rate limiting triggered after 200+ requests/second from the same origin cluster.
- **03:11:02** — Automated firewall escalation engaged. All non-essential external ports locked.
- **03:11:15** — SOC team notified via PagerDuty. Severity: P2.
- **03:14:30** — Attack pattern identified as credential stuffing against the legacy auth endpoint.
- **03:22:00** — Legacy proxy gateway isolated from primary mesh. Traffic rerouted through hardened ingress.

### Root Cause

The legacy proxy gateway (v2.1.4) was running an outdated TLS termination library with a known vulnerability (CVE-2024-31337). This endpoint was scheduled for decommission in Q3 but remained active for backward compatibility with two internal services.

### Remediation

1. Immediate patching of the TLS library to v2.1.7
2. Accelerated migration of dependent services to the new gateway
3. Added the legacy endpoint to continuous vulnerability scanning
4. Firewall rules updated to restrict legacy gateway to internal traffic only

### Impact

No data exfiltration confirmed. All primary nodes remained secure throughout the incident. The attack was contained within 12 minutes of initial detection.
