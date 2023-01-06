import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const abrtController = new AbortController();

    useEffect(() => {
        setTimeout(() => {
            fetch(url, { signal: abrtController.signal }).then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data from the resource!!');
                }
                console.log(res);
                return res.json();
            })
                .then(data => {
                    setData(data);
                    setLoading(false);
                    setError(false);
                })
                .catch(err => {

                    if (err.name === 'AbortError') {
                        console.log('The fetching of data has been aborted!');
                    }
                    else {
                        console.log(err.message);
                        setError(true);
                        setLoading(false);
                    }

                })
        }, 500)
        return () => abrtController.abort();
    }, [url]);

    return { data, error, loading };
}

export default useFetch;