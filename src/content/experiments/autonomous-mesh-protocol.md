---
title: "A system for managing multiple Claude sessions"
projectId: "VAN_DAMME"
description: "As more and more is expected for developers to create code using AI, I felt that I kept getting lost on managing the sessions. I decided to create a tool to help me."
date: 2026-03-21
status: active
icon: "memory"
stack: "RUST / RATATUI"
featured: true
# stats:
#   - label: "Latency"
#     value: "2.4ms"
#   - label: "Nodes"
#     value: "1,024"
---

## Overview

The Autonomous Mesh Protocol is a self-healing decentralized network cluster designed for high-latency environments. It leverages edge computing nodes and low-power RF transmissions to maintain connectivity in austere conditions.

## Architecture

The protocol operates on three layers:

1. **Discovery Layer** — Nodes broadcast heartbeat signals via low-power RF, building a local topology map within a 500m radius.
2. **Routing Layer** — Adaptive pathfinding using a modified Dijkstra algorithm that accounts for signal strength, node battery level, and historical reliability.
3. **Consensus Layer** — Lightweight BFT consensus for shared state, optimized for intermittent connectivity.

## Key Results

- **Sub-3ms latency** across 1,024-node clusters
- **Self-healing** recovery from 40% node dropout in under 200ms
- **Power efficient** — nodes operate on solar with 72-hour battery backup

## Technical Stack

- Core protocol in **Rust** for memory safety and performance
- **libp2p** for peer discovery and transport
- Custom **RF modulation** layer for sub-GHz communication
- **WebAssembly** bindings for browser-based monitoring dashboard
