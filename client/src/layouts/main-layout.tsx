import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/specific/sidebar/app-sidebar';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-screen h-screen flex">
      <SidebarProvider>
        <main className="flex h-full w-full">
          {/* Sidebar */}
          <AppSidebar />

          <main className="flex flex-col flex-1">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-1 p-4">{children}</main>

            {/* Footer */}
            <Footer />
          </main>
        </main>
      </SidebarProvider>
    </main>
  );
}
