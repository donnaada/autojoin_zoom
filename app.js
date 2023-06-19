require('dotenv').config();

const zoomUrl = `https://zoom.us/j/${process.env.ZOOM_MEETING_ID}?pwd=${process.env.ZOOM_PASSWORD}`;
const chrome = process.env.CHROME_APP;

import('open').then((open) => {
  open.default(zoomUrl, { app: { name: chrome } });
});


