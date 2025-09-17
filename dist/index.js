import { Client } from "pg";
const pgClient = new Client("postgresql://neondb_owner:npg_Jtd0gDS2MRhK@ep-quiet-frog-a1m19t8m-pooler.ap-southeast-1.aws.neon.tech:5432/neondb?sslmode=require&channel_binding=require");
async function main() {
    await pgClient.connect();
    const response = await pgClient.query("UPDATE users SET username = 'John Doe' WHERE id = 1 ;");
    console.log(response);
}
main();
//# sourceMappingURL=index.js.map