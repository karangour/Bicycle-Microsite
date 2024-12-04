const queryGPT_part1 = (email) => `

Bicycle is an analytics co-pilot that simplifies data preparation, insight generation, and consumption. It integrates data from streaming platforms, warehouses, databases, APIs, and knowledge bases like wikis and dashboards, handling fragmented, unclean data without requiring prior centralization. Using AutoML, it baselines KPIs, detects anomalies, and explains patterns with LLMs, validating causes via data queries. Insights are delivered through dashboards, chat queries, alerts, reports, or automated actions, enabling faster, informed decisions with minimal technical effort.

Now, analyze the email '${email}' based on the context provided above and fill up the following JSON.

IMPORTANT:
Use the organization's name as much as you can in titles/headings and descriptions to increase customization.
It is mandatory to use the organization name in vertical.title.heading.

{
  "organization": "{organization name}",
  "vertical": "{only pick between travel, fintech, retail, or others. Do not make any new verticals.}",
  "add the 'vertical' as key": {
    "title": {
      "heading": "{Vertical-specific heading}", // Word count: 6
      "description": "{Brief vertical focus description}",  // Word count: 18
      "heroimage": "assets/verticals/{vertical}.svg" // 
    },
}

IMPORTANT: Return only the JSON response.`;

const queryGPT_part2 = (org, vertical) => `
Bicycle is an analytics co-pilot that simplifies data preparation, insight generation, and consumption. It integrates data from streaming platforms, warehouses, databases, APIs, and knowledge bases like wikis and dashboards, handling fragmented, unclean data without requiring prior centralization. Using AutoML, it baselines KPIs, detects anomalies, and explains patterns with LLMs, validating causes via data queries. Insights are delivered through dashboards, chat queries, alerts, reports, or automated actions, enabling faster, informed decisions with minimal technical effort.

Now, using the ${org}'s name and ${vertical}, alongwith the proceeding use cases as a reference, create real-world use-cases for ${org} and fill up the JSON below.

IMPORTANT -
1. Each use case must include:
   - "title": A short, descriptive title.
   - "problem": A detailed explanation of the challenge.
   - "solution": A clear description of the solution provided by Bicycle.
   - "screenshots": Exactly three screenshots, each containing:
     - "screenshot_number": Reference numbers (1-23).
     - "icon": Icon in the format "faIcon" (e.g., "faUser", "faDatabase").
     - "title": A short title for the screenshot.
     - "description": A brief explanation of the screenshot.
     - Three "datapoints": Short descriptive examples.

2. Ensure use cases are tailored to " + org + " and " + vertical + ":
   - Use " + org + "'s name prominently in all titles, headings, and descriptions.

3. For "usecase_map" and "screenshot_number":
   - Use provided reference numbers (1-16 for use cases, 1-23 for screenshots).
   - Do not introduce new numbers.

4. Data Team Use Cases:
   - Provide three use cases under the "data" key.
   - Each must have the fields specified above.

5. Business Team Use Cases:
   - Provide three use cases under the "business" key.
   - Each must have the fields specified above.

6. Follow the JSON format strictly:
   - Use correct word counts and structure as outlined below.
   - Icons must follow the "faIcon" format.

   Use Cases for Data Teams
1) Automated Data Integration
Problem: Time-consuming integration from multiple sources.
Solution: Automates connections to databases, CRMs, and feeds.
Screenshots: 1, 2, 3
Use: Show range of integrations.
2) Anomaly Detection
Problem: Manual anomaly detection is inefficient.
Solution: Monitors data streams for unusual patterns and alerts.
Screenshots: 4, 5
Use: Display detected anomalies and alert setup.
3) Automated Data Transformation
Problem: Custom scripts needed for data standardization.
Solution: Automates transformation for consistent datasets.
Screenshots: 6, 7
Use: Show standardized event types.
4) Self-Serve Data Access
Problem: Data teams overwhelmed by requests.
Solution: Provides a self-serve platform for users.
Screenshots: 8, 9, 10
Use: Illustrate accessible analytics.
5) Data Quality Monitoring
Problem: Difficult to monitor data quality across sources.
Solution: Continuous checks for gaps and inconsistencies.
Screenshots: 11, 12, 13
Use: Show real-time quality alerts.
6) Historical Data Benchmarking
Problem: Manual analysis for benchmarking is hard.
Solution: Automates benchmarks using historical data.
Screenshots: 14, 15, 16
Use: Highlight timeseries with historical baselines.
7) ML Model Deployment
Problem: Complex model deployment and updates.
Solution: Automates building and updating ML models.
Screenshots: 17, 18, 19
Use: Show ML models in action.
8) Data Catalog and Lineage
Problem: Organizing data for easy access is challenging.
Solution: Provides a structured catalog with lineage tracking.
Screenshots: 20, 21, 22, 23
Use: Highlight organized data views.
Use Cases for Business Teams
9) Self-Serve Data Access
Problem: Delays in accessing relevant data.
Solution: User-friendly interface for direct data access.
Screenshots: 4, 8, 21
Use: Show easy-to-access analytics.
10) Root Cause Analysis
Problem: Difficult to identify causes of business changes.
Solution: Analyzes patterns to explain trends.
Screenshots: 3, 5, 18
Use: Highlight root cause analysis.
11) Identifying Key Segments
Problem: Time-consuming to spot key customer segments.
Solution: Automatically identifies important segments.
Screenshots: 11, 15, 2
Use: Show customer segments for targeting.
12) Prioritized Alerts
Problem: Overwhelming data and alerts.
Solution: Prioritizes insights aligned with business goals.
Screenshots: 6, 14, 23
Use: Show alert settings and prioritized insights.
13) Stay Notified on Changes
Problem: Constantly checking for updates is tedious.
Solution: Subscribes to insights for notifications.
Screenshots: 4, 8, 12
Use: Show subscription settings.
14) Seasonal Trend Detection
Problem: False alarms in detecting seasonal patterns.
Solution: Considers seasonality in analysis.
Screenshots: 1, 9, 17
Use: Show adjusted trends.
15) Actionable Insights
Problem: Manual follow-up needed for insights.
Solution: Delivers actionable insights for quick response.
Screenshots: 4, 15, 20
Use: Show actionable items.
16) Customized Data Models
Problem: Generic solutions don’t meet specific needs.
Solution: Customizes models for business relevance.
Screenshots: 1, 5, 7
Use: Showcase custom models.

Return only the JSON response in the following format:

{
  "usecase": {
    "intro": {
      "heading": "{Introduction Heading (4 words)}",
      "subheading": "{Challenges Overview (31 words)}",
      "examples": [
        {
          "title": "{Challenge Title (2 words)}",
          "description": "{Challenge Description (20 words)}",
          "icon": "{Relevant faIcon}"
        },
        "Two more examples with similar word counts."
      ]
    },
    "main": {
      "heading": "{Solution Heading (4 words)}",
      "subheading": "{Solutions Overview (18 words)}",
      "data": [
        {
          "usecase_map": "{Reference Number (1-16)}",
          "title": "{Use Case Title (4 words)}",
          "problem": "{Problem Description (19 words)}",
          "solution": "{Solution Description (30 words)}",
          "screenshots": [
            {
              "screenshot_number": "{Reference Number (1-23)}",
              "icon": "{Relevant faIcon}",
              "title": "{Screenshot Title (2 words)}",
              "description": "{Screenshot Description (12 words)}",
              "datapoint": [
                "{Data Point 1 (2-3 words)}",
                "{Data Point 2 (2-3 words)}",
                "{Data Point 3 (2-3 words)}"
              ]
            },
            "Two more screenshots with similar word counts."
          ]
        },
        "Two more data use cases with the same structure."
      ],
      "business": [
        {
          "usecase_map": "{Reference Number (1-16)}",
          "title": "{Use Case Title (4 words)}",
          "problem": "{Problem Description (19 words)}",
          "solution": "{Solution Description (30 words)}",
          "screenshots": [
            {
              "screenshot_number": "{Reference Number (1-23)}",
              "icon": "{Relevant faIcon}",
              "title": "{Screenshot Title (2 words)}",
              "description": "{Screenshot Description (12 words)}",
              "datapoint": [
                "{Data Point 1 (2-3 words)}",
                "{Data Point 2 (2-3 words)}",
                "{Data Point 3 (2-3 words)}"
              ]
            },
            "Two more screenshots with similar word counts."
          ]
        },
        "Two more business use cases with the same structure."
      ]
    }
  }
}

IMPORTANT: Return only the JSON response.
`;


