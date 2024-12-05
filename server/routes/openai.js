require("dotenv").config();
const express = require("express");
const OpenAI = require("openai");
const router = express.Router();
const { queryGPT_part1, queryGPT_part2, queryGPT_part3 } = require("./queryGPT");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const fetchWithRetry = async (fetchFn, retries = 3) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fetchFn();
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error.message);
      if (attempt === retries) {
        throw new Error(`Failed after ${retries} attempts: ${error.message}`);
      }
    }
  }
};

router.post("/analyze-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required!" });
  }

  try {
    // Completion 1
    const completion1 = await fetchWithRetry(() =>
      openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: queryGPT_part1(email) }],
        max_completion_tokens: 1000,
      })
    );

    console.log("Raw Response 1:", completion1.choices[0].message.content);
    const response1Content = completion1.choices[0].message.content.trim().replace(/```json|```/g, "");
    const response1 = JSON.parse(response1Content);
    const { organization, vertical } = response1;

    if (!organization || !vertical) {
      throw new Error("Failed to extract organization or vertical from response1.");
    }

    // Completion 2
    const completion2 = await fetchWithRetry(() =>
      openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: queryGPT_part2(organization, vertical) }],
        max_completion_tokens: 9000,
      })
    );

    console.log("Raw Response 2:", completion2.choices[0].message.content);
    const response2Content = completion2.choices[0].message.content.trim().replace(/```json|```/g, "");
    const response2 = JSON.parse(response2Content);

    // Completion 3
    const completion3 = await fetchWithRetry(() =>
      openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: queryGPT_part3(organization, vertical) }],
        max_completion_tokens: 9000,
      })
    );

    console.log("Raw Response 3:", completion3.choices[0].message.content);
    const response3Content = completion3.choices[0].message.content.trim().replace(/```json|```/g, "");
    const response3 = JSON.parse(response3Content);

    // Combine all responses
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
