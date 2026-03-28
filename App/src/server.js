const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const clientDistPath = path.join(__dirname, '..', 'client', 'dist');
const hasClientBuild = fs.existsSync(clientDistPath);

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'backend',
    timestamp: new Date().toISOString(),
  });
});

if (hasClientBuild) {
  app.use(express.static(clientDistPath));

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) {
      return next();
    }

    return res.sendFile(path.join(clientDistPath, 'index.html'));
  });
} else {
  app.get('/', (_req, res) => {
    res.send(
      'Backend is running. Start the frontend with "npm run dev:client" or build it with "npm run build".'
    );
  });
}

app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
  if (!hasClientBuild) {
    console.log('Frontend build not found at client/dist.');
  }
});
