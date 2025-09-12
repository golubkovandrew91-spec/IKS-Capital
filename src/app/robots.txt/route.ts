export async function GET() {
  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "Sitemap: https://www.ikscapital.example/sitemap.xml",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
