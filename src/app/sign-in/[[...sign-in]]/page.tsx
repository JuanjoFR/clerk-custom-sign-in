import { auth } from '@clerk/nextjs/server';
import CustomSignInForm from '@/components/custom-sign-in-form';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default async function SignInPage() {
  const { userId } = await auth();

  if (userId) {
    redirect('/');
  }

  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      <CustomSignInForm />

      {/* Image/Testimonial Section - Hidden on mobile, visible on lg screens */}
      <div className="relative hidden flex-1 bg-gray-200 lg:flex">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-full w-full">
            <Image
              src="https://placehold.co/1080x1080/png"
              alt="Testimonial background"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
