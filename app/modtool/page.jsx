'use client';

import ModTool from '@/components/modtools/ModTool';
export default function Page() {
    return (
        <>
            <p>
                You may see something here in development mode. I just insert and remove the Modtool component to view
                and approve things then remove before production because I can't be assed (didn't know how to at the
                time of this making) to add an actual auth route for this.
            </p>
        </>
    );
}

function isMod() {
    const raw = cookies().get('mod_auth')?.value;
    if (!raw) return false;

    const [payload, sig] = raw.split('.');
    return sig === sign(payload);
}
