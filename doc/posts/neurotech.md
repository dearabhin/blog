---
title: "Computational Neuroscience: Decoding Neural Signals and Building BCIs"
description: "Exploring the intersection of electronics, biological systems, and the future of Brain-Computer Interfaces."
date: 2026-05-19
---


To me, the human brain is the ultimate engineering challenge. While a lot of my time is spent training neural networks on silicon GPUs, my true passion lies in understanding and interfacing with the biological neural networks inside our heads. 

As a biomedical engineering student, my goal has always been to bridge the gap between hardware and wetware. This post explores my journey into computational neuroscience, signal decoding, and the foundational steps toward building Brain-Computer Interfaces (BCIs).

## Simulating the Brain: Spikes and Models

Before you can decode a brain, you have to understand how its fundamental units communicate. Neurons communicate via action potentials, or "spikes". 

To get a better grasp on this, I recently completed a research project titled *"A Comparative Study of Hodgkin-Huxley and Izhikevich Models for High-Fidelity Neural Spike Prediction"*. The Hodgkin-Huxley model is incredibly detailed, mathematically describing how action potentials are initiated and propagated, but it is highly computationally expensive. On the other hand, the Izhikevich model strips this down to a simpler set of differential equations that can simulate spiking behavior much faster. 

By simulating these models, you realize that predicting neural activity is essentially a complex, non-linear time-series problem. If we want to build real-time BCIs, we need algorithms that can predict and decode these spikes with near-zero latency, which makes finding the right computational model absolutely critical.

## Interfacing with Tissue: The Hardware Layer

Decoding signals is only half the battle; the other half is physically acquiring them. You have to build hardware that can safely and accurately measure biological metrics. 

To build my foundational hardware skills, I recently developed a Bioelectrical Impedance Analysis (BIA) waveform generator using 8051 Assembly and C. The system was designed specifically for tissue impedance measurement. Writing raw 8051 assembly to control hardware at that low of a level is a gritty process, but it teaches you exactly how microcontrollers interact with the physical and biological world. 

Whether it is passing micro-currents through tissue to measure impedance or amplifying microvolt EEG signals from the scalp, the hardware layer has to be flawless. Noise is the enemy of neurotech, and learning how to filter it out at the hardware level is a skill I am constantly refining.

## The BCI Frontier: EEG, EMG, and Beyond

The current landscape of wearable tech is just scratching the surface. Right now, we measure heart rates and steps. In the near future, we will be wearing technology that decodes our intent.

I am actively exploring non-invasive modalities like EEG (electroencephalography) and EMG (electromyography). By combining low-level hardware design, high-fidelity neural models, and modern machine learning architectures, we can start to map electrical noise to actual human intention. 

My ultimate career ambition is to push this boundary forward as a research scientist at labs like Neuralink or Google DeepMind. We are entering an era where humans and machines will interact seamlessly. Through my upcoming startup, Seyarkai, I am already exploring ideas for physical wearable tech products that can bring these advanced neuro-interfaces out of the lab and into daily life.

The brain is the final frontier, and I am incredibly excited to keep building the tools required to decode it.