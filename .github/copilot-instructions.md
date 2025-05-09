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
- Avoid using `any` as a type. Always use precise types or `unknown` when necessary (e.g., in `catch` blocks, use `catch (err: unknown)` and perform type narrowing).
- Prioritize **React Server Components**. Use client components only when necessary (e.g., forms, interactivity).
- Structure components using **functional components and hooks** (hooks should be used carefully and only when needed).
- Apply **react-hook-form** and **Zod** for all form-related logic.
- Implement forms using the latest Shadcn UI form primitives and patterns as shown in [Shadcn UI Form Documentation](https://ui.shadcn.com/docs/components/form), ensuring consistency with Shadcn's recommended structure and accessibility best practices.
- Style Clerk components with **Tailwind classes** as per [Clerk’s Tailwind customization guide](https://clerk.com/docs/customization/overview#use-tailwind-classes-to-style-clerk-components).
- Use **camelCase** for variables, **PascalCase** for components, and **kebab-case** or descriptive names for utility files (e.g., `user-data.ts`).
- Use a fully custom sign-in form using Clerk’s hooks and APIs.
- Build clean and modern UI that aligns with Shadcn's design system.
- Use default Shadcn UI components and [React Lucide icons](https://lucide.dev/icons/) for all iconography if it exists in Lucide (e.g., import from `lucide-react`).
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
