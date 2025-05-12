'use client';

import { useSignIn, useClerk } from '@clerk/nextjs';
import { useRouter, useSearchParams } from 'next/navigation';
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
import { FcGoogle } from 'react-icons/fc';
import { Separator } from './ui/separator';
import { Checkbox } from './ui/checkbox';
import Link from 'next/link';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import * as React from 'react';
import { Loader2 } from 'lucide-react';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignInFormValues = z.infer<typeof signInSchema>;

function CustomSignInFormSkeleton() {
  return (
    <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:max-w-[50%] lg:px-8">
      <div className="space-y-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mb-10">
          <Skeleton className="h-16 w-16 rounded-sm" />
        </div>
        <Skeleton className="mb-2 h-8 w-3/4" />
        <Skeleton className="h-5 w-1/2" />
        <div className="mt-8 space-y-4">
          <Skeleton className="h-11 w-full" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-0.5 w-full" />
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-0.5 w-full" />
          </div>
          <Skeleton className="h-11 w-full" />
          <Skeleton className="h-11 w-full" />
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-20" />
          </div>
          <Skeleton className="h-11 w-full" />
        </div>
      </div>
    </div>
  );
}

export default function CustomSignInForm() {
  const { signIn, isLoaded } = useSignIn();
  const clerk = useClerk();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect_url') || '/';

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignInFormValues) => {
    if (!signIn) return;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const res = await signIn.create({
        identifier: data.email,
        password: data.password,
      });
      if (res.status === 'complete' && res.createdSessionId) {
        await clerk.setActive({ session: res.createdSessionId });
        router.replace(redirectUrl);
      }
    } catch (err: unknown) {
      let message = 'Sign in failed';
      if (
        typeof err === 'object' &&
        err !== null &&
        'errors' in err &&
        Array.isArray((err as { errors?: unknown }).errors)
      ) {
        const firstError = (err as { errors: { message?: string }[] })
          .errors[0];
        message = firstError?.message || message;
      }
      form.setError('password', { type: 'server', message });
    }
  };

  const handleGoogleSignIn = async () => {
    if (!signIn) return;
    try {
      await signIn.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl,
        redirectUrlComplete: redirectUrl,
      });
    } catch {
      form.setError('root', {
        type: 'server',
        message: 'Google sign-in failed',
      });
    }
  };

  if (!isLoaded) return <CustomSignInFormSkeleton />;

  return (
    <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:max-w-[50%] lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mb-10">
          <Image
            src="/logo.png"
            alt="Logo"
            width={64}
            height={64}
            className="rounded-sm shadow-sm"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h1>
        <p className="mt-2 text-gray-600">
          Enter your email and password to access your portfolio.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="space-y-6">
          <Button
            variant="outline"
            className="flex h-11 w-full gap-2"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="h-5 w-5" /> Log in with Google
          </Button>

          <div className="flex items-center">
            <Separator className="flex-1" />
            <span className="px-4 text-sm text-gray-500">or</span>
            <Separator className="flex-1" />
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              noValidate
              className="space-y-6"
            >
              {form.formState.errors.root && (
                <FormMessage>{form.formState.errors.root.message}</FormMessage>
              )}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium text-gray-700">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email"
                          autoComplete="email"
                          className="h-11"
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
                      <FormLabel className="block text-sm font-medium text-gray-700">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          className="h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember for 30 days
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    href="#"
                    className="font-medium text-black hover:text-gray-800"
                  >
                    Forgot password
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                className="h-11 w-full bg-gray-900 hover:bg-gray-800"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting && (
                  <Loader2 className="animate-spin" />
                )}
                Log in
              </Button>
            </form>
          </Form>

          <p className="mt-2 text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link
              href="#"
              className="relative font-medium text-black hover:text-gray-800"
            >
              Sign up for free
              <span className="absolute -bottom-1 left-0 w-full border-b border-black"></span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
