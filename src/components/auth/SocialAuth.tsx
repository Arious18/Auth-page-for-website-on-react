import { useState } from 'react';
import { auth, googleProvider, githubProvider } from '../../lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { Github, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export function SocialAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [provider, setProvider] = useState<'google' | 'github' | null>(null);

  const handleSocialLogin = async (authProvider: 'google' | 'github') => {
    try {
      setIsLoading(true);
      setProvider(authProvider);
      await signInWithPopup(auth, authProvider === 'google' ? googleProvider : githubProvider);
    } catch (error) {
      console.error('Error during social login:', error);
    } finally {
      setIsLoading(false);
      setProvider(null);
    }
  };

  return (
    <div className="space-y-3">
      <Button
        onClick={() => handleSocialLogin('google')}
        disabled={isLoading}
        variant="outline"
        className="w-full group"
        isLoading={isLoading && provider === 'google'}
      >
        <Mail className="w-5 h-5 mr-2 text-gray-600 group-hover:text-gray-900 transition-colors" />
        Continue with Google
      </Button>

      <Button
        onClick={() => handleSocialLogin('github')}
        disabled={isLoading}
        variant="outline"
        className="w-full group"
        isLoading={isLoading && provider === 'github'}
      >
        <Github className="w-5 h-5 mr-2 text-gray-600 group-hover:text-gray-900 transition-colors" />
        Continue with GitHub
      </Button>
    </div>
  );
}