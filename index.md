---
layout: default
title: Home
---

# Physical AI Humanoid Robotics Book

Welcome to the comprehensive textbook on Physical AI and Humanoid Robotics. This interactive textbook covers the fundamental concepts, advanced techniques, and practical applications of humanoid robotics.

## About This Book

This textbook explores the intersection of artificial intelligence and robotics, focusing on how AI can be embodied in physical humanoid systems. You'll learn about perception, cognition, control, and interaction in the context of humanoid robots.

## Table of Contents

{% for chapter in site.chapters %}
- [{{ chapter.title }}]({{ chapter.url }})
{% endfor %}

## Getting Started

<div class="start-button-container" style="text-align: center; margin: 2em 0;">
  <a href="{{ '/chapters/chapter-1' | relative_url }}" class="btn btn-primary start-button">Start Reading</a>
</div>

The book is organized into progressive chapters that build upon each other. Start with the first chapter and work your way through to gain a comprehensive understanding of physical AI in humanoid robotics.

## Features

- Interactive content
- Practical examples
- Exercises and challenges
- Real-world applications
- Latest research insights

Begin your journey into the fascinating world of Physical AI and Humanoid Robotics by clicking the "Start Reading" button above.