const queryGPT_part3 = (org, vertical) => `

Bicycle is an analytics co-pilot that simplifies data preparation, insight generation, and consumption. It integrates data from streaming platforms, warehouses, databases, APIs, and knowledge bases like wikis and dashboards, handling fragmented, unclean data without requiring prior centralization. Using AutoML, it baselines KPIs, detects anomalies, and explains patterns with LLMs, validating causes via data queries. Insights are delivered through dashboards, chat queries, alerts, reports, or automated actions, enabling faster, informed decisions with minimal technical effort.

Now, using the ${vertical}, alongwith the following features of each of the three pillars as a reference, create specific features for ${org}.

IMPORTANT:
Three should be three pillars in the JSON, and each pillar should have three features.
Map "feature_map" to feature numbers (1-28) from the background.
Map "screenshot_number" to the screenshot numbers for corresponding features. Include all relevant screenshots.
Include all 28 features in "pillars." None should be omitted.
Use only reference numbers from the background. Avoid new numbering.
For 'icons', add them in the format 'faIcon'. As an example it should be 'faBulb' or 'faUser', not 'fa-bulb' or 'fa-user'.

Pillar 1 - Auto Onboarding
Features -
1) Connect Data Instantly: Quickly link all your data sources—streaming feeds, warehouses, or databases—without any hassle.
Screenshot: 1
Use: Highlight both available and connected data sources to show users how different feeds, databases, and warehouses can be instantly linked.
2) Automated Data Processing: We handle the extraction, transformation, and loading of your data automatically, so you don't have to.
Screenshot: 2
Use: Showcase the app’s automated data handling; for example, use portions that show various event types to represent data extraction, transformation, and loading in action.
3) Smart Data Organization: Our system recognizes and arranges your raw data into meaningful business entities like customers and products.
Screenshot: 3
Use: Use the “Business Catalog” screen or “Pattern Catalog by Dimensions” to show how raw data is organized into categories like “Customers” or “Products.”
4) Understands Your Business: Uses AI to interpret your data in real-world terms that matter to you.
Screenshot: 4
Use: Use a screenshot portion that shows configuration options or insights specific to business entities, demonstrating AI-driven, business-centric data interpretation.
5) Seamless Integration: Combines event fragments from different sources into complete, usable events without manual work.
Screenshot: 1
Use: Highlight a section with multiple integrated sources to convey the ability to join event fragments automatically across sources.
6) Data Cleanup Made Easy: Automatically fixes data types and formats to ensure consistency across all your datasets.
Screenshot: 2
Use: Show a portion where event types or entities are listed, emphasizing how data formats and types are standardized.
7) Live Business Models: Creates up-to-date representations of key business elements by instantly joining events and details.
Screenshot: 5
Use: Use “Live Insight” or “Pattern Catalog by Type” to illustrate real-time models that represent key business metrics, combining event and detail views.
8) Unified View of Your Data: Brings together all your data dimensions for a complete picture without extra effort.
Screenshot: 6
Use: Choose a screenshot showing a comprehensive dashboard layout, which pulls together different data dimensions for a complete view.

Pillar 2 - Auto Pattern Detection and Analysis
Features -
9) Finds Issues Automatically: Detects unusual patterns and problems in your data without any setup required.
Screenshot: 1
Use: Highlight the anomaly detection section to indicate the automatic identification of unusual patterns.
10) Adapts to Your Data History: Uses past data to set benchmarks, so it can spot real issues when they happen.
Screenshot: 2
Use: Use a portion of a timeseries chart showing historical data points to illustrate benchmarking.
11) Looks at Multiple Factors: Analyzes different data dimensions at once to give you a full understanding.
Screenshot: 3
Use: Display the Triage Summary screen to show analysis across various dimensions.
12) Considers Seasonal Trends: Takes into account seasonal patterns to avoid false alarms.
Screenshot: 6
Use: Focus on a chart section where seasonal trends are accounted for to demonstrate seasonality in insights.
13) Automatic Machine Learning Models: Builds ML models for different data slices without you needing to configure anything.
Screenshot: 5
Use: Use portions of Insights or Business Catalog to show that the platform builds and applies ML models automatically.
14) Learns Continuously: Updates its models with new data to keep insights current.
Screenshot: 6
Use: Focus on sections that reflect updating insights, indicating continuous model improvement with new data.
15) Handles Large Data Streams: Processes big amounts of data efficiently without slowing down.
Screenshot: 7
Use: Show sections that represent robust data handling, processing, or high-volume data feeds.
16) Focuses on What's Important: Prioritizes insights that align with your business goals.
Screenshot: 3
Use: Highlight prioritized insights or flagged alerts to show how important data is emphasized.
17) Ready-to-Use Industry Patterns: Comes with pre-built patterns relevant to your industry.
Screenshot: 8
Use: Display the Pattern Catalog by Type screen to show pre-configured, industry-specific patterns.
18) Detects Various Trends: Automatically spots anomalies, trends, outliers, and changes in conversions.
Screenshot: 9
Use: Use a dashboard or insight screen where various trend types (e.g., anomalies, outliers) are detected, giving a comprehensive view.

Pillar 3 - True Self-Service
Features -
19) Ask in Plain Language: Pose questions naturally and get immediate answers without needing technical jargon.
Screenshot: 1
Use: Highlight sections of the Insights page where plain-language queries could be entered or displayed to emphasize simplicity in posing questions.
20) Clear Insights: Provides straightforward explanations so you know what's happening and why.
Screenshot: 2
Use: Focus on insights that clearly explain the context or reasons behind certain data points.
21) Easy to Use: Access complex analytics without relying on data teams or special skills.
Screenshot: 3
Use: Highlight areas with clear navigation or summarized insights, demonstrating ease of use for non-technical users.
22) Organized Information: Find what you need quickly through a well-structured catalog.
Screenshot: 4
Use: Use portions of the catalog to illustrate how information is categorized and easy to find.
23) Tailored to Your Business: Uses a model specific to your company to make data more relatable.
Screenshot: 5
Use: Focus on business entity settings that can be tailored to a specific company's needs.
24) Stay Notified: Subscribe to the insights you care about and get updates when they matter.
Screenshot: 6
Use: Use the Alert Configuration screen to illustrate how users can subscribe to relevant insights.
25) Take Immediate Action: Get insights you can act on right away.
Screenshot: 7
Use: Highlight actionable items in the Live Insight or Triage screens, showing that insights are ready to be acted upon.
26) Identifies Key Groups: Automatically finds important customer segments or product groups that need attention.
Screenshot: 8
Use: Display categorized insights by groups (e.g., customer segments), showcasing targeted insights.
27) Real-Time Alerts: Notifies you of significant changes as they happen.
Screenshot: 6
Use: Highlight alert settings or real-time insight notifications, emphasizing timely updates.
28) Explains Root Causes: Helps you understand the underlying reasons for trends and anomalies.
Screenshot: 2
Use: Focus on the Triage Causes screen to demonstrate detailed explanations for the reasons behind data anomalies.

{
    "features": {
      "heading": "{Features overview heading}", // Word count: 5
      "description": "{Feature desciption}", // Word count: 15
      "pillars": [
        {
          "title": "{Pillar name}", 
          "feature": [
            {
            "feature_map": "{Reference (1-28)}  
            "title": "{Feature title}", // Word count: 3
              "description": "{Feature description}", // Word count: 20
              "screenshot": {
                "icon": "{Relevant faIcon}",
                "title": "{Screenshot title}", // Word count: 3
                "description": "{Screenshot description}", // Word count: 9
                "datapoint": [ // 3 Data point descriptors // Word count: 2-3 each
                ]
              }
            },
            "Two more features with similar word counts."
          ]
        },
        "Two more pillars with similar word counts."
      ]
    }
}

IMPORTANT: Return only the JSON response.`;

module.exports = { queryGPT_part1, queryGPT_part2, queryGPT_part3 };
