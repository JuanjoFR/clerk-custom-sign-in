import SignOutButton from '@/components/auth/sign-out-button';
import React from 'react';

export default function HomePage() {
  return (
    <React.Fragment>
      <header className="flex h-16 items-center justify-end gap-4 p-4">
        <SignOutButton />
      </header>
      <main>Hello world</main>
    </React.Fragment>
  );
}
