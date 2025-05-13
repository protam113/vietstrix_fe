'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side with illustration */}
      <div className="relative hidden lg:flex flex-col items-center justify-center p-8 bg-lime-500 text-white">
        <div className="max-w-md mx-auto text-center space-y-6">
          <Image
            src="/icons/logo.svg"
            alt="Decorative bird illustration"
            width={300}
            height={300}
            className="mx-auto"
          />
          <h2 className="text-2xl font-medium">Vietstrx</h2>
          <p className="text-sm text-white/80">
            Eidum et malesuada fames ac ante ipsum primis in faucibus
            suspendisse porta
          </p>
          {/* Dots navigation */}
        </div>
      </div>

      {/* Right side with login form */}
      <div className="flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-sm space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-lime-700 mb-6">Vietstrx</h1>
            <h2 className="text-xl text-gray-600">Welcome to Vietstrx</h2>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-500" htmlFor="email">
                Username
              </label>
              <Input
                id="username"
                placeholder="Hust4l account"
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-500" htmlFor="password">
                Password
              </label>
              <Input
                id="password"
                type="Hust4l password"
                placeholder="password"
                className="w-full p-2 border rounded"
              />
              {/* <div className="text-right">
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Forget password?
                </Link>
              </div> */}
            </div>

            <Button className="w-full font-bold text-xl bg-lime-500 hover:bg-lime-700 text-white">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
