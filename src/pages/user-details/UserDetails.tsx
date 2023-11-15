import { MainLayout } from "@/layouts";
import { useMemo } from "react";

export const UserDetails = (): JSX.Element => {
    const componentRender = useMemo((): JSX.Element => (
        <div data-testid="user_details_root">
            user details page
        </div>
    ), []);
    return (
        <MainLayout>
            {componentRender}
        </MainLayout>
    );
};
