# Production Sheet Management System

A comprehensive desktop application for managing production sheets, equipment information, and user management in manufacturing environments.

## 🚀 Overview

This system provides a complete solution for tracking and managing production data including:
- Production sheet management and tracking
- Equipment and extruder configuration
- Water batch monitoring
- Production history tracking
- User management with role-based access
- Report generation with A3/A4 format printing

## 🏗️ Architecture

The project follows a 3-tier architecture:

### Client (WPF Desktop Application)
- **Technology**: WPF with .NET 8.0
- **UI Framework**: XAML with WebView2 integration
- **Features**: Rich desktop interface with embedded web components

### Server (ASP.NET Core Web API)
- **Technology**: ASP.NET Core Web API with .NET 8.0
- **Authentication**: JWT-based authentication
- **Database Support**: Dual database support (SQL Server & MS Access)
- **Logging**: Serilog integration
- **Documentation**: Swagger/OpenAPI

### Shared (Common Library)
- **Technology**: .NET 8.0 Class Library
- **Purpose**: Shared models, services, and utilities
- **Components**: Database models, API response models, helper utilities

## 📁 Project Structure

```
├── Client/
│   └── ProductionSheetUI/           # WPF Desktop Application
│       ├── Views/                   # XAML Views and Windows
│       ├── Services/                # Client-side services
│       ├── Models/                  # Client models
│       └── img/                     # Application images
├── Server/
│   └── ServiceApi/                  # ASP.NET Core Web API
│       ├── Controllers/             # API Controllers
│       ├── Services/                # Business logic services
│       ├── Middleware/              # Custom middleware
│       ├── Helpers/                 # Utility helpers
│       └── DataModel/               # Entity Framework models
├── Shared/
│   └── CommonLibrary/               # Shared components
│       ├── DatabaseModels/          # Database entity models
│       ├── SharedModels/            # API/Client shared models
│       ├── Services/                # Interface definitions
│       └── Helpers/                 # Shared utilities
└── Document/                        # Project documentation
```

## 🛠️ Technology Stack

### Frontend
- **WPF** - Windows Presentation Foundation
- **WebView2** - Modern web content in WPF
- **XAML** - Declarative UI markup
- **.NET 8.0** - Framework

### Backend
- **ASP.NET Core** - Web API framework
- **Entity Framework Core** - ORM
- **SQL Server** - Primary database
- **MS Access** - Alternative database option
- **Serilog** - Structured logging
- **Swagger** - API documentation

### Libraries & Packages
- **ClosedXML** - Excel file generation
- **Newtonsoft.Json** - JSON serialization
- **BCrypt.Net** - Password hashing
- **Microsoft.Web.WebView2** - Web integration
- **JWT Tokens** - Authentication

## ⚙️ Setup & Installation

### Prerequisites
- .NET 8.0 SDK
- Visual Studio 2022 or VS Code
- SQL Server (optional - can use MS Access)
- Windows 10/11 (for WPF client)

### Database Configuration

The system supports two database options:

#### Option 1: SQL Server (Recommended)
1. Update `appsettings.json` in the ServiceApi project:
```json
{
  "DatabaseSettings": {
    "useMSSQL": true
  },
  "ConnectionStrings": {
    "MSSQLConnection": "Server=(localdb)\\MSSQLLocalDB;Database=toptech-sik;User Id=svc-admin;Password=your_password;"
  }
}
```

2. Run database migrations:
```bash
cd Server/ServiceApi/DataModel
dotnet ef database update
```

#### Option 2: MS Access
1. Update `appsettings.json`:
```json
{
  "DatabaseSettings": {
    "useMSSQL": false
  },
  "ConnectionStrings": {
    "AccessConnection": "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=path_to_your_database.accdb"
  }
}
```

### Building the Application

1. **Clone the repository:**
```bash
git clone https://github.com/patcharapon-san/demo-desktop-project-sheet.git
cd demo-desktop-project-sheet
```

2. **Build the solution:**
```bash
# Build entire solution
dotnet build

# Or build individual projects
cd Server/ServiceApi/ServiceApi
dotnet build

cd Client/ProductionSheetUI/ProductionSheetUI
dotnet build
```

3. **Run the API server:**
```bash
cd Server/ServiceApi/ServiceApi
dotnet run
```

4. **Run the WPF client:**
```bash
cd Client/ProductionSheetUI/ProductionSheetUI
dotnet run
```

## 🎯 Features

### Production Management
- ✅ Create and edit production sheets
- ✅ Equipment configuration management
- ✅ Extruder settings and monitoring
- ✅ Water batch tracking
- ✅ Production history logging
- ✅ Document revision control

### User Management
- ✅ Role-based access control
- ✅ User authentication with JWT
- ✅ Password encryption with BCrypt
- ✅ Admin panel for user management

### Reporting
- ✅ A3/A4 format report generation
- ✅ Excel export functionality
- ✅ Production history reports
- ✅ Equipment status reports

### System Features
- ✅ Dual database support (SQL Server/MS Access)
- ✅ Health check endpoints
- ✅ Structured logging with Serilog
- ✅ Swagger API documentation
- ✅ Real-time data updates

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh JWT token

### Production
- `GET /api/production` - Get production list
- `GET /api/production/{id}` - Get production details
- `POST /api/production` - Create production sheet
- `PUT /api/production/{id}` - Update production sheet
- `DELETE /api/production/{id}` - Delete production sheet

### User Management
- `GET /api/users` - Get user list (Admin only)
- `POST /api/users` - Create user (Admin only)
- `PUT /api/users/{id}` - Update user (Admin only)
- `DELETE /api/users/{id}` - Delete user (Admin only)

### Health
- `GET /health` - System health check

## 🔒 Security

- **JWT Authentication** - Secure API access
- **Role-based Authorization** - Admin/User role separation
- **Password Hashing** - BCrypt encryption
- **HTTPS** - Secure communication
- **Input Validation** - Server-side validation

## 📊 Monitoring & Logging

- **Serilog** - Structured logging to files
- **Health Checks** - Database connectivity monitoring
- **Request Logging** - HTTP request/response logging
- **Error Handling** - Comprehensive error logging

## 🧪 Testing

Run tests using:
```bash
cd Server/ServiceApi.Tests
dotnet test
```

Test coverage includes:
- Controller unit tests
- Service layer tests
- Utility function tests

## 📝 Development Guidelines

### Code Style
- Follow C# coding conventions
- Use async/await for I/O operations
- Implement proper error handling
- Add XML documentation for public APIs

### Database Changes
- Always create migrations for schema changes
- Test with both SQL Server and MS Access
- Backup database before major changes

### UI Development
- Use MVVM pattern for WPF components
- Implement proper data binding
- Handle WebView2 events appropriately

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation in the `Document/` folder
- Review the API documentation at `/swagger` when running the server

## 🗺️ Roadmap

- [ ] Web-based client interface
- [ ] Mobile app support
- [ ] Advanced analytics dashboard
- [ ] Export to multiple formats (PDF, CSV)
- [ ] Real-time notifications
- [ ] Audit trail functionality

---

**Note**: This is a manufacturing production management system designed for desktop environments with rich data entry and reporting capabilities.
