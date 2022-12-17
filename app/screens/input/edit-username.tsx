import React, { FC, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Theme, useTheme } from '@/themes';
import {
  Button,
  Input,
  Layout,
  ScreenHeaderComponent,
  SpacingComponent,
  Text,
} from '@/components';
import { Controller, useForm } from 'react-hook-form';
import { useAppNavigation, useAppRoute } from '@/navigators/app-navigator';
import { useAuth } from '@/contexts/auth-context';

type FormValues = {
  username: string;
};

const EditUsernameScreen: FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { updateCurrentUser } = useAuth();

  const {
    params: { username },
  } = useAppRoute<'EditUsername'>();
  const navigation = useAppNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FormValues>({ defaultValues: { username } });

  const handleUsernameChange = async ({
    username: newUsername,
  }: FormValues) => {
    const { error } = await updateCurrentUser({ username: newUsername });
    if (error) {
      console.error('[EditUsername]: %s', error.message);
      return;
    }

    navigation.navigate('MyProfile');
  };

  return (
    <Layout>
      <ScreenHeaderComponent title={t('common:editUsername')} />
      <SpacingComponent>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 4,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              autoCapitalize="none"
              keyboardType="ascii-capable"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={t('common:username')}
            />
          )}
          name="username"
        />
        {errors.username && <Text>{t('common:required')}</Text>}
        <Button
          variant="primary"
          onPress={handleSubmit(handleUsernameChange)}
          disabled={!isDirty}>
          Save
        </Button>
      </SpacingComponent>
    </Layout>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {},
  });

export { EditUsernameScreen };
