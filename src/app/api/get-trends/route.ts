import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

// The '_request: Request' parameter is completely removed from the function signature.
export async function GET() {
  console.log("Launching headless browser with precision waiting...");
  let browser = null;

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36');

    await page.goto('https://trends.google.com/trends/trendingsearches/daily?geo=US', {
      waitUntil: 'networkidle2',
    });

    const firstTrendSelector = '.MDW27e .QbLC8c';
    await page.waitForSelector(firstTrendSelector, { timeout: 15000 });
    console.log("First trend title has loaded. The list is ready.");
    
    const trendsData = await page.evaluate(() => {
      const trendsList: { rank: number; name: string; searchVolume: string; }[] = [];
      const trendElements = document.querySelectorAll('.MDW27e');
      
      for (let i = 0; i < trendElements.length && i < 5; i++) {
        const element = trendElements[i];
        const titleElement = element.querySelector('.QbLC8c');
        const searchVolumeElement = element.querySelector('.pojp0c');
        
        if (titleElement) {
          trendsList.push({
            rank: i + 1,
            name: titleElement.textContent?.trim() || '',
            searchVolume: searchVolumeElement?.textContent?.trim() || 'N/A',
          });
        }
      }
      return trendsList;
    });

    if (trendsData.length === 0) {
      throw new Error("Scraping failed: Could not extract trend data even after waiting for titles.");
    }

    const formattedTrends = trendsData.map(trend => ({
      rank: trend.rank,
      name: trend.name,
      platform: 'Google Search',
      velocity: trend.searchVolume,
    }));

    console.log("Successfully scraped and formatted trends:", formattedTrends);

    return NextResponse.json({
      trendingTopics: formattedTrends,
      trendingKeywords: ['#AI', '#Summer2025', '#TechReview', '#DIYProjects', '#LifeHacks'],
      trendingPalettes: [
        { name: 'Sunset Vibes', colors: ['#FFC3A0', '#FFAC81', '#FF928B', '#E56B6F', '#B56576'] },
        { name: 'Ocean Blues', colors: ['#006994', '#34A0A4', '#76C893', '#B5E48C', '#D9ED92'] },
        { name: 'Cyberpunk Neon', colors: ['#F72585', '#B5179E', '#7209B7', '#560BAD', '#480CA8'] },
      ]
    });

  } catch (error) {
    console.error('--- PUPPETEER SCRAPING ERROR ---:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return NextResponse.json({ error: `Failed to fetch live trending data. ${errorMessage}` }, { status: 500 });
  
  } finally {
    if (browser) {
      await browser.close();
      console.log("Headless browser closed.");
    }
  }
}