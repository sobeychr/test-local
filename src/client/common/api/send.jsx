const sendJson = async ({ body, method = 'post', url }) => {
    const data = await fetch(url, {
        body: JSON.stringify(body),
        method,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
        },
    })
        .then((response) => response.json())
        .catch((err) =>
            console.error('sendJson error', {
                body,
                method,
                url,
                err,
            }),
        );

    return data;
};

export { sendJson };
