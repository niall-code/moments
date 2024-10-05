import { axiosReq } from "../api/axiosDefaults";
export const fetchMoreData = async (resource, setResource) => {
    try {
        const { data } = await axiosReq.get(resource.next);
        setResource((prevResource) => ({
            ...prevResource,
            next: data.next,
            // loop through new page of results from API
            results: data.results.reduce((acc, cur) => {
                // only add new post as well as 'spread accumulator' if not already shown
                return acc.some((accResult) => accResult.id === cur.id)
                    ? acc
                    : [...acc, cur];
            }, prevResource.results),
        }));
    } catch (err) { }
};