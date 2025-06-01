// pages/api/proxy-csv.js
// This endpoint acts as a CORS proxy for your Google Sheet

export default async function handler(req, res) {
    try {
      // Only allow GET requests
      if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
      }
  
      // Get the sheet ID from the URL you provided
      const SHEET_ID = '14WoxbijA96xwmDXqlZ5akap34-90ebW8WiDCq4hjQBg';
      
      // Create the export URL for CSV
      const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;
      
      // Fetch the CSV data from Google
      const response = await fetch(csvUrl, {
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
        },
      });
      
      if (!response.ok) {
        return res.status(response.status).json({ 
          error: `Failed to fetch CSV: ${response.status} ${response.statusText}` 
        });
      }
      
      // Get the CSV text
      const csvText = await response.text();
      
      // Set appropriate headers
      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
      
      // Return the CSV data
      res.status(200).send(csvText);
    } catch (error) {
      console.error('Error in CSV proxy:', error);
      res.status(500).json({ error: 'Failed to proxy CSV data' });
    }
  }