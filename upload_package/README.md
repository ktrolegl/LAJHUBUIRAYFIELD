# Modern React UI Component Library

A beautiful, accessible, and customizable UI component library for React applications. Built with TypeScript, Tailwind CSS, and modern web standards.

## Features

- 🎨 **Beautiful Design**: Clean and modern UI components
- 🌙 **Dark/Light Mode**: Built-in theme switching capabilities
- 🧩 **Modular Architecture**: Use only what you need
- 📱 **Responsive**: Works on all screen sizes
- ♿ **Accessible**: Built with accessibility in mind
- 🔄 **Easy Theming**: Simple theme customization
- 🧪 **TypeScript**: Full type safety and IntelliSense

## Installation

```bash
npm install modern-react-ui
# or
yarn add modern-react-ui
```

## Quick Start

```jsx
import React from 'react';
import { Button, ThemeProvider } from 'modern-react-ui';

function App() {
  return (
    <ThemeProvider>
      <div className="p-4">
        <Button variant="default">Click Me</Button>
      </div>
    </ThemeProvider>
  );
}
```

## Available Components

- Buttons
- Inputs
- Modals
- Alerts
- Progress indicators
- Toggles
- Sliders
- And many more!

Check out the [documentation](https://your-documentation-url.com) for a complete list of components and usage examples.

## Theming

The library supports customization through a simple theming system:

```jsx
<ThemeProvider 
  theme={{
    colors: {
      primary: '#3b82f6',
      secondary: '#10b981',
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    borderRadius: '0.375rem',
    fontFamily: '"Inter", sans-serif',
  }}
>
  {/* Your app content */}
</ThemeProvider>
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.