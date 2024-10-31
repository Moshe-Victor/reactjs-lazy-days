import "./App.css";
import {InfinitePeople} from "./people/InfinitePeople";
import {InfiniteSpecies} from "./species/InfiniteSpecies";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

// Create a client
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <h1>Infinite SWAPI</h1>
                {/*<InfinitePeople/>*/}
                 <InfiniteSpecies />
            </div>
            <ReactQueryDevtools/>
        </QueryClientProvider>
    );
}

export default App;
