import { auth } from '@clerk/nextjs/server';
import CustomSignInForm from '@/components/auth/custom-sign-in-form';
import { redirect } from 'next/navigation';

export default async function SignInPage() {
  const { userId } = await auth();

  if (userId) {
    redirect('/');
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <CustomSignInForm />
    </div>
  );
}
