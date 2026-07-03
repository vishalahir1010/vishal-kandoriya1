import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useFetchData1(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(() => {
        setLoading(true);
        setError("");

        axios.get(url)
            .then(res => setData(res.data))
            .catch(() => setError("Failed to fetch data"))
            .finally(() => setLoading(false));
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        return () => {
            console.log("useFetch unmount");
        };
    }, []);

    return { data, loading, error, refetch: fetchData };
}