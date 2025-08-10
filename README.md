# Live Time Sponsor Analytics Demo

A demo for sponsor-side event analytics, using Twisted Tea as the mock sponsor. 

## Run locally
1) Install **Node.js (LTS)**.
2) In this folder: 
```bash ie open your terminal and enter
npm install
npm run dev
```
3) Open the printed URL (should be http://localhost:5173).

## Platform Overview // Why I built it
This demo is built around a simple idea: brands want to know if their sponsorships are working without turning events into data-collection marathons. Sponsors should be able to log in, click an event, and instantly see the key signals that tell them whether their investment paid off. I built this because it is an easy way to deliverable key insights to sponsors and is essential to the overall growth of Live Tiime.

Right now, the platform:

  Shows a clean roster of upcoming and completed events.

  Surfaces only the metrics that matter: attendance, check-ins, sampling counts, QR scans, email captures, social buzz, regional follower growth, post-event sales lift, ROI, and CPM.

  For upcoming events: displays preregistrations, forecasted reach, planned samples, and booked sponsor slots giving sponsors a sense of scale without inventing results.

  Keeps the interface minimal so you focus on the story in the numbers, not on decoding a busy dashboard.

  The data model here is built to balance signal quality with participant comfort. Attendance could be confirmed via QR scans or guest lists, brand perception via quick in-line ratings, sales lift via aggregated POS data, and social buzz through event-tag listening — all without bombarding attendees with forms.

If I Had More Time

  Richer Feedback: Quick polls right after sampling to capture flavor or packaging impressions, plus subtle sentiment analysis from social captions and emojis. Can be done through subtle placement of Live Time employees or through surveys. 

  Post-Event Behavior Signals: Light-touch ways to see if attendees Googled the brand, visited the site, used a store locator, or redeemed a promo code.

  Media Hub: A curated space for event photos and videos (opt-in), plus moderated user-generated content from public posts so sponsors can see directly how users are engaging with their product

  Purchase Tracking: In-app coupons or QR codes linked to POS feeds from nearby retailers to directly measure sales lift.

  Conversion & Compensation: Retarget interested attendees with offers, and make ROI transparent enough to support performance-based sponsorship deals.

  Benchmarking: Compare events to similar ones by audience, size, and location to guide future sponsorships.
  
The current build is meant as a proof-of-concept- quick to grasp, easy to navigate, and structured to grow. With integrations into media, sales, and deeper engagement tools, it could give brands a clear, trustworthy picture of their sponsorship impact. 
