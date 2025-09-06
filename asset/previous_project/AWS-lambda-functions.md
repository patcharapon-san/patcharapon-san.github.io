# AWS TAM3D Lambda Functions

A comprehensive collection of AWS Lambda functions for the TAM3D system, handling various business operations including CRM integration, FlowAccount quotations, file management, and customer data processing.

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Lambda Functions](#lambda-functions)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Deployment](#deployment)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Best Practices](#best-practices)
- [Contributing](#contributing)

## 🎯 Overview

This repository contains a suite of serverless Lambda functions that power the TAM3D system's backend operations. The functions are designed with modularity, security, and maintainability in mind, following AWS best practices for serverless architecture.

### Key Features

- 🔐 **Secure Authentication**: Token-based authorization system
- 🏢 **CRM Integration**: Seamless integration with CRM systems
- 📊 **FlowAccount Integration**: Automated quotation and document management
- 📁 **File Management**: Secure S3-based file upload and retrieval
- 🛡️ **Input Validation**: Comprehensive validation with detailed error handling
- 🧪 **Testing**: Comprehensive test coverage with multiple testing frameworks
- 🚀 **Easy Deployment**: Automated deployment scripts and guides

## 🏗️ Architecture

The system follows a microservices architecture where each Lambda function handles specific business operations:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   External API  │ -> │   Auth Lambda   │ -> │ Business Logic  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                       │
                       ┌─────────────────┐    ┌─────────────────┐
                       │   Database      │ <- │   S3 Storage    │
                       └─────────────────┘    └─────────────────┘
```

## 🔧 Lambda Functions

### Authentication & Security
- **`aws-tam3d-internal-generate-token-for-external`** - Generates authentication tokens for external systems
- **`aws-tam3d-internal-verify-authorization`** - Validates and verifies user authorization

### CRM Operations
- **`aws-tam3d-internal-create-crm-deal`** - Creates new deals in the CRM system
- **`aws-tam3d-internal-get-customer-detail`** - Retrieves detailed customer information

### FlowAccount Integration
- **`aws-tam3d-internal-create-flowaccount-quotation`** - Creates quotations in FlowAccount
- **`aws-tam3d-internal-login-flowaccount`** - Handles FlowAccount authentication
- **`aws-tam3d-internal-get-flowaccount-share-document`** - Retrieves shared documents from FlowAccount

### Quotation Management
- **`aws-tam3d-internal-create-quotation`** - Internal quotation creation
- **`aws-tam3d-internal-create-quotation-for-external`** - External quotation creation with comprehensive validation
- **`aws-tam3d-internal-send-quotation-data-for-external`** - Sends quotation data to external systems

### File & Data Management
- **`aws-tam3d-internal-upload-file`** - Secure file upload to S3
- **`aws-tam3d-internal-get-all-files-by-order-id`** - Retrieves files by order ID
- **`aws-tam3d-internal-get-part-detail`** - Retrieves part/component details

## 📋 Prerequisites

- **AWS CLI** configured with appropriate permissions
- **Python 3.9+** installed
- **VS Code** with AWS Toolkit extension
- **PowerShell** (for Windows deployment scripts)
- **boto3** AWS SDK for Python

### Required AWS Permissions

Your AWS user/role needs permissions for:
- Lambda function deployment and management
- S3 bucket access for file operations
- CloudWatch Logs for monitoring
- IAM roles for Lambda execution

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/patcharapon-san/demo-aws-lambda.git
   cd demo-aws-lambda
   ```

2. **Set up Python environment** (recommended)
   ```bash
   python -m venv venv
   venv\Scripts\activate  # Windows
   # source venv/bin/activate  # Linux/Mac
   ```

3. **Install dependencies**
   ```bash
   pip install boto3 requests
   ```

4. **Configure AWS credentials**
   ```bash
   aws configure
   ```

## 🚀 Deployment

### Method 1: VS Code Deployment (Recommended)

1. **Prepare for deployment**
   ```powershell
   # Navigate to function directory
   cd aws-tam3d-internal-[function-name]
   
   # Clean the directory (removes __pycache__, test files)
   .\clean-for-deployment.ps1
   ```

2. **Deploy via VS Code**
   - Right-click on the function folder
   - Select "Upload Lambda"
   - VS Code will automatically exclude files listed in `.lambdaignore`

### Method 2: Using Make Commands

```bash
# Install dependencies
make install

# Run tests
make test

# Deploy to development
make deploy-dev

# Deploy to production
make deploy-prod
```

### Method 3: AWS CLI Deployment

```bash
# Create deployment package
zip -r function.zip . -x "__pycache__/*" "test_*" "*.pyc"

# Deploy function
aws lambda update-function-code \
    --function-name your-function-name \
    --zip-file fileb://function.zip
```

## 🧪 Testing

The project includes comprehensive testing with multiple approaches:

### Running Tests

```bash
# Run all tests
python -m pytest

# Run specific test file
python test_lambda_comprehensive.py

# Run with coverage
python -m pytest --cov=lambda_function

# Run edge case tests
python test_edge_cases.py
```

### Test Structure

- **Unit Tests**: Individual function validation
- **Integration Tests**: End-to-end function testing
- **Edge Case Tests**: Boundary condition testing
- **Performance Tests**: Load and response time testing

## 📁 Project Structure

```
demo-aws-lambda/
├── README.md
├── requirements.txt
├── beast-practice-aws-lambda-function/     # Best practices and templates
│   ├── Makefile                           # Build and deployment commands
│   └── ...
├── aws-tam3d-internal-*/                  # Individual Lambda functions
│   ├── lambda_function.py                 # Main Lambda handler
│   ├── models.py                          # Data models and error handling
│   ├── clean-for-deployment.ps1          # Deployment cleanup script
│   ├── .lambdaignore                     # Deployment exclusion rules
│   ├── mock/                             # Mock data for testing
│   ├── tests/                            # Test files
│   └── *.md                              # Documentation files
└── ...
```

### Key Files in Each Function

- **`lambda_function.py`** - Main entry point and business logic
- **`models.py`** - Data models, validation, and error handling
- **`database.py`** - Database connection and operations (where applicable)
- **`s3_client.py`** - S3 operations (where applicable)
- **`.lambdaignore`** - Files to exclude during deployment
- **`clean-for-deployment.ps1`** - Automated cleanup script

## 🛡️ Best Practices

### Code Organization
- ✅ **Modular Design**: Each function has single responsibility
- ✅ **Error Handling**: Comprehensive error handling with proper HTTP responses
- ✅ **Input Validation**: Multi-layer validation with detailed error messages
- ✅ **Security**: Authorization checks and secure data handling

### Deployment
- ✅ **Clean Deployments**: Automated cleanup of cache and test files
- ✅ **Environment Separation**: Development and production configurations
- ✅ **Monitoring**: CloudWatch integration for logging and monitoring

### Performance
- ✅ **Efficient Code**: Optimized for Lambda cold start performance
- ✅ **Resource Management**: Proper connection pooling and resource cleanup
- ✅ **Caching**: Strategic caching where appropriate

## 🔧 Configuration

### Environment Variables

Common environment variables used across functions:

```bash
# Database Configuration
DB_HOST=your-database-host
DB_NAME=your-database-name
DB_USER=your-database-user
DB_PASSWORD=your-database-password

# AWS Configuration
AWS_REGION=your-aws-region
S3_BUCKET_NAME=your-s3-bucket

# External API Configuration
FLOWACCOUNT_API_URL=https://api.flowaccount.com
CRM_API_URL=your-crm-api-url
```

## 🐛 Troubleshooting

### Common Issues

1. **Import Errors**
   ```bash
   # Ensure all dependencies are in the deployment package
   pip install -r requirements.txt -t .
   ```

2. **Permission Denied**
   ```bash
   # Check IAM roles and policies
   aws iam get-role --role-name your-lambda-role
   ```

3. **Timeout Issues**
   ```bash
   # Increase Lambda timeout in AWS Console
   # Or via AWS CLI:
   aws lambda update-function-configuration \
       --function-name your-function \
       --timeout 300
   ```

## 📖 Documentation

Each Lambda function includes detailed documentation:

- **`DEPLOYMENT_GUIDE.md`** - Step-by-step deployment instructions
- **`REFACTORING_SUMMARY.md`** - Code organization and improvements
- **`TESTING_GUIDE.md`** - Testing strategies and examples
- **`MOCK_REQUEST_EXAMPLES.md`** - Sample API requests and responses

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Add tests** for new functionality
5. **Run tests** to ensure everything works
   ```bash
   python -m pytest
   ```
6. **Submit a pull request**

### Code Style Guidelines

- Follow PEP 8 Python style guide
- Use meaningful variable and function names
- Add docstrings to all functions
- Include comprehensive error handling
- Write tests for new functionality

## 📞 Support

For questions, issues, or contributions:

- **Repository**: [demo-aws-lambda](https://github.com/patcharapon-san/demo-aws-lambda)
- **Issues**: Use GitHub Issues for bug reports and feature requests
- **Documentation**: Check individual function README files for specific details

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🚀 Quick Start

1. **Clone and setup**
   ```bash
   git clone https://github.com/patcharapon-san/demo-aws-lambda.git
   cd demo-aws-lambda
   pip install boto3 requests
   ```

2. **Deploy a function**
   ```bash
   cd aws-tam3d-internal-create-quotation
   .\clean-for-deployment.ps1
   # Right-click folder in VS Code → "Upload Lambda"
   ```

3. **Test the deployment**
   ```bash
   python test_lambda_comprehensive.py
   ```

Ready to build amazing serverless applications! 🎉
