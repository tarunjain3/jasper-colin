import { Metadata } from 'next'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

export const metadata: Metadata = {
    title: {
        default: 'Home',
        template: '%s | Jasper colin',

    }
}

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <main>
                    <SidebarTrigger className={'fixed'} />
                    <div className='pt-4'>
                        {children}
                    </div>
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default AuthenticatedLayout
