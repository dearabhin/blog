---
title: "Startups & Hardware: Building Scalable Services and Wearable Tech from Scratch"
description: "Documenting the transition from academic projects to building scalable startups and physical hardware."
date: 2026-05-19
---

# Startups & Hardware: Building Scalable Services and Wearable Tech from Scratch

There is a massive difference between writing a script that works on your local machine and building a system that real people use. As I navigate my BTech in Electronics and Biomedical Engineering, my focus has increasingly shifted from purely academic research to the entrepreneurial side of engineering. 

I want to build things that scale. Whether it is an online AI service handling thousands of requests or a physical piece of wearable tech decoding biological signals, the goal is to create products that bridge the gap between complex engineering and everyday utility. Here is a look at how I am approaching this process.

## Grasping the Hardware Layer

You cannot build revolutionary wearable tech without a deep understanding of bare-metal hardware. A lot of modern development abstracts the hardware away, but I believe the best neurotech products will be built by those who understand the circuits.

Recently, I built a Bioelectrical Impedance Analysis (BIA) waveform generator using an 8051 microcontroller. The system was designed specifically for tissue impedance measurement. Writing 8051 assembly to interface directly with biological tissue is a gritty, exacting process. You are forced to think about memory registers, clock cycles, and signal noise. 

This low-level hardware experience is the foundation I am using to explore the wearable tech space. If we want to build consumer-ready Brain-Computer Interfaces (BCIs) in the future, we have to master the physical sensors and microcontrollers that make them possible. 

## The Reality of Scaling Software

On the flip side of physical hardware is the challenge of software scalability. To test my ability to deploy and scale an application, I recently launched a Tic-Tac-Toe AI bot on Telegram powered by the Minimax algorithm. 

The growth was explosive: the bot acquired over 1,000 users within its first 48 hours. But with rapid growth comes real-world lessons. For example, I quickly discovered a bug in my scraper logic where the system was entirely failing to save user IDs to the database! 

It was a brilliant learning moment. Building a startup is not just about writing the core AI algorithm; it is about database architecture, server monitoring, and handling edge cases when hundreds of people interact with your code simultaneously.

## Hacking the Physical World

I am constantly looking for ways to merge these two worlds: scalable AI and physical hardware. Participating in the Physical AI Hackathon at TinkerSpace Kochi was a great environment to experiment with this exact intersection. Hackathons force you out of the perfectionist mindset and into the "hacker" mindset: building minimum viable products (MVPs) rapidly, breaking things, and iterating. 

## The Road to Seyarkai

All of these projects, the 8051 assembly code, the database scaling bugs, the local Linux GPU optimizations, are feeding into my current main focus: my AI startup project, **Seyarkai**. 

I am currently exploring ideas and business models to officially launch Seyarkai. The vision is to build a company that develops both high-utility online AI services and eventually transitions into physical, wearable neurotechnology. 

The journey from a breadboard and a local Python script to a fully-fledged startup is long, but documenting the process, the bugs, the hardware revisions, and the scaling challenges is half the fun. Welcome to the journey.