import { serve } from "@hono/node-server";
import { Hono } from "hono";

const DATABASE: string[] = [];

const app = new Hono();

app.get("/", async (c) => {
  return c.html(`
    <!doctype html>
      <html lang="en">
        <head>
          <title>HTML Form Action Demo</title>
        </head>
        <body>
          <ul>
            ${DATABASE.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <form action="/add" method="post">
            <input type="text" name="item" placeholder="Enter something" autofocus>
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);
});

app.post("/add", async (c) => {
  const body = await c.req.parseBody();
  DATABASE.push(body.item.toString());
  return c.redirect("/");
});

serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`);
});
