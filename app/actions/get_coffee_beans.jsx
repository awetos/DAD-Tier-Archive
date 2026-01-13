'use server';
import { neon } from '@netlify/neon';
export default async function testBeanConnection(event){
        
    const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
    const res = await sql`SELECT * FROM favorite_coffee_blends`;

    const newcoffee = {
        'name': `Starrelly's special sauce`,
        'origin': `My butt hole`,
        'notes': 'existential horror'
    }
    await addARow(sql, newcoffee);

    console.log(res);

}

async function addARow(sql, newCoffee){
    await sql`INSERT INTO favorite_coffee_blends (name, origin, notes) VALUES (
    ${newCoffee.name},  ${newCoffee.origin}, ${newCoffee.notes}
    )`
}