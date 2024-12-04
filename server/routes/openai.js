require("dotenv").config();
const express = require("express");
const OpenAI = require("openai");
const router = express.Router();
const { queryGPT_part1, queryGPT_part2, queryGPT_part3 } = require("./queryGPT");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/analyze-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required!" });
  }

  try {
    
    const completion1 = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [{ role: "user", content: queryGPT_part1(email) }],
      max_tokens: 1000,
    });

    const response1 = JSON.parse(completion1.choices[0].message.content.trim());
    const { organization, vertical } = response1;

    if (!organization || !vertical) {
      throw new Error("Failed to extract organization or vertical from response1.");
    }


    const completion2 = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [{ role: "user", content: queryGPT_part2(organization, vertical) }],
      max_tokens: 4096,
    });

    const response2 = JSON.parse(completion2.choices[0].message.content.trim());


    const completion3 = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [{ role: "user", content: queryGPT_part3(organization, vertical) }],
      max_tokens: 2000,
    });

    const response3 = JSON.parse(completion3.choices[0].message.content.trim());


    const combinedResponse = {
      organization,
      vertical,
      [vertical]: {
        ...response1[vertical],
        ...response2,
        ...response3,
      },
    };

    console.log(combinedResponse);

    return res.json(combinedResponse);
  } catch (error) {
    console.error("Error processing API calls:", error);
    res.status(500).json({ error: "Failed to process email" });
  }
});

module.exports = router;
