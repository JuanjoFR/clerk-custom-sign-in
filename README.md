# Custom Clerk Authentication Portfolio Demo

A modern Next.js 15 portfolio demo showcasing a custom authentication experience using Clerk, built with best practices and a beautiful UI.

## 🚀 Features

- **Custom Authentication UI**: Beautifully styled Clerk authentication components
- **Modern Stack**: Built with Next.js 15 and TypeScript
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Component Library**: Integrated with Shadcn UI
- **Type Safety**: Strict TypeScript configuration
- **Form Handling**: React Hook Form with Zod validation

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)

## 📦 Getting Started

1. **Clone the repository**

```bash
git clone <repository-url>
cd clerk-custom-sign-in
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

4. **Start the development server**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 🧩 Project Structure

```
src/
├── app/             # Next.js app router pages
├── components/      # Reusable components
├── lib/            # Utilities and helpers
└── schemas/        # Zod validation schemas
```

## 🎨 Code Style

- **Formatting**: Prettier
- **Linting**: ESLint
- **Style Guide**: TypeScript strict mode

Format your code using:

```bash
npm run format
```

## 📄 License

[MIT](LICENSE)
