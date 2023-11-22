import { useMemo } from 'react';
import { IResourceDetilsProps } from './ResourceDetails.types';

import styles from './resource_details.module.scss';

export const ResourceDetails = ({
    name,
    entity,
    fieldsMapping,
    excludedFields,
}:IResourceDetilsProps): JSX.Element | null => {
    if (!entity) {
        return null;
    }
    const resourceRender = useMemo((): JSX.Element => {
        const resourceDataRows =  Object.keys(entity).map(eKey => {
            if (excludedFields && excludedFields.indexOf(eKey) > -1) {
                return null;
            }
            const resourceName = (fieldsMapping && fieldsMapping[eKey]) ? fieldsMapping[eKey] : eKey;
            return (
                <div
                    className={styles.resource_details__row}
                    key={`${name}_${eKey}`}
                >
                    <div className={styles.resource_details__row__item}>{resourceName}:</div>
                    <div className={styles.resource_details__row__item}>{entity[eKey as keyof typeof entity]}</div>
                </div>
            );
        }).filter(k=> k !== null);
        return (
            <div
                className={styles.resource_details}
                data-testid="resource_details_root"
            >{resourceDataRows}</div>
        );
    }, []);
    return (
        <>
            {resourceRender}
        </>
    )
};
