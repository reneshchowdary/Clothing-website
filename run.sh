#!/bin/bash

# Kill any existing Next.js processes
pkill -9 node

# Remove the .next directory if it exists
if [ -d ".next" ]; then
  rm -rf .next
fi

# Run the Next.js development server
npm run dev

# Made with Bob
