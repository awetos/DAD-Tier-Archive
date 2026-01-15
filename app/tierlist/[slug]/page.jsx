

import TierViewer from '@/components/templates/TierViewer';
import getRowData from '@/app/actions/browse/getTierlistRow'

export default async function ExampleClientComponent({params}) {
const paramVal = await params;
const idStr = paramVal.slug;
const id = Number.parseInt(idStr);
  console.log(id)
  const rowData = await getRowData(id);
  console.log(rowData);

  return <>
  <div >
    <TierViewer rowData={rowData}/>
  </div>
  </>
    
    
}
 