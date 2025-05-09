'use client';

import { useClerk } from '@clerk/nextjs';
import React from 'react';

export default function SignOutButton() {
  const clerk = useClerk();

  return (
    <button
      type="button"
      className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
      onClick={() => clerk.signOut()}
    >
      Sign out
    </button>
  );
}
