import React from 'react';

import { SettingTemplate } from '@/features/setting/template/SettingTemplate';
import { PrivateLayout } from '@/layout/private-layout/PrivateLayout';

export default function Page() {
  return (
    <PrivateLayout>
      <SettingTemplate />
    </PrivateLayout>
  );
}
