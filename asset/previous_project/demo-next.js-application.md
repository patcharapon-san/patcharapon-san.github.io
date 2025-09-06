# Demo Next.js Application

A modern full-stack web application built with Next.js 14, AWS Amplify, and a comprehensive set of UI libraries and tools.

## 🚀 Features

- **🔐 Authentication**: Secure user authentication with Amazon Cognito
- **📊 Database**: MySQL RDS database on AWS for reliable data storage
- **🎨 Modern UI**: Material-UI (MUI) components with responsive design
- **🌐 3D Visualization**: Three.js integration for 3D models and CAD viewing
- **📈 Charts & Analytics**: Interactive charts with Recharts and MUI X Charts
- **🌍 Internationalization**: Multi-language support with i18next
- **🎭 Animations**: Smooth animations with Framer Motion
- **📱 File Upload**: Drag & drop file uploads with React Dropzone
- **🛡️ Form Validation**: Robust form handling with React Hook Form and Yup
- **🎯 TypeScript**: Full TypeScript support for better developer experience

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Material-UI (MUI)
- **3D Graphics**: Three.js, React Three Fiber
- **Animation**: Framer Motion
- **Charts**: Recharts, MUI X Charts
- **Forms**: React Hook Form + Yup validation

### Backend & Services
- **Backend**: AWS Amplify Gen 2
- **Microservices**: AWS Lambda functions for compute
- **API Gateway**: AWS API Gateway for service interface
- **Authentication**: Amazon Cognito
- **Database**: MySQL RDS on AWS
- **API Architecture**: RESTful APIs with microservice model

### Development Tools
- **Build Tool**: Next.js with Webpack
- **Package Manager**: npm
- **Code Quality**: ESLint
- **CSS Processing**: PostCSS, Autoprefixer

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 or higher ([Download here](https://nodejs.org/))
- **npm**: Comes with Node.js
- **Git**: For version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/patcharapon-san/demo-next-js.git
cd demo-next-js
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server on port 3000 |
| `npm run build` | Builds the app for production |
| `npm run start` | Runs the built app in production mode |
| `npm run lint` | Runs ESLint to check for code issues |

## 🏗️ Architecture

### Microservice Model
This application follows a microservice architecture pattern:

- **AWS Lambda**: Individual functions handle specific business logic
- **AWS API Gateway**: Serves as the interface layer for all microservices
- **MySQL RDS**: Centralized relational database for data persistence
- **Amazon Cognito**: Handles user authentication and authorization
- **Next.js Frontend**: Client-side application consuming the APIs

### API Design
- **RESTful APIs**: Clean and consistent API endpoints
- **Serverless Functions**: Each Lambda function represents a specific service
- **API Gateway Integration**: Centralized routing and request handling
- **Database Connections**: Efficient connection pooling to MySQL RDS

## 🏗️ Project Structure

```
├── amplify/                 # AWS Amplify configuration
│   ├── auth/               # Authentication resources
│   ├── data/               # Database resources (MySQL RDS)
│   └── functions/          # AWS Lambda functions (Microservices)
├── public/                 # Static assets
│   ├── assets/            # Images, icons, illustrations
│   ├── fonts/             # Custom fonts
│   └── logo/              # Brand assets
├── src/                   # Source code
│   ├── app/               # Next.js app directory (App Router)
│   ├── components/        # Reusable UI components
│   ├── contexts/          # React contexts
│   ├── hooks/             # Custom React hooks
│   ├── layouts/           # Page layouts
│   ├── locales/           # Internationalization files
│   ├── routes/            # Route definitions
│   ├── sections/          # Page sections/modules
│   ├── theme/             # Theme configuration
│   └── utils/             # Utility functions
└── uploads/               # File upload directory
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_APP_ENV=development
```

### AWS Amplify Setup

1. Install the Amplify CLI:
```bash
npm install -g @aws-amplify/cli
```

2. Configure Amplify:
```bash
amplify configure
```

3. Initialize your project:
```bash
amplify init
```

## 🌐 Deployment

### Deploy to AWS Amplify

1. **Automatic Deployment**: Connect your GitHub repository to AWS Amplify Console for automatic deployments on every push.

2. **Manual Deployment**: 
```bash
npm run build
amplify publish
```

For detailed deployment instructions, refer to the [AWS Amplify documentation](https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/#deploy-a-fullstack-app-to-aws).

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/patcharapon-san/demo-next-js)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 🛡️ Security

For security concerns, please see [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## 📄 License

This project is licensed under the MIT-0 License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [AWS Amplify](https://aws.amazon.com/amplify/) - Full-stack development platform
- [Material-UI](https://mui.com/) - React UI framework
- [Three.js](https://threejs.org/) - 3D library for the web
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

---

Made with ❤️ by [patcharapon-san](https://github.com/patcharapon-san)