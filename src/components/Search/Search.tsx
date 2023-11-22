import { useRef, useCallback } from 'react';
import styles from './search.module.scss';

interface ISearchProps {
    onSubmitSearch: (searchTerm: string | undefined) => void;
    onResetSearch: () => void;
};

export const Search = ({
    onSubmitSearch,
    onResetSearch
}: ISearchProps): JSX.Element => {
    const searchInputElement = useRef<any>(null);
    const submitSearch = useCallback((event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const searchTerm = searchInputElement.current?.value;
        onSubmitSearch(searchTerm);
    }, []);
    const resetSearch = useCallback(() => {
        searchInputElement.current.value = '';
        onResetSearch();
    }, []);
    return (
        <div
            className={styles.search}
            data-testid="search_root"
        >
            <form
                className={styles.search__form}
                onSubmit={submitSearch}
            >
                <input
                    className={styles.search__form__input}
                    ref={searchInputElement}
                    type="text"
                />
                <button
                    type="submit"
                    className={styles.search__form__btn}
                >search</button>
                <button
                    type="button"
                    onClick={resetSearch}
                    className={styles.search__form__btn}
                >reset</button>
            </form>
        </div>
    );
};
