import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize the OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  // --- DEBUGGING LOG #1 ---
  // Check if the API key is loaded correctly.
  console.log("Using mock API for logo generation.");
  
  if (!process.env.OPENAI_API_KEY) {
    console.error('ERROR: OpenAI API key is not configured.');
    return NextResponse.json({ error: 'Server configuration error. API key is missing.' }, { status: 500 });
  }

  try {
    const { keywords, tone } = await request.json();

    // --- DEBUGGING LOG #2 ---
    console.log('Received from client:', { keywords, tone });

    if (!keywords || !tone) {
      return NextResponse.json({ error: 'Keywords and tone are required.' }, { status: 400 });
    }

    const prompt = `
      You are an expert Instagram bio generator. Create 5 creative, engaging, and modern Instagram bios for a user with the following details:
      - Niche/Keywords: "${keywords}"
      - Desired Tone: "${tone}"

      Rules for the bios:
      - Each bio must be under 150 characters.
      - Each bio must include at least one relevant emoji.
      - Each bio should have a clear value proposition or a hook.
      - Format the output as a JSON object with a single key "bios" which is an array of strings. For example: {"bios": ["bio 1", "bio 2", "bio 3", "bio 4", "bio 5"]}
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: "json_object" },
    });

    const content = response.choices[0]?.message?.content;
    
    // --- DEBUGGING LOG #3 ---
    console.log('Content received from OpenAI:', content);

    if (!content) {
      throw new Error("No content received from OpenAI.");
    }

    const parsedContent = JSON.parse(content);

    // --- DEBUGGING LOG #4 ---
    console.log('Parsed content:', parsedContent);

    // Instead of Object.values, we explicitly look for the 'bios' key.
    const biosArray = parsedContent.bios; 
    
    if (!Array.isArray(biosArray)) {
      throw new Error("The 'bios' key was not found or is not an array in the AI response.");
    }

     return NextResponse.json({ imageUrl: "https://picsum.photos/1024/1024" });

  } catch (error) { // Changed from (error: any)
    console.error('--- MOCK API ERROR ---:', error);
    return NextResponse.json({ error: 'Failed to generate mock logo.' }, { status: 500 });
  }
}