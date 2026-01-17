'use client'

import ModTool from '@/components/modtools/ModTool';
export default function Page(){
    return<>
    <p>You may see something here in development mode.</p>
    
    </>

}

function isMod() {
  const raw = cookies().get("mod_auth")?.value;
  if (!raw) return false;

  const [payload, sig] = raw.split(".");
  return sig === sign(payload);
}
