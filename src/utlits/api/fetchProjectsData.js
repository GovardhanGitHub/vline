// utlits/api/fetchProjectsData.js
import Papa from 'papaparse';

// Fallback data in case the API fetch fails
const fallbackData = [
  {
    id: 1,
    category: "Healthcare",
    title: "Memorial Hospital Brand Story",
    description: "A heartfelt narrative showcasing Memorial Hospital's commitment to patient care and community service.",
    youtubeId: "dQw4w9WgXcQ", // Sample YouTube ID - replace with actual IDs
    client: "Memorial Hospital",
  },
  {
    id: 2,
    category: "Healthcare",
    title: "Physician Recruitment Campaign",
    description: "An inspiring recruitment video highlighting the benefits of joining Metro Medical Center's team of healthcare professionals.",
    youtubeId: "dQw4w9WgXcQ", // Sample YouTube ID
    client: "Metro Medical Center",
  },
  {
    id: 3,
    category: "Product Launch",
    title: "NextGen Surgical Equipment Launch",
    description: "Promotional video for revolutionary new surgical equipment designed for precision and patient safety.",
    youtubeId: "dQw4w9WgXcQ", // Sample YouTube ID
    client: "MedTech Innovations",
  }
];

/**
 * Fetches project data from your Google Sheet with fallback
 * @returns {Promise<Array>} Array of project objects
 */
export async function fetchProjectsData() {
  try {
    // First try using our proxy API (this avoids CORS issues)
    const proxyUrl = '/api/proxy-csv';
    
    console.log('Fetching data from proxy API');
    
    // Fetch the CSV data through our proxy
    const response = await fetch(proxyUrl);
    
    if (!response.ok) {
      console.warn(`Failed to fetch from proxy: ${response.status} ${response.statusText}`);
      console.log('Using fallback data instead');
      return fallbackData;
    }
    
    const csvText = await response.text();
    
    // Parse the CSV data
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => {
          console.log('Parsing complete, found rows:', results.data.length);
          
          if (results.errors.length > 0) {
            console.warn('CSV parsing had errors:', results.errors);
          }
          
          // If we got no data or just headers, use fallback
          if (results.data.length === 0) {
            console.log('No data found in CSV, using fallback data');
            resolve(fallbackData);
            return;
          }
          
          // Map the parsed data to our project format
          const projectsData = results.data.map((item, index) => ({
            id: index + 1,
            category: item.category || 'Uncategorized',
            title: item.title || `Project ${index + 1}`,
            description: item.description || '',
            youtubeId: item.youtubeId || '',
            client: item.client || '',
          }));
          
          resolve(projectsData);
        },
        error: (error) => {
          console.error('CSV parsing error:', error);
          console.log('Using fallback data instead');
          resolve(fallbackData);
        }
      });
    });
  } catch (error) {
    console.error('Error fetching projects data:', error);
    // Return fallback data in case of error
    return fallbackData;
  }
}