# Integration APIs
![build status](https://github.com/patcharapon-san/facebook-webhook-api/actions/workflows/dotnet.yml/badge.svg)

## Project Description

A comprehensive C# .NET 8 Web API solution providing middleware integration services for multiple platforms including Facebook, payment processing, and shipping services. This solution consists of four microservices designed to handle different aspects of e-commerce and social media integration.

## Architecture

This solution contains four independent API services:

### 🔗 **WebhookAPI**
Main webhook handler for Facebook integration events and notifications.

### 📘 **facebook-integration-api**
Comprehensive Facebook API integration service providing chat message handling, conversation management, and Facebook Graph API interactions.

### 💳 **opn-payment-integration-api**
Payment processing service integrated with Omise payment gateway for handling charges, refunds, and transfers.

### 📦 **shippop-integration-api**
Shipping and logistics service integrated with Shippop platform for order management, tracking, and pickup scheduling.

## Built With

The list of technologies and services used in this solution:

**Core Technologies:**
* [Visual Studio 2022](https://visualstudio.microsoft.com/)
* [.NET 8](https://dotnet.microsoft.com/download/dotnet/8.0)
* [ASP.NET Core Web API](https://docs.microsoft.com/aspnet/core/web-api/)
* [C#](https://docs.microsoft.com/dotnet/csharp/)

**Integration Services:**
* [Facebook Graph API v20](https://developers.facebook.com/docs/graph-api/reference/v20.0/)
* [Facebook Pages API](https://developers.facebook.com/docs/pages-api/overview)
* [Omise Payment Gateway](https://www.omise.co/)
* [Shippop Shipping Platform](https://shippop.com/)

## Project Structure

```
📁 CrystalBridge Integration APIs/
├── 📁 WebhookAPI/                     # Main Facebook webhook handler
│   ├── Controllers/                   # API controllers
│   ├── Services/                      # Business logic services
│   ├── Models/                        # Data models
│   └── Program.cs                     # Entry point
├── 📁 facebook-integration-api/       # Facebook API integration
│   ├── Models/                        # Facebook-specific models
│   ├── Services/                      # Facebook services
│   └── Utils/                         # Helper utilities
├── 📁 opn-payment-integration-api/    # Omise payment gateway
│   ├── Models/                        # Payment models
│   ├── Services/                      # Payment services
│   └── Program.cs                     # API endpoints
├── 📁 shippop-integration-api/        # Shippop shipping platform
│   ├── Models/                        # Shipping models
│   ├── Services/                      # Shipping services
│   └── Program.cs                     # API endpoints
├── 📁 json_result/                    # Sample JSON responses
└── WebhookAPI.sln                     # Solution file
```

## Installation Instructions

### Prerequisites
- Visual Studio 2022 is recommended, but not required.
- Visual Studio Code using the C# DevKit could be used as well.

### Steps
1. Clone the repository using either command-line or Visual Studio:
    ```sh
    git clone https://github.com/patcharapon-san/facebook-webhook-api.git
    ```
2. Open the solution file `WebhookAPI.sln` in the project root directory.
3. Restore NuGet packages for all projects:
    ```sh
    dotnet restore
    ```
4. Configure the necessary API keys and settings in each service's `appsettings.json` file.

## Usage Instructions

### Running All Services
To run all services simultaneously, build and run the entire solution:
```sh
dotnet build
dotnet run --project WebhookAPI
dotnet run --project facebook-integration-api
dotnet run --project opn-payment-integration-api
dotnet run --project shippop-integration-api
```

### Running Individual Services
Each service can be run independently:
- **WebhookAPI**: Main Facebook webhook handler
- **facebook-integration-api**: Facebook messaging and conversation management
- **opn-payment-integration-api**: Payment processing (Port: typically 5000)
- **shippop-integration-api**: Shipping and logistics (Port: typically 5001)

All services include built-in Swagger documentation available at their respective `/swagger` endpoints.

## Features

### 🔗 WebhookAPI & Facebook Integration
- **GET/POST /webhook** - Facebook webhook verification and event handling
- **GET /check-page-subscriptions** - Verify Facebook page subscriptions
- **GET /check-subscribed-apps** - Check subscribed Facebook applications
- **GET /comments/broadcast-greeting-message** - Broadcast messages to post commenters

### 📘 Facebook Integration API
- **Chat Message Management** - Send and receive Facebook messages
- **Conversation Handling** - Manage Facebook page conversations
- **User Interaction** - Handle user comments and interactions

### 💳 Payment Integration API (Omise)
- **Charge Management** - Create, retrieve, and manage payment charges
- **Token & Card Processing** - Handle tokenized payments and card charges
- **Refund Processing** - Process payment refunds
- **Transfer Management** - Handle money transfers
- **Webhook Events** - Process payment webhook notifications

### 📦 Shipping Integration API (Shippop)
- **Pricing Information** - Get shipping rates and pricing
- **Order Management** - Create, confirm, update, and cancel shipping orders
- **Label Generation** - Generate shipping labels
- **Package Tracking** - Track shipment status and updates
- **Pickup Services** - Schedule and manage package pickups
- **Webhook Events** - Receive shipping status updates

## API Usage Examples

Here are examples of how to use the different APIs in the solution.

### Facebook Webhook API

#### GET /webhook - Verify Facebook webhook
```sh
curl -X GET "http://<base-url>/webhook?hub.mode=subscribe&hub.challenge=12345&hub.verify_token=<VERIFY_TOKEN>"
```

#### POST /webhook - Receive Facebook webhook events
```sh
curl -X POST "http://<base-url>/webhook" \
  -H "Content-Type: application/json" \
  -d '{
    "entry": [
      {
        "changes": [
          {
            "field": "feed",
            "value": {
              "item": "comment",
              "from": {
                "id": "<USER_ID>"
              }
            }
          }
        ]
      }
    ]
  }'
```

#### GET /comments/broadcast-greeting-message - Send greeting to commenters
```sh
curl -X GET "http://<base-url>/api/comments/broadcast-greeting-message"
```

### Payment API (Omise Integration)

#### Create a charge
```sh
curl -X POST "http://<payment-api-url>/api/charges/CreateTokenAndCardCharge" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 10000,
    "currency": "thb",
    "card": {
      "number": "4242424242424242",
      "expiration_month": 12,
      "expiration_year": 2025,
      "security_code": "123"
    }
  }'
```

#### Get charge list
```sh
curl -X GET "http://<payment-api-url>/api/charges/GetChargeList"
```

### Shipping API (Shippop Integration)

#### Check shipping prices
```sh
curl -X POST "http://<shipping-api-url>/api/courier/getPricing" \
  -H "Content-Type: application/json" \
  -d '{
    "api_key": "your_api_key",
    "from_postcode": "10110",
    "to_postcode": "10120",
    "weight": 1.5,
    "parcel_value": 1000
  }'
```

#### Create shipping order
```sh
curl -X POST "http://<shipping-api-url>/api/order/booking" \
  -H "Content-Type: application/json" \
  -d '{
    "api_key": "your_api_key",
    "email": "customer@example.com",
    "data": [
      {
        "from": {
          "name": "Sender Name",
          "address": "123 Main St",
          "district": "District",
          "state": "Bangkok",
          "postcode": "10110"
        },
        "to": {
          "name": "Recipient Name",
          "address": "456 Second St",
          "district": "District",
          "state": "Bangkok", 
          "postcode": "10120"
        }
      }
    ]
  }'
```

#### Track shipment
```sh
curl -X POST "http://<shipping-api-url>/api/tracking/TrackingOrder" \
  -H "Content-Type: application/json" \
  -d '{
    "tracking_code": "TRACK123456789"
  }'
```

> **Note:** Replace `<base-url>`, `<payment-api-url>`, `<shipping-api-url>`, and other placeholder values with your actual API endpoints and credentials. 
> 
> Each service provides interactive API documentation via Swagger UI at `http://localhost:<port>/swagger` when running in development mode.

## Configuration

### Facebook Integration Setup

#### Environment Configuration
Set up your Facebook configuration in `appsettings.json`:
```json
{
  "FacebookConfig": {
    "PageId": "<Your Facebook Page ID>",
    "AppId": "<Your Facebook App ID>",
    "AppSecret": "<Your Facebook App Secret>",
    "VerifyToken": "<Your Verify Token>",
    "PageAccessToken": "<Your Page Access Token>"
  }
}
```

### Payment Integration Setup (Omise)

Configure your Omise credentials in the payment service:
```json
{
  "OmiseConfig": {
    "PublicKey": "pkey_test_xxxxx",
    "SecretKey": "skey_test_xxxxx"
  }
}
```

### Shipping Integration Setup (Shippop)

Configure your Shippop API credentials:
```json
{
  "ShippopConfig": {
    "ApiKey": "your_shippop_api_key",
    "BaseUrl": "https://mkpservice.shippop.dev/"
  }
}
```

## Setting Up Facebook App Webhook

### Facebook App Setup
1. **Create a Facebook App**:
    - Go to the [Facebook Developers](https://developers.facebook.com/) portal.
    - Click on **Create App** and follow the prompts to set up your app.

2. **Configure Webhook**:
    - Navigate to **Webhooks** under **Add a Product**.
    - Click **Set Up**.
    - Select the **Page** product and confirm.
    - Enter the **Callback URL** (this will be the endpoint where Facebook will send webhook events, e.g., `https://<your-domain>/webhook`).
    - Enter the **Verify Token** (this must match the token used in your `Verify` method).
    - Click **Verify and Save**.

3. **Subscribe to Feed Events**:
    - Go to your app's dashboard.
    - Click on **Add Product** and select **Webhooks**.
    - Under **Subscriptions**, select **Pages**.
    - Click on **Subscribe to this topic**.
    - In the dialog, select the fields you want to subscribe to. For feed events, select `feed`.
    - Click **Save**.

4. **Get Your Page ID and Page Access Token**:
    - To get a list of IDs and Page access tokens for Facebook Pages on which you can perform a task, send a GET request to /user_id/accounts endpoint where user_id is your user ID.

    Example Request

   ```sh
   curl -i -X GET "https://graph.facebook.com/v20.0/user_id/accounts?access_token=user_access_token
   ```

    On success, your app receives the following JSON response that includes an array of objects. Each object contains information about a specific Page including the name, ID, a short-lived Page access token, tasks you can perform on the Page, and more:

   ```json
        {
          "data": [
            {
              "access_token": "page_access_token",
              "category": "Internet Company",
              "category_list": [
                {
                  "id": "2256",
                  "name": "Internet Company"
                }
              ],
              "name": "Name of this Page",
              "id": "page_id",
              "tasks": [
                "ANALYZE",
                "ADVERTISE",
                "MODERATE",
                "CREATE_CONTENT"
              ]
            },
            ...
   ```
   

6. **Environment Configuration**:
    - Set up your environment variables or configuration file with the following details:
        ```json
        {
          "FacebookConfig": {
            "PageId": "<Your Facebook Page ID>",
            "AppId": "<Your Facebook App ID>",
            "AppSecret": "<Your Facebook App Secret>",
            "VerifyToken": "<Your Verify Token>",
            "PageAccessToken": "<Your Page Access Token>"
          }
        }
        ```

7. **Update Code for Webhook Verification**:
    - Ensure your webhook verification endpoint is correctly implemented to handle the verification request from Facebook.
        ```csharp
        [HttpGet("webhook")]
        public IActionResult Verify([FromQuery(Name = "hub.mode")] string hubMode,
                                    [FromQuery(Name = "hub.challenge")] int hubChallenge,
                                    [FromQuery(Name = "hub.verify_token")] string hubVerifyToken)
        {
            var verifyToken = "<Your Verify Token>";
            if (hubMode == "subscribe" && hubVerifyToken == verifyToken)
            {
                return Ok(hubChallenge);
            }
            return Unauthorized();
        }
        ```

8. **Handle Webhook Events**:
    - Implement the logic to handle feed events sent to your webhook endpoint.
        ```csharp
        [HttpPost("webhook")]
        public async Task<IActionResult> Receive([FromBody] JObject? data)
        {
            if (data == null) return BadRequest();

            string pageAccessToken = "<Your Page Access Token>";

            Helper helper = new Helper();

            var entries = data["entry"];
            foreach (var entry in entries)
            {
                var changes = entry["changes"];
                foreach (var change in changes)
                {
                    var field = change["field"].ToString();
                    if (field == "feed" && change["value"]["item"].ToString() == "comment")
                    {
                        string message = "Thank you for your comment!";
                        string recipientId = change["value"]["from"]["id"].ToString();
                        string error = helper.SendMessage(recipientId, message, pageAccessToken);
                    }
                }
            }
            return Ok();
        }
        ```

## License

This project is licensed under the MIT License.

## Authors

- Patcharapon Sangsatra

## Technologies Used

**Backend:**
- C# 
- .NET 8
- ASP.NET Core Web API

**External APIs:**
- Facebook Graph API v20
- Facebook Pages API
- Omise Payment Gateway
- Shippop Shipping Platform

**Development Tools:**
- Visual Studio 2022
- Swagger/OpenAPI
- Entity Framework (if applicable)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

---
