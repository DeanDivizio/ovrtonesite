'use server';
const graphqlEndpoint = process.env.GRAPHQL_ENDPOINT;

export async function getAboutContent() {
    const query = `
        query {
            pageBy(id: "cG9zdDoxNA==") {
            content(format: RAW)
            }
        }
    `;

    const response = await fetch(graphqlEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
    });

    const text = await response.text();

    const { data } = JSON.parse(text);
    return data.pageBy.content;
}

export async function getContactContent() {

    const query = `
        query {
            pageBy(id: "cG9zdDoxNA==") {
            content(format: RAW)
            }
        }
    `;

    const response = await fetch(graphqlEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
    });

    const text = await response.text();

    const { data } = JSON.parse(text);
    return data.pageBy.content;
}

