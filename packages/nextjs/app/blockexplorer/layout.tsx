import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Block Explorer",
  description: "Block Explorer created with 🏗 Scaffold-ETH 2",
});

// Force dynamic rendering to prevent static generation issues with wagmi hooks
export const dynamic = 'force-dynamic';

const BlockExplorerLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default BlockExplorerLayout;
