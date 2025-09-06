# Bus Schema Application

A Windows Forms application for visualizing and simulating electrical substation bus arrangements and power system configurations.

## Overview

The Bus Schema Application is an educational and simulation tool designed to help understand different types of electrical substation configurations commonly used in power systems. The application provides visual representations of various bus arrangements and allows users to interact with different electrical components such as circuit breakers, disconnect switches, transformers, and generators.

## Features

### Bus Arrangement Types
- **Single Bus**: Basic single bus configuration
- **Main and Transfer Bus**: Main bus with transfer bus for maintenance operations
- **Double Main and Transfer Bus**: Enhanced reliability with double main bus configuration
- **Breaker and a Half**: High reliability scheme with 1.5 circuit breakers per circuit

### Visual Components
- Circuit breakers (green/red status indicators)
- Disconnect switches with directional configurations
- Transformers
- Generators
- Bus connections and junctions
- Status indicators (on/off/disabled states)

### Interactive Features
- Real-time status visualization
- Component state management
- Visual feedback for energized/de-energized states
- Multiple form interfaces for different bus arrangements

## Technology Stack

- **Framework**: .NET 8.0 Windows Forms
- **Language**: C# 
- **Target Platform**: Windows
- **IDE**: Visual Studio 2022

## Project Structure

```
BusSchemaApp/
├── BusSchemaApp.sln              # Solution file
├── BusSchemaApp/                 # Main application folder
│   ├── Program.cs                # Application entry point
│   ├── MainForm.cs              # Main application form
│   ├── BusArrangementForm.cs    # Bus arrangement selection form
│   ├── SingleBusForm.cs         # Single bus configuration form
│   ├── MainAndTransferBusForm.cs # Main and transfer bus form
│   ├── DoubleMainAndTransferBusForm.cs # Double main and transfer form
│   ├── BreakerAndAHalfForm.cs   # Breaker and a half form
│   ├── Models/                  # Data models
│   │   ├── Node.cs              # Electrical node model
│   │   ├── Substation.cs        # Substation configuration
│   │   ├── CricuitBreaker.cs    # Circuit breaker model
│   │   ├── DisconnectionSwitch.cs # Disconnect switch model
│   │   └── SubstationGraph.cs   # Graph representation
│   ├── Helpers/                 # Utility classes
│   │   └── TreeHelper.cs        # Tree structure utilities
│   ├── image/                   # Visual assets
│   │   ├── cb-*.png            # Circuit breaker images
│   │   ├── ds-*.png            # Disconnect switch images
│   │   ├── generator-*.png      # Generator images
│   │   ├── transformer.png      # Transformer image
│   │   └── status-*.png        # Status indicator images
│   └── Properties/              # Application properties and resources
└── doc/                         # Documentation and presentations
```

## Getting Started

### Prerequisites

- Windows 10/11
- .NET 8.0 Runtime or SDK
- Visual Studio 2022 (for development)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/patcharapon-san/bus-schema.git
   cd bus-schema
   ```

2. Open the solution in Visual Studio:
   ```
   BusSchemaApp/BusSchemaApp.sln
   ```

3. Build and run the application:
   - Press F5 or click "Start Debugging"
   - Or use Build → Build Solution, then run the executable

### Running the Application

1. Launch the application
2. Select the desired bus arrangement type from the main menu
3. Interact with the electrical components to see status changes
4. Observe real-time visual feedback for system states

## Bus Arrangement Types Explained

### Single Bus
The simplest configuration where all circuits are connected to a single bus. Cost-effective but offers limited flexibility and reliability.

### Main and Transfer Bus
Features a main bus for normal operation and a transfer bus for maintenance. Allows taking circuits out of service without complete shutdown.

### Double Main and Transfer Bus
Enhanced version with two main buses for increased reliability and operational flexibility.

### Breaker and a Half
High reliability scheme where each circuit uses 1.5 circuit breakers, providing excellent reliability and maintenance flexibility.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## Educational Use

This application is designed for educational purposes to help students and professionals understand:
- Power system configurations
- Substation design principles
- Electrical component interactions
- Reliability considerations in power systems

## License

This project is available under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- Developed as part of electrical engineering education
- Visual assets designed for clear educational presentation
- Based on industry-standard substation configurations

## Contact

For questions, suggestions, or contributions, please open an issue on GitHub or contact the project maintainers.