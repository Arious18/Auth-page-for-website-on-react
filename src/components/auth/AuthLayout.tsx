import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { Card } from '../ui/Card';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: ReactNode;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="fixed inset-0 bg-grid-gray-700/[0.05] bg-[size:20px_20px] pointer-events-none" />
      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
        <div className="flex justify-center">
          <div className="bg-gradient-to-tr from-blue-600 to-blue-500 p-3 rounded-xl shadow-lg">
            <Shield className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {subtitle}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10">
        <Card className="py-8 px-4 sm:px-10">
          {children}
        </Card>
      </div>
    </div>
  );
}