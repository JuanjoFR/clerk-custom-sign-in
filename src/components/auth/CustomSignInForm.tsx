'use client';

import { useSignIn } from '@clerk/nextjs';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export default function CustomSignInForm() {
  const { signIn, isLoaded } = useSignIn();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignInFormValues) => {
    setError(null);
    if (!signIn) return;
    try {
      await signIn.create({
        identifier: data.email,
        password: data.password,
      });
      // Clerk will handle redirect on success
    } catch (err: unknown) {
      if (
        typeof err === 'object' &&
        err !== null &&
        'errors' in err &&
        Array.isArray((err as { errors?: unknown }).errors)
      ) {
        const firstError = (err as { errors: { message?: string }[] })
          .errors[0];
        setError(firstError?.message || 'Sign in failed');
      } else {
        setError('Sign in failed');
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    if (!signIn) return;
    try {
      await signIn.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: '/',
      });
    } catch (err: unknown) {
      setError('Google sign-in failed');
    }
  };

  if (!isLoaded) return null;

  return (
    <div className="mx-auto w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-lg">
      <h1 className="text-center text-2xl font-bold">
        Sign in to your account
      </h1>
      <Button
        type="button"
        variant="outline"
        className="flex w-full items-center justify-center gap-2"
        onClick={handleGoogleSignIn}
      >
        <FcGoogle className="h-5 w-5" />
        Sign in with Google
      </Button>
      <div className="relative flex items-center">
        <span className="flex-grow border-t border-gray-200" />
        <span className="mx-4 text-xs text-gray-400">or</span>
        <span className="flex-grow border-t border-gray-200" />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <div className="text-xs text-red-500">{error}</div>}
          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            Sign in
          </Button>
        </form>
      </Form>
    </div>
  );
}
