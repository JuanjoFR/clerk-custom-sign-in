import { auth } from '@clerk/nextjs/server';
import CustomSignInForm from '@/components/custom-sign-in-form';
import { redirect } from 'next/navigation';
import { AuthCarousel } from '@/components/auth-carousel';

export default async function SignInPage() {
  const { userId } = await auth();

  if (userId) {
    redirect('/');
  }

  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      <CustomSignInForm />

      <div className="relative hidden flex-1 bg-gray-200 lg:flex">
        <div className="absolute inset-0">
          <AuthCarousel />
        </div>
      </div>
    </main>
  );
}
