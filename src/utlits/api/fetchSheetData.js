// First make sure your sheet is public - File > Share > Anyone with the link > Viewer
export async function fetchSheetData() {
    let lastError = null;

    for (let attempt = 0; attempt < 3; attempt++) {
        try {
            console.log(`Fetching data, attempt ${attempt + 1}/3`);
            const response = await fetch('/api/sheets');
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch data');
            }

            const data = await response.json();
            console.log('Fetched data:', data.slice(0, 1)); // Log first item

            if (!Array.isArray(data) || data.length === 0) {
                throw new Error('Invalid data received from API');
            }

            return data;

        } catch (error) {
            console.error(`Attempt ${attempt + 1} failed:`, error);
            lastError = error;

            if (attempt < 2) {
                // Wait before retrying
                await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
            }
        }
    }

    console.error('All attempts failed. Last error:', lastError);
    throw lastError || new Error('Failed to fetch data after multiple attempts');
}
