// Generate placeholder images for portfolio
const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to create a placeholder image
function createPlaceholderImage(filename, width, height, bgColor, text) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  
  // Add some design elements
  ctx.fillStyle = '#00ffa3';
  ctx.fillRect(0, 0, width, 5);
  ctx.fillRect(0, height - 5, width, 5);
  ctx.fillRect(0, 0, 5, height);
  ctx.fillRect(width - 5, 0, 5, height);
  
  // Add grid lines for tech feel
  ctx.strokeStyle = 'rgba(0, 255, 163, 0.2)';
  ctx.lineWidth = 1;
  
  // Horizontal lines
  for (let y = 20; y < height; y += 20) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  
  // Vertical lines
  for (let x = 20; x < width; x += 20) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  
  // Add text
  ctx.font = 'bold 24px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);
  
  // Add filename text
  ctx.font = '16px Arial';
  ctx.fillText(filename, width / 2, height / 2 + 30);
  
  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(imagesDir, filename), buffer);
  
  console.log(`Created ${filename}`);
}

// Create profile image
createPlaceholderImage('profile.jpg', 400, 500, '#0a0b1a', 'Profile Image');

// Create project images
for (let i = 1; i <= 6; i++) {
  createPlaceholderImage(`project${i}.jpg`, 600, 400, '#0a0b1a', `Project ${i}`);
}

// Create e-commerce project images
createPlaceholderImage('ecommerce-main.jpg', 800, 500, '#0a0b1a', 'E-Commerce Dashboard');
for (let i = 1; i <= 4; i++) {
  createPlaceholderImage(`ecommerce-${i}.jpg`, 400, 300, '#0a0b1a', `E-Commerce ${i}`);
}
createPlaceholderImage('ecommerce-architecture.jpg', 800, 400, '#0a0b1a', 'E-Commerce Architecture');

// Create chat application images
createPlaceholderImage('chat-main.jpg', 800, 500, '#0a0b1a', 'Chat Application');
for (let i = 1; i <= 4; i++) {
  createPlaceholderImage(`chat-${i}.jpg`, 400, 300, '#0a0b1a', `Chat Feature ${i}`);
}
createPlaceholderImage('chat-architecture.jpg', 800, 400, '#0a0b1a', 'Chat Architecture');

// Create task management images
createPlaceholderImage('task-main.jpg', 800, 500, '#0a0b1a', 'Task Management');
for (let i = 1; i <= 4; i++) {
  createPlaceholderImage(`task-${i}.jpg`, 400, 300, '#0a0b1a', `Task Feature ${i}`);
}
createPlaceholderImage('task-architecture.jpg', 800, 400, '#0a0b1a', 'Task Architecture');

// Create favicon
createPlaceholderImage('favicon.png', 32, 32, '#00ffa3', 'AL');

console.log('All placeholder images created successfully!');
