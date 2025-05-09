# GitHub Copilot Instructions

This project is a **Next.js 15 portfolio demo** showcasing a **custom Clerk sign-in experience**. It's built to demonstrate strong authentication UX/UI skills to future freelance clients.

## 🔧 Tech Stack & Tools

- **Framework**: Next.js 15 with the App Router
- **Components**: React (prioritize server components)
- **Styling**: Tailwind CSS + Shadcn UI components
- **Forms**: react-hook-form (client only)
- **Validation**: Zod
- **Authentication**: Clerk (customized using Tailwind classes)
- **Language**: TypeScript (strict)

## 💡 Copilot Directives

### ✅ Do:

- Use **strict TypeScript**.
- Prioritize **React Server Components**. Use client components only when necessary (e.g., forms, interactivity).
- Structure components using **functional components and hooks** (hooks should be used carefully and only when needed).
- Apply **react-hook-form** and **Zod** for all form-related logic.
- Style Clerk components with **Tailwind classes** as per [Clerk’s Tailwind customization guide](https://clerk.com/docs/customization/overview#use-tailwind-classes-to-style-clerk-components).
- Use **camelCase** for variables, **PascalCase** for components, and **kebab-case** or descriptive names for utility files (e.g., `user-data.ts`).
- Reference or use `<SignIn />` and `useUser()` from Clerk correctly.
- Build clean and modern UI that aligns with Shadcn's design system.
- Assume project follows **Next.js App Directory structure**, with all source code under `src/`.

### ❌ Avoid:

- Avoid class components.
- Avoid client components unless they are required.
- Avoid libraries or patterns that conflict with Next.js best practices.
- Do not suggest mock data or lorem ipsum unless it's for clear placeholder use.
- Do not suggest deprecated or legacy Clerk methods.

## 📁 Project Structure Conventions

- Use `src/app/` for routing.
- Use `src/components/` for shared components.
- Use `src/lib/` for utilities or helpers.
- Place Zod schemas in `src/lib/validation/` or `src/schemas/`.
- Place form-related logic in the relevant client component.

## 🎯 Focus Areas

- Prioritize high-quality, modern, responsive, and accessible UI.
- Clerk customization using Tailwind is a critical area — ensure consistency and usability.
- Treat this as a portfolio-grade demo: code clarity and maintainability matter.

---

Use these instructions to guide suggestion quality throughout the project. The goal is a production-worthy sign-in flow that feels polished, professional, and reflects modern best practices.
