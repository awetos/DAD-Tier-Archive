import '@/styles/global.css'
import Header from './header/navigation';
import Footer from './header/footer';
import classes from '@/app/main.module.css'
export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'DAD Tierlist Archive'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/badge.png" sizes="any" />
            </head>
            <body className="">
                <Header/>
               <main className={classes['main-card']}>{children}</main>
               <Footer/>
            </body>
        </html>
    );
}
