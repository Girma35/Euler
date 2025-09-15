#!/bin/bash

# Copy 404.html to output directory for static hosting
if [ -f "public/404.html" ]; then
    cp public/404.html out/404.html
    echo "✅ 404.html copied to output directory"
else
    echo "❌ public/404.html not found"
fi
