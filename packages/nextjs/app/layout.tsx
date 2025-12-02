"use client";

import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import { EmailLoginWelcomeFlow } from "~~/components/onboarding";
import { useOnboarding } from "~~/hooks/useOnboarding";
import "~~/styles/globals.css";

// Note: Metadata cannot be exported from client components in Next.js
// If metadata is needed, it should be in a separate layout file without "use client"

// Force dynamic rendering to prevent static generation issues with wagmi hooks
export const dynamic = 'force-dynamic';

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  const { shouldShowOnboarding, isCheckingSession, handleOnboardingComplete } = useOnboarding();

  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>
            {children}
            {!isCheckingSession && shouldShowOnboarding && (
              <EmailLoginWelcomeFlow onComplete={handleOnboardingComplete} />
            )}
          </ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
