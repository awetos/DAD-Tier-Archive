import Link from 'next/link';
import { getNetlifyContext } from '@/utils';
export const dynamic = 'force-dynamic';

import Entry from '@/components/templates/entry';
import classes from './homepage.module.css';
import getTierlists from '@/app/actions/browse/getTierlists';

const ctx = getNetlifyContext();

export default async function Page({ searchParams }) {
    //assume never empty. otherwise, see Pending for how to fix.
    const params = await searchParams;
    const pageSize = 25;
    console.log('params is', params);

    const currentPage = Number(params?.page ?? 1);

    const allEntries = await getTierlists();

    let renderable = <></>;
    let no_entries = <></>;

    if (!allEntries || allEntries.length === 0) {
        renderable = <></>;
        no_entries = <p>No entries submitted.</p>;
    } else {
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;

        const entriesForPage = allEntries.slice(start, end);
        renderable = entriesForPage.map((entry) => ReturnEntry(entry));
    }

    return (
        <div>
            <div className={classes['interior-content']}>
                <div className={classes['centered-content']}>
                    <p>View past tierlists made for DAD</p>
                    {no_entries}
                </div>
                <div className={classes['image-grid']}>{renderable}</div>
                <div className={classes['pages-footer']}>Page: {GetPagesFooter(allEntries, pageSize, currentPage)}</div>
            </div>
        </div>
    );
}

function ReturnEntry(data) {
    if (data.id && data.image_url) {
        return <Entry key={data.id} data={data} />;
    }
    return <div key={data.id}></div>;
}

function GetPagesFooter(allEntries, pageSize, currentPage) {
    const totalPages = Math.ceil(allEntries.length / pageSize);

    //create an array like [1,2,3,4]
    const pagesArr = Array.from({ length: totalPages }, (_, index) => index + 1);

    //render buttons
    const pageFooter = pagesArr.map((pageNumber) => {
        if (pageNumber === currentPage) {
            return (
                <div key={pageNumber} className={classes['disabled-page-button']}>
                    {pageNumber}
                </div>
            );
        } else {
            return (
                <a className={classes['page-button']} key={pageNumber} href={`?page=${pageNumber}`}>
                    <div>{pageNumber}</div>
                </a>
            );
        }
    });
    return pageFooter;
}
