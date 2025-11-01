#!/bin/bash

# Deployment script for Vercel
echo "🚀 Deploying Abhinav Varghese Portfolio..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "📦 Installing Vercel CLI..."
    npm i -g vercel
fi

# Run build test
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "Choose deployment option:"
    echo "1) Deploy to preview"
    echo "2) Deploy to production"
    read -p "Enter your choice (1 or 2): " choice

    case $choice in
        1)
            echo "📤 Deploying to preview..."
            vercel
            ;;
        2)
            echo "📤 Deploying to production..."
            vercel --prod
            ;;
        *)
            echo "❌ Invalid choice"
            exit 1
            ;;
    esac
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi
