# MongoDB Atlas Setup Guide

This guide will help you set up MongoDB Atlas for the UNS Consultancy backend.

## Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account (or sign in if you already have one)
3. Complete the registration process

## Step 2: Create a Cluster

1. Once logged in, click **"Build a Database"**
2. Choose **"M0 FREE"** tier (free forever, perfect for development)
3. Select your preferred cloud provider and region
4. Click **"Create Cluster"**
5. Wait 3-5 minutes for the cluster to be created

## Step 3: Create Database User

1. In the Security section, click **"Database Access"**
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication method
4. Enter a username and generate a secure password (save this!)
5. Set user privileges to **"Atlas admin"** or **"Read and write to any database"**
6. Click **"Add User"**

## Step 4: Configure Network Access

1. In the Security section, click **"Network Access"**
2. Click **"Add IP Address"**
3. For development, click **"Allow Access from Anywhere"** (adds `0.0.0.0/0`)
   - **Note:** For production, restrict to specific IPs
4. Click **"Confirm"**

## Step 5: Get Connection String

1. Go to **"Database"** section
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Select **"Node.js"** as driver and latest version
5. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

## Step 6: Update Connection String

1. Replace `<username>` with your database username
2. Replace `<password>` with your database password (URL encode special characters if needed)
3. Replace `?retryWrites=true&w=majority` with `/uns-consultancy?retryWrites=true&w=majority`
   - This sets the database name to `uns-consultancy`
   - Final string should look like:
   ```
   mongodb+srv://myuser:mypassword@cluster0.xxxxx.mongodb.net/uns-consultancy?retryWrites=true&w=majority
   ```

## Step 7: Create .env File

1. In the `backend/` directory, create a `.env` file:
   ```bash
   cd backend
   touch .env
   ```

2. Add your connection string:
   ```
   MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/uns-consultancy?retryWrites=true&w=majority
   PORT=4000
   ```

3. **Important:** Make sure `.env` is in your `.gitignore` file (already added)

## Step 8: Install Dependencies

```bash
cd backend
npm install
```

## Step 9: Seed the Database

Run the seed script to populate your database with initial data:

```bash
npm run seed
```

You should see:
```
MongoDB Connected: ...
Seeding database...
Cleared existing data
Inserted 6 products
Inserted X requirements
Database seeded successfully!
```

## Step 10: Start the Server

```bash
npm start
```

You should see:
```
MongoDB Connected: ...
Node API running on http://localhost:4000
```

## Step 11: Test the API

Test the endpoints:

```bash
# Health check
curl http://localhost:4000/api/health

# Get all products
curl http://localhost:4000/api/products

# Get all requirements
curl http://localhost:4000/api/requirements
```

## Troubleshooting

### Connection Timeout
- Check that your IP is whitelisted in Network Access
- Verify your username and password are correct
- Ensure the connection string is properly formatted

### Authentication Failed
- Double-check username and password in connection string
- URL-encode special characters in password (e.g., `@` becomes `%40`)

### Database Not Found
- Make sure the database name in the connection string matches: `/uns-consultancy`

### Module Not Found
- Run `npm install` in the backend directory
- Make sure you're in the `backend/` directory when running commands

## Next Steps

- The database is now ready to use!
- You can add more products and requirements via the API endpoints
- Check the API routes in `backend/index.js` for available endpoints
