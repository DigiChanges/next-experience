import React from 'react';
import { PrivateLayout } from '@/layout/private-layout/PrivateLayout';
import {ProfileTemplate} from "@/features/profile/template/ProfileTemplate";

export default function Page() {
    return (
        <PrivateLayout>
            <ProfileTemplate />
        </PrivateLayout>
    );
}
