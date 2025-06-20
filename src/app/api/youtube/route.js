export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const videoId = searchParams.get('id');
    
    // First try oEmbed for the title (no API key needed)
    try {
        const [oembedResponse, descriptionResponse] = await Promise.all([
            // Get title from oEmbed
            fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`),
            // Get description from YouTube API if key exists
            process.env.YOUTUBE_API_KEY ? 
                fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.YOUTUBE_API_KEY}`)
                : Promise.resolve(null)
        ]);

        const oembedData = await oembedResponse.json();
        let description = '';

        // If we have API key and got description data
        if (descriptionResponse) {
            const descriptionData = await descriptionResponse.json();
            if (descriptionData.items && descriptionData.items[0]) {
                description = descriptionData.items[0].snippet.description;
            }
        }

        return Response.json({
            title: oembedData.title,
            description: description || 'No description available'
        });
    } catch (error) {
        console.error('Error fetching video data:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
