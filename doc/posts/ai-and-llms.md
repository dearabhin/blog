---
title: "AI & Machine Learning: Deep Dives into Generative Models, GPU Optimization, and LLMs"
description: "Exploring the intersection of neural networks, natural language processing, and local hardware optimization."
date: 2026-05-19
---


When I first started diving into Artificial Intelligence, the field felt like an ocean of abstract math and massive compute clusters. But over the last year, my perspective has shifted entirely. AI isn't just about massive datacenters; it is about what you can build, optimize, and deploy right from your own machine. 

This post is a look into my current focus areas, the projects I am building, and the lessons learned from trying to make these models run faster, smarter, and leaner.

## The World of LLMs and Natural Language Processing

My deepest exposure to the raw mechanics of language models came during my remote research internship at Tencent AI Lab. Working on Machine Learning and NLP at that scale changes how you view data. It is one thing to call an API; it is another to understand the underlying architecture of embeddings and transformer layers.

Lately, I have been fascinated by the rapid evolution of generative models. From dissecting the architecture of Grok to exploring how Gemini handles embeddings and multimodal inputs, the pace of innovation is staggering. I am particularly interested in generative voice cloning and how we can synthesize highly realistic audio from text with minimal latency. 

But I also love applying these decision-making algorithms to fun, scalable projects. Recently, I built and deployed an AI-driven Tic-Tac-Toe bot on Telegram using the Minimax algorithm. It was a simpler form of AI, but the deployment taught me a lot about scaling - the bot hit over 1,000 active users within its first 48 hours. 

## The Grind of GPU Optimization

You don't truly understand a neural network until you try to train it on consumer hardware without running out of memory. 

A significant portion of my time has been dedicated to hardware and OS-level optimization. I run an HP Victus with an NVIDIA GeForce RTX 2050 GPU. To get the absolute maximum performance out of it for local training, I made the jump to Linux. Navigating Arch Linux (and experimenting with Asahi) to configure NVIDIA drivers, CUDA toolkits, and PyTorch environments has been a trial by fire. 

When you only have a few gigabytes of VRAM, you have to get creative. You learn to appreciate gradient checkpointing, mixed-precision training, and optimized data loaders. Squeezing a complex time-series model or a small transformer into local memory is an incredibly rewarding engineering puzzle.

## Merging AI with the Physical World

While software is great, my ultimate goal is to bridge the gap between AI and biological/physical systems. At my core, I am a biomedical engineering student, and I want to see how deep learning can decode the human body. 

A few months ago, I completed a research project titled *"A Comparative Study of Hodgkin-Huxley and Izhikevich Models for High-Fidelity Neural Spike Prediction"*. Predicting neural spikes is essentially a complex time-series forecasting problem. By applying modern computational and ML principles to these biological models, we step closer to the reality of seamless Brain-Computer Interfaces (BCI). 

This desire to merge code and hardware also pushed me to compete in the Physical AI Hackathon at TinkerSpace Kochi. It is one thing to make an agent output text; it is a completely different challenge to make an agent interact with the physical world in real time.

## What is Next?

Right now, I am channeling all of these learnings into the foundation for my own AI startup, Seyarkai. The goal is to take these deep dives into generative models and hardware optimization and turn them into scalable, usable products. 

Whether it is pushing the limits of my RTX 2050, fine-tuning NLP pipelines, or dreaming up the next wave of wearable neurotech, the foundational layer is the same: understanding the math, writing the code, and never being afraid to break things to see how they work.

Stay tuned for more deep dives into specific architectures, code snippets, and updates on the startup journey!