import InfiniteScroll from "react-infinite-scroller";
import {Species} from "./Species";
import {useInfiniteQuery} from "@tanstack/react-query";
import error from "eslint-plugin-react/lib/util/error.js";

const initialUrl = "https://swapi.dev/api/species/";
const fetchUrl = async (url) => {
    const response = await fetch(url);
    return response.json();
};

export function InfiniteSpecies() {
    // TODO: get data for InfiniteScroll via React Query

    const {
        data,
        isError,
        isLoading,
        isFetching,
        fetchNextPage,
        hasNextPage,
        error
    } = useInfiniteQuery({
        queryKey: ["sw-species"],
        queryFn: ({pageParam = initialUrl}) => fetchUrl(pageParam),
        getNextPageParam: (lastPage) => {
            return (lastPage.next || undefined)
        },
    })

    if (isLoading) {
        return <div className="loading">Loading...</div>
    }

    if (isError) {
        return <div className="error">{error.toString()}</div>
    }

    return (
        <>
        {isFetching && <div className="loading">Loading...</div>}
            <InfiniteScroll
                loadMore={() => {
                    if (!isFetching) {
                        return fetchNextPage();
                    }
                }
                }
                hasMore={hasNextPage}

            >
                {data.pages.map((pageData) => {
                    return pageData.results.map(species => {
                            return (
                                <Species key={species.name}
                                         name={species.name}
                                         language={species.language}
                                         averageLifespan={species.average_lifespan}
                                />
                            )
                        }
                    )
                })}
            </InfiniteScroll>
        </>);
}
