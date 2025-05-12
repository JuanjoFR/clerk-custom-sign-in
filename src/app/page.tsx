import SignOutButton from '@/components/sign-out-button';
import React from 'react';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center gap-6 rounded-lg border border-gray-200 bg-white px-8 py-12 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Protected Page</h1>
        <p className="max-w-xs text-center text-gray-600">
          You are signed in and viewing a protected page. Only authenticated
          users can see this content.
        </p>
        <SignOutButton />
      </div>
    </main>
  );
}
