import { useRef, useCallback } from 'react';
import styles from './search.module.scss';

interface ISearchProps {
    onSubmitSearch: (searchTerm: string | undefined) => void;
};

export const Search = ({
    onSubmitSearch
}: ISearchProps): JSX.Element => {
    const searchInputElement = useRef<HTMLInputElement>(null);
    const submitSearch = useCallback((event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const searchTerm = searchInputElement.current?.value;
        onSubmitSearch(searchTerm);
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
                    className={styles.search__form__btn}
                >search</button>
            </form>
        </div>
    );
};
