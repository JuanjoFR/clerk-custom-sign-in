# Clerk Custom Sign In

A demo showcasing a fully custom authentication experience with Clerk, built on Next.js 15 demonstrating advanced authentication UX/UI skills. This project features a modern, responsive interface using Tailwind CSS and Shadcn UI components, strict TypeScript, and robust form handling with React Hook Form and Zod. The Clerk sign-in authentication flow is fully customized with Tailwind classes for a seamless, branded user experience. Ideal as a reference project requiring secure, beautiful, and accessible authentication.

> **Note:** All logo and testimonial images in this project were generated using [leonardo.ai](https://leonardo.ai/).

## 🚀 Features

- **Custom Authentication UI**: Beautifully styled Clerk authentication components
- **Modern Stack**: Built with Next.js 15 and TypeScript
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Component Library**: Integrated with Shadcn UI
- **Type Safety**: Strict TypeScript configuration
- **Form Handling**: React Hook Form with Zod validation

## 📸 Screenshots & Demo

<img width="821" alt="mobile" src="https://github.com/user-attachments/assets/000c18a7-4625-4b42-9a5f-0ca31655ca18" />

<img width="1440" alt="desktop" src="https://github.com/user-attachments/assets/5f050a79-28ff-4a7b-b155-83dee66f9707" />

[video.webm](https://github.com/user-attachments/assets/debb925e-05fa-4e96-b9fa-418a75abb94f)

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
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/welcome
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
├── lib/             # Utilities and helpers
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
