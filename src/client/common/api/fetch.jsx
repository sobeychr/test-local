const fetchJson = async (url) => {
    const data = await fetch(url, {
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
        },
    })
        .then((response) => response.json())
        .catch((err) =>
            console.error('fetchJson error', {
                url,
                err,
            }),
        );

    return data;
};

export { fetchJson };
