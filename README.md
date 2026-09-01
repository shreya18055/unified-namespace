# UNS Consultancy App

A comprehensive consultancy application for Unified Namespace (UNS) solutions, helping companies choose the right industrial IoT products from Litmus, Belden, and Highbyte.

## Features

### 🎯 **Smart Assessment System**
- **Company Profile Collection**: Industry, size, budget, timeline, and expertise level
- **Technical Requirements Assessment**: 25+ yes/no questions across 9 categories
- **Intelligent Matching**: Algorithm-based product recommendations
- **Personalized Results**: Company-specific recommendations and next steps

### 📊 **Comprehensive Product Database**
- **Litmus Solutions**: Edge computing and data management platforms
- **Belden Products**: Industrial networking and infrastructure solutions
- **Highbyte Platforms**: Data integration and analytics tools

### 🎨 **Modern UI/UX**
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Beautiful Animations**: Smooth transitions and micro-interactions
- **Intuitive Navigation**: Step-by-step guided assessment
- **Professional Design**: Clean, modern interface with excellent UX

### 🔧 **Technical Categories Covered**
- **Data Management**: Real-time processing, historical storage, visualization
- **Infrastructure**: Edge computing, cloud integration, on-premise deployment
- **Connectivity**: OPC UA, MQTT, legacy protocols, wireless solutions
- **Security**: Cybersecurity, encryption, access control
- **Integration**: ERP, SCADA, MES/MMS, API support
- **Performance**: High availability, low latency, high throughput
- **Compliance**: Industry standards, data governance, audit trails
- **Scalability**: Horizontal scaling, multi-site operations
- **Support**: 24/7 support, training services

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd uns-consultancy-app
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Backend with MongoDB Atlas

The backend uses MongoDB Atlas for data storage. Follow these steps:

1. **Set up MongoDB Atlas:**
   - See detailed instructions in `backend/MONGODB_SETUP.md`
   - Create a free cluster and get your connection string

2. **Configure environment variables:**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env and add your MONGODB_URI
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Seed the database:**
   ```bash
   npm run seed
   ```

5. **Start the server:**
   ```bash
   npm start
   ```

The backend will run on `http://localhost:4000`

**API Endpoints:**
- `GET /api/health` - Health check
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `GET /api/requirements` - Get all requirements
- `GET /api/requirements/:id` - Get requirement by ID
- `POST /api/requirements` - Create new requirement
- `PUT /api/requirements/:id` - Update requirement
- `DELETE /api/requirements/:id` - Delete requirement

### Build for Production

```bash
cd frontend
npm run build
```

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Forms**: React Hook Form with validation
- **Icons**: Lucide React
- **Build Tool**: Create React App

## Product Vendors

### Litmus
- **Litmus Edge**: Industrial edge computing platform
- **Litmus DataHub**: Centralized data management platform
- **Focus**: Enterprise-scale solutions with comprehensive features

### Belden
- **Hirschmann Industrial Networking**: Industrial networking solutions
- **GarrettCom Industrial Switches**: Rugged networking equipment
- **Focus**: Industrial-grade networking and infrastructure

### Highbyte
- **IntelliCone**: Industrial data integration platform
- **Highbyte DataHub**: Industrial data hub
- **Highbyte Analytics**: Advanced analytics platform
- **Focus**: Data integration and analytics solutions

## Assessment Algorithm

The app uses a sophisticated scoring algorithm that considers:

1. **Requirement Matching**: Products are scored based on how well they match user requirements
2. **Company Profile Adjustment**: Scores are adjusted based on company size, budget, and expertise
3. **Importance Weighting**: Critical requirements carry more weight than low-priority ones
4. **Vendor Specialization**: Different vendors excel in different areas

## Project Structure

```
uns-consultancy-app/
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Header.tsx
│   │   │   ├── CompanyProfile.tsx
│   │   │   ├── RequirementsAssessment.tsx
│   │   │   ├── Results.tsx
│   │   │   └── AnimatedBackground.tsx
│   │   ├── data/          # Static data
│   │   │   ├── requirements.ts
│   │   │   └── products.ts
│   │   ├── types/         # TypeScript type definitions
│   │   │   └── index.ts
│   │   ├── utils/         # Utility functions
│   │   │   └── assessment.ts
│   │   ├── App.tsx        # Main app component
│   │   ├── index.tsx      # App entry point
│   │   └── index.css      # Global styles
│   ├── public/            # Public assets
│   ├── package.json       # Frontend dependencies
│   ├── tailwind.config.js # Tailwind configuration
│   ├── postcss.config.js  # PostCSS configuration
│   ├── capacitor.config.ts # Capacitor configuration
│   └── vercel.json        # Vercel deployment config
├── backend/               # Node.js backend API (optional)
│   ├── index.js          # Express server
│   └── package.json      # Backend dependencies
└── README.md             # Project documentation
```

## Customization

### Adding New Requirements
Edit `frontend/src/data/requirements.ts` to add new assessment questions.

### Adding New Products
Edit `frontend/src/data/products.ts` to add products from Litmus, Belden, or Highbyte.

### Modifying the Algorithm
Edit `frontend/src/utils/assessment.ts` to adjust the recommendation logic.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team.

---

**Built with ❤️ for industrial IoT excellence** 
