import styles from './info_panel.module.scss';

export enum PanelTypes {
    success = 'success',
    warning = 'warning',
    error = 'error'
};

interface IInfoPanelProps {
    panelText: string;
    panelType: PanelTypes.success | PanelTypes.warning | PanelTypes.error;
};

export const InfoPanel = ({
    panelText,
    panelType
}: IInfoPanelProps): JSX.Element => {
    const classNameValues = [styles.info_panel];
    switch (panelType) {
        case PanelTypes.warning: {
            classNameValues.push(styles.info_panel__warning);
            break;
        }
        case PanelTypes.error: {
            classNameValues.push(styles.info_panel__error);
            break;
        }
        default: {
            classNameValues.push(styles.info_panel__success);
        }
    }
    return (
        <div
            className={classNameValues.join(" ")}
            data-testid="info_panel_root"
        >
            {panelText}
        </div>
    );
};
