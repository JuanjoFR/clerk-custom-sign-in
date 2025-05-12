import SignOutButton from '@/components/sign-out-button';
import React from 'react';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      <header className="flex h-16 items-center justify-end gap-4 p-4">
        <SignOutButton />
      </header>
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:max-w-[50%] lg:px-8">
        Hello world
      </div>
    </main>
  );
}
