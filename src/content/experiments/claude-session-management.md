---
title: "A system for managing multiple Claude sessions"
projectId: "VAN_DAMME"
description: "As more and more is expected for developers to create code using AI, I felt that I kept getting lost on managing the sessions. I decided to create a tool to help me."
date: 2026-05-04
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

I have been a tmux and Vim user for a very long time. When I started using Claude Code as my daily driver, I kept losing track of workspaces, sessions, windows and Claude Code sessions.

Since I already had a tool at my disposal that could help me iterate quickly on ideas, and encouraged by discussions with a colleague, I’ve decided to prototype something to scratch my itch. But instead of only quickly creating something, I wanted to use it to learn Rust (more on that later).

I decided to start with a simple tmux session management where each tmux session was associated with a Claude Code session. The session was created as I usually set them up: a vertical split with Claude Code and another horizontal split with nvim and an idle terminal for running commands.

This prototype allowed me to quickly iterate on van-dame itself, adding features like giving an initial prompt, choosing to use git worktrees or working directly on a branch. During the development I noticed something that has been recurring on my projects: it’s very easy to keep adding features. And knowing when to stop or how to curate the product becomes even more important.

Today I use it as my daily driver for work and my side projects. If you feel inclined to test it, it’s at <https://github.com/gvc/van-damme> share any feedback you have.
