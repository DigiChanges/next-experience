import React from 'react';
import { PrivateLayout } from '@/layout/private-layout/PrivateLayout';
import { SettingTemplate } from '@/features/setting/template/SettingTemplate';

export default function Page() {
  return (
    <PrivateLayout>
      <SettingTemplate />
    </PrivateLayout>
  );
}
