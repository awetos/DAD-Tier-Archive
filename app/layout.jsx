import '@/styles/global.css'
import Header from './header/navigation';
export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="">
                <Header/>
               <main>{children}</main>
            </body>
        </html>
    );
}
