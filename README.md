# AgentPlate

A boilerplate for managing agents and workflows using Node.js and Supabase.

## Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/artistscloud/AgentPlate.git
   cd AgentPlate

   
npm install


DATABASE_URL=postgres://postgres:[YOUR_DB_PASSWORD]@vjyltlwedgggyytukabb.supabase.co:5432/postgres
SUPABASE_URL=https://vjyltlwedgggyytukabb.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqeWx0bHdlZGdnZ3l5dHVrYWJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMDM5OTUsImV4cCI6MjA1Njc3OTk5NX0.yDeXuO0DnDTzp3hVwfIBZvuDSBBBnBEnR_EntZzRhvo
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqeWx0bHdlZGdnZ3l5dHVrYWJiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlatCI6MTc0MTIwMzk5NSwiZXhwIjoyMDU2Nzc5OTk1fQ.FK3F7bVV3iMe4oUPHZb2F0yIPBpgSNFMwwY-z_bGZkQ
JWT_SECRET=/oKidoOyijDj6IauwgTnCJBJgoE/VKzAycemraTb577juPEq+TdLktyvWwkQJBLjgUyl16YkMQ+Yc1teyy5mLQ==
JWT_EXPIRY=3600
PORT=3000


Set up the Supabase database (see SQL in Supabase SQL Editor).


npm start  # Production
npm run dev  # Development with nodemon

API Endpoints
GET /api/agents - List agents (authenticated users only)
POST /api/agents - Create agent (admin only)
GET /api/profile - Get user profile (display_name)
POST /api/login - Login to get JWT



---

### Steps to Use This Structure
1. **Create the Directory and Files**:
   - Use the structure above, creating folders (`config`, `routes`, `models`) and files as shown.
   - Copy the content into each file.

2. **Install Dependencies**:
   ```bash
   npm install
