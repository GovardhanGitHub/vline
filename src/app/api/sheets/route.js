import { NextResponse } from 'next/server';

// Helper to parse CSV (simple, assumes no commas in fields)
function parseCSV(text) {
  const lines = text.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim());
    const obj = {};
    headers.forEach((h, i) => obj[h] = values[i]);
    return obj;
  });
}

function processVideoRow(row, index) {
  const isShort = row.isShort?.toLowerCase() === 'true';
  const isDrive = row.isDrive?.toLowerCase() === 'true';
  let videoUrl = row.url;
  if (!isDrive && videoUrl && (videoUrl.includes('youtu.be/') || videoUrl.includes('youtube.com'))) {
    const matches = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\/]+)/);
    videoUrl = matches ? matches[1] : videoUrl;
  }
  return {
    id: index + 1,
    title: row.title,
    category: row.category || 'Uncategorized',
    description: row.description || '',
    videoUrl,
    type: isDrive ? 'drive' : 'youtube',
    isShort,
    isDrive,
  };
}

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Replace with your actual sheet ID
    const SHEET_ID = '1SBpdiYkFlO3GPlUHBR8Hxvdff9x1N7lfoZSEbz50LnM';
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch sheet');
    const text = await res.text();
    const rows = parseCSV(text);

    // Group by client
    const clientGroups = new Map();
    rows.forEach((row, idx) => {
      if (!row.client || !row.title || !row.url) return;
      const video = processVideoRow(row, idx);
      if (!clientGroups.has(row.client)) {
        clientGroups.set(row.client, {
          clientName: row.client,
          headline: `Videos by ${row.client}`,
          videos: [],
        });
      }
      clientGroups.get(row.client).videos.push(video);
    });

    return NextResponse.json(Array.from(clientGroups.values()));
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Failed to fetch data', message: error.message }, { status: 500 });
  }
}
